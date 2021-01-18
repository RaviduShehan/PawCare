//Favourite Item Array
let favItems = [];
//Current location
var locationInfo = {
    currLat: 0,
    currLng: 0
};

$(function() {
    $(".floating-btn").click(function() {
        $("#success-body").css("display", "none");
        $("#main-body").css("display", "block");

    });
    if (navigator.geolocation) {
        //Get Current Location
        navigator.geolocation.getCurrentPosition(position => {
            locationInfo = {
                currLat: position.coords.latitude,
                currLng: position.coords.longitude
            };
        });
    }

    //Send email function to export favourites list
    $("#submit").click(function() {
        // getting the value of the send email modal inputs
        var receiver = document.getElementById("email-to").value;
        var emailSubject = document.getElementById("email-subject").value;
        var emailBody = document.getElementById("email-body").value;

        var doc = new jsPDF();
        var specialElementHandlers = {
            "#fav-items": function(element, renderer) {

                return true;
            }
        };

        if (!receiver) {
            $("#email-to").css("border", "0.5px solid #CD4D4D");
            $("#email-to").val("Email Required!");
            return;
        }

        $("#main-body").css("display", "none");
        $(".lds-hourglass").css("display", "block");
        $(".modal-loader").css("display", "block");

        doc.fromHTML($("#fav-items").html(), 15, 15, {
            width: 170,
            elementHandlers: specialElementHandlers
        });

        var pdfBase64 = doc.output("datauristring");

        Email.send({
            Host: "smtp.gmail.com",
            Username: "pawcare21@gmail.com",
            Password: "PawCare123@",
            To: receiver,
            From: "pawcare21@gmail.com",
            Subject: emailSubject,
            Body: emailBody,
            Attachments: [{
                name: "fav-list.pdf",
                data: pdfBase64
            }]

        }).then(() => {
            $(".lds-hourglass").css("display", "none");
            $(".modal-loader").css("display", "none");
            $("#success-body").css("display", "block");
        });
    });
});

//Export list array
let expList = [];

//load and sync faviourite items
try {
    feedRef.on("child_added", snapshot => {
        let isFaviourite;

        //To check if isFaviourite is undefined
        if (typeof snapshot.val().favBy[currentUser.uid] !== "undefined") {
            isFaviourite = snapshot.val().favBy[currentUser.uid].isFaviourite;
        } else {
            isFaviourite = false;
        }

        $(".sortt-loading").css("display", "none");
        if (isFaviourite) {
            favItems.push(snapshot);
            expList.push(snapshot.val());
        }
        createList(favItems);
        showAlternate();
    });
} catch (error) {
    console.log(error);
}

function createList(listItems) {
    document.getElementById("sortt").innerHTML = "";
    for (let i = 0; i < listItems.length; i++) {
        $("#sortt").append(createItem(listItems[i]));
    }
}

function showAlternate() {
    $(".sortt-loading").css("display", "none");
    if (favItems.length === 0) {
        $(".no-items").css("display", "block");
    } else {
        $(".no-items").css("display", "none");
    }
}

function navigatePage(itemId) {
    window.location.href = "../FavouriteItem/index.html?favItemId=" + itemId;
}

function getLocation(tarLng, tarLat) {
    var rad = function(x) {
        return (x * Math.PI) / 180;
    };
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(locationInfo.currLat - tarLat);
    var dLong = rad(locationInfo.currLng - tarLng);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(tarLat)) *
        Math.cos(rad(locationInfo.currLat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var dinKm = d * 0.001;

    return Math.round(dinKm);
}

//Filter data
$(document).on("input", "#distance-range", function() {
    let elemArr = document.getElementsByClassName("sortt");

    for (let i = 0; i < elemArr.length; i++) {
        if (parseInt(elemArr[i].firstElementChild.textContent) >= $(this).val()) {
            elemArr[i].style.display = "none";
        } else {
            elemArr[i].style.display = "block";
        }
    }
});

$(document).on("change", "#sort-by", e => {
    //Sort By Value
    let index = e.target.options.selectedIndex;
    let sortValue = e.target.options[index].value;

    let orderValue = document.getElementById("order-by").value;

    favItems.sort((a, b) => {
        if (a.val()[sortValue] < b.val()[sortValue]) return -1;
        if (a.val()[sortValue] > b.val()[sortValue]) return 1;
        return 0;
    });

    //By default sort() sots in ascending order
    if (orderValue === "desc") favItems.reverse();
    createList(favItems);
});

$(document).on("change", "#order-by", e => {
    let index = e.target.options.selectedIndex;
    let orderValue = e.target.options[index].value;

    let sortValue = document.getElementById("sort-by").value;
    console.log(sortValue);

    favItems.sort((a, b) => {
        if (a.val()[sortValue] < b.val()[sortValue]) return -1;
        if (a.val()[sortValue] > b.val()[sortValue]) return 1;
        return 0;
    });

    //By default sort() sots in ascending order
    if (orderValue === "desc") favItems.reverse();
    createList(favItems);
});