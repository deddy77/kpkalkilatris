//Copyright (c) 2023 Wood Eddy Donald JEAN JULIEN. All rights reserved.

function checkDeviceAndLoad() {
    // Verify if the device is a mobile device
    if (window.innerWidth <= 1024) {
        // Load the kpk.html file
        loadKpkFile();
    } else {
        // Ask user if he wants to open the kpk.html file in a pop-up window
        const userAcceptance = window.confirm("Ou vle sevi ak KPKalkilatris?");
        
        if (userAcceptance) {
            // Open a pop-up window and load the kpk.html file
            openPopupAndLoadKpkFile();
        } else {
            // User doesn't want to open the kpk.html file in a pop-up window
        }
    }
}

function loadKpkFile() {
    //Load the kpk.html file
    $('body').load('kpk.html');
}

function openPopupAndLoadKpkFile() {
    // Open a pop-up window and load the kpk.html file
    window.open('kpk.html', 'NomDeLaFenetrePopup', 'width=500,height=720');
}
