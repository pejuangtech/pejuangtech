import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  rasio:any;
  path:any;

  @Input() public data;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public fsAuth: AngularFireAuth,
    public db: AngularFirestore,
    public storage:AngularFireStorage
  ) {
    console.log(this.data);
    this.rasio=this.data.rasio;
    this.path=this.data.path;
   }

  ngOnInit() {
  }

  imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
  loading:boolean; 
  unggahGambar()
  {
    this.loading=true;
    this.storage.ref(this.path).putString(this.croppedImage, 'data_url').then(res=>{
      console.log(res);
      this.activeModal.close(true);
    });    
  }
  onNoClick(): void {
    this.activeModal.close();
  }

}
