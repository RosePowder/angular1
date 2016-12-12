//导航
$(".button-collapse").sideNav();
//点击重新加载
$('.nav-wrapper ul li').on('click',function(){
	location.reload();
})
//页面一按钮的激活
var  btnActive = function(obj){
	$(obj).toggleClass('active')
	var num = $(obj).find('span.left span').text();
	if ($(obj).hasClass('active')) {
		num ++;
		$(obj).find('span.left span').text(num)
	}else{
		num --;
		$(obj).find('span.left span').text(num)
	}
}
//ajax1
var aLi = document.querySelectorAll('.tmp2,ul.row,li.col');
$.ajax({
	type:"get",
	url:"img.json",
	async:true,//异步请求
	success: function(response, status, xhr){
//		var _index = 0;	//代替for循环的i;
//		addDom();
//		function addDom(){
//			var _src = response[_index].imgSrc,
//				_title = response[_index].title;
//			var img = new Image();
//			img.src = _src;
//			img.onload = function(){
//				var index = getMin(aLi),	//注意index获取的位置
//				    $img = $("<img class='lazy' src='" + this.src + "' />"),
//				$p = $('<p>' + _title + '</p>');
//				$(aLi[index]).append($img).append($p); //将标题跟图片添加到DOM中
//				if(_index< (response.length - 1)){
//						_index ++;
//						addDom();	//递归: 在函数内部自己调用自己
//				}
//			}
//			img.onerror = function(){
//				var index = getMin(aLi),	//注意index获取的位置
//				    $img = $("<img class='lazy' src='" + this.src + "' />"),
//				$p = $('<p>' + _title + '</p>');
//				$(aLi[index]).append($img).append($p); //将标题跟图片添加到DOM中
//				if(_index< (response.length - 1)){
//						_index ++;
//						addDom()	//递归: 在函数内部自己调用自己
//				}
//			}
//		}
		
		for (var i=0;i<response.length;i++) {
//			var rand = parseInt(Math.floor(Math.random() * (response.length) + 1));
//			alert(rand)
			//获取到json文件中的信息
			var _src = response[i].imgSrc,
				_content = response[i].des,
				_title = response[i].title;
			var img = new Image();
			img.src = _src;
			img.onload = function(){
				//获取到高度最小的li
				var index = getMin($('.tmp2 ul li')),	//注意index获取的位置
				    $img = $('<img class="activator" src="'+ this.src +'">');
//				    $des = $('<p>' + _content + '</p><i class="material-icons right">close</i>'),
//					$p = $('<p>' + _title + '</p>');
				$($('.tmp2 ul li')[index]).find('.card .card-image').append($img);
//				$($('.tmp2 ul li')[index]).appendBlog($img).append($p); //将标题跟图片添加到DOM中
			}
		}
		function getMin(arr){
			var index = 0,minH = arr[index].offsetHeight;
			for (var i=1;i<arr.length;i++) {
				if(arr[i].offsetHeight<minH){
					minH = arr[i].offsetHeight;
					index = i;
				}
			}
			return index;
		}
	}
});
//ajax2
$.ajax({
	type:"get",
	url:"test.json",
	async:true//异步请求
});
//将路由模块引入
    var app = angular.module('app',['ngRoute']);
    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/moodMine',{
                templateUrl: 'tmp1',//将模板的id传入
                controller:'moodMineCtl'
                
            })
            .when('/picCollection',{
                templateUrl: 'tmp2',//将模板的id传入
                controller:'picCollectionCtl'
            })
            .when('/massageBoard',{
                templateUrl: 'tmp3',//将模板的id传入
                controller:'massageBoardCtl'
            })
            .otherwise({    
                redirectTo:'/moodMine'
            })
    }]);
	app.run(['$rootScope','$location',function($rootScope,$location){
        $rootScope.$location = $location;
        $rootScope.addStatu = "/moodMine";
        // 路由改变成功触发的事件
        $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
			switch($location.path()){
				case '/moodMine':
					$rootScope.addStatu = "/moodMine";
					break;
				case '/picCollection':
					$rootScope.addStatu = "/picCollection";
					break;
				case '/massageBoard':
					$rootScope.addStatu = "/massageBoard";
					break;
			}
        });
    }]);
    app.controller('moodMineCtl', ['$scope','$location',function($scope,$location){
        $scope.content = "moodMine";
        $scope.friendLists=[
        	{headSrc:'img/h1.jpg',name:'小宝'},
        	{headSrc:'img/h2.jpg',name:'大宝',new:2},
        	{headSrc:'img/h3.jpg',name:'二宝'},
        	{headSrc:'img/h4.jpg',name:'三宝',new:3},
        	{headSrc:'img/h5.jpg',name:'小小宝',new:10}
        ];
        $scope.friendFocusLists=[
        	{headSrc:'img/h1.jpg',name:'小宝'},
        	{headSrc:'img/h2.jpg',name:'大宝'},
        	{headSrc:'img/h5.jpg',name:'小小宝'}
        ];
        $('.collapsible').collapsible();
        $('ul.tabs').tabs();
		$scope.lookLists=[
        	{headSrc:'img/h1.jpg',name:'小宝',date:'11月1日'},
        	{headSrc:'img/h2.jpg',name:'大宝',date:'11月5日'},
        	{headSrc:'img/h5.jpg',name:'小小宝',date:'11月5日'},
        	{headSrc:'img/h2.jpg',name:'大宝',date:'11月6日'},
        	{headSrc:'img/h2.jpg',name:'大宝',date:'11月7日'},
        	{headSrc:'img/h3.jpg',name:'二宝',date:'11月26日'}
        ];
		$scope.lookHistoryLists=[
        	{pic:'img/n1.jpg',
        	 title:'专家称iPhone用户往往比Android用户更肤浅',
        	 content:'【科技讯】11月25日消息，专家称iPhone用户往往比Android用户更肤浅。手机或许可以反映一个人的性格。英国林肯大学和兰卡斯特大学的一项最新研究表明，iPhone用户比Android用户更浅薄。在得到这个结论之前，研究员们在一年多的时间里采访了530人，询问了一些关于手机和他们的感觉的问题。'
        	},
        	{pic:'img/n2.jpg',
        	 title:'专家称iPhone用户往往比Android用户更肤浅',
        	 content:'【科技讯】11月25日消息，专家称iPhone用户往往比Android用户更肤浅。手机或许可以反映一个人的性格。英国林肯大学和兰卡斯特大学的一项最新研究表明，iPhone用户比Android用户更浅薄。在得到这个结论之前，研究员们在一年多的时间里采访了530人，询问了一些关于手机和他们的感觉的问题。'
        	},
        	{pic:'img/n3.jpg',
        	 title:'专家称iPhone用户往往比Android用户更肤浅',
        	 content:'【科技讯】11月25日消息，专家称iPhone用户往往比Android用户更肤浅。手机或许可以反映一个人的性格。英国林肯大学和兰卡斯特大学的一项最新研究表明，iPhone用户比Android用户更浅薄。在得到这个结论之前，研究员们在一年多的时间里采访了530人，询问了一些关于手机和他们的感觉的问题。'
        	},
        	{pic:'img/n4.jpg',
        	 title:'专家称iPhone用户往往比Android用户更肤浅',
        	 content:'【科技讯】11月25日消息，专家称iPhone用户往往比Android用户更肤浅。手机或许可以反映一个人的性格。英国林肯大学和兰卡斯特大学的一项最新研究表明，iPhone用户比Android用户更浅薄。在得到这个结论之前，研究员们在一年多的时间里采访了530人，询问了一些关于手机和他们的感觉的问题。'
        	},
        	{pic:'img/n5.jpg',
        	 title:'专家称iPhone用户往往比Android用户更肤浅',
        	 content:'【科技讯】11月25日消息，专家称iPhone用户往往比Android用户更肤浅。手机或许可以反映一个人的性格。英国林肯大学和兰卡斯特大学的一项最新研究表明，iPhone用户比Android用户更浅薄。在得到这个结论之前，研究员们在一年多的时间里采访了530人，询问了一些关于手机和他们的感觉的问题。'
        	}
        ];
        //冲突  ng-repeat嵌套有问题
    $scope.xqLists = [
        {
        	id:1,
            content: '人的一生相聚亦难别亦难，并不是心心相映的两个人就一定会在一起，之间总是会有想不到的阻隔，让人欲罢不能。',
            textImg:'img/keai-2.png'
        },
        {
        	id:2,
            content: '人生就像是一场旅行，遇到的既有感人的，也有伤心的，既有令人兴奋的，也有令人灰心的，既有美妙的风景，也会有称不上景只有风的地方。人生就是要感受美丽的善良的，丑恶的病态的。而只有在充满了艰辛的人生旅途中，始终调整好自己观风景的心态，才能做到人在旅途，感悟人生，享受人生。',
            textImg:'img/lx2.jpg'
        },
        {
        	id:3,
        	content:' 我要准备好行李启程了，谢谢关心我的家人和朋友，为我祈祷平安就好。我的旅行，会有你们的故事陪伴，所以我不会孤单。放心吧。',
        	textImg:'img/lx.jpg'
        }
    ];
    
    //ng-repeat  json 嵌套
//  $scope.suoLists = [
//	    {
//	    	id:1,
//	    	suos:{
//	    		suo:[
//		    		{id:'12:20',name:'二宝',headSrc:'img/h3.jpg',content: '软萌软萌的'},
//			        {id:'15:02',name:'小宝',headSrc:'img/h1.jpg',content: '我也想养一个'}
//	    	]}
//	    }
//      
//  ];
        $scope.suoLists = [
            {
            	id:'12:20',
            	name:'二宝',
            	headSrc:'img/h3.jpg',
                content: '软萌软萌的'
            },
            {
                id:'15:02',
                name:'小宝',
                headSrc:'img/h1.jpg',
                content: '我也想养一个'
            }
        ];
         //点击按钮添加评论
	$scope.addSuoList = function(){
		if ($scope.text) {//避免空行
  			$scope.suoLists.push({
  				id:new Date(),
  				name:'RosePowder',
  				headSrc:'img/girl.jpg',
  				content:$scope.text
  			})
			
		}
		//更新数据后将输入框中的内容清空
		$scope.text = "";
	}
	//删除,遍历数据,如果某项数据的ID与当前传入的id相等,就从数据中移除这项数据
    $scope.remove = function(id){
    	 if(confirm("真的真的要删除评论吗？删除了不可恢复(-_-!)")){
			for(var i=0,len=$scope.suoLists.length;i<len;i++){
                if($scope.suoLists[i].id === id){
                    $scope.suoLists.splice(i,1);
                    return;
                }
            }
    	 }
    };
    }]);
    app.controller('picCollectionCtl', ['$scope','$http', function($scope,$http){
        $scope.content = "picCollection";
        $http({
				method:'GET',		//请求方式
				url:'img.json'		//请求文件
		}).success(function(response){		//请求成功
			 $scope.imgs = response;
		}).error(function(err){				//请求失败
			alert('服务器请求失败(-_-!),请刷新重试')
		})
        
    }]);
    app.controller('massageBoardCtl', ['$scope','$http', function($scope,$http){
        $scope.content = "massageBoard";
        $http({
				method:'GET',		//请求方式
				url:'test.json'		//请求文件
		}).success(function(response){		//请求成功
			 $scope.zujiLists = response;
		}).error(function(err){				//请求失败
			alert('服务器请求失败(-_-!),请刷新重试')
		})
		//后台添加信息到json文件
//		//点击按钮添加足迹
		$scope.addZuojiList = function(){
//			if ($scope.text) {//避免空行
//	  			$scope.toJSON(Option).push({
//	  				id:new Date(),
//	  				name:'RosePowder',
//	  				headSrc:'img/girl.jpg',
//	  				content:$scope.text
//	  			})
//				
//			}
//			//更新数据后将输入框中的内容清空
			$scope.text = "";
		}
//		//删除,遍历数据,如果某项数据的ID与当前传入的id相等,就从数据中移除这项数据
//	    $scope.removeZuoji = function(id){
//	    	 if(confirm("真的真的要删除评论吗？删除了不可恢复(-_-!)")){
//				for(var i=0,len=$scope.zujiLists.length;i<len;i++){
//	                if($scope.zujiLists[i].id === id){
//	                    $scope.zujiLists.splice(i,1);
//	                    return;
//	                }
//	            }
//	    	 }
//	    };
    }]);
    

//go top
;(function () {
	"use strict";
	$.fn.toTop = function (t) {
		var i = this,e = $(window),s = $('html, body'),
			n = $.extend({
				autohide: !0,   // 是否自动隐藏
				offset  : 420,  // 距离顶部多少的时候显示 回到顶部按钮
				speed   : 500,  // 动画速度
				position: !0,   // 是否定位
				right   : 15,   // 右边距离
				bottom  : 30    // 下边距离
			}, t);
		// 设置手型点击
		i.css({'cursor': 'pointer'});
		// 自动隐藏
		n.autohide && i.css({ 'display': 'none' });
		// 定位位置
		n.position && i.css({
			'position': 'fixed',
			'right'   : n.right,
			'bottom'  : n.bottom
		});
		// 回到顶部
		i.click(function () {
			s.stop().animate({
				scrollTop: 0
			}, n.speed);
		});
		// 回到顶部按钮是否隐藏显示
		e.scroll(function () {
			var o = e.scrollTop();
			// 若自动隐藏为 true, window 的滚动条高度 > 420 则显示, 否则隐藏
				n.autohide && ( o > n.offset ? i.fadeIn(n.speed) : i.fadeOut(n.speed) );
			});
	        return this;
	}
})(jQuery);
$(function () {$('#go_top').toTop();})



