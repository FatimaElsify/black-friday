let upIcon = document.querySelector('.icon-up');
window.onscroll = function(){
    if (this.scrollY >= 280){
        upIcon.classList.add('showUp');
    }
    else{
        upIcon.classList.remove('showUp');
    }
};
function goTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
upIcon.addEventListener('click' , goTop);  

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navL ul li a');

    // تحديد الروابط التي تشير إلى الصفحة الحالية
    var currentPage = window.location.pathname;

    navLinks.forEach(function(link) {
        // إزالة الكلاس النشط من جميع الروابط
        link.classList.remove('active');

        // إضافة الكلاس النشط إذا كانت هذه الصفحة هي الصفحة الحالية
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});