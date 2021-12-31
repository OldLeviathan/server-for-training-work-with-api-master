var tempOne = 0;
var tempTwo = 0;
var tempThree = 0;
var tempFour = 0;
var tempFive = 0;
var tempSix = 0;
var tempSeven = 0;
var tempEight = 0;

setInterval(function(){
    $.getJSON( fbURL, function( data ) {
        var tempNine = furnace_temp_1;
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                datasets: [{
                    label: 'Температура 1-ой печи',
                    data: [tempOne, tempTwo, tempThree, tempFour, tempFive, tempSix],
                    backgroundColor: [
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 3
                },
                {
                    label: 'Температура 2-ой печи',
                    data: [tempNine, tempTwo, tempThree, tempFour, tempFive, tempSix],
                    backgroundColor: [
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 3
                },
                {
                    label: 'Температура 3-ей печи',
                    data: [tempOne, tempTwo, tempThree, tempFour, tempFive, tempSix],
                    backgroundColor: [
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    borderWidth: 3
                }
            ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    });
}, 1000)

