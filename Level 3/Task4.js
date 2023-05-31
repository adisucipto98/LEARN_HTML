function triangle(bilangan){
    let number = ""
    for(i = bilangan; i >= 1; i--){
        for(j = 1; j <= i; j++){
            number = number + i
        }
        console.log(number)
        number = ""
    }
}

triangle(5)