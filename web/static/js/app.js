// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

//
// Populate feeds
//
$(document).ready(function() {
    $('div.flickr').flickrush({
        limit: 6,
        id: '44499772@N06',
        random: true
    });
});


//
// Make the navigation dropdown for mobile
//
$(document).ready(function() {
    // Build dropdown
    $("<select />").appendTo(".navigation nav div div");

    // Add dummy option
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to..."
    }).appendTo("nav select");

    // Populate dropdown from nav
    $(".navigation nav li a").each(function() {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo("nav select");
    });

    // Make dropdown functional
    $("nav select").change(function () {
        window.location = $(this).find("option:selected").val();
    });
});
