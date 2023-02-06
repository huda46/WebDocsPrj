/*
breadcrumb();
 */
window.addEventListener("load", storage_location);

window.addEventListener("load", breadcrumb);


function breadcrumb() {

    var url = document.referrer;
    if (url) {
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


}

function getName_ofHTML(str) {


    if (str.includes("index.html")) {
        text = "Home";
    }

    if (str.includes("about.html")) {
        text = "About";
    }
    if (str.includes("contact.html")) {
        text = "Contact";
    }

    if (str.includes("imprint.html")) {
        text = "Imprint";
    }

    if (str.includes("privacy.html")) {
        text = "Privacy";
    }
    if (str.includes("termsOfServices.html")) {
        text = "Terms of Service";
    }
    if (str.includes("fillInfoPersonal.html")) {
        text = "Fill Info Personal";
    }

    if (str.includes("ostkreuz.html")) {
        text = "Ostkreuz";
    }
    if (str.includes("ostkreuzWoman.html")) {
        text = "Ostkreuz Woman";
    }
    if (str.includes("potsdam.html")) {
        text = "Postdam";
    }
    if (str.includes("cottbus.html")) {
        text = "Cottbus";
    }

    if (str.includes("ourProducts.html")) {
        text = "Our Products";
    }

    if (str.includes("registration.html")) {
        text = "Registration";
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

