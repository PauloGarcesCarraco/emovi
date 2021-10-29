window.onload = function () {
        
    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        title: {
            text: "Ventas BEV y PHEV 2013 a la fecha en Chile"
        },
        axisX: {
            minimum: new Date(2012),
            maximum: new Date(2022),
            valueFormatString: "YY"
        },
        axisY: {
            title: "Unidades",
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix: ""
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            yValueFormatString: "#,##0",
            dataPoints: [
                { x: new Date(2012), y: 0, label: "2012" },
                { x: new Date(2013), y: 5, label: "2013" },
                { x: new Date(2014), y: 9, label: "2014" },
                { x: new Date(2015), y: 32, label: "2015" },
                { x: new Date(2016), y: 22, label: "2016" },
                { x: new Date(2017), y: 137, label: "2017" },
                { x: new Date(2018), y: 197, label: "2018" },
                { x: new Date(2019), y: 302, label: "2019" },
                { x: new Date(2020), y: 200, label: "2020" },
                { x: new Date(2021), y: 502, label: "2021", indexLabel: "Highest", markerColor: "red" }
            ]
        }]
    });

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title: {
            text: "Ventas mensuales BEV+PHEV 2019-Presente"
        },
        axisX: {
            minimum: new Date(2019, 01, 30),
            maximum: new Date(2021, 09, 30),
            valueFormatString: "MMM YY"
        },
        axisY: {
            title: "Unidades",
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix: ""
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "area",
            yValueFormatString: "#",
            dataPoints: [
                { x: new Date(2019, 01, 30), y: 23, label: "En-2019" },
                { x: new Date(2019, 02, 28), y: 18, label: "Feb-2019" },
                { x: new Date(2019, 03, 30), y: 16, label: "Mar-2019" },
                { x: new Date(2019, 04, 30), y: 41, label: "Abr-2019" },
                { x: new Date(2019, 05, 30), y: 19, label: "May-2019" },
                { x: new Date(2019, 06, 30), y: 17, label: "Jun-2019" },
                { x: new Date(2019, 07, 30), y: 20, label: "Jul-2019" },
                { x: new Date(2019, 08, 30), y: 35, label: "Ago-2019" },
                { x: new Date(2019, 09, 30), y: 51, label: "Sep-2019" },
                { x: new Date(2019, 10, 30), y: 12, label: "Oct-2019" },
                { x: new Date(2019, 11, 30), y: 36, label: "Nov-2019" },
                { x: new Date(2019, 12, 30), y: 14, label: "Dic-2019" },
                { x: new Date(2020, 01, 30), y: 17, label: "En-2020" },
                { x: new Date(2020, 02, 28), y: 12, label: "Feb-2020" },
                { x: new Date(2020, 03, 30), y: 37, label: "Mar-2020" },
                { x: new Date(2020, 04, 30), y: 6, label: "Abr-2020" },
                { x: new Date(2020, 05, 30), y: 2, label: "May-2020" },
                { x: new Date(2020, 06, 30), y: 4, label: "Jun-2020" },
                { x: new Date(2020, 07, 30), y: 10, label: "Jul-2020" },
                { x: new Date(2020, 08, 30), y: 11, label: "Ago-2020" },
                { x: new Date(2020, 09, 30), y: 16, label: "Sep-2020" },
                { x: new Date(2020, 10, 30), y: 23, label: "Oct-2020" },
                { x: new Date(2020, 11, 30), y: 45, label: "Nov-2020" },
                { x: new Date(2020, 12, 30), y: 17, label: "Dic-2020" },
                { x: new Date(2021, 01, 30), y: 18, label: "En-2021" },
                { x: new Date(2021, 02, 28), y: 28, label: "Feb-2021" },
                { x: new Date(2021, 03, 30), y: 27, label: "Mar-2021" },
                { x: new Date(2021, 04, 30), y: 47, label: "Abr-2021" },
                { x: new Date(2021, 05, 30), y: 29, label: "May-2021" },
                { x: new Date(2021, 06, 30), y: 124, label: "Jun-2021",indexLabel: "Highest", markerColor: "red"},
                { x: new Date(2021, 07, 30), y: 67, label: "Jul-2021" },
                { x: new Date(2021, 08, 30), y: 79, label: "Ago-2021" },
                { x: new Date(2021, 09, 30), y: 83, label: "Sep-2021" },
            ]
        }]
    });
    var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,  
        title:{
            text: "Stock BEV+PHEV 2013-Presente"
        },
        axisY: {
            title: "Unidades",
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix: ""
        },
        data: [{
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "##0",
            dataPoints: [
                { x: new Date(2013, 0), y: 5},
                { x: new Date(2014, 0), y: 14 },
                { x: new Date(2015, 0), y: 46 },
                { x: new Date(2016, 0), y: 68 },
                { x: new Date(2017, 0), y: 205 },
                { x: new Date(2018, 0), y: 402 },
                { x: new Date(2019, 0), y: 704 },
                { x: new Date(2020, 0), y: 904 },
                { x: new Date(2021, 0), y: 1406 },
            ]
        }]
        });



    chart.render1();
    chart.render2();
    chart.render3();
    
    }