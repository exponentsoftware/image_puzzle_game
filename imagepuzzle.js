function shuffle()
{
    let array = [1,2,3,4,5,6,7,8,9];
    array.sort(function(a, b){return 0.5 - Math.random()});

    $('#puzzle').html('');
    for(var i = 0 ; i < array.length ; i++)
    {
        $("#puzzle").append("<div id='tile"+array[i]+"'class='tile'></div>");
    }
}
