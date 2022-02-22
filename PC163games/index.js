(function(){
	var games={
		$:function(ele){
			return document.querySelectorAll(ele);
		},
		"top_banner":function(){
			var top_r=this.$('.top_r')[0];
			var top_r_text=this.$('.top_r_text')[0];
			var top_r_list=this.$('.top_r_list')[0];
			var top_r1=this.$('.top_r1')[0];
			var top_r_list_b=this.$('.top_r_list_b')[0];
			var needIndex=0;
			
			top_r1.onclick=function(){
				needIndex++;
				if(needIndex%2==1){
					top_r_text.style.display='none';
				}
				else{
					top_r_text.style.display='block';
				}
				top_r.classList.toggle('top_r_Blist');
				top_r_list.classList.toggle('show');
			};
			top_r_list_b.onclick=function(){
				needIndex++;
				if(needIndex%2==1){
					top_r_text.style.display='none';
				}
				else{
					top_r_text.style.display='block';
				}
				top_r.classList.remove('top_r_Blist');
				top_r_list.classList.remove('show');
			};
		},
		"banner":function(){
			var allli=this.$('.ban_ul_li1');
			var ban_ol_li=this.$('.ban_ol_li');
			var zIndex=5;
			var timer=null;
			var index=0;
			var ban_click_left=this.$('.ban_click_left')[0];
			var ban_click_right=this.$('.ban_click_right')[0];
			var bannerArr=[
				{
					"last1":"img/bb351359-e561-4e5b-9041-96f42a6fb75d.jpeg",
					"last2":"漫威超级战争",
					"last3":"灭霸卷土重来"
				},
				{
					"last1":"img/0c4ed932-8410-4435-afe7-62b92c1a8f92.jpg",
					"last2":"明日之后第四季",
					"last3":"探索未知，活下去"
				},
				{
					"last1":"img/6bb31108-2576-4352-9fcb-98306bdc643a.jpg",
					"last2":"趣逗火材人",
					"last3":"全平台公测正式开启"
				},
				{
					"last1":"img/8d2ae263-7036-461b-8ad1-7e0e141732f1.jpg",
					"last2":"大唐无双×汇源果汁",
					"last3":"五年华彩，焕颜新生"
				},
				{
					"last1":"img/e1b63ea4-7c15-468f-a850-ceb0ed09f44d.jpg",
					"last2":"实况足球嘉年华进行中",
					"last3":"生而热爱，定当传奇"
				}
			];
			var ban_con_ul_li=this.$('.ban_con_ul li');
			var bannerBindex=5;
			var ban_con_ol_li_one=this.$('.ban_con_ol_li_one');
			
			for(var i=0;i<ban_con_ol_li_one.length;i++){
				if(bannerBindex==0)bannerBindex=5;
				ban_con_ol_li_one[i].style.zIndex=bannerBindex;
				bannerBindex--;
			};
			for(var i=0;i<ban_con_ul_li.length;i++){
				ban_con_ul_li[i].index=i;
				ban_con_ul_li[i].onclick=function(){
					
					for(var i=0;i<ban_con_ul_li.length;i++){
						ban_con_ul_li[i].classList.remove('active');
						ban_con_ol_li_one[i].classList.remove('show');
					};
					ban_con_ol_li_one[this.index].classList.add('show');
					this.classList.add('active');
				};
			};
			
			
			ban_click_left.onclick=function(){
				index--;
				if(index==-1)index=allli.length-1;
				for(var i=0;i<ban_ol_li.length;i++){
					ban_ol_li[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				ban_ol_li[index].classList.add('active');
				allli[index].classList.add('active');
				slider();
				ban_click_left.onmouseenter();
			};
			ban_click_left.onmouseenter=function(){
				var last=index-1;
				if(last==-1)last=allli.length -1;
				this.children[1].children[0].style.backgroundImage='url('+bannerArr[last].last1+')';
				this.children[1].children[1].innerHTML=bannerArr[last].last2;
				this.children[1].children[2].innerHTML=bannerArr[last].last3;
			};
			ban_click_right.onclick=function(){
				index++;
				if(index==allli.length)index=0;
				for(var i=0;i<ban_ol_li.length;i++){
					ban_ol_li[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				ban_ol_li[index].classList.add('active');
				allli[index].classList.add('active');
				slider();
				ban_click_right.onmouseenter();
			};
			ban_click_right.onmouseenter=function(){
				var next=index+1;
				if(next==allli.length)next=0;
				this.children[1].children[0].style.backgroundImage='url('+bannerArr[next].last1+')';
				this.children[1].children[1].innerHTML=bannerArr[next].last2;
				this.children[1].children[2].innerHTML=bannerArr[next].last3;
			};
			
			for(var i=0;i<allli.length;i++){
				allli[i].style.zIndex=zIndex;
				zIndex--;
			};
			for(var i=0;i<ban_ol_li.length;i++){
				ban_ol_li[i].index=i;
				ban_ol_li[i].onclick=function(){
					for(var i=0;i<ban_ol_li.length;i++){
						ban_ol_li[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					this.classList.add('active');
					allli[this.index].classList.add('active');
					index=this.index;
					slider();
				};
			};
			slider();
			function slider(){
				clearInterval(timer);
				timer=setInterval(function(){
					index++;
					if(index==allli.length)index=0;
					for(var i=0;i<ban_ol_li.length;i++){
						ban_ol_li[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					ban_ol_li[index].classList.add('active');
					allli[index].classList.add('active');
					
				},5000);
			};
			
		},
		//group官方社群这做得不好，无限循环没实现，得改改
		"group":function(){
			var allli=this.$('.group .group_bl .group_bl_c .group_bl_c_ul .group_bl_c_ul_li .group_bl_c_ul_li_ol>li');
			var leftBtn=this.$('.group_bl_l')[0];
			var rightBtn=this.$('.group_bl_r')[0];
			var group_bl_c_ul=this.$('.group .group_bl .group_bl_c .group_bl_c_ul')[0];
			var index=0;
			var allliWidth=group_bl_c_ul.children[0].offsetWidth;
			var b=true;
			
			
			leftBtn.onclick=function(){
				index++;
				console.log(index);
				if(index==1){
					group_bl_c_ul.style.transition='0s';
					setTimeout(function(){
						index=-4;
						group_bl_c_ul.style.left=index * allliWidth +'px';
						setTimeout(function(){
							group_bl_c_ul.style.transition='1s';
						},10)
					})
				};
				
				group_bl_c_ul.style.left=index * allliWidth +'px';
			};
			rightBtn.onclick=function(){
				if(b==false)return;
				b=false;
				index--;
				console.log(index);
				if(index==-5){
					
					group_bl_c_ul.style.transition='0s';
					setTimeout(function(){
						index=0;
						group_bl_c_ul.style.left=index * allliWidth +'px';
						setTimeout(function(){
							group_bl_c_ul.style.transition='1s';
						},10)
					})
					
				};
				group_bl_c_ul.style.left=index * allliWidth +'px';
				setTimeout(function(){
					b=true;
				},1100)
			};
			for(var i=0;i<allli.length;i++){
				allli[i].onmouseenter=function(){
					for(var i=0;i<allli.length;i++){
						allli[i].classList.remove('active');
					}
					this.classList.add('active');
				};
			};
		},
		"hotgames":function(){
			var ChangeBtn=this.$('.games_l_top2')[0];
			var AllLi=this.$('.games .games_l .games_l_bo>li');
			var ChangeArr=[
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"狼人杀官方",
					"image":"img/game-list-img.png",
					"name":"《漫威超级战争》",
					"showTitle":"超级反派灭霸将于9月2号维护后获得全新能力，在对局中集齐无限宝石后，可"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img2.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				},
				{
					"ewm":"img/hotgames_ewm.png",
					"title":"联想合作欢乐开启",
					"image":"img/game-list-img3.png",
					"name":"《狼人杀》",
					"showTitle":"狼人杀携手联想来酷开启主题活动，联想来酷专享钜惠来袭，主题店欢乐营业！"
				}
			];
			var index=6;
			var bl=false;
			ChangeBtn.onclick=function(){
				if(bl==true)return;
				bl=true;
				setTimeout(function(){
					bl=false;
				},1050)
				
				for(var i=0;i<AllLi.length;i++){
					(function(i){
						setTimeout(function(){
							
							AllLi[i].classList.add('scale');
							setTimeout(function(){
								if(index==ChangeArr.length)index=0;
								AllLi[i].children[0].src=ChangeArr[index].image;
								AllLi[i].children[1].innerText=ChangeArr[index].name;
								AllLi[i].children[2].innerText=ChangeArr[index].showTitle;
								AllLi[i].children[4].children[0].children[1].innerText=ChangeArr[index].title;
								index++;
								AllLi[i].classList.remove('scale');
							},500)
						},i*100);
					})(i)
				}
			};
		},
		"tree":function(){
			var treeBtn=this.$('.tree_cen_bc_cen1')[0];
			var tree=this.$('.tree')[0];
			treeBtn.onclick=function(){
				if(treeBtn.innerText=='查看更多'){
					treeBtn.innerText='收起';
					tree.classList.add('active');
				}
				else{
					treeBtn.innerText='查看更多';
					tree.classList.remove('active');
				}
			};
			treeBtn.onmousedown=function(){
				return false;
			};
		}
	}
	games.top_banner();
	games.banner();
	games.group();
	games.hotgames();
	games.tree();
})();