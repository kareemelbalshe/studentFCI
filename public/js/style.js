// اخفاء زر الصعود حتى يتم التمرير لأسفل الصفحة بمقدار 20 بكسل
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("height").style.height = "max-content"
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// تمرير الصفحة إلى أعلى الشاشة عند النقر على الزر
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
if(document.body.scrollTop == 0||document.documentElement.scrollTop == 0){
    document.getElementById("myBtn").style.display = "none";
}


