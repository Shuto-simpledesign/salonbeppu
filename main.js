
function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if (!element) return; // 要素がなかったら処理をキャンセル

    var showTiming = window.innerHeight > 768 ? 300 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
        }
    }
}

showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

