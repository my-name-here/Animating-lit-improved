function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
var distance = getScrollPercent()
var current_page="poem.html";
document.getElementById('the_poem').src=current_page ;
