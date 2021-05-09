class Toast {

    constructor(message, id, button){
        this.id = id;
        this.message = message;
        this.button = button;
    }

    render(){
        return `<div class="toast" id="${this.id}"> 
                    <p class="toast__message" >${this.message}</p>
                    <button class="toast__button" name="${this.id}">${this.button}</button>
                </div>`
    } 

}