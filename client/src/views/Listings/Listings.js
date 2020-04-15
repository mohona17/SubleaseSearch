import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './Listings.css';
import Listing from "../../components/Listing/Listing";
import { render } from 'react-dom';
import Griddle from 'griddle-react';
import { connect } from 'react-redux';
import { plugins } from 'griddle-react';
import PropTypes from 'prop-types';




let urls = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg"
  ];

  const data = [
    {
      "price": "$850/mo",
      "complex": "College Park",
      "bedrooms": "2",
      "bathrooms": "1",
      "pets": "No"
    },
    {
        "complex": "The Standard",
        "bedrooms": "4",
        "bathrooms": "2",
        "pets": "Yes"
      },
      {
        "complex": "N/A",
        "bedrooms": "3",
        "bathrooms": "2",
        "pets": "No"
      },
      {
        "complex": "The Courtyards",
        "bedrooms": "4",
        "bathrooms": "3.5",
        "pets": "Yes"
      },
      {
        "complex": "College Manor",
        "bedrooms": "2",
        "bathrooms": "2",
        "pets": "No"
      }
      
  ];

  const CustomRowComponent = connect((state, props) => ({
    rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
  }))(({ rowData }) => (
    <div style={{
      backgroundColor: "#EDEDED",
      border: "1px solid #777",
      padding: 5,
      margin: 10,
    }}>
      <h1>{rowData.name}</h1>
      <ul>
      <li><strong>Complex</strong>: {rowData.complex}</li>
      <li><strong>Bedrooms</strong>: {rowData.bedrooms}</li>
      <li><strong>Bathrooms</strong>: {rowData.bathrooms}</li>
      <li><strong>Pets Allowed</strong>: {rowData.pets}</li>
      </ul>
    </div>
  ));

  const CustomTableComponent = OriginalComponent => class CustomTableComponent extends Component {
    static contextTypes = {
      components: PropTypes.object
    }

    render() {
      return <this.context.components.TableBody />
    }
  }

  const CustomTableBody = ({ rowIds, Row, style, className }) => (
    <div style={style} className={className}>
      { rowIds && rowIds.map(r => <Row key={r} griddleKey={r} />) }
    </div>
  );

class Listings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {        
        return (
            <div>
                Sort by complex: 
                <Griddle
                data={data}
                pageProperties={{
                pageSize: 5
                }}
                plugins={[plugins.LocalPlugin]}
                components={{
                Row: CustomRowComponent,
                TableContainer: CustomTableComponent,
                TableBody: CustomTableBody,
                }}/>      
        </div>

        )
    }

};

export default Listings;
