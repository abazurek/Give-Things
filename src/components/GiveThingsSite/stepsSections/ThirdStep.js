import React, {useEffect} from "react";
import {connect} from 'react-redux';
import actions from "../../../app/giveForms/duck/actions";


const ThirdStep = ({title, who, localization,organization, setLocalization, setWhoAdd, setWhoRemove, setOrganization}) => {

    useEffect(function () {
        const options = document.querySelectorAll('option');
        localStorage.setItem('localization', localization);

        const chosenLocalization = localStorage.getItem('localization');
        options.forEach(function (item) {
            if (item.value === chosenLocalization) {
                item.setAttribute('selected', 'true');
            }
        })

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        localStorage.setItem('who', who);
        const whoTable = localStorage.getItem('who').split(',');
        for (let i = 0; i < whoTable.length; i++) {
            checkboxes.forEach(function (item) {
                if (item.value === whoTable[i]) {
                    item.setAttribute('checked', 'checked');
                }
            })
        }

    }, [localization, who])

    function clickedCheckbox({target}) {
        if (who.includes(target.value)) {
            setWhoRemove(target.value);
            return
        }

        return setWhoAdd(target.value)
    }

    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <div className='box'>
                <div className='custom-select'>
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
}

const mapStateToProps = state => ({
    localization: state.giveForms.localization,
    who: state.giveForms.who,
    organization: state.giveForms.organization

})

const mapDispatchToProps = dispatch => ({
    setLocalization: value => dispatch(actions.setLocalization(value)),
    setWhoAdd: value => dispatch(actions.addWho(value)),
    setWhoRemove: value => dispatch(actions.removeWho(value)),
    setOrganization: value => dispatch(actions.setOrganization(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);