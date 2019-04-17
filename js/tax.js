google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  $.get("./data/Bulgaria-tax.csv", function (csvString) {
    var arrayData = $.csv.toArrays(csvString, {
      onParseValue: $.csv.hooks.castToScalar
    });
    var data = google.visualization.arrayToDataTable(arrayData);
    var view = new google.visualization.DataView(data)
    view.setColumns([0, 1, 2, 3, 4, 5])
    var options = {
      weight: 900,
      height: 500,
      title: 'Bulgaria',
      legend: {
        position: 'bottom'
      },
      hAxis: {
        title: "Year",
        format: 'year '
      },
      vAxis: {
        title: "Tax value (USD)",
        viewWindowMode: 'explicit',
        viewWindow: {
          min: 0
        }
      }
    };
    var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
    chart.draw(view, options);
  });

  document.getElementById('Greece').addEventListener('click', function () {
    $.get("./data/Greece-tax.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 1, 2, 3, 4, 5])
      var options = {
        weight: 900,
        height: 500,
        title: 'Greece',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "Tax value (USD)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
      chart.draw(view, options);
    });
  })

  document.getElementById('Bulgaria').addEventListener('click', function () {
    $.get("./data/Bulgaria-tax.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 1, 2, 3, 4, 5])
      var options = {
        weight: 900,
        height: 500,
        title: 'Bulgaria',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "Tax value (USD)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
      chart.draw(view, options);
    });
  })

  document.getElementById('Romania').addEventListener('click', function () {
    $.get("./data/Romania-tax.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 1, 2, 3, 4, 5])
      var options = {
        weight: 900,
        height: 500,
        title: 'Romania',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "Tax value (USD)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
      chart.draw(view, options);
    });
  })

  document.getElementById('Poland').addEventListener('click', function(){
    $.get("./data/Poland-tax.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          weight: 900,
          height: 500,
          title: 'Poland',
          legend: { position: 'bottom' },
          hAxis: {
            title : "Year",
            format : 'year '
          },
          vAxis: { 
            title: "Tax value (USD)", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})

  document.getElementById('Russia').addEventListener('click', function () {
    $.get("./data/Russia-tax.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 1, 2, 3, 4, 5])
      var options = {
        weight: 900,
        height: 500,
        title: 'Russia',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "Tax value (USD)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
      chart.draw(view, options);
    });
  })
}