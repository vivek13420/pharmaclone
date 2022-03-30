
document.querySelector("#form").addEventListener("submit",myloginfun)

var loginarr=JSON.parse(localStorage.getItem("login"))||[]
function  myloginfun(){
    event.preventDefault()

    var num= document.querySelector("#num").value

    var obj={number:num};

    flag=0;
    
            loginarr.map(function(ele){

              

              if(num==ele.number)
                  flag=1;
              
            
            })


            if(flag==1){
                
                loginarr.push(obj)
                localStorage.setItem("login",JSON.stringify(loginarr))
                // window.location.href="otp.html"

            }
           
        
 
}