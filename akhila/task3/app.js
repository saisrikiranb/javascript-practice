async function generateRandom() {
    var x = Math.random();

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(x), 1000)
    });
    if (x < 0.5) {
        let result = await promise; // wait until the promise resolves (*)

        console.log(x); // "done!"

    }


}

generateRandom();