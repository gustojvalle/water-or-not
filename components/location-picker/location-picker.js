

class LocationPicker {
    constructor(){
        this.lat = new Slider("LAT", -90, 90)
        this.long = new Slider("LONG", -180, 180)
    }

    render(){

        return `   
        <form type="submit" class="picker__container">
            ${this.lat.render()}
            ${this.long.render()}
            <button class="picker__button">READY</button>
        </form>`
    }

}