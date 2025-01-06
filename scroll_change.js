function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
window.onscroll = function change(){

    var distance = getScrollPercent()
    
    var current_page="poem.html";
    if (distance>0 && distance<25){
        var current_page="layer_1.html";}
    if (distance>=25 && distance<50){
        var current_page="layer_2.html";}
    if (distance>=50 && distance<75){
        var current_page="layer_3.html";}
    if (distance>=75){
        var current_page="layer_4.html";}
    //document.getElementById('the_poem').style.top=(10*(distance)).toString()+"px" ;
    document.getElementById('the_poem').src=current_page ;
}
 
