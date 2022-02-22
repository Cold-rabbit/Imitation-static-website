(function(){
	var wyxm1 ={
		//滚动条内容
		"scroll":function(){
			var top_copy=document.getElementsByClassName('top_copy')[0];
			var top=document.getElementsByClassName('top')[0];
			var right_gg=document.getElementsByClassName('right-gg')[0];
			var show_t=document.getElementsByClassName('show-t')[0];
			var timer=null;
			window.onscroll=function(){
				if(document.documentElement.scrollTop>=550){
					top_copy.style.display='block';
					top.style.position='fixed';
				}
				else{
					top_copy.style.display='none';
					top.style.position='relative';
				};
				if(document.documentElement.scrollTop>0){
					right_gg.style.display='block';
				}
				else{
					right_gg.style.display='none';
				};
				
			};
			show_t.onclick=function(){
				clearInterval(timer);
				timer=setInterval(function(){
					if(document.documentElement.scrollTop<=0){
						clearInterval(timer);
						return;
					}
					document.documentElement.scrollTop=document.documentElement.scrollTop-100<0 ? 0 : document.documentElement.scrollTop-100;
				},0);
			};
		},
		//banner搜索栏内容
		"search":function(){
			var search_le=document.getElementsByClassName('search_left')[0];
			var search_le_ol=document.getElementsByClassName('search_left_ol')[0];
			var search_le_span=document.getElementsByClassName('search_left_span')[0];
			var search_in=document.getElementsByClassName('search_input')[0];
			var search_ul=document.getElementsByClassName('search_center')[0];
			var context={
				'kc':['四级','零基础用代码画美图','高价值跳槽技巧','色彩创意','加薪不加班'],
				'wx':['中公','讲堂','技术','达内','网络']
			};
			Tocontext('kc');
			function Tocontext(text){
				search_ul.innerHTML="<li>热门搜索</li>";
				for(var i=0;i<context[text].length;i++){
					var oli=document.createElement('li');
					search_ul.appendChild(oli);
					oli.innerHTML='<a href="#">'+context[text][i]+'</a>';
				};
				for(var i=1;i<search_ul.children.length;i++){
					search_ul.children[i].onclick=function(){
						search_ul.style.display='none';
						event.cancelBubble=true;
					};
				};
			};
			window.onclick=function(){
				search_ul.style.display='none';
			};
			search_le.onmouseenter=function(){
				search_le_ol.style.display='block';
				search_ul.style.display='none';
			};
			search_le.onmouseleave=function(){
				search_le_ol.style.display='none';
			};
			search_in.onclick=sea_ipt;
			
			for(var i=0;i<search_le_ol.children.length;i++){
				search_le_ol.children[i].onclick=function(){
					event.cancelBubble=true;
					search_le_span.innerHTML=this.innerHTML;
					for(var i=0;i<search_le_ol.children.length;i++){
						search_le_ol.children[i].style.background='white';
						search_le_ol.children[i].style.color='#313a3f';
					};
					this.style.background='#f5f5f5';
					this.style.color='#58b35e';
					search_le_ol.style.display='none';
					sea_ipt();
					if(this.innerHTML=='课程'){
						Tocontext('kc');
						search_in.placeholder='职场人数据分析技能课';
					}
					else{
						Tocontext('wx');
						search_in.placeholder='搜索网校';
					}
				};
			};
			
			function sea_ipt(){
				event.cancelBubble=true;
				search_ul.style.transition='0.5s';
				search_ul.style.opacity='0';
				search_ul.style.display='block';
				setTimeout(function(){
					search_ul.style.opacity='1';
				},0);
			};
		},
		//头部功能按钮触碰1内容
		"top_touch1":function(){
			var download=document.getElementsByClassName('download')[0];
			var down_con=document.getElementsByClassName('download-content')[0];
			var timer=null;
			download.onmouseover=function(){
				clearTimeout(timer);
				if(down_con.style.display == 'block')return;
				down_con.style.transform='scale(0.9)';
				down_con.style.transition='0.2s';
				down_con.style.display='block';
				setTimeout(function(){
					down_con.style.transform='scale(1)';
				});
			};
			download.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					down_con.style.display='none';
				},0);
			};
			down_con.onmouseover=function(){
				clearTimeout(timer);
				
			};
			down_con.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					down_con.style.display='none';
				},0);
			};
		},
		//头部功能按钮触碰2内容
		"top_touch2":function(){
			var like=document.getElementsByClassName('like')[0];
			var like_con=document.getElementsByClassName('like-content')[0];
			var timer=null;
			like.onmouseover=function(){
				clearTimeout(timer);
				if(like_con.style.display == 'block')return;
				like_con.style.transform='scale(0.9)';
				like_con.style.transition='0.2s';
				like_con.style.display='block';
				setTimeout(function(){
					like_con.style.transform='scale(1)';
				});
			};
			like.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					like_con.style.display='none';
				},0);
			};
			like_con.onmouseover=function(){
				clearTimeout(timer);
				
			};
			like_con.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					like_con.style.display='none';
				},0);
			};
		},
		//我的学习触碰内容
		'my_study':function(){
			var study_content=document.getElementsByClassName('divtop_right_study_content')[0];
			var my_study=document.getElementsByClassName('divtop_right_study')[0];
			var timer=null;
			my_study.onmouseover=function(){
				clearTimeout(timer);
				if(study_content.style.display == 'block')return;
				study_content.style.display='block';
				study_content.style.transform='scale(0.9)';
				study_content.style.transition='0.2s';
				setTimeout(function(){
					study_content.style.transform='scale(1)';
				});
			};
			my_study.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					study_content.style.display='none';
				},250);
			};
			study_content.onmouseover=function(){
				clearTimeout(timer);
				
			};
			study_content.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					study_content.style.display='none';
				},250);
			};
		},
		//用户头像触碰内容
		'user':function(){
			var user_ul=document.getElementsByClassName('user_ul')[0];
			var user_img=document.getElementsByClassName('user_img')[0];
			var timer=null;
			user_img.onmouseover=function(){
				clearTimeout(timer);
				if(user_ul.style.display=='block')return;
				user_ul.style.display='block';
				user_ul.style.transform='scale(0.8)';
				user_ul.style.transition='0.1s';
				setTimeout(function(){
					user_ul.style.transform='scale(1)';
				});
			};
			user_img.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					user_ul.style.display='none';
				},250);
			};
			user_ul.onmouseover=function(){
				clearTimeout(timer);
				user_ul.style.display='block';
			};
			user_ul.onmouseout=function(){
				clearTimeout(timer);
				timer=setTimeout(function(){
					user_ul.style.display='none';
				},250);
			};
		},
		//头部导航内容
		"top_banner":function(){
			var all_banner_a=document.getElementsByClassName('top_banner_a');
			var all_active_ol=document.getElementsByClassName('active-ol');
			var all_right_ol=document.getElementsByClassName('right_ol')[0];
			for(var i=0;i<all_banner_a.length;i++){
				all_banner_a[i].onmouseover=function(){
					for(var i=0;i<all_active_ol.length;i++){
						all_active_ol[i].style.display='none';
					};
					if(this.parentNode.getElementsByClassName('active-ol')[0]){
						this.parentNode.getElementsByClassName('active-ol')[0].style.display='block';
					};
				}
			};
			banner.onmouseleave=function(){
				for(var i=0;i<all_active_ol.length;i++){
					all_active_ol[i].style.display='none';
				};
			};
			all_right_ol.onmouseenter=function(){
				for(var i=0;i<all_active_ol.length;i++){
					all_active_ol[i].style.display='none';
				};
			};
		},
		//轮播图内容
		"top_banner_b":function(){
			var colorArr=['#f15c5a','#283042','#f9a916','#2b409b','#0096ee','#f5a52c','#f64b3a'];
			var timer=null;
			var all_top_ba_b_li = document.getElementsByClassName('top_ba_b_ol')[0].children;
			var all_top_ba_b_ul_li=document.getElementsByClassName('top_ba_b_ul')[0].children;
			var Top_banner_b=document.getElementsByClassName('top_banner_b')[0];
			var num=0;
			var silderInterval=null;			
			for(var i=0;i<all_top_ba_b_li.length;i++){
				all_top_ba_b_li[i].index=i;
				all_top_ba_b_li[i].onmouseover =function(){
					clearInterval(timer);
					timer=setTimeout(function(){
						move(this);
						go();
					}.bind(this),500);
					function move(_this){
						num=_this.index;
						for(var i=0;i<all_top_ba_b_li.length;i++){
							all_top_ba_b_ul_li[i].className='';
							all_top_ba_b_ul_li[i].style.opacity=0;
							if(all_top_ba_b_li[i].className.indexOf('one') != -1){
								all_top_ba_b_li[i].className='one';
							}
							else{
								all_top_ba_b_li[i].className='';
							}
						};
						all_top_ba_b_ul_li[_this.index].className='active';
						setTimeout(function(){
							all_top_ba_b_ul_li[this.index].style.opacity='1';
						}.bind(_this),0);
						_this.className +=' active';
						Top_banner_b.style.backgroundColor=colorArr[_this.index];
					};
					go();
					function go(){
						clearInterval(silderInterval);
						silderInterval=setInterval(function(){
							num++;
							if(num==all_top_ba_b_li.length)num=0;
							for(var i=0;i<all_top_ba_b_li.length;i++){
								all_top_ba_b_ul_li[i].className='';
								all_top_ba_b_ul_li[i].style.opacity=0;
								if(all_top_ba_b_li[i].className.indexOf('one') != -1){
									all_top_ba_b_li[i].className='one';
								}
								else{
									all_top_ba_b_li[i].className='';
								}
							};
							all_top_ba_b_ul_li[num].className='active';
							setTimeout(function(){
								all_top_ba_b_ul_li[num].style.opacity='1';
							},0);
							all_top_ba_b_li[num].className +=' active';
							Top_banner_b.style.backgroundColor=colorArr[num];
						},4000);
					};
				}
			}
		},
		//名师公开课内容
		'open_class':function(){
			var open_class_left=document.getElementsByClassName('open_class_left')[0];
			var open_class_right=document.getElementsByClassName('open_class_right')[0];
			var all_open_class_content_ul=document.getElementsByClassName('open_class_content_ul')[0];
			open_class_right.style.display='none';
			open_class_left.onclick=function(){
				open_class_left.style.display='none';
				open_class_right.style.display='block';
				all_open_class_content_ul.style.left='-376px';
			}
			open_class_right.onclick=function(){
				open_class_left.style.display='block';
				open_class_right.style.display='none';
				all_open_class_content_ul.style.left='0px';
			}
		},
		//限时秒杀内容
		"seckill_event":function(){
			var seckill_ul1=document.getElementsByClassName('seckill_ul1')[0];
			var seckill_ul1_li=seckill_ul1.children;
			var seckill_ul2=document.getElementsByClassName('seckill_ul2');
			for(var i=0;i<seckill_ul1_li.length;i++){
				seckill_ul1_li[i].index=i;
				seckill_ul1_li[i].onmouseover=function(){
					for(var j=0;j<seckill_ul1_li.length;j++){
						seckill_ul1_li[j].className='';
						seckill_ul2[j].style.display='none';
					};
					seckill_ul1_li[0].className='seckill_ul1_first';
					seckill_ul1_li[seckill_ul1_li.length-1].className='seckill_ul1_last';
					this.className +=' active';
					seckill_ul2[this.index].style.display='block';
				};
					
			};
		},
		//更改兴趣内容
		"changeLike":function(){
			var recommend_like=document.getElementsByClassName('recommend_like')[0];
			var mask=document.getElementsByClassName('mask')[0];
			var morelike=document.getElementsByClassName('morelike')[0];
			var rem_ul1_li=document.getElementsByClassName('rem_ul1')[0].children;
			var rem_ul2=document.getElementsByClassName('rem_ul2');
			var rem_ul3=document.getElementsByClassName('rem_ul3')[0];
			var rem_ul3_first=document.getElementsByClassName('rem_ul3_first_sp')[0];
			var rem_closed=document.getElementsByClassName('rem-closed')[0];
			var chosed=document.getElementsByClassName('chosed')[0];
			mask.style.transition='0.5s';
			recommend_like.style.transition='0.5s';
			mask.style.opacity=0;
			recommend_like.style.opacity=0;
			morelike.onclick=function(){
				mask.style.display='block';
				recommend_like.style.display='block';
				setTimeout(function(){
					mask.style.opacity=1;
					recommend_like.style.opacity=1;
				},0);
				setTimeout(function(){
					mask.style.transition='0s';
					recommend_like.style.transition='0s';
				},500);
			};
			rem_closed.onclick=chosed.onclick=function(){
				mask.style.transition='0.5s';
				recommend_like.style.transition='0.5s';
				setTimeout(function(){
					mask.style.opacity=0;
					recommend_like.style.opacity=0;
				},0);
				setTimeout(function(){
					mask.style.display='none';
					recommend_like.style.display='none';
				},500);
				
			}
			for(var i=0;i<rem_ul1_li.length;i++){
				rem_ul1_li[i].index=i;
				rem_ul1_li[i].onclick=function(){
					for(var j=0;j<rem_ul1_li.length;j++){
						rem_ul1_li[j].className = '';
						rem_ul2[j].style.display='none';
					};
					this.className='active';
					rem_ul2[this.index].style.display='block';
				};
			};
			rem_ul3.onclick=function(){
				if(event.target.nodeName =='IMG'){
					rem_ul3.removeChild(event.target.parentNode);
					for(var i=0;i<rem_ul2.length;i++){
						for(var j=0;j<rem_ul2[i].children.length;j++){
							if(rem_ul2[i].children[j].innerText==event.target.parentNode.title){
								rem_ul2[i].children[j].className='';
								break;
							}
						};
					};
					rem_ul3_first.innerHTML=rem_ul3.children.length-1;
				}
			};
			for(var i=0;i<rem_ul2.length;i++){
				for(var j=0;j<rem_ul2[i].children.length;j++){
					rem_ul2[i].children[j].onclick=function(){
						if(this.className=='active'){
							this.className='';
							for(var k=0;k<rem_ul3.children.length;k++){
								if(this.innerText==rem_ul3.children[k].title){
									rem_ul3.removeChild(rem_ul3.children[k]);
									break;
								};
							};
							rem_ul3_first.innerHTML=rem_ul3.children.length-1;
						}
						else{
							this.className='active';
							var oli=document.createElement('li');
							oli.title=this.innerText;
							oli.innerHTML=this.innerText+ '<img src="img/rem_ul3.jpg">';
							rem_ul3.appendChild(oli);
							rem_ul3_first.innerHTML=rem_ul3.children.length-1;
						}
					};
					rem_ul2[i].children[j].onmousedown=function(){
						return false;
					}
				};
				
			};
			
		}
		
	};
	//滚动条事件
	wyxm1.scroll();
	//banner搜索栏事件
	wyxm1.search();
	//头部功能按钮触碰1事件
	wyxm1.top_touch1();
	//头部功能按钮触碰2事件
	wyxm1.top_touch2();
	//我的学习触碰事件
	wyxm1.my_study();
	//用户头像触碰事件
	wyxm1.user();
	//头部导航函数
	wyxm1.top_banner();
	//轮播图函数
	wyxm1.top_banner_b();
	//名师公开课事件
	wyxm1.open_class();
	//限时秒杀事件
	wyxm1.seckill_event();
	//更改兴趣事件
	wyxm1.changeLike();
})();