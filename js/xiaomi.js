/*
* @Author: 梁飞
* @Date:   2017-09-18 23:03:34
* @Last Modified by:   梁飞
* @Last Modified time: 2017-09-19 19:36:43
*/
window.onload=function(){
	let bleft= document.getElementsByClassName('banner-left')[0];
	let bright = document.getElementsByClassName('banner-right')[0];
	let banner = document.getElementsByClassName('banner')[0];
	let aside = document.getElementsByClassName('cedaohang');
	let u=aside[0].getElementsByTagName('ul');
	let lis =u[0].getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	let imglist= document.getElementsByClassName('img-list')[0];
	let imgli = imglist.getElementsByTagName('li')
	let bl = document.getElementsByClassName('btn-list')[0];
	let b = bl.getElementsByTagName('li');	
	let num = 0; 
	//侧导航的选项卡
	for (let i = 0; i <lis.length; i++) {
		lis[i].onmouseover=function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display = 'none';
		}
	}
	//btn的移入效果
	for (let i = 0 ;i<b.length;i++){
		b[i].onmouseover =function(){	
			for(let j = 0;j<imgli.length;j++){
				imgli[j].style.display='none';
				b[j].style.background='#17171C'
			}
			imgli[i].style.display='block';
			b[i].style.background='#ff6700';
			num=i;
		}
	}
	// for (var i = 0 ;i<b.length;i++){
	// 	b[i].index=i;
	// 	b[i].onmouseover =function(){	
	// 		for(let j = 0;j<imgli.length;j++){
	// 			imgli[j].style.display='none';
	// 		}
	// 		imgli[this.index].style.display='block';
	// 	}
	// }
	// 闭包函数
	// for (var i = 0 ;i<b.length;i++){
	// 	b[i].index=i;
	// 	b[i].onmouseover =(function(i){
	// 	return function	(){
	// 		for(let j = 0;j<imgli.length;j++){
	// 			imgli[j].style.display='none';
	// 		}
	// 		imgli[i].style.display='block';
	// 	}
	// 	})(i)
	// }
		let  t =setInterval(move,3000);
	function move(){
		num++;
		if (num==imgli.length) {
			num=0;
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			b[i].style.background='#17171c'
		}
		imgli[num].style.display='block';
		b[num].style.background='#ff6700'	
	}
	bleft.onclick=function moveL(){
		
		num--;
		if (num<0) {
			num=imgli.length-1;
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			b[i].style.background='#17171c'
		}
		imgli[num].style.display='block';
		b[num].style.background='#ff6700'	
	}
	bright.onclick=function move(){
		num++;
		if (num==imgli.length) {
			num=0;
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			b[i].style.background='#17171c'
		}
		imgli[num].style.display='block';
		b[num].style.background='#ff6700'	
	}


	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t =setInterval(move,3000);
	}
}
