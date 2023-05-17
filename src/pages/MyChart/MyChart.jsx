import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const MyChart = () => {
  const chartArea = useRef(null);
  const chartDonut = useRef(null);
  const chartArea2 = useRef(null);
  const chartArea3 = useRef(null);
  const chartArea4 = useRef(null);
  const chartBar = useRef(null);
  const chartArea5 = useRef(null);
  const chartLine = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartArea.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartArea2.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartArea3.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartArea4.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: "bar",
        // height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    };

    const chart = new ApexCharts(chartBar.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        // width: 380,
        height: 400,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              //   width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(chartDonut.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 60, 81, 110, 109, 50],
        },
        {
          name: "series2",
          data: [11, 32, 45, 52, 80, 62, 41],
        },
      ],
      chart: {
        // height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
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
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartArea5.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Sales",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chart: {
        // height: 350,
        type: "line",
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      title: {
        text: "Forecast",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    };

    const chart = new ApexCharts(chartLine.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-[#f9f9f9]">
      <div className="grid lg:grid-cols-4 gap-4 pt-32 px-10">
        <div
          ref={chartArea}
          className="h-[150px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
        <div
          ref={chartArea2}
          className="h-[150px] border border-red-400 rounded-md  "
        ></div>
        <div
          ref={chartArea3}
          className="h-[150px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
        <div
          ref={chartArea4}
          className="h-[150px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
      </div>
      <div className="grid pb-32 lg:grid-cols-2 gap-4 pt-6 px-10">
        <div
          ref={chartBar}
          className="h-[350px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
        <div
          ref={chartDonut}
          className="h-[350px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
        <div
          ref={chartArea5}
          className="h-[350px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
        <div
          ref={chartLine}
          className="h-[350px] border border-red-400 rounded-md bg-slate-100 "
        ></div>
      </div>
    </div>
  );
};
export default MyChart;
