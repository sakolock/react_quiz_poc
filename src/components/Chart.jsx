import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
  props: {
    totalCorrect: integer,
    totalAnswered: integer,
    resultHeadline: string
  };

  componentDidMount() {
    Highcharts.chart('chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: this.props.resultHeadline
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: 'Correct',
              y: this.props.totalCorrect
            },
            {
              name: 'Incorrect',
              y: this.props.totalAnswered - this.props.totalCorrect
            }
          ]
        }
      ]
      // options - see https://api.highcharts.com/highcharts
    });
  }

  render() {
    return <section id="chart" />;
  }
}

export default Chart;
