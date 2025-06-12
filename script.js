//exercice 1
console.log("exercie 1");
function compteur() {
    let i = 0;
    let n = 10;
    while (i <= n) {
        console.log(i);
        i++;
    }    
    return i;
}
// console.log(compteur());

// exercice 2
console.log("ex 2");
function choixFruits1(fruits){
    console.log("1 : " + fruits[0])
    console.log("2 : " + fruits[1])
    console.log("3 : " + fruits[2])
    console.log("4 : " + fruits[3])
}
//choixFruits1(["fraise", "framboise", "myrtille","Cerise"])

console.log("ex 2");
function choixFruits2(fruits){
    let n= 3;
    console.log(n +" : " + fruits[n-1])
}
//choixFruits2(["fraise", "framboise", "myrtille","Cerise"])

//exercice 3
console.log("exercice 3");
function foobuzz(){
    // for (let i = 1; i < 20; i++){
    //     if (i%15 === 0){
    //         console.log("Foobuzz");
    //     } else if (i%3 === 0){
    //         console.log("Foo");
    //     } else if (i%5 === 0){
    //         console.log("Buzz");
    //     } else {
    //         console.log(i)
    //     }
    // }

    for (let i = 1; i < 20; i++){
        console.log(i % 15 === 0 ? "Foobuzz" : i && i %3 === 0 ? "Foo" : i && i %5 === 0 ? "Buzz" : i )
    }
}
console.log(foobuzz())

//exercice 4
console.log("exercice 4")
function modulo_game(){
    for (let i = 0; i < 9; i++){
        console.log(i);
        if (i%2) {
            console.log("Impair");
        } else {
            console.log("Pair");
        }
        if (i%7){
            console.log("Pas divisible par 7.")
        } else {
            console.log("Divisible par 7.")
        }
    }
}
//console.log(modulo_game())



