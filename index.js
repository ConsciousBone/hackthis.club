const mysteryButton = document.getElementById('mysteryButton'); // attach to button

mysteryButton.addEventListener('click', function() {
    // grab original text, makes it easier to work on if i ever change it
    const mysteryButtonOriginalText = this.innerText;

    this.innerText = "boop!";
    setTimeout(() => { // wait
        // change text back
        this.innerText = mysteryButtonOriginalText;
    }, 300);
});