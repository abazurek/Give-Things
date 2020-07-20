export default function createCustomSelect() {
    function closeAllSelect(elem) {
        const arrNo=[];
        const selectItems=document.getElementsByClassName('select-items');
        const selectSelected = document.getElementsByClassName('select-selected');
        const selectItemsLength = selectItems.length;
        const selectSelectedLength = selectSelected.length;
        for(let i=0; i<selectSelectedLength; i++){
            if(elem===selectSelected[i]){
                arrNo.push(i)
            }else {
                selectSelected[i].classList.remove('select-arrow-active');
            }
        }
        for(let i=0; i<selectItemsLength; i++){
            if(arrNo.indexOf(i)){
                selectItems[i].classList.add('select-hide')
            }
        }
    }

    const customSelect=document.getElementsByClassName('custom-select');
    const customSelectLength=customSelect.length;

    for(let i=0; i<customSelectLength; i++){
        const selElmnt = customSelect[i].getElementsByTagName('select')[0];
        const selElmntLength = selElmnt.length;

        const newDiv=document.createElement('div');
        newDiv.setAttribute('class','select-selected');
        newDiv.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        customSelect[i].appendChild(newDiv);

        const newSecondDiv=document.createElement('div');
        newSecondDiv.setAttribute('class','select-items select-hide');
        for( let j=1; j<selElmntLength; j++){
            const newThirdDiv= document.createElement('div');
            newThirdDiv.innerHTML=selElmnt.options[j].innerHTML;
            newThirdDiv.addEventListener('click', function () {
                const parent = this.parentNode.parentNode.getElementsByTagName('select')[0];
                const parentLength = parent.length;
                const parentSibiling = this.parentNode.previousSibling;
                for(let i =0; i<parentLength; i++){
                    if(parent.options[i].innerHTML === this.innerHTML){
                        parent.selectedIndex = i;
                        parentSibiling.innerHTML=this.innerHTML;
                        const parentSameAs=this.parentNode.getElementsByClassName('same-as-selected');
                        const parentSameAsLength = parentSameAs.length;
                        for(let k=0; k<parentSameAsLength; k++){
                            parentSameAs[k].removeAttribute('class');
                        }
                        this.setAttribute('class','same-as-selected');
                        break
                    }
                }
                parentSibiling.click();
            });
            newSecondDiv.appendChild(newThirdDiv);
        }
        customSelect[i].appendChild(newSecondDiv);
        newDiv.addEventListener('click', function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle('select-hide');
            this.classList.toggle('select-arrow-active');
        });
    }
    document.addEventListener('click',closeAllSelect);
}


