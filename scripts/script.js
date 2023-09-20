var currentContrast = 1;
var currentFontSize = 1; 

const SESSION_CONTRAST = "session_contrast";
const SESSION_FONTSIZE = "session_fontsize";

function changeContrast() {
    currentContrast++;
    if (currentContrast > 3) {
        currentContrast = 1;
    }
    savePreferences();
    applyContrast();
}

function changeFontSize() {

    currentFontSize++;

    if (currentFontSize > 3) {
        currentFontSize = 1;
    } 

    savePreferences();
    applyFontSize();
}

function applyContrast() {

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    var primary = "";
    var primaryHighlight = "";
    var secondary = "";
    var tertiary = "";
    var bgPrimary = "";
    var bgPrimaryAccent = "";
    var bgSecondary = "";
    var bgTertiary = "";
    var bgCampanha = "";
    var onBgTertiary = "";
    var imgContrast = "";

    if (currentContrast > 1) {
        primary = rs.getPropertyValue("--primaryContrast" + currentContrast);
        primaryHighlight = rs.getPropertyValue("--primaryHighlightContrast" + currentContrast);
        secondary = rs.getPropertyValue("--secondaryContrast" + currentContrast);
        tertiary = rs.getPropertyValue("--tertiaryContrast" + currentContrast);
        bgPrimary = rs.getPropertyValue("--bgPrimaryContrast" + currentContrast);
        bgPrimaryAccent = rs.getPropertyValue("--bgPrimaryAccentContrast" + currentContrast);
        bgSecondary = rs.getPropertyValue("--bgSecondaryContrast" + currentContrast);
        bgTertiary = rs.getPropertyValue("--bgTertiaryContrast" + currentContrast);
        bgCampanha = rs.getPropertyValue("--bgCampanhaContrast" + currentContrast);
        onBgTertiary = rs.getPropertyValue("--onBgTertiaryContrast" + currentContrast);

        imgContrast = rs.getPropertyValue("--imgSaturationFilterContrastON");
    }
    else {
        primary = rs.getPropertyValue("--primaryDefault");
        primaryHighlight = rs.getPropertyValue("--primaryHighlightDefault");
        secondary = rs.getPropertyValue("--secondaryDefault");
        tertiary = rs.getPropertyValue("--tertiaryDefault");
        bgPrimary = rs.getPropertyValue("--bgPrimaryDefault");
        bgPrimaryAccent = rs.getPropertyValue("--bgPrimaryAccentDefault");
        bgSecondary = rs.getPropertyValue("--bgSecondaryDefault");
        bgTertiary = rs.getPropertyValue("--bgTertiaryDefault");
        bgCampanha = rs.getPropertyValue("--bgCampanhaDefault");
        onBgTertiary = rs.getPropertyValue("--onBgTertiaryDefault");

        imgContrast = rs.getPropertyValue("--imgSaturationFilterContrastOFF");
    }

    if (currentContrast == 2) {
        r.style.setProperty('--imgInvertColor', "100%");
        r.style.setProperty('--imgOpacity', "100%");
    }
    else if (currentContrast == 3) {
        r.style.setProperty('--imgInvertColor', "0%");
        r.style.setProperty('--imgOpacity', "100%");
    }
    else {
        r.style.setProperty('--imgInvertColor', "0%");
        r.style.setProperty('--imgOpacity', "60%");
    }

    r.style.setProperty('--primary', primary);
    r.style.setProperty('--primaryHighlight', primaryHighlight);
    r.style.setProperty('--secondary', secondary);
    r.style.setProperty('--tertiary', tertiary);
    r.style.setProperty('--bgPrimary', bgPrimary);
    r.style.setProperty('--bgPrimaryAccent', bgPrimaryAccent);
    r.style.setProperty('--bgSecondary', bgSecondary);
    r.style.setProperty('--bgTertiary', bgTertiary);
    r.style.setProperty('--bgCampanha', bgCampanha);
    r.style.setProperty('--onBgTertiary', onBgTertiary);

    r.style.setProperty('--imgSaturationFilterContrast', imgContrast);
}

function applyFontSize() {

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    var fontSizeSmall = "";
    var fontSize = "";
    var fontSizeLarge = "";
    var fontSizeXLarge = "";

    if (currentFontSize > 1) {
        fontSizeSmall = rs.getPropertyValue("--fontSizeSmallAcessibilidade" + currentFontSize);
        fontSize = rs.getPropertyValue("--fontSizeAcessibilidade" + currentFontSize);
        fontSizeLarge = rs.getPropertyValue("--fontSizeLargeAcessibilidade" + currentFontSize);
        fontSizeXLarge = rs.getPropertyValue("--fontSizeXLargeAcessibilidade" + currentFontSize);
    }
    else {
        fontSizeSmall = rs.getPropertyValue("--fontSizeSmallDefault");
        fontSize = rs.getPropertyValue("--fontSizeDefault");
        fontSizeLarge = rs.getPropertyValue("--fontSizeLargeDefault");
        fontSizeXLarge = rs.getPropertyValue("--fontSizeXLargeDefault");
    }

    r.style.setProperty('--fontSizeSmall', fontSizeSmall);
    r.style.setProperty('--fontSize', fontSize);
    r.style.setProperty('--fontSizeLarge', fontSizeLarge);
    r.style.setProperty('--fontSizeXLarge', fontSizeXLarge);

}

function savePreferences() {
    sessionStorage.setItem(SESSION_CONTRAST, currentContrast);
    sessionStorage.setItem(SESSION_FONTSIZE, currentFontSize);
}

function loadPreferences() {

    var sessionContrast = sessionStorage.getItem(SESSION_CONTRAST);
    var sessionFont = sessionStorage.getItem(SESSION_FONTSIZE);

    if (sessionContrast != null && sessionContrast.length > 0) {
        currentContrast = parseInt(sessionContrast);
        if (currentContrast > 1) {
            applyContrast();
        }
    }

    if (sessionFont != null && sessionFont.length > 0) {
        currentFontSize = parseInt(sessionFont);
        if (currentFontSize > 1) {
            applyFontSize();
        }
    }

}

function showHideMenuAcessibilidade() {

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    currDisplay = rs.getPropertyValue("--displayMenuAcessibilidade");

    if (currDisplay == "none") {
        r.style.setProperty('--displayMenuAcessibilidade', "block");
    }
    else {
        r.style.setProperty('--displayMenuAcessibilidade', "none");
    }

}

function showHideMenuPrincipal() {

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    currDisplay = rs.getPropertyValue("--displayMenuPrincipal");

    if (currDisplay == "none") {
        r.style.setProperty('--displayMenuPrincipal', "block");
    }
    else {
        r.style.setProperty('--displayMenuPrincipal', "none");
    }

}

function posicionarLinkHome() {
    var logohome = document.getElementById("link_home");
    logohome.focus();
}


document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    /*
    if (keyName === "Alt") {
        destacarAtalhos(true);
    }*/
}, false);


/***********************************************************************************************/
/** MENU *********/
/***********************************************************************************************/

var menus = [
    "menu_sobre",
    "menu_produtos",
    "menu_servicos",
    "menu_correspondentes",
    "menu_contato",
];

var submenus = [
    "submenu_sobre",
    "submenu_produtos",
    "submenu_servicos",
    "submenu_correspondentes",
    "submenu_contato",
];

var currActiveMenu = "";

function showSubmenu(menu) {

    if (document.getElementById(menu).ariaExpanded && document.getElementById(menu).ariaExpanded == "true") {
        hideOnly(menu);
        return;
    }

    hideSubmenusExcept(menu);

    document.getElementById("sub" + menu).style.display = "flex";
    document.getElementById(menu).className = "subnavbtn-active";

    document.getElementById(menu).ariaExpanded = true;
}

function hideOnly(menu) {

    hideSubmenusExcept(menu);

    var submenu = document.getElementById("sub" + menu);
    submenu.style.display = "none";

    document.getElementById(menu).ariaExpanded = false;
}

function hideAllSubmenus() {

    if (currActiveMenu == "") {
        return;
    }

    for (i = 0; i < submenus.length; i++) {
        var sub = submenus[i];
        document.getElementById(sub).style.display = "none";
    }
    for (i = 0; i < menus.length; i++) {
        document.getElementById(menus[i]).className = "subnavbtn";
        document.getElementById(menus[i]).ariaExpanded = false;
    }

    currActiveMenu = "";

}

function hideSubmenusExcept(newActiveMenu) {

    if (currActiveMenu == newActiveMenu) {
        return;
    }
    currActiveMenu = newActiveMenu;

    for (i = 0; i < submenus.length; i++) {
        var sub = submenus[i];
        if (sub != ("sub" + currActiveMenu)) {
            document.getElementById(sub).style.display = "none";
        }
    }
    
    for (i = 0; i < menus.length; i++) {
        var menu = menus[i];
        if (menu != currActiveMenu) {
            document.getElementById(menu).className = "subnavbtn";
            document.getElementById(menu).ariaExpanded = false;
        }
    }

}



/***********************************************************************************************/


document.addEventListener("keyup", (event) => {
    const keyName = event.key;
   
    if (keyName === "Escape") {
        posicionarLinkHome();
    }
    if (keyName === "ArrowUp") {
        if (currActiveMenu != "") {
            document.getElementById(currActiveMenu).focus();
            hideAllSubmenus();
        }
    }
    if (keyName === "ArrowDown") {
        if (currActiveMenu != "") {
            showSubmenu(currActiveMenu);
        }
    }

    /*
    if (keyName === "Alt") {
        destacarAtalhos(false);
    }*/
}, false);


function ignition() {

    loadPreferences();

    setTimeout(() => {
        loadListeners();
    }, 1000);

}


function loadListeners() {

    var mainNav = document.getElementById("main_nav");

    if (mainNav == null) {
        setTimeout(() => {
            loadListeners();
        }, 1000);
        return;
    }

    mainNav.addEventListener("mouseleave", (e) => {
        hideAllSubmenus();
    });

    document.getElementById("link_home").addEventListener("focus", (e) => {
        hideAllSubmenus();
    });

    
    // evento de saida da div de submenus
    document.getElementById(submenus[0]).addEventListener("mouseleave", (e) => {
        hideOnly(submenus[0]);
    });
    document.getElementById(submenus[1]).addEventListener("mouseleave", (e) => {
        hideOnly(submenus[1]);
    });
    document.getElementById(submenus[2]).addEventListener("mouseleave", (e) => {
        hideOnly(submenus[2]);
    });
    document.getElementById(submenus[3]).addEventListener("mouseleave", (e) => {
        hideOnly(submenus[3]);
    });
    document.getElementById(submenus[4]).addEventListener("mouseleave", (e) => {
        hideOnly(submenus[4]);
    });

    // eventos de interação com o botão do menu
    // SOBRE
    document.getElementById(menus[0]).addEventListener("click", (e) => {
        showSubmenu(menus[0]);
    });
    document.getElementById(menus[0]).addEventListener("focus", (e) => {
        hideSubmenusExcept(menus[0]);
    });        
    document.getElementById(menus[0]).addEventListener("mouseover", (e) => {
        showSubmenu(menus[0]);
    });
    // PRODUTOS
    document.getElementById(menus[1]).addEventListener("click", (e) => {
        showSubmenu(menus[1]);
    });
    document.getElementById(menus[1]).addEventListener("focus", (e) => {
        hideSubmenusExcept(menus[1]);
    });        
    document.getElementById(menus[1]).addEventListener("mouseover", (e) => {
        showSubmenu(menus[1]);
    });
    // CORRESPONDENTES
    document.getElementById(menus[2]).addEventListener("click", (e) => {
        showSubmenu(menus[2]);
    });
    document.getElementById(menus[2]).addEventListener("focus", (e) => {
        hideSubmenusExcept(menus[2]);
    });        
    document.getElementById(menus[2]).addEventListener("mouseover", (e) => {
        showSubmenu(menus[2]);
    });
    // SERVIÇOS
    document.getElementById(menus[3]).addEventListener("click", (e) => {
        showSubmenu(menus[3]);
    });
    document.getElementById(menus[3]).addEventListener("focus", (e) => {
        hideSubmenusExcept(menus[3]);
    });        
    document.getElementById(menus[3]).addEventListener("mouseover", (e) => {
        showSubmenu(menus[3]);
    });
    // CONTATO
    document.getElementById(menus[4]).addEventListener("click", (e) => {
        showSubmenu(menus[4]);
    });
    document.getElementById(menus[4]).addEventListener("focus", (e) => {
        hideSubmenusExcept(menus[4]);
    });        
    document.getElementById(menus[4]).addEventListener("mouseover", (e) => {
        showSubmenu(menus[4]);
    });

    document.getElementById("last_submenu_item").addEventListener("blur", (e) => {
        hideAllSubmenus();
    });
}


document.addEventListener("load", 
    ignition()
);
