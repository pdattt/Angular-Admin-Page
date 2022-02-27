import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService implements OnInit {
  customers: Observable<Customer[]>

  constructor(public afs: AngularFirestore, private http: HttpClient) {
    this.customers = afs.collection('Customer').snapshotChanges().pipe(map(changes => {
      return changes.map ( a=> {
        const data = a.payload.doc.data() as Customer;
        data.Id = a.payload.doc.id;
        return data
      });
    }));
  }

  ngOnInit():void {
    this.http.post<Customer[]>('http://localhost:4200/home/customers', this.customers);
  }

  selectAll() {
    return this.customers;
  }

  removeCustomer(customer: Customer) {
    this.afs.collection('Customer').doc(customer.Id).delete();
  }

  addNew(newCustomer: Customer) {
    try {
      this.http.post<Customer>('http://localhost:4200/home/customers', newCustomer);
      this.afs.collection('Customer').add(newCustomer);
      return true;
    }
    catch {
      return false;
    }
  }

  update(customer: Customer) {
    try {
    this.afs.collection('Customer').doc(customer.Id).update(customer);
    return true;
    }
    catch {
      return false;
    }
  }
}