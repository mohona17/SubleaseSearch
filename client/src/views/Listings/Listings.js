import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './Listings.css';
import Listing from "../../components/Listing/Listing";
import { render } from 'react-dom';
import Griddle from 'griddle-react';
import { connect } from 'react-redux';
import { plugins } from 'griddle-react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header'


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
      "pets": "No",
      "image": "https://medialibrarycdn.entrata.com/media_library/10357/5c954fe84b22b0.27295052437.png"
    },
    {
        "complex": "The Standard",
        "bedrooms": "4",
        "bathrooms": "2",
        "pets": "Yes",
        "image": "https://img.swamprentals.com/uploads/images/College%20Park%20at%20Midtown%20Apartments%20Photos24.jpeg"
      },
      {
        "complex": "The Courtyards",
        "bedrooms": "4",
        "bathrooms": "3.5",
        "pets": "Yes",
        "image": "https://img.swamprentals.com/uploads/images/CY10.jpg"
      },
      {
        "complex": "College Manor",
        "bedrooms": "2",
        "bathrooms": "2",
        "pets": "No",
        "image": "https://www.rentgainesvilleapartments.com/wp-content/uploads/2013/12/Courtyard-Apartments-Dining-Room-08.jpg"
      },
      {
        "complex": "Lux 13",
        "bedrooms": "2",
        "bathrooms": "2",
        "pets": "No",
        "image": "https://d1d20t9fkd7io6.cloudfront.net/9f8d85d76ed18ca5fa3c58aa9f885bbb/670x475xcrop_middle/95/https/www.collegerentals.com/csa/r=104/jpg/media/com_iproperty/pictures/Gainesville-10-Lux-13-Community-1-768x5125b6da7f40e5a8.jpg"
      }
      
  ];

  const CustomRowComponent = connect((state, props) => ({
    rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
  }))(({ rowData }) => (
    <div style={{
      backgroundColor: "#DDF5E7",
      border: "1px solid #777",
      padding: 5,
      margin: 10,
    }}>
      <h1>{rowData.name}</h1>
      <ul>
      <img src={rowData.image} alt="Image" height="200" width="200"></img>
      <li><strong>Complex</strong>: {rowData.complex}</li>
      <li><strong>Bedrooms</strong>: {rowData.bedrooms}</li>
      <li><strong>Bathrooms</strong>: {rowData.bathrooms}</li>
      <li><strong>Pets Allowed</strong>: {rowData.pets}</li>
      <button class="Contact Lister"> <a href="/Messages"> Contact Lister (direct to messages)</a> </button>
      <button class="Add to Favorites"> Add to Favorites </button>
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

  const griddleLayout = ({Table, Pagination, Filter, SettingsWrapper}) => (
    <div>
        <Filter/>
        <Pagination/>
        <Table/>

    </div>
  );

class Listings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {        
        return (
            <div>
              <Header></Header>
                Sort by complex: 
                <Griddle
                data={data}
                pageProperties={{
                pageSize: 2
                }}
                plugins={[plugins.LocalPlugin]}
                components={{
                Layout: griddleLayout,
                Row: CustomRowComponent,
                TableContainer: CustomTableComponent,
                TableBody: CustomTableBody
                }}/>      
        </div>

        )
    }

};

export default Listings;
