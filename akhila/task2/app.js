function major() {

    // expects callback... takes time to execute...or fetch data.
    // getResourceFromInternet(function(rn){
    //     console.log("rn --> ", rn)
    // });

    getRnPromise() // this function is returning a promise.....
        .then(
            function(data) {
                console.log("random number recieved is --> ", data)
            }
        )
        .catch(
            function(data) {
                console.log("this is reject function-->", data)
            }
        )
}

//asynchronous function --> time
// function getResourceFromInternet(cb) {
//     let y

//     setTimeout(() => {
//         y = Math.random();
//         console.log("random number y in getResourceFromInternet: ", y);
//         console.log("cb is --> ", cb);
//          if(y<0.5)
//{
// cb(y);
//}

//     }, 3000);

//     // let apiUrl = "https://something.com/users"
//     // return after 5 seconds
//     return y; // this will be returned immediately...
// }


function getRnPromise() {
    return new Promise(
        (resolve, reject) => {
            // call an api.... server gave an error
            setTimeout(() => {
                let y = Math.random();
                if (y < 0.5) {
                    resolve(y);
                } else {
                    reject(y);
                }

            }, 2000)
        }
    );
}


// callback -->
// - it is a function
// - when is it executed....?
//     - after some asynchronous action is completed.
// Promise
// async/await

// 2 hours on this....