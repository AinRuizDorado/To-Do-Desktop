
// Mark to do list done
$("ul").on("click", "li", function(e){
    $(this).toggleClass( "line-through" )
});

// Delete To Do list
$("ul").on("click", "span",function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});


$("input[type = 'text']").on("keypress", function(e){
    if (e.which === 13) {
        // Grabbing new TO DO
      let todoText = $(this).val();
    //   clear input
      $(this).val("");
    //   pushing to new LI TO DO
    $("ul").append("<li> <span><i class='fas fa-bug'></i></span>"+ todoText + "</li>");
        
    }
});
