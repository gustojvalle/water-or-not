class Main{
    constructor(){
        this.picker = new LocationPicker("lat")
    }



    render(){

        return (
        `
            ${this.picker.render()}
        `)
    }

}

const main = new Main;

const app = document.querySelector('#App')
app.innerHTML = main.render();

document.querySelector("#lat").addEventListener("change", event => {
    event.preventDefault();
    // document.querySelector(".disp-lat").innerText = event.target.value
})
