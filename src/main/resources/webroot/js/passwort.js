$(document).ready(function () {

    $(document).on("click", "#logout", function () {
        $.post("../anfrage", {
            typ: "logout"
        }, function (data) {
            if (data.typ == "logout") {
                $("body").html("Du bist erfolgreich abgemeldet. Neu laden zum erneuten Anmelden!");
            }
        })
    });

    $(document).on("click", "#anmeldeknopf", function () {
        $.post("../anfrage", {
            typ: "anmeldedaten",
            anmeldename: $("#anmeldename").val(),
            passwort: $("#passwort").val()
        }, function (data) {
            if (data.typ == "überprüfung") {
                if (data.text == "ok") {
                    $("body").html("Gratulation, du bist angemeldet!")
                            .append("<br><input type='button' value='logout' id='logout'/>");

                } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");
                }
            }
        });
    });
//

    $(document).on("click", "#registrierknopf", function () {
        $("body").html("Bitte registrieren!<br>\n<br>\n")
               .append("Benutzername: <input type='text' id='Regiestrierungsname'/><br>\n")
                .append("Passwort: <input type='password' id='passwort'/><br>\n<br>\n")
                .append("<input type='button' value='Registrieren' id='registrierknopf'/>");
    });
    $(document).on("click", "#registrierknopf2", function () {
        $.post("../anfrage", {
            typ: "registrierdaten",
            registrierungsname: $("#Registrierungsname").val(),
            passwort: $("#neuespasswort").val(),
            passwortbestätigen: $("#neuespasswortbestätigen")
        }, function (data) {
            if (data.typ == "erstelleUser") {
                if (data.text == "ok") {
                    $("body").html("Gratulation, du bist registriert!")
                            .append("<br><input type='button' value='logout' id='logout'/>");

                } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");
                }
            }
        });
    });

    $.post("../anfrage",
            {
                typ: "angemeldet"
            },
            function (data) {

                if (data.typ == "angemeldet") {
                    if (data.text == "nein") {
                        $("body").html("Name: <input type='text' id='anmeldename'/><br>")
                                .append("Passwort: <input type='password' id='passwort'/><br>\n")
                                .append("<input type='button' value='OK' id='anmeldeknopf'/><br>")
                                .append("<input type='button' value='Registrieren' id='registrierknopf'/>");
                    } else {
                        $("body").html("Gratulation, du bist angemeldet!")
                                .append("<br><input type='button' value='logout' id='logout'/>");
                    }
                }
            }
    );

});