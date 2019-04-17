google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    $.get("./data/Revenue.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
            onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        var options = {
            title: 'Revenue',
            legend: {
                position: 'bottom'
            },
            hAxis: {
                title: "Year",
                format: 'year '
            },
            vAxis: {
                title: "Tax value",
                viewWindowMode: 'explicit',
                viewWindow: {
                    min: 0
                }
            }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Revenue'));
        chart.draw(view, options);
    });

    var Bulgaria = document.getElementById('Bulgaria-checkbox')
    var Greece = document.getElementById('Greece-checkbox')
    var Romania = document.getElementById('Romania-checkbox')
    var Poland = document.getElementById('Poland-checkbox')
    var Russia = document.getElementById('Russia-checkbox')

    document.getElementById('Checkbox-group').addEventListener('click', function () {
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
        $.get("Revenue.csv", function (csvString) {
            var arrayData = $.csv.toArrays(csvString, {
                onParseValue: $.csv.hooks.castToScalar
            });
            var data = google.visualization.arrayToDataTable(arrayData);
            var view = new google.visualization.DataView(data)
            view.setColumns(select)
            var options = {
                title: 'Revenue',
                legend: {
                    position: 'bottom'
                },
                vAxis: {
                    title: "Tax value",
                    viewWindowMode: 'explicit',
                    viewWindow: {
                        min: 0
                    }
                }
            };
            var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Revenue'));
            chart.draw(view, options);
        });
    })

}