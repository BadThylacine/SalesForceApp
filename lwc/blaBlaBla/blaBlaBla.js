import { LightningElement } from 'lwc';

export default class ButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        alert("lol kek");
    }
}
