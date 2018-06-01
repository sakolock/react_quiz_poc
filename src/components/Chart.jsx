import React, { Component } from 'react';
import Highcharts from 'highcharts';
import SearchResultCard from '../components/SearchResultCard';

class Chart extends Component {
  props: {
    totalCorrect: integer,
    totalAnswered: integer,
    resultHeadline: string
  };

  state = {
    searchResults: []
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

    setTimeout(this.getSearchResults, 1400);
    // this.getSearchResults();
  }

  getSearchResults = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        let topThree = json.slice(0, 3);
        this.setState({ searchResults: topThree });
      })
      .then(json => console.log(this.state.searchResults));
  };

  render() {
    let searchResultsComponent;

    if (this.state.searchResults) {
      searchResultsComponent = (
        <ul className="flex">
          {this.state.searchResults.map(result => (
            <li className="flex-item" key={result.id}>
              <SearchResultCard id={result.id} title={result.title} />
            </li>
          ))}
        </ul>
      );
    } else {
      searchResultsComponent = <h3>Finding resources for you!</h3>;
    }
    return (
      <section>
        <section id="chart" />
        {searchResultsComponent}
        <section id="searchResults" />
      </section>
    );
  }
}

export default Chart;
