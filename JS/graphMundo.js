window.onload = function () {

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title: {
            text: "Ventas trimestrales BEV+PHEV 2019-Presente"
        },
        axisX: {
            minimum: new Date(2019, 03, 30),
            maximum: new Date(2021, 12, 30),
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
                { x: new Date(2019, 03, 1), y: 259718, label: "1T-2019" },
               
                { x: new Date(2019, 06, 1), y: 413869, label: "2T-2019" },
              
                { x: new Date(2019, 09, 1), y: 509591, label: "3T-2019" },
               
                { x: new Date(2019, 12, 1), y: 855421, label: "4T-2019" },
               
                { x: new Date(2020, 03, 1), y: 400210, label: "1T-2020" },
              
                { x: new Date(2020, 06, 1), y: 504243, label: "2T-2020" },
               
                { x: new Date(2020, 09, 1), y: 807468, label: "3T-2020" },
               
                { x: new Date(2020, 12, 1), y: 1346570, label: "4T-2020" },
               
                { x: new Date(2021, 03, 1), y: 1092901, label: "1T-2021" },
               
                { x: new Date(2021, 06, 1), y: 1425565, label: "2T-2021"},
              
                { x: new Date(2021, 09, 1), y: 1499972, label: "3T-2021" ,indexLabel: "Highest", markerColor: "red" },
            ]
        }]
    });
    var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,  
        title:{
            text: "Stock BEV+PHEV 2019-Presente"
        },
        axisY: {
            title: "Unidades",
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix: "mm"
        },
        data: [{
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "##0.00",
            suffix: "mm",
            dataPoints: [
                { x: new Date(2017,1), y: 4.2 },
                { x: new Date(2018,1), y: 5.3 },
                { x: new Date(2019,1), y: 7.2 },
                { x: new Date(2020,1), y: 10.26 },
                { x: new Date(2021,1), y: 14.29 },
            ]
        }]
        });

        var chart = new CanvasJS.Chart("chartContainer1", {
            animationEnabled: true,
            title:{
                text: "Ventas anuales 2019-Presente (China-UE-EEUU)"
            },
            axisY: {
                title: "mm Unidades",
                includeZero: true
            },
            legend: {
                cursor:"pointer",
                itemclick : toggleDataSeries
            },
            toolTip: {
                shared: true,
                content: toolTipFormatter
            },
            data: [{
                type: "bar",
                showInLegend: true,
                name: "2021",
                color: "#9fec33",
                dataPoints: [
                    { y: 2.157, label: "China" },
                    { y: 1.576, label: "UE" },
                    { y: 0.285, label: "EEUU" },
                ]
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2020",
                color: "#3398ec",
                dataPoints: [
                    { y: 1.366, label: "China" },
                    { y: 1.364, label: "UE" },
                    { y: 0.328, label: "EEUU" },
                ]
            },
            {
                type: "bar",
                showInLegend: true,
                name: "2019",
                color: "#ec3333",
                dataPoints: [
                    { y: 1.154, label: "China" },
                    { y: 0.562, label: "UE" },
                    { y: 0.323, label: "EEUU" },
                ]
            }]
        });
        
        function toolTipFormatter(e) {
            var str = "";
            var total = 0 ;
            var str3;
            var str2 ;
            for (var i = 0; i < e.entries.length; i++){
                var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
                total = e.entries[i].dataPoint.y + total;
                str = str.concat(str1);
            }
            str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
            str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
            return (str2.concat(str)).concat(str3);
        }
        
        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            
        }

    chart.render1();
    chart.render2();
    chart.render3();
    chart.render4();
    }