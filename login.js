// Create login Function here.
function Login() {
    playername = document.getElementById("playername").value;

    localStorage.setItem("playername",playername);

    window.location = "gamepage.html"
    
}