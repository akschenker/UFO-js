// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function appendRowsAndData(obj) {
    var row = tbody.append("tr");

    // Below loop assumes object keys are in same order and are present every time
    Object.entries(obj).forEach(([key, value]) => {
        row.append("td").text(value); 
    })
};

// Append table rows and data
data.forEach(appendRowsAndData);

var button = d3.select("#filter-btn");

// Only runs when button is clicked or user presses enter
button.on("click", function() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var date = dateInput.property("value");

    var filtered = tableData.filter(x => x.datetime === date);

    tbody.html("")

    filtered.forEach(appendRowsAndData);
});