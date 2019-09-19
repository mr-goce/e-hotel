var rootDiv = $("#root");

var username = $('<input>').attr("placeholder", "Name").addClass("forma");
var password = $("<input type='password'>").attr("placeholder", "Password").addClass("forma");
var logInButton = $("<button>").text("LOG IN");

rootDiv.append(username);
rootDiv.append(password);
rootDiv.append(logInButton);

var paragraf = $('<p>').html(" not a member yet? please  SIGN Up");
paragraf.css({ color: "blue", position: "absolute", top: "15px", right: "15px" });




// var signInButton =$("<button>").text("SIGN IN");
rootDiv.append(paragraf);
// rootDiv.append(signInButton);

// var description = $("<h3>").text("Ener User Name and Password");
// description.css({
//     position: "absolute",
//     top:"60px",
paragraf.on("click", () => {
// })
// rootDiv.append(description);
    // window.location="index.html";

    var signINdiv = $("<div>").attr("class", "signInForm");
    signINdiv.css({
        border: "2px solid black",
        padding: "50px 10px",
        marginLeft: "80px",
        borderRadius: "15px"
    })
    paragraf.css({
        display: "none",
    })
    rootDiv.append(signINdiv);

    var signUsername = $("<input>").attr("placeholder", "Enter your name").addClass("signInInput");
    var passUsermane = $("<input type = 'password'>").attr("placeholder", "Enter password").addClass("signInInput");
    var btnUsername = $("<button>").text("SIGN UP");

    signUsername.css({ display: "block", marginTop: "15px" });
    passUsermane.css({ display: "block", marginTop: "15px" });



    signINdiv.append(signUsername);
    signINdiv.append(passUsermane);
    signINdiv.append(btnUsername);


    // magic

    
    //  var users = JSON.parse(localStorage.getItem("users"));z
    
    var array = [];
    btnUsername.on("click", () => {
        var user = signUsername.val();
        var pass = passUsermane.val();
        var userObj = {
            userName: user,
            password: pass,
            
        }
        signINdiv.css({
            display: "none",
        })
        
        array.push(userObj);
        localStorage.setItem("users", JSON.stringify(array));
        
    })
})

//  lOG IN
logInButton.on('click',()=>{

    var loginUserName = username.val();
    console.log(loginUserName);
    var loginPassName = password.val();
    var users= JSON.parse(localStorage.getItem("users"));
    console.log(users);
    for(var i=0; i<users.length;i++){
         if(loginUserName === users[i].userName && loginPassName=== users[i].password){
          
            window.location="index.html"; 
            
        }
        else{
            alert("please insert correct User and Password");
        }
    }
})

