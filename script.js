// Side Hustle Form - Student Implementation Plan
// Follow these steps to create a form that stores information in an object

// 1) Create an array to store all side hustle data entries
let sideHustleArray = [];

// 2) Create a variable to store the form element using document.getElementById
let form = document.getElementById("side-hustle-form");

// 3) Create variables to store each input field using document.getElementById:
//    - Title input field
//    - Category Type dropdown
//    - Barrier to Entry dropdown  
//    - College Admissions dropdown
//    - Technical Skills text input
//    - Non-financial Benefits text input
//    - Hourly Wage input field
let title = document.getElementById("title");
let categoryType = document.getElementById("category-type");
let barrierToEntry = document.getElementById("barrier-to-entry");
let collegeAdmissions = document.getElementById("college-admissions");
let technicalSkills = document.getElementById("technical-skills");
let nonFinancialBenefits = document.getElementById("non-financial-benefits");
let hourlyWage = document.getElementById("hourly-wage");
// add a new field here

// 4) Create a variable to store the submit button using document.getElementById
let submitButton = document.getElementById("submit-button");

// 5) Create a variable to store a display area element using document.getElementById (for showing the data)
let displayArea = document.getElementById("display-area");

// 6) Create variables to store the optimization buttons using document.getElementById:
//    - Profit button
//    - Positive Impact button
let profitButton = document.getElementById("profit-button");
let positiveImpactButton = document.getElementById("positive-impact-button");

// 7) Create a variable to store the results table element using document.getElementById
let resultsTable = document.getElementById("results-table");

// 8) Add an event listener to the submit button that listens for "click" events
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    //     9) Inside the event listener function, create variables to get the current values from each input field using .value
    let titleValue = title.value;
    let categoryTypeValue = categoryType.value;
    let barrierToEntryValue = barrierToEntry.value;
    let collegeAdmissionsValue = collegeAdmissions.value;
    let technicalSkillsValue = technicalSkills.value;
    let nonFinancialBenefitsValue = nonFinancialBenefits.value;
    let hourlyWageValue = parseFloat(hourlyWage.value);

    //     10) Create an object called "sideHustleData" to store all the form information using the following structure:
    //        - title: (store the title value)
    //        - categoryType: (store the category type value)
    //        - barrierToEntry: (store the barrier to entry value)
    //        - collegeAdmissions: (store the college admissions value)
    //        - technicalSkills: (store the technical skills value)
    //        - nonFinancialBenefits: (store the non-financial benefits value)
    //        - hourlyWage: (store the hourly wage value)
    let sideHustleData = {
        title: titleValue,
        categoryType: categoryTypeValue,
        barrierToEntry: barrierToEntryValue,
        collegeAdmissions: collegeAdmissionsValue,
        technicalSkills: technicalSkillsValue,
        nonFinancialBenefits: nonFinancialBenefitsValue,
        hourlyWage: hourlyWageValue
    };

    //     11) Add the sideHustleData object to your array using the push method
    sideHustleArray.push(sideHustleData);

    //     12) Clear all the form fields by setting their .value to empty strings
    title.value = "";
    categoryType.value = "";
    barrierToEntry.value = "";
    collegeAdmissions.value = "";
    technicalSkills.value = "";
    nonFinancialBenefits.value = "";
    hourlyWage.value = "";

    // Show confirmation message
    displayArea.innerHTML = `<p>Side hustle "${titleValue}" added successfully! Total entries: ${sideHustleArray.length}</p>`;
});

// 13) Add an event listener to the Profit button that listens for "click" events
profitButton.addEventListener("click", function(event) {
    //     14) Inside the Profit button event listener, call the sortByProfit function
    sortByProfit();
});

// 15) Create a function called "sortByProfit" to find and display the top 3 highest paying side hustles
function sortByProfit() {
    //     16) Inside the sortByProfit function, find the three entries with highest hourly wages without using loops:
    //         - Use .sort() to arrange by hourlyWage (highest to lowest)
    //         - Use .slice() to take only the first 3 results
    //         - Use callback functions for sorting
    
    if (sideHustleArray.length === 0) {
        resultsTable.innerHTML = "<p>No side hustles added yet!</p>";
        return;
    }

    // Sort by hourly wage (highest to lowest) using callback function
    let sorted = sideHustleArray.sort(compareWages);
    
    // Take only the first 3 results
    let topThree = sorted.slice(0, 3);

    // Call displayResults function to show in DOM elements
    displayResults(topThree);
}

// Function to display results in the table without using loops
function displayResults(topThree) {
    let tableRows = resultsTable.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    
    // Update first row
    updateRow(tableRows[0], topThree[0], 1);
    
    // Update second row
    updateRow(tableRows[1], topThree[1], 2);
    
    // Update third row
    updateRow(tableRows[2], topThree[2], 3);
}

// Function to update a single table row
function updateRow(row, hustle, rank) {
    let cells = row.getElementsByTagName("td");
    
    if (hustle) {
        cells[0].textContent = "#" + rank;
        cells[1].textContent = hustle.title;
        cells[2].textContent = "$" + hustle.hourlyWage.toFixed(2);
        cells[3].textContent = hustle.categoryType;
        cells[4].textContent = hustle.barrierToEntry;
        cells[5].textContent = hustle.collegeAdmissions;
        cells[6].textContent = hustle.technicalSkills;
        cells[7].textContent = hustle.nonFinancialBenefits;
    } else {
        // Clear empty rows
        cells[0].textContent = "#" + rank;
        cells[1].textContent = "";
        cells[2].textContent = "";
        cells[3].textContent = "";
        cells[4].textContent = "";
        cells[5].textContent = "";
        cells[6].textContent = "";
        cells[7].textContent = "";
    }
}

// Callback function to compare wages for sorting (highest to lowest)
function compareWages(a, b) {
    return b.hourlyWage - a.hourlyWage;
}