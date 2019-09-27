var rootDiv = $("#root");

var username = $('<input>').attr("placeholder", "Name").addClass("forma");
var password = $("<input type='password'>").attr("placeholder", "Password").addClass("forma");
var logInButton = $("<button>").text("LOG IN");

rootDiv.append(username);
rootDiv.append(password);
rootDiv.append(logInButton);

var paragraf = $('<p>').html(" not a member yet? please  SIGN Up");
paragraf.css({ color: "blue", position: "absolute", top: "15px", right: "15px" });





rootDiv.append(paragraf);

paragraf.on("click", () => {
 
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

    var signUsername = $("<input>").attr("placeholder", "Enter your email");
    signUsername.attr("id", "signInInput");
    var passUsermane = $("<input type = 'password'>").attr("placeholder", "Enter password");
    passUsermane.attr("id", "password")
    var btnUsername = $("<button>").text("SIGN UP");
    btnUsername.hide();

    signUsername.css({ display: "block", marginTop: "15px",width:"200px",height:"35px" });
    passUsermane.css({ display: "block", marginTop: "15px",width:"200px",height:"35px" });
    btnUsername.css({width:"200px",height:"35px",backgroundColor:"lightGreen"})



    signINdiv.append(signUsername);
    signINdiv.append(passUsermane);
    signINdiv.append(btnUsername);


    // magic


    //  var users = JSON.parse(localStorage.getItem("users"));z
    $("#signInInput").keyup(() => {
        if (validateEmail()) {
            $("#signInInput").css("border", "2px solid green");


        } else {
            $("#signInInput").css("border", "2px solid red");

        }
signUPshow();
    })
    function validateEmail() {
        var email = $("#signInInput").val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }
    $("#password").keyup(() => {
        if (validatePassword()) {
            $("#password").css("border", "2px solid green");
        }
        else {
            $("#password").css("border", "2px solid red");
        }
        signUPshow();

    })
    function validatePassword() {
        var password = $("#password").val();
        if (password.length > 7) {
            return true;

        } else {
            return false;

        }
    }
    function signUPshow(){
        if(validateEmail() &&  validatePassword()){
            btnUsername.show();
        }
        else{
            btnUsername.hide();
        }
    }
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
logInButton.on('click', () => {

    var loginUserName = username.val();
    console.log(loginUserName);
    var loginPassName = password.val();
    var users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    for (var i = 0; i < users.length; i++) {
        if (loginUserName === users[i].userName && loginPassName === users[i].password) {

            window.location = "index.html";

        }
        else {
            alert("please insert correct User and Password");
        }
    }
})

