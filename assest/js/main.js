
var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

// --- Showing Sitting Menu --- //
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}


// --- Dark Mode Button --- //
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
       // --- Change To Dark Mode Color --- //
    // --- Stable Dark Mode Or Light Mode, when refresh or close the site --- //
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");

}
