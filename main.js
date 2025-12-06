const cursor = document.querySelector('.cursor');

// カーソルの現在位置と目標位置
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// マウス移動で目標値を更新
document.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

// スムーズに追従させる（イージング）
 function animate() {
// 0.15 は追従速度（数値を上げると速くなる）
 	cursorX += (mouseX - cursorX) * 0.8;
 	cursorY += (mouseY - cursorY) * 0.8;

 	cursor.style.left = cursorX + 'px';
 	cursor.style.top = cursorY + 'px';

 	requestAnimationFrame(animate);
 }
 animate();


// ------------- リンクに重なったら拡大 -------------
document.querySelectorAll('a, button').forEach(el => {
	el.addEventListener('mouseenter', () => {
		cursor.classList.add('hover');
	});
	el.addEventListener('mouseleave', () => {
		cursor.classList.remove('hover');
	});
});
