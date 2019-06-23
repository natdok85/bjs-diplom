// import { callbackify } from "util";

class Profile {
    constructor({username, name, password}) {
        this.username = username;
        this.name = name;
        this.password = password;
    };

    createUser({username, name: {firstName, lastName}, password}, callback) {
        return ApiConnector.createUser({username, name: {firstName, lastName}, password}, (err, data) => {
            console.log(`Creating user ${this.username} real name ${this.name} password ${this.password}`);
            callback (err, data);
        });
    };

    performLogin({username, password}, callback) {
        return ApiConnector.performLogin({username, password}, (err, data) => {
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

 let currencyRates = ApiConnector.getStocks();
 console.log(currencyRates);


        

      
    



