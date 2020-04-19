import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { ImageUploaderComponent } from '../media/image-uploader/image-uploader.component';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    data: any = {};
    timestamp: any;

    constructor(
        private modalService: NgbModal,
        private renderer: Renderer,
        public fsAuth: AngularFireAuth,
        private db: AngularFirestore,
        public storage: AngularFireStorage,
        private router: Router,
        private upSvc: UploadService,
    ) {
        this.getStories();
        this.getPortofolios();
        this.getAbout();
        this.getTeams();
        this.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    about: any = [];
    getAbout() {
        this.db.collection('settings').doc('about').collection('data').doc('about').valueChanges().subscribe(res => {
            this.about = res;
        });
    }

    dataTeam: any = [];
    getTeams() {
        this.db.collection('settings').doc('teams').collection('dataTeam').valueChanges().subscribe(res => {
            this.dataTeam = res;
            this.parseData(res);
        })
    }

    parseData(res) {
        var dataTeam = res;
        var obj = Object.keys(dataTeam);
        for (var i = 0; i < obj.length; i++) {
            this.getImage(dataTeam[obj[i]].images);
        }
    }

    images: any = {};
    getImage(ref) {
        if (this.images[ref] == undefined) {
            this.storage.storage.ref(ref).getDownloadURL().then(url => {
                this.images[ref] = url;
            });
        }
    }

    //unggah gambar

    // uploadImage() {

    //     var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
    //     this.idStories = doc;

    //     var path = this.idStories + '/stories.png';
    //     this.data.rasio = 1
    //     this.data.path = path
    //     console.log(this.data);
    //     const modalRef = this.modalService.open(ImageUploaderComponent);
    //     modalRef.componentInstance.data = this.data;

    //     modalRef.result.then(res => {
    //         if (res) {
    //             this.db.collection('stories').doc(this.idStories).update({ image: path }).then(res => {
    //             return;
    //             })
    //         }
    //         this.sendStories();
    //     }, dismiss => {
    //     console.log("Cross Button", dismiss)
    //     })
    // }

    selectedFile: File = null;
    fb;
    downloadURL: Observable<string>;
    idStories: any;
    image: any;
    ref: any;
    task: any;
    uploadProgress: string = null;
    previewUrl: any = null;
    fileData: File = null;

    onFileSelected(event) {
        var n = Date.now();
        var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
        this.idStories = doc;
        const file = event.target.files[0];
        const filePath = `${this.idStories}/${n}`;
        const fileRef = this.storage.ref(filePath);

        this.fileData = <File>event.target.files[0];
        this.preview();

        const randomId = Math.random().toString(36).substring(2);
        this.ref = this.storage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();

        const task = this.storage.upload(`${this.idStories}/${n}`, file);
        task
            .snapshotChanges()
            .pipe(
                finalize(() => {
                    this.downloadURL = fileRef.getDownloadURL();
                    this.downloadURL.subscribe(url => {
                        if (url) {
                            this.fb = url;
                            this.image = url;
                        }
                        console.log(this.fb);
                    });
                })
            )
            .subscribe(url => {
                if (url) {
                    console.log(url);
                }
            });
    }

    preview() {
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        }
    }

    loading: boolean;
    verified: boolean = false;

    sendStories() {
        this.loading = true;
        var dt = {
            id: this.idStories,
            name: this.data.name,
            email: this.data.email,
            message: this.data.message,
            image: this.image,
            verified: this.verified,
            datetime: this.timestamp
        }
        this.db.collection('stories').doc(this.idStories).set(dt).then(res => {
            this.loading = false;
            alert('Story sent successfully');
            window.location.reload();
        })
    }

    dataStories: any;
    getStories() {
        this.db.collection('stories', ref => {
            return ref.where('verified', '==', true)
        }).valueChanges({ idField: 'id' }).subscribe(res => {
            this.dataStories = res;
        })
    }

    dataPortofolios: any;
    getPortofolios() {
        this.db.collection('portofolios').valueChanges({idField: 'id'}).subscribe(res => {
            this.dataPortofolios = res;
        })
    }
}
