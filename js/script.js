var options = {
    scaleLabel: function (label) {
        return '$' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            ticks: {
                callback: function (value, index, values) {
                    if (parseInt(value) >= 1000) {
                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                        return '$' + value;
                    }
                }
            }
        }]
    }
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [],
        datasets: [{
            label: 'Revenue',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: options
});

var revenue = []

$.get("./data/revenue2.csv", function (res) {
    revenue = $.csv.toArrays(res);
    for (let i = 1; i < revenue.length; i++) {
        myChart.data.labels.push(revenue[i][0])
        myChart.data.datasets[0].data.push(revenue[i][1]);
    }
    myChart.update()
});

$('#slider').change(function () {
    $('#year').html("Year: " + $('#slider').val())
    const year = $('#slider').val();
    let data = [];
    for (let i = 0; i < revenue[0].length; i++) {
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
    }

    for (let i = 1; i < revenue.length; i++) {
        myChart.data.datasets[0].data.push(revenue[i][year - 2002]);
    }
    myChart.update()
});