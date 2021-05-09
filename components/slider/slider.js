


class Slider{
    constructor(id, min, max){
        this.id = id;
        this.min=min;
        this.max=max;
    }

    render(){

        console.log(this.Slider)



        return `<div class="slider__container">
                    <p class="slider__text">${this.id}</p>
                    <input name="${this.id}" class="slider" type="range" min="${this.min}" max="${this.max}" id = ${this.id} step="0.00001"/>
                </div>`
    }
}