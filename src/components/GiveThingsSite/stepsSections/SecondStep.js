import React,{ useEffect} from "react";
import {connect} from 'react-redux'
import actions from "../../../app/giveForms/duck/actions";
import createCustomSelect from "./customSelect";

const SecondStep = ({title,bags, setBags}) =>{


    const giveSelected =()=>{
        const selected = document.querySelector('.same-as-selected');
        if(selected){
            setBags(selected.innerText);
            localStorage.setItem('bags', selected.innerText);
        }

    };


    useEffect(function () {
        createCustomSelect();
        const selectItems= document.querySelector('.select-items');
        const children = selectItems.childNodes;
        const selectSelected = document.querySelector('.select-selected');
        children.forEach(item=>{
            if(item.innerText === localStorage.getItem('bags')){
                item.setAttribute('class','same-as-selected');
               selectSelected.innerHTML=item.innerText;
                setBags(item.innerText);
            }
        });

    },[]);

    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <span>Liczba 60l worków</span>
                <div className='custom-select' onClick={giveSelected}>
                    <select >
                        <option hidden >— wybierz —</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    {}
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