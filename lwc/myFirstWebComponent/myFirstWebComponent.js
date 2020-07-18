import { LightningElement, wire, track} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import Id from '@salesforce/user/Id';
import NAME_FIELDd from '@salesforce/schema/Account.Name';
import getContactListt from '@salesforce/apex/ContactControllerr.getContactListt';
import getContactListtt from '@salesforce/apex/ContactControllerr.getContactListtt';
import getContactListttt from '@salesforce/apex/ContactControllerr.getContactListttt';
import getContactListtttt from '@salesforce/apex/ContactControllerr.getContactListtttt';
import getContactListttttt from '@salesforce/apex/ContactControllerr.getContactListttttt';
import getContactListtttttt from '@salesforce/apex/ContactControllerr.getContactListtttttt';


import findContacts from '@salesforce/apex/ContactController.findContacts';
import Idd from '@salesforce/schema/Account.AccountNumber';
import NAME_prod from '@salesforce/schema/Product__c.Name';
import Desctipt from '@salesforce/schema/Product__c.Description__c';
import Price_field from '@salesforce/schema/Product__c.Price__c';



const DELAY = 300;

export default class HelloIteration extends LightningElement {


    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.queryTerm = evt.target.value;
        }
    }

    buttonFunc() {
        alert("you pushed button1");
    }

    buttonFuncc() {
        alert("you pushed button2"); 
    }

    userId = Id;
    //name = Id;

    @track error;
    @track name;
    @wire(getRecord, {
        recordId: Id,
        fields: [NAME_FIELDd, Id]
    }) wireuser({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            this.name = data.fields.Name.value;
        }
    }

 
    @track openmodel = false;
    @track openmodel1 = false;
    openmodal1() {
        this.openmodel1 = true
    }
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    closeModal1() {
        this.openmodel1 = false
    }
    saveMethod() {
        alert('save method invoked');
        this.closeModal();
    }



    @wire(findContacts, { searchKey: '$searchKey' })
    products;

    handleKeyChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }


    @track productss;
    @track error;

    handleLoad1() {
        getContactListt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleLoad2() {
        getContactListtt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleLoad3() {
        getContactListttt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleLoad4() {
        getContactListtttt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleLoad5() {
        getContactListttttt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }


    handleLoad6() {
        getContactListtttttt()
            .then(result => {
                this.productss = result;
            })
            .catch(error => {
                this.error = error;
            });
    }






}