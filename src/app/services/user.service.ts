import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private auth2!: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)

  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '611376855529-r4goffletfqj217jt02n9dhmt93maqiu.apps.googleusercontent.com'
      });
    });
  }

  async signIn() {
    return await this.auth2.signIn({
    }). then( user => {
      this.subject.next(user)
    }). catch( () => {
      this.subject.next()
    });
  }

  public singOut() {
    try {
      this.auth2.signOut()
        .then( () => {
          this.subject.next()
        });
    
        return true;
    } catch {
      return false;
    }

  }

  public ovservable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }

  public getUser() {
    
  }

  // users: Observable<User[]>;

  // constructor(public afs: AngularFirestore) { 
  //   this.users = this.afs.collection('User').snapshotChanges().pipe(map(changes => {
  //     return changes.map(a => {
  //       const data = a.payload.doc.data() as User;
  //       data.Id = a.payload.doc.id;
  //       return data;
  //     });
  //   }));
  // }

  // usersCollection!: AngularFirestoreCollection<User>;
  // users!: Observable<User[]>;
  // //userList: User[] = [];

  // constructor(private readonly afs: AngularFirestore) {
  //   this.usersCollection = afs.collection('User');
  //   this.users = this.afs.collection<User>('User').valueChanges();
  //   // this.users.subscribe(data=>{
  //   //   this.userList = data;
  //   //   console.log(this.userList);
  //   // });
  // }

  // getUser() {
  //   return this.users;
  // }

  // removeUser(user: User) {
  //   this.afs.collection('User').doc(user.Id).delete();
  // }
}

