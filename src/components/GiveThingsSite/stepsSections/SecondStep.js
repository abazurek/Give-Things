import React,{useEffect} from "react";
import {connect} from 'react-redux'
import actions from "../../../app/giveForms/duck/actions";
import createCustomSelect from "./customSelect";

const SecondStep = ({title,click,bags, setBags}) =>{
    const select = document.getElementsByClassName('select-selected');
    const selectedAll = document.getElementsByClassName('same-as-selected');

    useEffect(function () {
        createCustomSelect();
        const selected = document.querySelector('.same-as-selected');
        // const options = document.querySelectorAll('option');

        // if(selected.value!==undefined){
        //     setBags(selected.value)
        // }
        console.log(selected!==null);
        if(selected){
            localStorage.setItem('bags',selected.innerText);
            setBags(selected.innerText);
        }


        const chosenBags = localStorage.getItem('bags');


        // options.forEach(function (item) {
        //     if(item.value === chosenBags){
        //        item.setAttribute('selected','true')
        //     }
        // })
    },[]);

    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <span>Liczba 60l worków</span>
                <div className='custom-select'>
                    <select  onChange={({target})=>(setBags(target.value))}>
                        <option hidden >— wybierz —</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state =>({
    bags: state.giveForms.bags
});

const mapDispatchToProps = dispatch => ({
    setBags: value => dispatch(actions.setBags(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep);