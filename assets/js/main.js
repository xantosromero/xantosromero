function gosection(evt, gocontent) {
    var i, tabsection, tablink;

    tabsection = document.getElementsByClassName("tabsection");
    for(i = 0; i < tabsection.length; i++){
        tabsection[i].style.display = "block";
    }

    tablink = document.getElementsByClassName("tablink");
    for(i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(gocontent).style.display = "block";
    evt.currentTarget.className += " active";
}

// Seccion principal por defecto
document.getElementById("default").click();