class Button {
    
    contructor(texto, css_class) {
        this.text = texto;
        this.css_class = css_class;
    }

    render() {
        let myHTML = `<button class=${this.css_class}`
        
        return myHTML;
    }

}