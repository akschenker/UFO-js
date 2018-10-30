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

var moreFilters = d3.select("#more-filter-btn");

moreFilters.on("click", function() {
    d3.event.preventDefault();
    
    // Use for loop to create additional filters
    var filters = d3.select("#filters");
    const filterList = ["City", "State", "Country", "Shape","Duration"];

    filterList.forEach(filter => {
        var newLi = filters.append("li").attr("class","filter list-group-item");
        newLi.append("label").attr("for", filter).text(`Enter a ${filter}`);
        newLi.append("input").attr("class", "form-control").attr("type", "text");
    });
    moreFilters.style("display", "none");
});
