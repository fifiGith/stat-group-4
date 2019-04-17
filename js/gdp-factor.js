google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    $.get("./data/Bulgaria-gdp.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 2, 3, 4, 5, 6, 7])
      var options = {
        weight: 900,
        height: 500,
        title: 'Bulgaria GDP',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "GDP value (USD)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
      chart.draw(view, options);
    });
  
    document.getElementById('Greece-Factor').addEventListener('click', function () {
      $.get("./data/Greece-gdp.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 2, 3, 4, 5, 6, 7])
        var options = {
          weight: 900,
          height: 500,
          title: 'Greece GDP',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "GDP value (USD)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Bulgaria-Factor').addEventListener('click', function () {
      $.get("./data/Bulgaria-gdp.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 2, 3, 4, 5, 6, 7])
        var options = {
          weight: 900,
          height: 500,
          title: 'Bulgaria GDP',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "GDP value (USD)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Romania-Factor').addEventListener('click', function () {
      $.get("./data/Romania-gdp.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 2, 3, 4, 5, 6, 7])
        var options = {
          weight: 900,
          height: 500,
          title: 'Romania GDP',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "GDP value (USD)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Poland-Factor').addEventListener('click', function(){
      $.get("./data/Poland-gdp.csv", function(csvString) {
          var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
          var data = google.visualization.arrayToDataTable(arrayData);
          console.log(data);
          var view = new google.visualization.DataView(data)
          view.setColumns([0, 2, 3, 4, 5, 6, 7])
          var options = {
            weight: 900,
            height: 500,
            title: 'Poland GDP',
            legend: { position: 'bottom' },
            hAxis: {
              title : "Year",
              format : 'year '
            },
            vAxis: { 
              title: "GDP value (USD)", 
              viewWindowMode:'explicit',
              viewWindow:{
              min:0
            }}
          };
          var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
          chart.draw(view, options);
    });})
  
    document.getElementById('Russia-Factor').addEventListener('click', function () {
      $.get("./data/Russia-gdp.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 2, 3, 4, 5, 6, 7])
        var options = {
          weight: 900,
          height: 500,
          title: 'Russia GDP',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "GDP value (USD)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  }