//get request
 const http =new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,post){
//     if(err){
//         console.log(err);
//     }else {
//             console.log(post);   
//     }
// });
//create data
// const data = {
//     title: 'custom post',
//     body:'this is a custom post'
// };
//create post
http.post('https://jsonplaceholder.typicode.com/posts',
function(err,post){
    if(err){
        console.log(err);
    }else {
            console.log(post);   
    }
})
// //update post
// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data,function(err,post){
//     if(err){
//         console.log(err);
//     }else {
//             console.log(post);   
//     } 
// });
// //delete
// const http =new easyHTTP;
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
// function(err,response){
//     if(err){
//         console.log(err);
//     }else {
//             console.log(response);   
//     }
// });