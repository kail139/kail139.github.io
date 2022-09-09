var val = true
var inputStr,inputArr

function submit(){
    if(val){
        document.getElementById('lwrSec').style.display='block'
        val=false
    }
    else{
        document.getElementById('lwrSec').style.display='none'
        val=true
    }

    inputStr = document.getElementById('data').value
    inputArr = inputStr.split(',')
}


function bubbleSort(){
    for(let i=0;i<inputArr.length-1;i++){
        for(let j=0;j<inputArr.length-1-i;j++){
            if(inputArr[j]>inputArr[j+1]){
                var temp = inputArr[j]
                inputArr[j] = inputArr[j+1]
                inputArr[j+1] = temp;
            }
        }
    }
    document.getElementById('result').style.display='block'
    document.getElementById('result').textContent="Result: "+inputArr
}
function quickSort(){
    for(let i=0;i<inputArr.length-1;i++){
        for(let j=0;j<inputArr.length-1-i;j++){
            if(inputArr[j]>inputArr[j+1]){
                var temp = inputArr[j]
                inputArr[j] = inputArr[j+1]
                inputArr[j+1] = temp;
            }
        }
    }
    document.getElementById('result').style.display='block'
    document.getElementById('result').textContent="Result: "+inputArr
}
function mergeSort(){
    for(let i=0;i<inputArr.length-1;i++){
        for(let j=0;j<inputArr.length-1-i;j++){
            if(inputArr[j]>inputArr[j+1]){
                var temp = inputArr[j]
                inputArr[j] = inputArr[j+1]
                inputArr[j+1] = temp;
            }
        }
    }
    document.getElementById('result').style.display='block'
    document.getElementById('result').textContent="Result: "+inputArr
}