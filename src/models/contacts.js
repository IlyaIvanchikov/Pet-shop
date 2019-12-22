const fs = require('fs');
const path = require('path');

class Contacts {

    constructor(city, address, number) {
            this.city = city;
            this.address = address;
            this.number = number;
        }

    toJSON() {
            return {
                city: this.city,
                address: this.address,
                number: this.number
            }
        }
    
    static allInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile
            (path.join(__dirname, 'contacts.json'),
            'utf-8',
            (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(content));
            }
                    }
                )
            })
        };
}

module.exports = Contacts;