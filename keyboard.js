document.addEventListener('keyup', linkKey);

function linkKey(e) {
    console.log(e.key);
    switch(e.key) {
        case '/':
            btnArray[1].click();
            break;
        
        case '*':
            btnArray[2].click();
            break;

        case '-':
            btnArray[3].click();
            break;
        
        case '7':
            btnArray[4].click();
            break;

        case '8':
            btnArray[5].click();
            break;

        case '9':
            btnArray[6].click();
            break;

        case '+':
            btnArray[7].click();
            break;
        
        case '4':
            btnArray[8].click();
            break;

        case '5':
            btnArray[9].click();
            break;
        
        case '6':
            btnArray[10].click();
            break;

        case '1':
            btnArray[11].click();
            break;

        case '2':
            btnArray[12].click();
            break;

        case '3':
            btnArray[13].click();
            break;
        
        case '.':
            btnArray[14].click();
            break;

        case '0':
            btnArray[15].click();
            break;

        case "Backspace":
            btnArray[16].click();
            break;

        case "Enter":
        case '=':
            btnArray[17].click();
    
    }
}