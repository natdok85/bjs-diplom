'use strict';

class Profile {
    constructor({username, name: {firstName, lastName}, password}) {
        this.username = username;
        this.name = {firstName, lastName};
        this.password = password;
    };

    createUser(callback) {
        return ApiConnector.createUser({
            username: this.username,
            name: this.name,
            password: this.password
        }, (err, data) => {
            console.log(`Creating user ${this.username}`);
            callback(err, data);
        });
    };

    performLogin(callback) {
        return ApiConnector.performLogin({username: this.username, password: this.password}, (err, data) => {
            console.log(`Authorizing user ${this.username}`);
            callback(err, data);
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
}

function getStocks(callback) {
    return ApiConnector.getStocks((err, data) => {
        console.log(`Getting stocks info`);
        callback(err, data[99]);
    });
}

function main() {
    const Ivan = new Profile({
     username:'ivan',
     name: {firstName:'Ivan', lastName: 'Chernyshev'},
     password: 'ivanspass'});
    const Petya = new Profile({
         username: 'petya',
         name: {firstName: 'Petya', lastName: 'Ivanov'},
         password: 'qwerty'});

    getStocks((err, data) => {
        if (err) {
            console.error(`Error during getting stocks`);
            throw err;
        }
        let currentRate = data;        

        Ivan.createUser((err, data) => {
            if (err) {
                console.error('Error during creating Ivan');
                throw err;
            } else {
                console.log('Ivan is created!');

                Ivan.performLogin((err, data) => {
                    if(err) {
                        console.error('Error during authorizing Ivan');
                        throw err;
                    } else {
                        console.log('Ivan is authorized!');

                        Ivan.addMoney({currency: 'RUB', amount: 100}, (err, data) => {
                            if (err) {
                                console.error('Error during adding money to Ivan');
                            } else {
                                console.log(`Added 500000 euros to Ivan`);

                                Ivan.convertMoney({fromCurrency:})

                                
                            }
                        });
                    }
                });
            }
        });
    });
};

    

main();
