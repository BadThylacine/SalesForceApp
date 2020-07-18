import { LightningElement, track } from 'lwc';
import getContactListt from '@salesforce/apex/ContactControllerr.getContactListt';
import getContactListtt from '@salesforce/apex/ContactControllerr.getContactListtt';
import getContactListttt from '@salesforce/apex/ContactControllerr.getContactListttt';
import getContactListtttt from '@salesforce/apex/ContactControllerr.getContactListtttt';
import getContactListttttt from '@salesforce/apex/ContactControllerr.getContactListttttt';
import getContactListtttttt from '@salesforce/apex/ContactControllerr.getContactListtttttt';

export default class ApexImperativeMethod extends LightningElement {
    @track products;
    @track error;

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
}