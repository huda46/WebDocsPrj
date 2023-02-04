


 function breadcrumb() {
    var url = document.referrer;


    // Create the breadcrumb
    var a = document.createElement("a");
    a.href = url;

    // Text to display in the breadcrumb
    let text = a.pathname.split("/").pop();
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
        case "termsOfService":
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
        case "ourProducts":
            text = "Our Products";
            break;
        case "fillInfoPersonal":
            text = "Fill Info Personal";
            break;
        case "reistration":
            text = "Registration";
            break;
        default:
            text = "Error";
            break;
    }
    // Create the breadcrumb
    a.innerHTML = text
    document.getElementById("breadcrumb").appendChild(a);
    var span = document.createElement("span");
    span.innerHTML = " > ";
    document.getElementById("breadcrumb").appendChild(span);

}