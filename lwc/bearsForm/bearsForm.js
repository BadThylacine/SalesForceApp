import { LightningElement, wire, track} from 'lwc';

export default class HelloooIteration extends LightningElement {

    
    @track openmodel = false;
    @track openmodell = false;
    openmodall() {
        this.openmodell = true
    }
    openmodal() {
        this.openmodel = true
    }
    closeModall() {
        this.openmodell = false
    } 
    closeModal() {
        this.openmodel = false
    }

}