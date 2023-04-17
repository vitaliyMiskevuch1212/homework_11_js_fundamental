(function (){
    function getPromise (massage,dalay){
        return new Promise((resolve, reject) => {
            setTimeout(function (){
                resolve(massage)
            }, dalay);
        })
    }

    getPromise("test promise", 2000).then(function(data) {
        console.log(data);
    });
})();