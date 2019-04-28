// Show and hide search area
function toggleSearchArea(){
    $("#search-icon").toggleClass("hide");
    $("#search-area").toggleClass("hide");
}

$("#search-icon").click(function(){
    toggleSearchArea();
});

$("#search-area").keyup(function(){
    // TODO Candidates for input
})