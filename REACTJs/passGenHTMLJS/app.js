function pasGen() {
    const p = document.querySelector("#main p");
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = false
    let specialChar = false

    const allowNum = document.querySelector("#numbers")
    const allowSpecChar = document.querySelector("#specChar")


    allowNum.addEventListener('checked', {
        numbers : true
    })
    allowSpecChar.addEventListener('checked', {
        specialChar : true
    })
    for(let i=0;i<9;i++){
        if (numbers) {
            str += "0123456789"
        }
        if (specialChar) {
            str += "!@#$%^&*()_-+=;:/.,\`~?'"
        }
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char);
    }
    p.innerHTML = `${pass}`
}

pasGen()