function reverseNum(num) {
    let newNum = 0;
    while (num > 0) {
        let last_digit = num % 10
        newNum = newNum * 10 + last_digit

        num = num / 10
    }
    return newNum
}

console.log(reverseNum(122));


