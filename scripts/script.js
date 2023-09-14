

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
