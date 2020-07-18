trigger firstTrigger on Product__c (after insert) {

Integer listName = [SELECT Price__c FROM Product__c];

for(Order__c item : Trigger.new){
    item.TotalPrice__c = listName.get(0);
    }

}