public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Product__c> findContacts(String searchKey) {
    String key = '%' + searchKey + '%';
    
        return [
            SELECT Name
            FROM Product__c
            WHERE Name LIKE :key
        ];
    }
}