$(".navItem").css("color", "white")
$("#nav").css("background-color", "#145")
$('li').each(function(index){
if ([0,2,4,6,8,10].includes(index)){
    $(this).css("background-color", "#ccc")
}
})
$('li').each(function(index){
    if ([1,3,5,7,9].includes(index)){
$(this).css("background-color", "#aaa")
    }
})

let input = document.getElementById('myInput');
input.value = 'Sophie Shelley';