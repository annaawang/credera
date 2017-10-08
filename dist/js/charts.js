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


