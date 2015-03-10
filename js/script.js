var btn = document.querySelector(".page-header__menu-btn");
var menu = document.querySelector(".main-menu");
            
btn.addEventListener("click", 
    function(event){
        event.preventDefault();
        if (btn.classList.contains("page-header__menu-btn--open")){
            btn.classList.add("page-header__menu-btn--close");
            btn.classList.remove("page-header__menu-btn--open");
        } else {
            btn.classList.remove("page-header__menu-btn--close");
            btn.classList.add("page-header__menu-btn--open");
        }
        menu.classList.toggle("main-menu--close");      
});