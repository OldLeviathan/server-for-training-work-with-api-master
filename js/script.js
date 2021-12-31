const fbURL="http://127.0.0.1:5000/api/params"

const ctx = document.getElementById('myChart').getContext('2d');
let furnace_temp_1 = $('#1.furnace_temp');
let furnace_temp_2 = $('#2.furnace_temp');
let furnace_temp_3 = $('#3.furnace_temp');
let furnace_weight_1 = $('#1.furnace_weight');
let furnace_weight_2 = $('#2.furnace_weight');
let furnace_weight_3 = $('#3.furnace_weight');
let lines_1 = $('#1.lines');
let lines_2 = $('#2.lines');
let lines_3 = $('#3.lines');
secChart = 0;




function temp_color(furnace_temp, data_temp, lines){
    if (data_temp> 75) {
        furnace_temp.css({'color':'#E00000'});
        lines.css({'height':data_temp*5});
        lines.css({'border-left': '20px solid #E00000'});
        lines.css({'border-right': '20px solid #E00000'});        
    } else if (data_temp> 50) {
        furnace_temp.css({'color':'#FFC30F'});
        lines.css({'height':data_temp*5});
        lines.css({'border-left': '20px solid #FFC30F'});
        lines.css({'border-right': '20px solid #FFC30F'});
    } else {
        furnace_temp.css({'color':'#FFFFFF'});
        lines.css({'height':data_temp*5});
        lines.css({'border-left': '20px solid #FFFFFF'});
        lines.css({'border-right': '20px solid #FFFFFF'});
    }
    
}
function set_data_from_tag(select, text){
    select.text(text);
}
function add_data(chart, label, firstData, secondData, thirdData) {
    if (chart.data.labels.length >= 10){
        chart.data.labels.shift();
    }
    chart.data.labels.push(label);        
    if(chart.data.datasets[0].data.length >= 10){
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
        chart.data.datasets[2].data.shift();
    }
    chart.data.datasets[0].data.push(firstData);
    chart.data.datasets[1].data.push(secondData);
    chart.data.datasets[2].data.push(thirdData);
    chart.update();
}
function dots_color(chart, data, id){
    if(chart.data.datasets[id].backgroundColor.length >= 10){
        chart.data.datasets[id].backgroundColor.shift();
    }
    if(data > 75){
        chart.data.datasets[id].backgroundColor.push('rgb(224, 0, 0)');
    } else if (data > 50){
        chart.data.datasets[id].backgroundColor.push('rgb(255, 195, 15)');
    } else {
        chart.data.datasets[id].backgroundColor.push('rgb(255, 255, 255)');
    };
}
function draw_chart(){
    MyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Температура 1-ой печи',
                data: [],
                backgroundColor: [                    
                ],
                borderColor: [
                    'rgb(255, 0, 0)',
                ],
                color: 'rgb(255, 0, 0)',
                borderWidth: 1
            },
            {
                label: 'Температура 2-ой печи',
                data: [],
                backgroundColor: [
                ],
                borderColor: [
                    'rgb(0, 26, 255)',
                ],
                borderWidth: 1
            },
            {
                label: 'Температура 3-ей печи',
                data: [],
                backgroundColor: [
                ],
                borderColor: [
                    'rgb(21, 255, 0)',
                ],
                borderWidth: 1
            },
            
            ],           
        },       
    });
}

$(document).ready(function(){
    draw_chart();    
    setInterval(function(){
        $.getJSON( fbURL, function( data ) {
            secChart += 1;
            set_data_from_tag(furnace_temp_1, data[0].temp);
            temp_color(furnace_temp_1, data[0].temp, lines_1);
            set_data_from_tag(furnace_temp_2, data[1].temp);
            temp_color(furnace_temp_2, data[1].temp, lines_2);
            set_data_from_tag(furnace_temp_3, data[2].temp);
            temp_color(furnace_temp_3, data[2].temp, lines_3);            
            set_data_from_tag(furnace_weight_1, data[0].weight);
            set_data_from_tag(furnace_weight_2, data[1].weight);
            set_data_from_tag(furnace_weight_3, data[2].weight);
            dots_color(MyChart, data[0].temp, 0);
            dots_color(MyChart, data[1].temp, 1);
            dots_color(MyChart, data[2].temp, 2);
            add_data(MyChart, secChart, data[0].temp, data[1].temp, data[2].temp);
        });        
    }, 1000)    
})

