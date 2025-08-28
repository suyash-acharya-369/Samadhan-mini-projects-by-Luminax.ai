// Project-2 : Find highest marks from an array

let marks = [65,89,24,90,98,21,54]

function highestmarks(){
    highestNum = marks[0];
    for(i=1;i<marks.length;i++){
        if (marks[i]>highestNum){
            highestNum = marks[i];
        }

    }
    return highestNum
}
console.log(highestmarks())
