import { Injectable } from '@angular/core';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Upload } from './upload'
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;
  constructor(
    private dbs: AngularFireDatabase,
  ) { }

  private basePath: string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }
  private saveFileData(upload: Upload) {
    this.dbs.list('${this.basePath}/').push(upload);
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name)
      })
      .catch(error => console.log(error))
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.dbs.list('${this.basePath}/').remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}

