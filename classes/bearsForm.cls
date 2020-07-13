public with sharing class bearsForm {
    public bearsForm() {
        List<Account> accts = [SELECT Id, Name FROM Account LIMIT 1000];


    }
}
