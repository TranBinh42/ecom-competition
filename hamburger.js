document.addEventListener("DOMContentLoaded", function() {
    var isHamburgerOpened = false;
    var isOnDesktopLayout = false;

    const hamburgerMenu = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburgerMenu.addEventListener("click", openNavMenu);
    navMenu.addEventListener("click", closeNavMenu);

    function openNavMenu() {
        navMenu.style.display = "none";
        if (!isHamburgerOpened) {
            isHamburgerOpened = true;
            
            // console.log("Button Pressed");
            navMenu.style.display = "flex";
        }
        else if (isHamburgerOpened) {
            closeNavMenu();
        }       
    }
    function closeNavMenu() {
        isHamburgerOpened = false;
        // console.log("Button Unpressed");
        navMenu.style.display = "none";
    }

    window.addEventListener("resize", function() {
        if (!isOnDesktopLayout && this.window.innerWidth >= 740) {
            isOnDesktopLayout = true;
            isHamburgerOpened = false;
            navMenu.style.display = "flex";
            // console.log("NavMenu Displayed");          
        }
        else if (isOnDesktopLayout && this.window.innerWidth < 740) {
            isOnDesktopLayout = false;
            navMenu.style.display = "none";
            // console.log("NavMenu Hidden")
        }
    });
});
