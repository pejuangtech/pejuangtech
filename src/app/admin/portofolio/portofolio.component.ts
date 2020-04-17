import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { UploadService } from '../../upload.service';
import { Upload } from '../../upload';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit {

  closeResult = '';
  @ViewChild('labelImport')
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  user: any = [];
  data: any = {};
  timestamp: any;

  constructor(
    private modalService: NgbModal,
    public fsAuth: AngularFireAuth,
    private db: AngularFirestore,
    public storage: AngularFireStorage,
  ) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
    this.timestamp = firebase.firestore.FieldValue.serverTimestamp();
  }

  ngOnInit() {
    this.getPortofolios()
  }

  open(portofolio) {
    this.modalService.open(portofolio, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openModal(portofolio) {
    this.modalService.open(portofolio, { ariaLabelledBy: 'modal-basic-features' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }

  selectedFile: File = null;
  fb1;
  fb2;
  fb3;
  fb4;
  downloadURL: Observable<string>;
  id_portofolio: any;

  // feature 1 

  // feature1: any;
  // ref1: any;
  // task1: any;
  // uploadProgress1: string = null;
  // previewUrl1:any = null;
  // fileData1: File = null;
  
  // onFileSelected1(event) {
  //   const file = event.target.files[0];
  //   const filePath = `${this.id_portofolio}/feature1`;
  //   const fileRef = this.storage.ref(filePath);

  //   this.fileData1 = <File>event.target.files[0];
  //   this.preview1();

  //   const randomId = Math.random().toString(36).substring(2);
  //   this.ref1 = this.storage.ref(randomId);
  //   this.task1 = this.ref1.put(event.target.files[0]);
  //   this.uploadProgress1 = this.task1.percentageChanges();

  //   const task = this.storage.upload(`${this.id_portofolio}/feature1`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb1 = url;
  //             this.feature1 = url;
  //           }
  //           console.log(this.fb1);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }

  // preview1() {
  //   // Show preview 
  //   var mimeType = this.fileData1.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  
  //   var reader = new FileReader();      
  //   reader.readAsDataURL(this.fileData1); 
  //   reader.onload = (_event) => { 
  //     this.previewUrl1 = reader.result; 
  //   }
  // }

  // // feature 2
  
  // feature2: any;
  // ref2: any;
  // task2: any;
  // uploadProgress2: string = null;
  // previewUrl2:any = null;
  // fileData2: File = null;
  
  // onFileSelected2(event) {
  //   const file = event.target.files[0];
  //   const filePath = `${this.id_portofolio}/feature2`;
  //   const fileRef = this.storage.ref(filePath);

  //   this.fileData2 = <File>event.target.files[0];
  //   this.preview2();

  //   const randomId = Math.random().toString(36).substring(2);
  //   this.ref2 = this.storage.ref(randomId);
  //   this.task2 = this.ref2.put(event.target.files[0]);
  //   this.uploadProgress2 = this.task2.percentageChanges();

  //   const task = this.storage.upload(`${this.id_portofolio}/feature2`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb2 = url;
  //             this.feature2 = url;
  //           }
  //           console.log(this.fb2);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }

  // preview2() {
  //   // Show preview 
  //   var mimeType = this.fileData2.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  
  //   var reader = new FileReader();      
  //   reader.readAsDataURL(this.fileData2); 
  //   reader.onload = (_event) => { 
  //     this.previewUrl2 = reader.result; 
  //   }
  // }

  // // feature 3
  
  // feature3: any;
  // ref3: any;
  // task3: any;
  // uploadProgress3: string = null;
  // previewUrl3:any = null;
  // fileData3: File = null;
  
  // onFileSelected3(event) {
  //   const file = event.target.files[0];
  //   const filePath = `${this.id_portofolio}/feature3`;
  //   const fileRef = this.storage.ref(filePath);

  //   this.fileData3 = <File>event.target.files[0];
  //   this.preview3();

  //   const randomId = Math.random().toString(36).substring(2);
  //   this.ref3 = this.storage.ref(randomId);
  //   this.task3 = this.ref3.put(event.target.files[0]);
  //   this.uploadProgress3 = this.task3.percentageChanges();

  //   const task = this.storage.upload(`${this.id_portofolio}/feature3`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb3 = url;
  //             this.feature3 = url;
  //           }
  //           console.log(this.fb3);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }

  // preview3() {
  //   // Show preview 
  //   var mimeType = this.fileData3.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  
  //   var reader = new FileReader();      
  //   reader.readAsDataURL(this.fileData3); 
  //   reader.onload = (_event) => { 
  //     this.previewUrl3 = reader.result; 
  //   }
  // }

  // // feature 4
  
  // feature4: any;
  // ref4: any;
  // task4: any;
  // uploadProgress4: string = null;
  // previewUrl4:any = null;
  // fileData4: File = null;
  
  // onFileSelected4(event) {
  //   const file = event.target.files[0];
  //   const filePath = `${this.id_portofolio}/feature4`;
  //   const fileRef = this.storage.ref(filePath);

  //   this.fileData4 = <File>event.target.files[0];
  //   this.preview4();

  //   const randomId = Math.random().toString(36).substring(2);
  //   this.ref4 = this.storage.ref(randomId);
  //   this.task4 = this.ref4.put(event.target.files[0]);
  //   this.uploadProgress4 = this.task4.percentageChanges();

  //   const task = this.storage.upload(`${this.id_portofolio}/feature4`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb4 = url;
  //             this.feature4 = url;
  //           }
  //           console.log(this.fb4);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }

  // preview4() {
  //   // Show preview 
  //   var mimeType = this.fileData4.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  
  //   var reader = new FileReader();      
  //   reader.readAsDataURL(this.fileData4); 
  //   reader.onload = (_event) => { 
  //     this.previewUrl4 = reader.result; 
  //   }
  // }

  // cover
  
  cover: any;
  refcover: any;
  taskcover: any;
  uploadProgressCover: string = null;
  previewUrlCover:any = null;
  fileDataCover: File = null;
  fbcover;
  
  onFileSelectedCover(event) {
    var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
    this.id_portofolio = doc;
    const file = event.target.files[0];
    const filePath = `${this.id_portofolio}/cover`;
    const fileRef = this.storage.ref(filePath);

    this.fileDataCover = <File>event.target.files[0];
    this.previewCover();

    const randomId = Math.random().toString(36).substring(2);
    this.refcover = this.storage.ref(randomId);
    this.taskcover = this.refcover.put(event.target.files[0]);
    this.uploadProgressCover = this.taskcover.percentageChanges();

    const task = this.storage.upload(`${this.id_portofolio}/cover`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fbcover = url;
              this.cover = url;
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
        }
      });
  }

  previewCover() {
    // Show preview 
    var mimeType = this.fileDataCover.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
  
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileDataCover); 
    reader.onload = (_event) => { 
      this.previewUrlCover = reader.result; 
    }
  }

  // banner
  
  banner: any;
  refbanner: any;
  taskbanner: any;
  uploadProgressBanner: string = null;
  previewUrlBanner:any = null;
  fileDataBanner: File = null;
  fbbanner;
  
  onFileSelectedBanner(event) {
    const file = event.target.files[0];
    const filePath = `${this.id_portofolio}/banner`;
    const fileRef = this.storage.ref(filePath);

    this.fileDataBanner = <File>event.target.files[0];
    this.previewBanner();

    const randomId = Math.random().toString(36).substring(2);
    this.refbanner = this.storage.ref(randomId);
    this.taskbanner = this.refbanner.put(event.target.files[0]);
    this.uploadProgressBanner = this.taskbanner.percentageChanges();

    const task = this.storage.upload(`${this.id_portofolio}/banner`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fbbanner = url;
              this.banner = url;
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
        }
      });
  }

  previewBanner() {
    // Show preview 
    var mimeType = this.fileDataBanner.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
  
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileDataBanner); 
    reader.onload = (_event) => { 
      this.previewUrlBanner = reader.result; 
    }
  }

  loading: boolean;

  addPortofolio() {
    this.loading = true;
    var dt = {
        id: this.id_portofolio,
        name: this.data.name,
        description: this.data.description,
        cover: this.cover,
        banner: this.banner,
        desc_feature1: this.data.desc_feature1,
        desc_feature2: this.data.desc_feature2,
        desc_feature3: this.data.desc_feature3,
        desc_feature4: this.data.desc_feature4,
        datetime: this.timestamp
      }
      this.db.collection('portofolios').doc(this.id_portofolio).set(dt).then(res => {
        this.loading = false;
        alert('Portofolio saved successfully');
        window.location.reload();
    })
  }

  dataPortofolios: any;
  getPortofolios() {
    this.db.collection('portofolios').valueChanges({idField: 'id'}).subscribe(res => {
        this.dataPortofolios = res;
    })
  }

  delete(data) {   
    var id = data.id;
    console.log(id);
    var r = confirm("Are you sure you want to delete this portofolio?");
    if (r == true) {
      this.db.collection('portofolios').doc(id).delete().then(res=>{
        this.loading=false;
        window.location.reload();
      })
    }  else {
      return;
    }
  }
}
