
import logo from '../../assets/logo.svg';
import './MyFavorites.css';
import React, { Component } from "react"
import Header from '../../components/Header/Header'
import Griddle from 'griddle-react';
import { connect } from 'react-redux';
import { plugins } from 'griddle-react';
import PropTypes from 'prop-types';


const data = [
    {
      "price": "$850/mo",
      "complex": "College Park",
      "bedrooms": "2",
      "bathrooms": "1",
      "pets": "No",
      "utils": "Yes",
      "image": "https://medialibrarycdn.entrata.com/media_library/10357/5c954fe84b22b0.27295052437.png"
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
      <li><strong>Price</strong>: {rowData.price}</li>
      <li><strong>Complex</strong>: {rowData.complex}</li>
      <li><strong>Bedrooms</strong>: {rowData.bedrooms}</li>
      <li><strong>Bathrooms</strong>: {rowData.bathrooms}</li>
      <li><strong>Pets Allowed</strong>: {rowData.pets}</li>
      <li><strong>Utilities Included</strong>: {rowData.utils}</li>

      <button class="temp_btn"> <a href="/Messages"> Contact Lister</a> <svg class="bi bi-chat-dots-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
      </svg></button>
      <button class="rent_btn"> <svg class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#ff6b61" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"/>
      </svg> Remove from Favorites </button>


      </ul>
    </div>
  ));

  const sortProperties = [
    { id: 'price', sortAscending: true }
  ];

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

  const styleConfig = {
    styles: {
      Filter: { fontSize: 20},
      Pagination: {fontSize: 20}
    }
  }

var sortAsc = true;

class MyFavorites extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {        
        return (
            <div>
              <Header></Header>
              &emsp;
              &emsp;
              <h1>My Favorites</h1>
              <h2>Search By Complex:</h2>
                <Griddle
                data={data}
                styleConfig ={styleConfig}
                //sortProperties={sortProperties}
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

export default MyFavorites;