  // Schedule the page reload every 5 minute
  function refreshPage() {
    window.location.reload();
  }
  setTimeout(refreshPage, 300000);
  
Chart.defaults.font.size = 12;
var colors = ['#fa8c18', '#626162'];

// Function to get data from the MonthProductionTable
function getDataFromMonthProductionTable() {
  var data = {
    labels: [],
    datasets: []
  };

  var labelsRow = document.querySelector("#MonthProductionTable thead tr");
  labelsRow.querySelectorAll("th").forEach(function (cell, index) {
    if (index !== 0) {
      data.labels.push(cell.textContent);
    }
  });

  var dataRows = document.querySelectorAll("#MonthProductionTable tbody tr");
  dataRows.forEach(function (row) {
    var dataset = {
      label: row.cells[0].textContent,
      data: []
    };

    row.querySelectorAll("td").forEach(function (cell, index) {
      if (index !== 0) {
        dataset.data.push(parseInt(cell.textContent));
      }
    });

    data.datasets.push(dataset);
  });

  return data;
}

// Function to get data from the DayProductionTable
function getDataFromDayProductionTable() {
  var data = {
    labels: [],
    datasets: []
  };

  var labelsRow = document.querySelector("#DayProductionTable thead tr");
  labelsRow.querySelectorAll("th").forEach(function (cell, index) {
    if (index !== 0) {
      data.labels.push(cell.textContent);
    }
  });

  var dataRows = document.querySelectorAll("#DayProductionTable tbody tr");
  dataRows.forEach(function (row) {
    var dataset = {
      label: row.cells[0].textContent,
      data: []
    };

    row.querySelectorAll("td").forEach(function (cell, index) {
      if (index !== 0) {
        dataset.data.push(parseInt(cell.textContent));
      }
    });

    data.datasets.push(dataset);
  });

  return data;
}

var chBarMonth = document.getElementById("chartbarmonth");
var chBarDay = document.getElementById("chartbarday");

if (chBarMonth && chBarDay) {
  // Create chart for Month Production
  var monthProductionData = getDataFromMonthProductionTable();
  var monthChart = new Chart(chBarMonth, {
    type: 'bar',
    data: monthProductionData,
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          barPercentage: 0.3,
          categoryPercentage: 0.5
        }],
      }
    }
  });

  // Change color of bars for Month Production chart
  monthChart.data.datasets.forEach(function(dataset, i) {
    dataset.backgroundColor = colors[i];
  });

  // Update the chart
  monthChart.update();

  // Create chart for Day Production
  var dayProductionData = getDataFromDayProductionTable();
  var dayChart = new Chart(chBarDay, {
    type: 'bar',
    data: dayProductionData,
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          barPercentage: 0.3,
          categoryPercentage: 0.5,
        }],
      }
    }
  });

  // Change color of bars for Day Production chart
  dayChart.data.datasets.forEach(function(dataset, i) {
    dataset.backgroundColor = colors[i];
  });

  // Update the chart
  dayChart.update();
}
