const URL_REQUEST = "https://api.onwater.io/api/v1/results"

const API_KEY = "BzgQKFNH8gzkzBGv-DFJ"

var spinSound = new Audio("./assets/audio/spin.mp3")


class Main{
    constructor(){
        this.header = new Header()
        this.picker = new LocationPicker("lat")
        this.toastFirst = new Toast("If you're 18 and over feel free to stick around, if not this website is not for you. <br><br>Drink responsibly", "first", "START")
        this.toastIfWater = new Toast("You hit the water <br><br>you have to drink", "if-water","OK")
        this.toastNoWater = new Toast("You did not hit the water this time <br><br>stay dry and pass it to the next.", "no-water", "OK")
        this.waiting = new WaitingToaster();
        this.error = new Toast("Ooooops... There was an error, try again. Maybe try moving the sliders a bit", "error", "OK")
    }



    render(){

        return (
            
        `   ${this.error.render()}
            ${this.waiting.render()}
            ${this.toastNoWater.render()}
            ${this.toastIfWater.render()}
            ${this.header.render()}
            ${this.picker.render()}
            ${this.toastFirst.render()}
        `)
    }

}

const main = new Main;

const app = document.querySelector('#App')
app.innerHTML = main.render();




document.querySelector("form").addEventListener("submit" , event => {
    event.preventDefault();
    const lat =event.target.LAT.value
    const long = event.target.LONG.value

    document.querySelector(".waiting").style.display = "flex"
    document.querySelector(".waiting__svg").classList.add("waiting__svg--animate")
    spinSound.play();

    axios.get(`${URL_REQUEST}/${lat},${long}?access_token=${API_KEY}`).then(res => 
        {
        setTimeout(() => {
            document.querySelector(".waiting").style.display = "none"
            document.querySelector(".waiting__svg").classList.add("waiting__svg--animate")
  

            if(res.data.water === true){
                document.getElementById("if-water").style.display="flex"
            }else if(res.data.water === false){
                document.querySelector("#no-water").style.display="flex"
            }else{
            }
        }, 4000
        )

    }
    ).catch(_err => {
        spinSound.pause();
        document.getElementById("error").style.display = "flex"
        document.querySelector(".waiting").style.display = "none"
        document.querySelector(".waiting__svg").classList.add("waiting__svg--animate")

    })
})


document.querySelector("button[name='first']").addEventListener("click",__event => {
    document.querySelector("#first").style.display="none"    
} )
document.querySelector("button[name='if-water']").addEventListener("click",__event => {
    document.querySelector("#if-water").style.display="none"    
} )
document.querySelector("button[name='no-water']").addEventListener("click",__event => {
    document.querySelector("#no-water").style.display="none"    
} )
document.querySelector("button[name='error']").addEventListener("click",__event => {
    document.querySelector("#error").style.display="none"    
} )