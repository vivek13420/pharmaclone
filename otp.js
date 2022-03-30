
document.querySelector("#form").addEventListener("submit",myotpfun)

var otparr=[{otp:123}]
function myotpfun(){
    event.preventDefault()

   var otp= document.querySelector("#otp").value

   

    flag=0;
    
            otparr.map(function(ele){

              if(otp==ele.otp){
                  flag=1;
              }
            

            })


            if(flag==1){
                
                window.location.href="index.html"

            }
            else{
                alert("Incorrect OTP")
            }
          
        
 
}