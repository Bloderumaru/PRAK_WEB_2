function validasi(){
    var username = document.getElementById("usename").value;
    var password = document.getElementById("password").value;
    if ( username == "Bloderumaru" && password == "0110219095"){
        alert ("login suksess");
        window.location = "great.html";
    }
    else{
        alert("login gagal");
    }
}