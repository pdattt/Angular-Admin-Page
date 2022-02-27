import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = {
    Id: '',
    Name: '',
    Age: '',
    Email: '',
    Address: '',
    Phone: ''
  };

  constructor(private customerService: CustomerService) { }


  ngOnInit(): void {
    this.customerService.selectAll().subscribe(customers=>{
      console.log(customers);
      this.customers = customers;
    });
  }

  deleteCustomer(customer: Customer) {
    var c = confirm('Are you sure about that?');
    if(c) {
      this.customerService.removeCustomer(customer);
      alert("Delete successed!");
      return;
    }

    console.log("Cancel deleted!");
  }

  createEmptyCustomer() {
    var emptyCustomer = {
        Id: '',
        Name: '',
        Age: '',
        Email: '',
        Address: '',
        Phone: ''
    }

    this.customer = emptyCustomer;
}

  showInput(formID: any) 
  {
    let otherFormId = '';

    switch(formID) {
      case 'input-add': otherFormId = 'input-update'; break;
      case 'input-update': otherFormId = 'input-add'; break;
    }
    
    var input = document.getElementById(formID);
    var otherInput = document.getElementById(otherFormId);

    if(otherInput!.style.display == 'contents')
      otherInput!.style.display = 'none';

    if(input!.style.display == 'contents') {
      input!.style.display = 'none';
      return;
    }

    if(formID == 'input-add')
      this.createEmptyCustomer();
    
    input!.style.display = 'contents';
  }

  // showCustomer() {
  //   // var customerLink = document.getElementById(this.customer.Id);
  //   // customerLink!.style.display == 'contents';

  //   window.location.reload();
  // }

  addCustomer(newCustomer: Customer) {

    //this.showInput('input-add');
    console.log(newCustomer);

    if(this.checkDuplicateEmail(newCustomer.Email))
      return alert("Email have already registed");

    if(this.customerService.addNew(newCustomer)) {
      console.log("Add new successed!");
      alert("Add new success!");
      this.showInput('input-add');
    }
    else {
      console.log("Add new failed!");
    }
  }

  refreshPage() {
    window.location.reload();
  }

  onSubmit(formID: any) {
    var error = "";
    
    // Check invalid input
    if( this.customer.Name.length == 0)
      error += "Name is required \n";
    if( this.customer.Age.length == 0)
      error += "Age is required \n";
    if( this.customer.Email.length == 0)
      error += "Email is required \n";
      else if( !this.customer.Email.includes('@'))
        error += "Email is not valid \n";
    if( this.customer.Address.length == 0)
      error += "Address is required \n";
    if( this.customer.Phone.length == 0)
      error += "Phone is required";
      else if( !this.customer.Phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
        error += "Phone is invalid";
    if(error!= "")
      return alert(error);


    if(formID == 'input-add')
      this.addCustomer(this.customer);
    else
      this.updateCustomer(this.customer);
  } 

  createInputUpdate(customer: Customer) {
    // Hide the updating customer
    // var link = document.getElementById(customer.Id);
    // link!.style.display = 'none';

    this.showInput('input-update');

    this.customer = customer;
  }

  updateCustomer(customer: Customer) {
    if(this.customerService.update(customer)) {
      console.log("Update successed!");
      alert("Update success!");
      this.showInput('input-update');
      window.location.reload();
      return;
    }

    console.log("Update failed!");
  }

  checkDuplicateEmail(email: string) {
    var check;
    this.customers.forEach(element => {
      if(element.Email === email)
        check = true;
      else
        check = false;
    });

    return check;
  }
}
