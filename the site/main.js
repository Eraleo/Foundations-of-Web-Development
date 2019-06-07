$(document).ready(function(){
    
    setTimeout(function(){
        $('.loadingPage').fadeOut(1000, function() {
            $('.page1').fadeIn(1000);
        });
        
    }, 1000);

    $(".next").click(function(event){
        event.preventDefault();
        $('.page1').hide();
        $('.page2').show();
    });
    
    //$(".loadingPageBtn").click(function(event){
        //event.preventDefault();
        //$('.loadingPage').hide();
        //$('.page1').show();
        //console.log("Bhenchod!");
    //});

});
//$(document).ready(function() {
    //console.log('ready!');
    
//    $('.myclass').hide();
//
//    $('.myclass').show();
//})

//$('.myclass').hover(function(){
    // mouse over
    
//    $(this).css('color','blue');
//}, function() {
    // mouse over
//});

//let textPos = $('.mytext').offset();

//$('.floatinBox').css('left', textPos.left).css('top', textPos.top);


//$('.muyclass').fadeIn(600);