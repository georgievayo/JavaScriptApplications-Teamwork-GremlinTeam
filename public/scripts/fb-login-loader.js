window.fbAsyncInit = function () {
    FB.init({
        appId: '239244656552630',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log("Fb response");
            console.log(response);
            console.log('Successful login for: ' + response.name);
        });
    }

    function statusChangeCallback(response) {
        console.log(response);
        if (response.status === 'connected') {
            testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("The person is logged into Facebook, but not your app.");
        } else {
            console.log("The person is not logged into Facebook!");
        }
    }
}