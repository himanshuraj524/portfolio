class NAVIGATIONANI{
    constructor(){
        this.navigationMenu = document.querySelector("[wrapper='navbar']");
        this.links = this.navigationMenu.querySelectorAll(".link");
        this.setColor = "white";
        this.resetColor = "black";
        this.init();
    }

    init(){
        this.startListener();
    }

    // function listen to window scroll -> animate the navigation menu.
    startListener(){
        document.addEventListener("scroll", () => {
            let offset = window.pageYOffset;
            if(offset > 40)this.changeNav();
            if(offset < 40)this.resetNav();
        })
    }

    // function will change the style of navbar on scroll.
    changeNav(){
        this.navigationMenu.style.backgroundColor = this.setColor;
        this.navigationMenu.style.boxShadow = "rgb(0 0 0) 0px 4px 20px 0px"
        if(this.links.length > 0){
            this.links.forEach(item => {
                item.style.color = "black";
            })
        }
    }
    
    // function to reset the style of navbar
    resetNav(){
        this.navigationMenu.style.backgroundColor = this.resetColor;
        this.navigationMenu.style.boxShadow = "none"
        if(this.links.length > 0){
            this.links.forEach(item => {
                item.style.color = "white";
            })
        }
    }
}

// new NAVIGATIONANI();