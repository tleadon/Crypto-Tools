// updateInclude.js

function updateInclude() {
    // Create a new Date object
    var currentDate = new Date();

    // Subtract one hour
    currentDate.setHours(currentDate.getHours() - 1);

    // Get the current day, month, and year
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based, add 1 to get the correct month number
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();

    // Format the day, month, and hour to always have two digits
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;

    // Construct the filename
    var filename = `names_and_addresses_${day}_${month}_${year}.json`;

    // Update the HTML content
    document.getElementById("textToCopy").innerHTML = `{% include results/${filename} %}`;
}

// Call the function to update the include statement when the page loads
window.onload = updateInclude;