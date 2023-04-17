(function (){
    const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

    async function showNumbers() {
        for (let i = 0; i <= 10; i++) {
            const result = await delay(i, Math.floor(Math.random() * 3000));
            console.log(result);
        }
    }

    showNumbers();
})();