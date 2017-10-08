var chart = c3.generate({
	bindto: '#chart-device',
    data: {
        columns: [
            ['Low', 2, 3, 3, 4, 4],
            ['Medium', 0, 4, 2, 1, 0],
            ['High', 0, 1, 0, 1, 1],
            ['Critical', 0, 4, 1, 1, 1]
        ],
        type:'bar',
        groups: [
        	['Low', 'Medium', 'High', 'Critical']
        ],
        order: 'null'
    },

    legend: {
        show: false
    },

    padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 120,
    },

    axis: {
        rotated: true,

        x: {
            type: 'category',
            categories: ['DST', 'SSG20_Internal', 'Cust_FW1', 'DD-MGMT_Management_Server', 'MSF-FDR-CMA'],
        },

        y: {
            padding: {top: 0, bottom: 0}
        },
    },

    grid: {
        y: {
            lines: [
                {value: 1},
                {value: 2},
                {value: 3},
                {value: 4},
                {value: 5},
                {value: 6},
                {value: 7},
                {value: 8},
                {value: 9},
                {value: 10},
                {value: 11},
                {value: 12}
            ]
        },
        lines: {
        front: false
      }
    },

    color: {
    	pattern: ['#B7DA84', '#2296d1', '#FFE2A4', '#EA8326']
    }
});

function toggle(id) {
    chart.toggle(id);
}

d3.select('#chart-device-legend').insert('div', '.chart').attr('class', 'legend').selectAll('span')
    .data(['Low', 'Medium', 'High', 'Critical'])
  	.enter().append('span')
    .attr('data-id', function (id) { return id; })
    .html(function (id) { return id; })

    .each(function (id) {
        d3.select(this).style('background-color', chart.color(id));
    })
    .on('mouseover', function (id) {
        chart.focus(id);
    })
    .on('mouseout', function (id) {
        chart.revert();
    })
    .on('click', function (id) {
        chart.toggle(id);
    });


var chart2 = c3.generate({
	bindto: '#chart-scoring',
    data: {
        x: 'x',
        columns: [
            ['x', '2017-07-25', '2017-07-26', '2017-07-27', '2017-07-28', '2017-07-29', 
            '2017-07-30', '2017-08-01','2017-08-2', '2017-08-3', '2017-08-4', '2017-08-5', '2017-08-6', '2017-08-7', '2017-08-8', '2017-08-9', '2017-08-10', '2017-08-11', '2017-08-12', '2017-08-13', '2017-08-14', '2017-08-15', '2017-08-16','2017-08-17', '2017-08-18', '2017-08-19', '2017-08-20','2017-08-21', '2017-08-22','2017-08-23'],
// 
            ['DB Best Practices', 		6.1, 6.5, 7.0, 6.9, 6.8, 6.5, 7.0, 6.5, 6.8, 6.0,
            							6.5, 6.7, 6.4, 6.5, 6.6, 6.8, 7.0, 7.1, 7.2, 7.0,
            							6.5, 6.4, 6.3, 6.2, 6.1, 6.6, 6.8, 6.9, 6.8 ],
            ['SecureCo Best Practices', 0.0, 5.9, 5.8, 5.9, 5.7, 5.8, 5.8, 5.9, 5.8, 5.6,
            							5.7, 5.7, 5.6, 5.7, 5.8, 5.9, 5.8, 5.5, 5.4, 5.5, 
            							5.6, 5.7, 5.8, 5.9, 6.0, 5.5, 5.4, 5.5, 5.5 ],
            ['Best Practices', 			0.0, 1.9, 1.8, 1.7, 1.8, 1.9, 1.7, 1.6, 1.5, 1.7,
            							1.7, 1.8, 1.7, 1.8, 1.9, 2.0, 1.9, 1.8, 1.7, 1.7,
            							1.6, 1.5, 1.6, 1.7, 1.6, 1.7, 1.8, 1.9, 1.7 ],
        ],

    },

    axis: {
        x: {
        	type: 'timeseries',
            tick: {
                values: ['2017-07-25', '2017-07-26', '2017-07-27', '2017-07-28', '2017-07-29', '2017-07-30', '2017-08-01', '2017-08-2', '2017-08-3', '2017-08-4', '2017-08-5', '2017-08-6', '2017-08-7', '2017-08-8', '2017-08-9', '2017-08-10', '2017-08-11', '2017-08-12', '2017-08-13', '2017-08-14', '2017-08-15', '2017-08-16', '2017-08-17', '2017-08-18', '2017-08-19', '2017-08-20','2017-08-21', '2017-08-22','2017-08-23']
            },
            format: '%d',
        },

        y: {
            padding: {top: 140, bottom: 0},
            tick: {
            	values: [2, 4, 6, 8, 10]
            }
        },
    },

    legend: {
        show: false
    },

    color: {
    	pattern: ['#B7DA84', '#2296d1', '#FFE2A4', '#EA8326']
    },

    padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 20,
    },

    grid: {
        y: {
            lines: [
                {value: 2},
                {value: 4},
                {value: 6},
                {value: 8},
                {value: 10}
            ]
        },
        lines: {
        front: false
      }
    },
    
});

d3.select('#chart-scoring-legend').insert('div', '.chart').attr('class', 'legend').selectAll('span')
    .data(['DB Best Practices', 'SecureCo Best Practices', 'Best Practices',])
  	.enter().append('span')
    .attr('data-id', function (id) { return id; })
    .html(function (id) { return id; })

    .each(function (id) {
        d3.select(this).style('background-color', chart.color(id));
    })
    .on('mouseover', function (id) {
        chart.focus(id);
    })
    .on('mouseout', function (id) {
        chart.revert();
    })
    .on('click', function (id) {
        chart.toggle(id);
    });















