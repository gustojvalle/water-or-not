


class Slider{
    constructor(id, min, max){
        this.id = id;
    }

    render(){

        console.log(this.Slider)



        return `<div class="slider__container">
                    <p class="slider__text">${this.id}</p>
                    <input class="slider" type="range" min="${this.min}" max="${this.max}" id = ${this.id} step="0.0001"/>
                </div>`
    }
}