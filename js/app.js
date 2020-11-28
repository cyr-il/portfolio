$(document).ready(function() {
    console.log("ok");
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});