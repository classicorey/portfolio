//store a variable to keep track of the :root selector.
const root = document.documentElement;

// On page load, check localStorage and apply the stored theme
window.addEventListener('DOMContentLoaded', (event) => {
    setTheme();
    if (document.URL.includes("index.html"))
        toggleHomeBannerText();
    else{
        toggleNavbarText();
        toggleNavbarText('largeScreen');
    }
});

function colorToggle(){
    if (localStorage.getItem('theme') == 'dark')
        localStorage.setItem('theme', "light");
    else
        localStorage.setItem('theme', "dark");

    setTheme();
    
}
function toggleNavbarText(screenSize){
    var navColorModeToggleTextResponsive = document.getElementById("navColorModeToggleText");
    var navColorModeToggleTextLargeScreens = document.getElementById("navLargeScreensColorModeText");
    if (screenSize == 'largeScreen'){

        if (localStorage.getItem('theme') == 'dark')
            navColorModeToggleTextLargeScreens.innerHTML = "Light Mode";

        else
        navColorModeToggleTextLargeScreens.innerHTML = "Dark Mode";
    }
    else{
        var navColorModeToggleTextResponsive = document.getElementById("navColorModeToggleText");

        if (localStorage.getItem('theme') == 'dark')
            navColorModeToggleTextResponsive.innerHTML = "Enable Light Mode";

        else
            navColorModeToggleTextResponsive.innerHTML = "Switch back to Dark Mode";
    }
}
function toggleHomeBannerText(){
    var lightModeTogglerH1 = document.getElementById("inverterBannerH1");
    var lightModeTogglerP = document.getElementById("inverterBannerP");

    if (localStorage.getItem('theme') == 'dark'){
        lightModeTogglerH1.innerHTML = "Need some new colors?";
        lightModeTogglerP.innerHTML = "Click here to invert this site's color palette.";
    }

    else{
        lightModeTogglerH1.innerHTML = "This site was made with dark mode.";
        lightModeTogglerP.innerHTML = "Click here to get the default look.";
    }

}
function setTheme(){
    

    //If there is a theme in local storage,
    if (localStorage.getItem('theme')){


        //If the theme in local storage is Dark Mode,
        if (localStorage.getItem('theme') == 'dark'){
            root.style.setProperty('--clrPDarkText', '#121010');
            root.style.setProperty('--clrPLightText', '#f2ecec');
            root.style.setProperty('--clrPDarkBackground', '#292626');
            root.style.setProperty('--clrSDarkBackground', '#373131');
            root.style.setProperty('--clrPNightBackground', '#1F1F1F');
            root.style.setProperty('--clrSNightBackground', '#161515');
            root.style.setProperty('--clrPLightBackground', '#e5e3e3');
            root.style.setProperty('--clrPAlertText', '#a60e0e');
            root.style.setProperty('--clrPAlertLightText', '#fa7070');
            root.style.setProperty('--clrPAlertBackground', '#892020');
            root.style.setProperty('--clrSAlertBackground', '#340b0b');
            root.style.setProperty('--clrPMutedText', '#b4b4b4');

            root.style.setProperty('--clrLightTransparent', 'rgba(255, 255, 255, 0.9)');
            root.style.setProperty('--clrDarkTransparent', 'rgba(0, 0, 0, 0.5)');

            root.style.setProperty('--clrCodeBackground', '#353333');

            root.style.setProperty('--clrBannerLight', 'rgba(0,0,0,.7)');
            root.style.setProperty('--clrBannerMid', 'rgba(0,0,0,.3)');
            root.style.setProperty('--clrBannerDark', 'rgba(0,0,0,0.1)');
            root.style.setProperty('--clrBannerEnd', 'rgba(0,0,0,0)');

            
            root.style.setProperty('--clrBishops', '#F04E25');
            root.style.setProperty('--clrBishopsAccent', '#3d1500');
            root.style.setProperty('--clrVeo', '#20A29F');
            root.style.setProperty('--clrVeoAccent', '#062121');
            root.style.setProperty('--clrPGIP', '#C08E2B');
            root.style.setProperty('--clrPGIPAccent', '#341f00');

            root.style.setProperty('--mainTextBackground', 'linear-gradient(95deg, #272323, #272323, rgba(0,0,0,0), rgba(0,0,0,0)');
            root.style.setProperty('--mainTextBackgroundLighter', 'linear-gradient(95deg, #353030, #353030, rgba(0,0,0,0), rgba(0,0,0,0)');

            root.style.setProperty('--clrBrightTextContraster', 'rgba(255, 255, 255, 0)');
            root.style.setProperty('--clrLightTextLightModeHelper', 'rgba(0, 0, 0, 0)');

        }

        //If the theme in local storage is not Dark Mode,
        else{
            root.style.setProperty('--clrPDarkText', '#f2ecec'); // Light text for dark backgrounds
            root.style.setProperty('--clrPLightText', '#121010'); // Dark text for light backgrounds
            root.style.setProperty('--clrPDarkBackground', '#e5e3e3'); // Light primary background
            root.style.setProperty('--clrSDarkBackground', '#d3d3d3'); // Light secondary background
            root.style.setProperty('--clrPNightBackground', '#CF8282'); // Darker primary night background
            root.style.setProperty('--clrSNightBackground', '#EDECEC'); // Darker secondary night background
            root.style.setProperty('--clrPLightBackground', '#121010'); // Dark background for light mode
            root.style.setProperty('--clrPAlertText', '#a60e0e'); // Keeping alert text the same
            root.style.setProperty('--clrPAlertLightText', '#a60e0e');
            root.style.setProperty('--clrPAlertBackground', '#9C2E2E'); // Darker alert background
            root.style.setProperty('--clrSAlertBackground', '#EFBFBF'); // Secondary alert background, slightly lighter red
            root.style.setProperty('--clrPMutedText', '#6c757d'); // Muted text for light mode (stays mid-tone gray)

            root.style.setProperty('--clrLightTransparent', 'rgba(0, 0, 0, 0.9)'); // Darker transparent for overlays
            root.style.setProperty('--clrDarkTransparent', 'rgba(255, 255, 255, 0.9)'); // Lighter transparent for dark areas

            root.style.setProperty('--clrCodeBackground', '#f8f8f8'); // Light background for code blocks in light mode

            root.style.setProperty('--clrBannerLight', 'rgba(255,255,255,.7)'); // Light banner in light mode
            root.style.setProperty('--clrBannerMid', 'rgba(255,255,255,.3)'); // Mid-tone banner in light mode
            root.style.setProperty('--clrBannerDark', 'rgba(255,255,255,0.1)'); // Light end of the gradient for the banner
            root.style.setProperty('--clrBannerEnd', 'rgba(255,255,255,0)'); // Fully transparent end
            
            root.style.setProperty('--clrBishops', '#F04E25');
            root.style.setProperty('--clrBishopsAccent', '#3d1500');
            root.style.setProperty('--clrVeo', '#20A29F');
            root.style.setProperty('--clrVeoAccent', '#062121');
            root.style.setProperty('--clrPGIP', '#C08E2B');
            root.style.setProperty('--clrPGIPAccent', '#341f00');

            root.style.setProperty('--mainTextBackground', 'linear-gradient(95deg, white, #D8DCDC, rgba(0,0,0,0), rgba(0,0,0,0))');
            root.style.setProperty('--mainTextBackgroundLighter', 'linear-gradient(95deg, white, #CACFCF, rgba(0,0,0,0), rgba(0,0,0,0))');
            
            root.style.setProperty('--clrBrightTextContraster', 'rgba(255, 255, 255, 0.8)');
            root.style.setProperty('--clrLightTextLightModeHelper', 'rgba(0, 0, 0, 0.7)');
        }
    }

    //If there is no theme in local storage,
    else{
        localStorage.setItem('theme', "dark");
        setTheme();
    }
}