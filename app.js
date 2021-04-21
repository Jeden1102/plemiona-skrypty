//5 grubych

function makeSnobs(snobs){
    let max = Number(document.querySelector('#pop_max_label').innerHTML);
    let actual = Number(document.querySelector('#pop_current_label').innerHTML);
    let leftSpace = Number(max-actual);
    let snobsTake = snobs*100;
    if(leftSpace >= snobsTake){
        console.log('ok');
        // recruitSnobs(snobs);
    }else{
        releasePlace(snobs);
        console.log('nie ok');
    }
}
// function recruitSnobs(snobs){
//     let snobBtn = document.querySelector('.btn-recruit');
//     let ilosc = 0;
//     for (const a of document.querySelectorAll("a")) {
//     if (a.textContent.includes("przerwij")) {
//       ilosc++;
//     }
    
//     console.log(ilosc);
//     console.log(snobs);

//     if(ilosc<snobs){
//         clickSnob();
//         console.log("malo grubych");
//     }else{
//         console.log('wystarczająco grubych');
//     }
//     function clickSnob(){
//         snobBtn.click();

//     }
//   }
// }




function releasePlace(snobs,leftSpace){
    let villageList = document.querySelectorAll('.quickbar_link');
    let recruit = villageList[3];
    tab = [];
    //do rekrutacji
    recruit.click();
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes("Zwolnienie")) {
          tab.push(a);
          tab[0].click();
        }
    }
    //zwolnienie
    let cancelBtn = document.querySelector(".btn-cancel");
    let grube = document.querySelector('#snob_0_a');
    grube =  Number(grube.innerHTML.slice(1,-1));
    let topornik = document.querySelector('#axe_0_a');
    topornik =  Number(topornik.innerHTML.slice(1,-1));

    let pik = document.querySelector('#spear_0_a');
    pik =  Number(pik.innerHTML.slice(1,-1));


    if(Number(grube) >= Number(snobs)){
        console.log('nie trzeba zwalniać');

    }else if(cancelBtn == null){
        if(topornik>1000){
            document.querySelector('#axe_0').value = (snobs-grube)*100;
            document.querySelector('.btn-recruit').click();
        }else{
            document.querySelector('#spear_0').value = (snobs-grube)*100;
            document.querySelector('.btn-recruit').click();

        }
    }
  
        
}
