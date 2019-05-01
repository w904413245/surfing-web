// Show and hide search area
function toggleSearchArea(){
    $("#search-icon").toggleClass("hide");
    $("#search-area").toggleClass("hide");
    $("#cover").toggleClass("hide");
    $("#search-input").focus();
}

function toggleFilter(text){
    if(text.includes("∇")){
        return text.replace("∇", "Δ");
    }else{
        return text.replace( "Δ","∇");
    }
}

$("#search-icon").click(function(){
    toggleSearchArea();
});

$("#search-area").keyup(function(){
    // TODO Candidates for input
});

$("#cover").click(function(){
    toggleSearchArea();
});

$("#latest").click(function(e){
    e.preventDefault();
    $("#latest").text(toggleFilter($("#latest").text()));
    //TODO Sort logic
});
$("#alpha").click(function(e){
    e.preventDefault();
    $("#alpha").text(toggleFilter($("#alpha").text()));
    //TODO Sort logic
});
