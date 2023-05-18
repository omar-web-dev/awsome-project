import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      series: [
        {
          name: "north",
          data: [
            {
              x: 1996,
              y: 322,
            },
            {
              x: 1997,
              y: 324,
            },
            {
              x: 1998,
              y: 329,
            },
            {
              x: 1999,
              y: 342,
            },
            {
              x: 2000,
              y: 348,
            },
            {
              x: 2001,
              y: 334,
            },
            {
              x: 2002,
              y: 325,
            },
            {
              x: 2003,
              y: 316,
            },
            {
              x: 2004,
              y: 318,
            },
            {
              x: 2005,
              y: 330,
            },
            {
              x: 2006,
              y: 355,
            },
            {
              x: 2007,
              y: 366,
            },
            {
              x: 2008,
              y: 337,
            },
            {
              x: 2009,
              y: 352,
            },
            {
              x: 2010,
              y: 377,
            },
            {
              x: 2011,
              y: 383,
            },
            {
              x: 2012,
              y: 344,
            },
            {
              x: 2013,
              y: 366,
            },
            {
              x: 2014,
              y: 389,
            },
            {
              x: 2015,
              y: 334,
            },
          ],
        },
        {
          name: "south",
          data: [
            {
              x: 1996,
              y: 162,
            },
            {
              x: 1997,
              y: 90,
            },
            {
              x: 1998,
              y: 50,
            },
            {
              x: 1999,
              y: 77,
            },
            {
              x: 2000,
              y: 35,
            },
            {
              x: 2001,
              y: -45,
            },
            {
              x: 2002,
              y: -88,
            },
            {
              x: 2003,
              y: -120,
            },
            {
              x: 2004,
              y: -156,
            },
            {
              x: 2005,
              y: -123,
            },
            {
              x: 2006,
              y: -88,
            },
            {
              x: 2007,
              y: -66,
            },
            {
              x: 2008,
              y: -45,
            },
            {
              x: 2009,
              y: -29,
            },
            {
              x: 2010,
              y: -45,
            },
            {
              x: 2011,
              y: -88,
            },
            {
              x: 2012,
              y: -132,
            },
            {
              x: 2013,
              y: -146,
            },
            {
              x: 2014,
              y: -169,
            },
            {
              x: 2015,
              y: -184,
            },
          ],
        },
      ],
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
        type: "line",
      },
      dataLabels: {
        enabled: false,
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
      id,
      series,
      chart,
      dataLabels,
      xaxis,
      colors,
      fill,
      markers,
      stroke,
      tooltip,
    } = chartData;

    const options = {
      series: series,
      chart,
      fill,
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
