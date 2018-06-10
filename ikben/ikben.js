module.exports = function ikben() {
    let ik = 10

    let timer = setInterval(_ => {
        //tick(ik--)
        ik--
        console.log("ik", ik) 
        if (ik === 0) {
            clearInterval(timer)
        }
    }, 1000)
}