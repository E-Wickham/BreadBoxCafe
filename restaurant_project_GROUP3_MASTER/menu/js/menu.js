window.onload = function() {

    // button variables
    var breadBtn = document.getElementById("bb");
    var toastBtn = document.getElementById("tb");
    var sandBtn = document.getElementById("sb");
    var sweetsBtn = document.getElementById("swb");
    var drinkBtn = document.getElementById("db");

    // div variables
    var bread = document.getElementById("bread-div");
    var toast = document.getElementById("toast-div");
    var sand = document.getElementById("sand-div");
    var drinks = document.getElementById("drinks-div");
    var sweets = document.getElementById("sweets-div");

    // hidden divs onload
    toast.classList.add("hidden");
    sand.classList.add("hidden");
    drinks.classList.add("hidden");
    sweets.classList.add("hidden");

    // onclick event listeners for buttons
    breadBtn.addEventListener("click", showBreads);
    toastBtn.addEventListener("click", showToast);
    sandBtn.addEventListener("click", showSand);
    sweetsBtn.addEventListener("click", showSweets);
    drinkBtn.addEventListener("click", showDrinks);

    // functions to show a specific part of the menu
    function showBreads() {
        bread.classList.remove("hidden");

        toast.classList.add("hidden");
        sand.classList.add("hidden");
        drinks.classList.add("hidden");
        sweets.classList.add("hidden");
    }
    function showToast() {
        toast.classList.remove("hidden");

        bread.classList.add("hidden");
        sand.classList.add("hidden");
        drinks.classList.add("hidden");
        sweets.classList.add("hidden");

    }
    function showSand() {
        sand.classList.remove("hidden");

        bread.classList.add("hidden");
        toast.classList.add("hidden");
        drinks.classList.add("hidden");
        sweets.classList.add("hidden");
    }
    function showDrinks() {
        drinks.classList.remove("hidden");

        bread.classList.add("hidden");
        toast.classList.add("hidden");
        sand.classList.add("hidden");
        sweets.classList.add("hidden");

    }
    function showSweets() {
        sweets.classList.remove("hidden");

        bread.classList.add("hidden");
        toast.classList.add("hidden");
        sand.classList.add("hidden");
        drinks.classList.add("hidden");
    }


} // end of onload