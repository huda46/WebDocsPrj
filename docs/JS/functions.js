/*
breadcrumb();
 */

window.addEventListener("load", breadcrumb);

function breadcrumb() {
    var url = document.referrer;
    var breadcrumb = document.getElementById("breadcrumb");

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

