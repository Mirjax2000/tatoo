const cookies = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-132KB8NMEL');
};

if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookies();
}


