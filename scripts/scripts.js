let table = document.getElementById("bookTableBody");

function addRow() {
    // Declare variables
    let row = document.createElement("tr");
    let title = document.createElement("td");
    let author = document.createElement("td");
    let genre = document.createElement("td");
    let rating = document.createElement("td");
    let removeTd = document.createElement("td");
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.setAttribute("class", "removeBtn");

    let inputTitle = document.getElementById("title");
    let inputAuthor = document.getElementById("author");
    let inputGenre = document.getElementById("genre");
    let inputRating = document.getElementById("rating");
    
    getStarRating(inputRating);

    /*
        Checks if input values are blank
        if so, prompt user to fill out fields
    */
    if (inputTitle.value === '' || inputAuthor.value === '' ||
        inputGenre.value === '') {
        alert("Please fill out fields");
    } else {
        // Assigns input values to html elements
        title.innerHTML = inputTitle.value;
        author.innerHTML = inputAuthor.value;
        genre.innerHTML = inputGenre.value;
        //rating.innerHTML = inputRating.value;

        // Appends elements to HTML row
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(genre);
        row.appendChild(rating);
        removeTd.appendChild(removeBtn);
        row.appendChild(removeTd);

        // Appends row to table
        table.appendChild(row);

        inputTitle.value = "";
        inputAuthor.value = "";
        inputGenre.value = "";

        // Call saveData to save row to local storage
        //saveData();
    }
}

// Event listener for remove button
table.addEventListener("click", function(e) {
    if (e.target.classList.contains("removeBtn")) {
        e.target.parentElement.parentElement.remove();
        //saveData(); // call saveData when item is removed
    }
}, false);

function getStarRating(inputRating) {
    let img = document.createElement("img");
    if (inputRating.value == "one") {
        img.src = "images/star.png"
        inputRating.appendChild(img);
        return inputRating;
    }
}

// Save data to local storage
function saveData() {
    localStorage.setItem("data", table.innerHTML);
    table.innerHTML = localStorage.getItem("data");
}

// Retrieve items in local storage
function showTask() {
    table.innerHTML = localStorage.getItem("data");
}

// Call function to show items in local storage
//showTask()