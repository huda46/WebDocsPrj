/*
breadcrumb();
 */
window.addEventListener("load", storage_location);

window.addEventListener("load", breadcrumb);


function breadcrumb() {
    var url = document.referrer;
    var breadcrumb = document.getElementById("breadcrumb");
    window.addEventListener("load", load_location(breadcrumb));
    // Create the breadcrumb
    let a = document.createElement("a");
    a.href = url;
    // Text to display in the breadcrumb
    let text = getName_ofHTML(url);
    // Create the breadcrumb
    a.innerHTML = text;
    breadcrumb.appendChild(a);
    let span = document.createElement("span");
    span.innerHTML = " > ";
    breadcrumb.appendChild(span);


}

function getName_ofHTML(str) {

    let text = str.split("/").pop();
    text = text.replace(".html", "");

    switch (text) {
        case "index":
            text = "Home";
            break;
        case "about":
            text = "About";
            break;
        case "contact":
            text = "Contact";
            break;
        case "imprint":
            text = "Imprint";
            break;
        case "privacy":
            text = "Privacy";
            break;
        case "termsOfServices":
            text = "Terms of Service";
            break;
        case "cottbus":
            text = "Cottbus";
            break;
        case "ostkreuz":
            text = "Ostkreuz";
            break;
        case "ostkreuzWoman":
            text = "Ostkreuz Woman";
            break;
        case "potsdam":
            text = "Postdam";
            break;
        case "ourProducts":
            text = "Our Products";
            break;
        case "fillInfoPersonal":
            text = "Fill Info Personal";
            break;
        case "registration":
            text = "Registration";
            break;
        default:
            text = "Error";
            break;
    }
    return text;
}

function storage_location() {

    let path = window.location.pathname;
    switch (getName_ofHTML(path)) {
        case "Cottbus":
        case "Ostkreuz":
        case "Potsdam":
        case "Ostkreuz Woman":
            var data = {name: getName_ofHTML(path), path: "" + path};
            localStorage.setItem('path', JSON.stringify(data));
            break;
        default:
            break;
    }
}

function load_location(id) {
    let path1 = window.location.pathname;
    switch (getName_ofHTML(path1)) {
        case "Fill Info Personal":
            let data = localStorage.getItem('path');
            var path = JSON.parse(data);

            let a = document.createElement("a");
            a.innerHTML = path.name;
            a.href = path.path;

            let span = document.createElement("span");
            span.innerHTML = " > ";

            id.appendChild(a);
            id.appendChild(span);
        default:
            break;
    }


}

