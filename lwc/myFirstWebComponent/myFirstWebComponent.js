import { LightningElement, wire, track} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import Id from '@salesforce/user/Id';
import NAME_FIELDd from '@salesforce/schema/Account.Name';
import getContactListt from '@salesforce/apex/ContactControllerr.getContactList';
import getContactListtt from '@salesforce/apex/ContactControllerr.getContactListt';
import getContactListttt from '@salesforce/apex/ContactControllerr.getContactListtt';
import getContactListtttt from '@salesforce/apex/ContactControllerr.getContactListttt';
import getContactListttttt from '@salesforce/apex/ContactControllerr.getContactListtttt';
import getContactListtttttt from '@salesforce/apex/ContactControllerr.getContactListttttt';

import findContacts from '@salesforce/apex/ContactController.findContacts';
import IDd from '@salesforce/schema/Account.AccountNumber';
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

    @track error ;
    @track name;
    @wire(getRecord, {
        recordId: IDd,
        fields: [NAME_FIELDd]
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
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
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


@track products

handleLoad1() {
    getContactListt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}

handleLoad2() {
    getContactListtt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}

handleLoad3() {
    getContactListttt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}



handleLoad4() {
    getContactListtttt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}

handleLoad5() {
    getContactListttttt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}

handleLoad6() {
    getContactListtttttt()
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            this.error = error;
        });
}





/*



    acco = '';
    namee = '';

    handleNameChange(event) {
        this.acco = event.target.value;
        this.namee = event.target.value;
    }
    createAccount() {
        const fields = {};
        fields[NAME_prod.fieldApiName] = this.namee;
        const recordInput = { apiName: NAME_prod.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
                this.acco = account;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }



*/







}