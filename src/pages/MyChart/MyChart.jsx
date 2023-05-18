import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }],
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type:'solid',
        opacity: [0.35, 1],
      },
      labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
      markers: {
        size: 5,
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      id: "chartRef",
    };

    const {
      series,
      chart,
      dataLabels,
      xaxis,
      colors,
      fill,
      labels,
      markers,
      stroke,
      tooltip,
    } = chartData;

    const options = {
      series: series,
      chart,
      fill,
      labels,
      dataLabels,
      xaxis,
      colors,
      markers,
      stroke,
      tooltip,
    };

    const chartOptions = new ApexCharts(chartRef.current, options);
    chartOptions.render();

    return () => {
      chartOptions.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-24" ref={chartRef} />
    </>
  );
};

export default ChartComponent;
