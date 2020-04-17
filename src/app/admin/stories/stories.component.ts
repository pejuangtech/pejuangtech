import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  isAdmin: boolean = false;
  user: any = [];

  constructor(
    public fsAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.fsAuth.auth.onAuthStateChanged(user => {
      if (user.uid != null) {
        this.isAdmin = true;
      }
      this.getStories();
    });
  }

  ngOnInit() {
  }

  loading: boolean;
  verified: boolean = false;
  dataStories: any;

  getStories() {
      this.db.collection('stories', ref => {
        return ref.orderBy('verified', 'asc');
      }).valueChanges({idField: 'id'}).subscribe(res => {
        this.dataStories = res;
    })
  }

  accept(data) {   
    var id = data.id;
    console.log(id);
    var r = confirm("Are you sure you want to accept this story?");
    if (r == true) {
      var dt = { verified : true }
      this.db.collection('stories').doc(id).update(dt).then(res=>{
        this.loading=false;
        window.location.reload();
      })
    }  else {
      return;
    }
  }

  delete(data) {   
    var id = data.id;
    console.log(id);
    var r = confirm("Are you sure you want to delete this story?");
    if (r == true) {
      this.db.collection('stories').doc(id).delete().then(res=>{
        this.loading=false;
        window.location.reload();
      })
    }  else {
      return;
    }
  }

}
