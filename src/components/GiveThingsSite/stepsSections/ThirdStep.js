import React, {useEffect} from "react";
import {connect} from 'react-redux';
import actions from "../../../app/giveForms/duck/actions";
import createCustomSelect from "./customSelect";

const ThirdStep = ({title, who,organization, setLocalization, setWhoAdd,setNewWho, setWhoRemove, setOrganization}) => {


    const giveSelected =()=>{
        const selected = document.querySelector('.same-as-selected');
        if(selected){
            setLocalization(selected.innerText);
            localStorage.setItem('localization', selected.innerText)
        }
    };


    useEffect(function () {
        createCustomSelect();

        const selectItems= document.querySelector('.select-items');
        const children = selectItems.childNodes;
        const selectSelected = document.querySelector('.select-selected');
        children.forEach(item=>{
            if(item.innerText === localStorage.getItem('localization')){
                item.setAttribute('class','same-as-selected');
                selectSelected.innerHTML=item.innerText;
                setLocalization(item.innerText);
            }
        });

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const whoLocal = localStorage.getItem('who');
        let whoTable=[];
        if(whoLocal){
            console.log(whoLocal);
            // whoLocal.forEach(item=>whoTable.push(item));
            console.log(whoTable)
            // whoTable=who.split(',');
        }
        console.log(whoTable)
        for (let i = 0; i < whoTable.length; i++) {
            checkboxes.forEach(function (item) {
                if (item.value === whoTable[i]) {
                    item.setAttribute('checked', 'checked');

                }
            })
        }

    }, [who]);



    function clickedCheckbox({target}) {
        console.log(who)
        if (who.includes(target.value)) {
            setWhoRemove(target.value);
            return
        }
        return setWhoAdd(target.value);
    }

    if(who !== ''){
        localStorage.setItem('who',who);
    }
    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <div className='custom-select' onClick={giveSelected}>
                    <select onChange={({target}) => setLocalization(target.value)}>
                        <option hidden>-wybierz-</option>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                </div>
                <div className='box-help'>
                    <h3>Komu chesz pomóc?</h3>
                    <input type='checkbox' name='one' value='dzieciom'
                           onClick={({target}) => clickedCheckbox({target})}/>
                    <input type='checkbox' name='one' value='samotnym matkom'
                           onClick={({target}) => clickedCheckbox({target})}/>
                    <input type='checkbox' name='one' value='bezdomnym'
                           onClick={({target}) => clickedCheckbox({target})}/>
                    <input type='checkbox' name='one' value='niepełnosprawnym'
                           onClick={({target}) => clickedCheckbox({target})}/>
                    <input type='checkbox' name='one' value='osobom starszym'
                           onClick={({target}) => clickedCheckbox({target})}/>
                </div>
                <div className='organization-box'>
                    <h3> Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input type='text' value={organization} onChange={({target}) => setOrganization(target.value)}/>
                </div>

            </div>

        </div>
    )
};

const mapStateToProps = state => ({
    who: state.giveForms.who,
    organization: state.giveForms.organization

});
const mapDispatchToProps = dispatch => ({
    setLocalization: value => dispatch(actions.setLocalization(value)),
    setWhoAdd: value => dispatch(actions.addWho(value)),
    setNewWho: value => dispatch(actions.newWho(value)),
    setWhoRemove: value => dispatch(actions.removeWho(value)),
    setOrganization: value => dispatch(actions.setOrganization(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);