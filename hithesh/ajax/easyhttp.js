function easyHTTP(){
    this.http=new XMLHttpRequest();
}
//get request//
easyHTTP.prototype.get=function(url,callback){
    this.http.open('GET',url,true);
    let self =this;
    this.http.onload = function(){
        if (self.http.status===200){
            
            callback(null,self.http.responseText);
        }else{
            callback('error:'+ self.http.status);
        }
    }
    this.http.send();
}
//post request
easyHTTP.prototype.post=function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('content-type','application/json');
    //this.send(JSON.stringify(data));

    let self =this;
    this.http.onload = function(){
            callback(null,self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// //put request
// easyHTTP.prototype.put=function(url,data,callback){
//     this.http.open('PUT',url,true);
//     this.http.setRequestHeader('content-type','application/json');
//     this.send(json.stringify(data));

//     let self =this;
//     this.http.onload = function(){
//             callback(null,self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }
// // delete request
// easyHTTP.prototype.delete=function(url){
//     this.http.open('DELETE',url,true);
//     let self =this;
//     this.http.onload = function(){
//         if (self.http.status===200){
//             callback(null,'post deleted');
//         }else{
//             callback('error:'+ self.http.status);
//         }
//     }
//     this.http.send();
// }
        
        
        
    
