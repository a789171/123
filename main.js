let select = document.querySelector("#category");
select.addEventListener("change", selectFun);
function selectFun() {
    const switchValue = this.value;
    switch(switchValue){
        
        case "1":
            alert("選1");
            break;
        case "2":
            alert("選2");
            break;
        case "3":
            alert("選3");
            break;
    }
}
