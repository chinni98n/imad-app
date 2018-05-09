//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function() {
    //Make a request to the countr endpoint
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystateChange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //Take some action
            if(request.status==200){
                var counter=request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','https://chinni98n.imad.hasura-app.io/counter',true);
    request.send(null);
};