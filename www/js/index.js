
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var url = 'http://localhost:3000/api/v1/authentification';

function seconnecter(e) {
    $.ajax({
        url: `${url}/connecter`,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: "POST",
        data: JSON.stringify({
            telephone: $("#telephone1").val(),
            motdepasse: $("#motdepasse1").val()
        }),
        success: function (data) {
            if (data.raison != "") {
                $('#erreur-raison-1').text(data.raison);
            } else {
                // $('#profile-photo').attr('src', data.utilisateur.photo);
                $('#profile-telephone').text(data.utilisateur.telephone);
                $('#profile-pseudo').text(data.utilisateur.pseudo);
                $('#hidden').val(data.utilisateur.telephone);
                $(`#connection-page`).hide();
                $(`#profile-page`).show();
                $(`#link-deconnecter`).show();
                $(`#link-contact`).show();
                $(`#link-profile`).show();
            }
        }
    });
}



function sinscrire(e) {
    $.ajax({
        url: `${url}/inscrire`,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: "POST",
        data: JSON.stringify({
            telephone: $("#telephone").val(),
            pseudo: $("#pseudo").val(),
            motdepasse: $("#motdepasse").val(),
            photo: $("#photo").val()
        }),
        success: function (data) {
            if (data.raison != "") {
                $('#erreur-raison-2').text(data.raison);
            } else {
                // $('#profile-photo').attr('src', data.utilisateur.photo);
                $('#profile-telephone').text(data.utilisateur.telephone);
                $('#profile-pseudo').text(data.utilisateur.pseudo);
                $('#hidden').val(data.utilisateur.telephone);
                $(`#inscrire-page`).hide();
                $(`#profile-page`).show();
                $(`#link-deconnecter`).show();
                $(`#link-contact`).show();
                $(`#link-profile`).show();
            }
        }
    });
}
function sedeconnecter(e) {
    $.ajax({
        url: `${url}//${$('#hidden').val()}/deconnecter`,
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        type: "POST",
        data: JSON.stringify({
            telephone: $("#telephone").val()
        }),
        success: function (data) {
            $(`#link-deconnecter`).hide();
            $(`#profile-page`).hide();
            $(`#link-contact`).hide();
            $(`#link-profile`).hide();
            $(`#connection-page`).show();
        },
    });
}

$(`#profile-page`).hide();
$(`#inscrire-page`).hide();
$(`#contact-page`).hide();
$(`#link-deconnecter`).hide();
$(`#link-contact`).hide();
$(`#link-profile`).hide();

function navigate(from_, to) {
    $(`#${from_}`).hide();
    $(`#${to}`).show();
    $(this).hide();
}



var contacts = [
    {name: 'Ankili', phone: '7778945613'},
    {name: 'Sidi', phone: '772569787'},
    {name: 'Baye', phone: '777894568'},
    {name: 'Bens', phone: '771234783'},
    {name: 'Omar', phone: '771234567'},
    {name: 'Fatou', phone: '777123496'},
    {name: 'Saad', phone: '777895643'},
    {name: 'Marwan', phone: '777894567'},
    {name: 'Cheikh', phone: '777894567'},
    {name: 'Arame', phone: '771364795'},
    {name: 'Astou', phone: '77178564'},
    {name: 'Hazim', phone: '771364578'},
    {name: 'Ibrahima', phone: '777895632'},
    {name: 'Oumou', phone: '77345675'},
    {name: 'Youssif', phone: '771456789'},
    {name: 'Yassin', phone: '773645612'},
    {name: 'Amar', phone: '777506438'},
    {name: 'Bintou', phone: '777856423'},
];

contacts.forEach(item => {
    $('#list-contact').append(`<a href="#" class="list-group-item list-group-item-action"><h5>${item.name}</h5><br>${item.phone}</br></a>`);
})