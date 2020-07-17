import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerr.getContactList';
import getContactListt from '@salesforce/apex/ContactControllerr.getContactListt';
import getContactListtt from '@salesforce/apex/ContactControllerr.getContactListtt';
import getContactListttt from '@salesforce/apex/ContactControllerr.getContactListttt';
import getContactListtttt from '@salesforce/apex/ContactControllerr.getContactListtttt';
import getContactListttttt from '@salesforce/apex/ContactControllerr.getContactListttttt';

export default class ApexImperativeMethod extends LightningElement {
    @track products;
    @track error;

    handleLoad5() {
        getContactList()
            .then(result => {
                this.products = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}