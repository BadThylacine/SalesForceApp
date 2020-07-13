import { LightningElement, wire, api, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class ObjectLabel extends LightningElement {

  @api Order__c;

  @track objectInfo;

  @wire(getObjectInfo, { Order__c: ACCOUNT_OBJECT })
  objectInfo;
}