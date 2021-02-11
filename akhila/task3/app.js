function generateRandom() {
    var x = Math.random();

    let px = new Promise((resolve, reject) => {

        setTimeout(
            () => {
                if(x > 0.5)
                    reject({err: "x value is greater than 0.5"});
                else
                    resolve(x);
            }
        , 2000)
    });
    console.log("x outside: ", x);
    return px; // this is promise
}

// generateRandom();

async function major() {

    // generateRandom()
    //     .then(
    //         //success case - what to do
    //     )
    //     .catch(
    //         //failure case - what to do
    //     )


    try {
        let result = await generateRandom(); // wait until the promise resolves (*)
        console.log(result); // "done!"
    } catch(ex) {
        alert(JSON.stringify(ex));
    }
}
