import React, {useEffect} from "react";
import {connect} from 'react-redux';
import actions from "../../../app/giveForms/duck/actions";


const texts = {
    first: 'ubrania, które nadają się do ponownego użycia',
    second: 'ubrania do wyrzucenia',
    third: 'zabawki',
    fourth: 'książki',
    fifth: 'inne'
};

const FirstStep = ({title, thing, setThing}) => {


    useEffect(function () {
        const items = document.querySelectorAll('input[name="radio"]');

        items.forEach(function (item) {
            if (item.checked) {
                localStorage.setItem('thing', item.value);
            }
        });

        const check = localStorage.getItem('thing');

        items.forEach(function (item) {
            if (item.value === check) {
              item.setAttribute('checked','checked')
            }
        });

    }, [thing]);


    function changeChecked({target}) {
        setThing(target.value);
    }

    return (
        <div>
            <h2 className='step-title'>{title}</h2>
            <form>
                <label>
                    <input name='radio' type='radio' value={texts.first}
                           onChange={({target}) => changeChecked({target})}/>
                    <span>{texts.first}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.second}
                           onChange={({target}) => changeChecked({target})}/>
                    <span>{texts.second}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.third}
                           onChange={({target}) => changeChecked({target})}/>
                    <span>{texts.third}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.fourth}
                           onChange={({target}) => changeChecked({target})}/>
                    <span>{texts.fourth}</span>
                </label>
                <label>
                    <input name='radio' type='radio' value={texts.fifth}
                           onChange={({target}) => changeChecked({target})}/>
                    <span>{texts.fifth}</span>
                </label>

            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    thing: state.giveForms.thing
})

const mapDispatchToProps = dispatch => ({
    setThing: value => dispatch(actions.setThing(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep);
