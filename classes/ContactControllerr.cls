public with sharing class ContactControllerr {
    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactList() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Type__c = 'Type 1'

        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactListt() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Type__c = 'Type 2'

        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactListtt() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Family__c = 'Type 3'

        ];
    }



    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactListttt() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Family__c = 'Family 1'

        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactListtttt() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Family__c = 'Family 2'

        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Product__c> getContactListttttt() {
        return [
            SELECT Name
            FROM Product__c
            WHERE Family__c = 'Family 3'

        ];
    }






}