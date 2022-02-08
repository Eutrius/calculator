document.addEventListener('keyup', linkKey);

function linkKey(e) {
    console.log(e.code);
    switch(e.code) {
        case "NumpadDivide":
            btnArray[1].click();
            break;
        
        case "NumpadMultiply":
            btnArray[2].click();
            break;

        case "NumpadSubtract":
            btnArray[3].click();
            break;
        
        case "Numpad7":
            btnArray[4].click();
            break;

        case "Numpad8":
            btnArray[5].click();
            break;

        case "Numpad9":
            btnArray[6].click();
            break;
        case "NumpadAdd":
            btnArray[7].click();
            break;
        
        case "Numpad4":
            btnArray[8].click();
            break;

        case "Numpad5":
            btnArray[9].click();
            break;
        
        case "Numpad6":
            btnArray[10].click();
            break;

        case "Numpad1":
            btnArray[11].click();
            break;

        case "Numpad2":
            btnArray[12].click();
            break;

        case "Numpad3":
            btnArray[13].click();
            break;
        
        case "NumpadDecimal":
            btnArray[14].click();
            break;

        case "Numpa0":
            btnArray[15].click();
            break;

        case "Backspace":
            btnArray[16].click();
            break;

        case "Enter":
        case "NumpadEnter":
            btnArray[17].click();
    
    }
}