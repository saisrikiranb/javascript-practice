function major() {
    let x = display();

    function major() {
        let x = display();
    
        // expects callback... takes time to execute...or fetch data.
        // getResourceFromInternet(function(rn){
        //     console.log("rn --> ", rn)
        // });
    
        getRnPromise() // this function is returning a promise.....
            .then(
                function(data){
                    console.log("random number recieved is --> ", data)
                }
            )
            .catch(
                function(){
                    console.log("this is reject function")
                }
            )
    }
    
    //asynchronous function --> time
    function getResourceFromInternet(cb) {
        let y
    
        setTimeout(() => {
            y = Math.random();
            console.log("random number y in getResourceFromInternet: ", y);
            console.log("cb is --> ", cb);
            cb(y);
        }, 3000);
    
        // let apiUrl = "https://something.com/users"
        // return after 5 seconds
        return y; // this will be returned immediately...
    }
    
    
        document.getElementById("i").innerHTML = x;
    function getRnPromise(){
        return new Promise(
            (resolve, reject) => {
                // call an api.... server gave an error
                setTimeout(()=>{
                    let y = Math.random();
                    resolve();
                }, 2000)
            }
        );
    }
    
    setTimeout(display, 5000);
    
    function display() {
        let y = Math.random();
        return new promise (
            (success,failure)=>{
                
            }
        )
        return y;
    } 
}
    // callback -->
        // - it is a function
        // - when is it executed....?
        //     - after some asynchronous action is completed.
    // Promise
    // async/await//