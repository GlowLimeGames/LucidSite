document.getElementById("foot_01").innerHTML = " <div> &copy; " + new Date().getFullYear() + " Lucid. All rights reserved.</div>";

//modal boxes
var modal = document.getElementsByClassName('modal');

// Get the button that opens each modal
var teamBtn = document.getElementById("team");
var artBtn = document.getElementById("art");
var aboutBtn = document.getElementById("about");
var contactBtn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on a button, open the modal
teamBtn.onclick = function() {
    document.getElementById("teamModal").style.display = "block";
    document.getElementById("teamModal").style.zIndex=2;
}
artBtn.onclick = function() {
    document.getElementById("artModal").style.display = "block";
    document.getElementById("artModal").style.zIndex=2;
}
aboutBtn.onclick = function() {
    document.getElementById("aboutModal").style.display = "block";
}
contactBtn.onclick = function() {
    document.getElementById("contactModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}
span[3].onclick = function() {
    modal[3].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    console.log(event.target);
    if (event.target.className != "modalContent") {
        for(m in modal){
            if(modal[m].style.display=="block") {
                //modal[m].style.display = "none";
            }
        }
    }
}*/