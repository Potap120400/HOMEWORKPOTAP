async function getRandomChinese(length){
    let i = 0;
    let str = '';
    while(i < length){
        await new Promise((resolve) => {
            str += String.fromCharCode(Date.now().toString().slice(-5));
            i++;
            setTimeout(() =>{
                resolve(str);
            }, 50 * length);
        })
    }
    console.log(str);
}

getRandomChinese(4).then((word) => { console.log(word )});