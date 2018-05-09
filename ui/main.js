//counter code
var button=document.getElementById('counter');

button.onclick=function() {
    //Make a request to the counter endpoint
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://chinni98n.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit= document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server and send the name
     var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                 //Capture a list of names and render it as a list
    
                    var names=request.responseText;
                    names=JSON.parse(names);
                    var list='';
                    for (var i=0; i<names.length; i++) {
                    list+= '<li>' + names[i] + '</li>';
                     }
  
                      var ul= document.getElementById('namelist');
                      ul.innerHTML = list;
                }
            }
                            //Not done yet
    };
    //Make the request
    request.open('GET','http://chinni98n.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
   
};