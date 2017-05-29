var relation = document.querySelector("#relationship");
var relations = ["Friend","Best Friend","Girlfriend/Boyfriend","Online Friend","Brother/Sister","Favourite Person","Cutiepie","Love Bird"];

var currentIndex = -1;

var intervalID = setInterval(function() {
    ++currentIndex;
    if (currentIndex >= relations.length) {
        currentIndex = 0;
    }
    relation.textContent = relations[currentIndex]
}, 100);
