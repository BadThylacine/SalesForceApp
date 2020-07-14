public with sharing class myFirstWebComponentController {
    List<Order_c> listName = new List<Order_c>();


    public myFirstWebComponentController() {
listName = [Select Name_c, AccountId_, Name From Order_c];
    }
}
