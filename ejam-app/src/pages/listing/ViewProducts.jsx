import React, {useState, useEffect} from 'react';
import "./viewProducts.css";
import Listing from "./Listing.jsx";
import Header from "../common/Header.jsx";
import { connect } from 'react-redux';
import { updateSelected} from '../../actions/listing';
import { Multiselect } from 'multiselect-react-dropdown';

const cities = [
    {name: "New York", id: 1},
    {name: "Los Angeles", id: 2},
    {name: "New Jersey", id: 3},
    {name: "Seattle", id: 4}
]

const ViewProducts = (props) => {
    console.log(props.pageData);

    const [selected, setSelected] = useState([]);

    const onSelect = (selectedList, selectedItem) => {
        const selectedCity = selected;
        selectedCity.push(selectedItem.name);
        setSelected(selectedCity);
    }

    const onRemove = (selectedList, removedItem) => {
        const selectedCity = selected;
        selectedCity.splice(selectedCity.indexOf(removedItem), 1);
        setSelected(selectedCity);
    }

    const handleSubmit = () => {
        if(selected.length == 0) {
            setSelected([]);
        }
        props.updateSelected(selected);
    }

    return (
        <>
            <Header />
            <div className='page-container'>
                <div className = 'selection-container'>
                    <div className = 'multiselect-container'>
                        <Multiselect
                            options={cities}
                            selectedValues={selected}
                            onSelect={onSelect} 
                            onRemove={onRemove} 
                            displayValue="name" 
                        />
                    </div>
                    <div className = 'submit-btn'>
                        <button type = "button" onClick = {handleSubmit}> Submit </button>
                    </div>    
                </div>
                <div className = {props.pageData ? 'product-container non-empty': 'product-container empty'}>
                    {props.pageData ? 
                        props.pageData.map(cityList => {
                            return <Listing cityList={cityList}/>
                        }): <div>No Data Found</div>} 
                    
                </div>
            </div>
        </>  
    )
}

const mapStateToProps = (state, props) => {
    return ({
    ...props,
    pageData: state.pageData
})}

export default connect(mapStateToProps, {
    updateSelected
})(ViewProducts);
