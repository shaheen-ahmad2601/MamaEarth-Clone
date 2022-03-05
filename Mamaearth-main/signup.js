
 let action=document.querySelector("#signup")
 action.addEventListener("click",function(){
   Reg()
 })
let Reg = async () => {

    try {
        
      let register_data = {

          name:"null",
         email:document.getElementById("email").value,
         password:document.getElementById("pass").value,
         username:document.getElementById("user").value,
         mobile:document.getElementById("phone").value,
         description:"null",

     }

      register_data = JSON.stringify(register_data);

        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {

            method:'POST',
            body: register_data,

            headers : {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        console.log(data)
         if(data.error==false){
           window.location.href="login.html"
         }
        else if(data.error==true){
          alert("Details already present")
          console.log(data)
        }
        
    } catch (error) {
        console.log("error:", error);
        
    }
}
