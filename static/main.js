// import { callbackify } from "util";

// 'use strict';

class Profile {
    constructor({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    };

    createUser(callback) {
        return ApiConnector.createUser((err, data) => {
            console.log(`Creating user ${this.username} real name ${this.name} password ${this.password}`);
            callback (err, data);
        });
    };

    performLogin(callback) {
        return ApiConnector.performLogin((err, data) => {
            console.log(`Login user ${this.username} password ${this.password}`);
            callback (err, data);     
        });
        };

    addMoney({currency, amount}, callback) {
        return ApiConnector.addMoney({currency, amount}, (err, data) => {
            console.log(`Adding ${amount} of ${currency} to ${this.username}`);
                callback(err, data);
            });
        };

    convertMoney({fromCurrency, targetCurrency, targetAmount}, callback) {
        return ApiConnector.convertMoney({fromCurrency, targetCurrency, targetAmount}, (err, data) => {
            console.log(`Converting ${fromCurrency} to ${targetCurrency}`);
            callback(err, data);            
        });
    };

    transferMoney({to, amount}, callback) {
        return ApiConnector.transferMoney({to, amount}, (err, data) => {
            console.log(`Transferring ${amount} to ${to}`);
            callback(err, data);
        });
    };
    };

    // function getStocks() {
    //     как вызвать метод getStocks без экземпляра класса ApiConnector???;       
    // };

//  getStocks();

 function main() {
     const Vasya = new Profile({
         username:'user1',
         name: {firstName:'Vasya', lastName: 'Pupkin'},
         password: '123'});
     const Petya = new Profile({
         username: 'user2', 
         name: {firstName: 'Petya', lastName: 'Ivanov'},
         password: 'qwerty'});
     
     Vasya.createUser();
     Vasya.performLogin();
     Vasya.addMoney({currency: 'RUB', amount: 200}, (err, data) => {
         if (err) {
             console.error('Error during adding money to Vasya');             
         } else {
             console.log(`Added 500000 euro to Vasya`);             
         }
     });

 }

 main();



        

      
    



