

function drkMd(){
    let c = document.body;
    c.classList.toggle("darkMode");
    console.log(c);
}

function fontChange(){
    const a = document.getElementById("titre");
    a.classList.toggle("changeFont");
    const b = document.getElementById("titre2");
    b.classList.toggle("changeFont");
    
}

function zoom(){
    const d = document.getElementById("zoom1");
    d.classList.toggle("zoom");
    const e = document.getElementById("zoom2");
    e.classList.toggle("zoom");
}

function over(){
    const f = document.getElementById("pOver");
    f.innerHTML = "nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte nouveau texte ";
}

function redirP2(){
    window.location.href = "/public/pages/page2.html"
}
