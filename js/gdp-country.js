google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    $.get("./data/GDP.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      console.log(data);
      var view = new google.visualization.DataView(data)
      var options = {
        weight: 900,
        height: 500,
        title: 'GDP & Country',
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
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Country'));
      chart.draw(view, options);
    });
  
    var Bulgaria = document.getElementById('Bulgaria-checkbox-gdp')
    var Greece = document.getElementById('Greece-checkbox-gdp')
    var Romania = document.getElementById('Romania-checkbox-gdp')
    var Poland = document.getElementById('Poland-checkbox-gdp')
    var Russia = document.getElementById('Russia-checkbox-gdp')
  
    document.getElementById('Checkbox-group-gdp').addEventListener('click', function () {
      console.log('IN')
      var select = [0, ]
      if (Bulgaria.checked) {
        select.push(1)
      }
      if (Greece.checked) {
        select.push(2)
      }
      if (Romania.checked) {
        select.push(4)
      }
      if (Poland.checked) {
        select.push(3)
      }
      if (Russia.checked) {
        select.push(5)
      }
      
      if (Russia.checked||Poland.checked||Romania.checked||Greece.checked||Bulgaria.checked)
      {
        $.get("./data/GDP.csv", function (csvString) {
          var arrayData = $.csv.toArrays(csvString, {
            onParseValue: $.csv.hooks.castToScalar
          });
          var data = google.visualization.arrayToDataTable(arrayData);
          console.log(data);
          var view = new google.visualization.DataView(data)
          view.setColumns(select)
          var options = {
            weight: 900,
            height: 500,
            title: 'GDP & Country',
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
          var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Country'));
          chart.draw(view, options);
        });
      }
      else {
        document.getElementById('DashBoard-GDP-Country').innerHTML = "<h3>Please Select Country</h3>"
      }
    })
  
  }