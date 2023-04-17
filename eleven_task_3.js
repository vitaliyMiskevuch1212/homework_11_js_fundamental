(function (){
    function done () {
        new Promise(function (resolve, reject) {
            let number = prompt("Please enter a number");
            if (isNaN(number)) {
                reject("invalid input, not a number")
            } else {
                resolve(Number(number))
            }
        }).catch(function (error) {
            return new Promise(function (resolve, reject) {
                let number
                do {
                    number = prompt("invalid input, not a number");
                } while (isNaN(number));
                resolve(Number(number))
            });
        }).then(function (result) {
            console.log(result)
        });
    }
    done()
})();