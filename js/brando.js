;(function($){
    var Brando = {
        init:function(){
            this.scrollFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section4Fn();
            this.section5Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.modalFn();
            

        },
        scrollFn:function(){
            var $win = $(window);
            var $header = $('#header');
            var  $mainBtn = $('#header .main-btn');
            var $logoImg = $('#header .logo-box img');

            function scrollEventFn(){
               
                if($win.scrollTop() > 70){
                    $header.addClass('addBlack'); 
                    $logoImg.attr('src','./img/logo-travel.png');
                    
                }
                else if( $win.scrollTop() == 0 ) { 
                    $header.removeClass('addBlack');
                    $logoImg.attr('src','./img/logo-travel-footer.png');

                }
               
            }
           
           function scollFn(){
           
               if($(window).scrollTop() >= $('#section3').offset().top-700){
                $mainBtn.removeClass('addLine');   
                $mainBtn.eq(0).addClass('addLine');
               }
               if($(window).scrollTop() >= $('#section5').offset().top-700){
                $mainBtn.removeClass('addLine');
                $mainBtn.eq(1).addClass('addLine');
               }
                if($(window).scrollTop() >= $('#section6').offset().top-200){
                $mainBtn.removeClass('addLine');
                $mainBtn.eq(2).addClass('addLine');
               }
                if($(window).scrollTop() >= $('#section7').offset().top-200){
                $mainBtn.removeClass('addLine');
                $mainBtn.eq(3).addClass('addLine');
               }
                if($(window).scrollTop() >= $('#section9').offset().top-300){
                $mainBtn.removeClass('addLine');
                $mainBtn.eq(4).addClass('addLine');
               }
                if($(window).scrollTop() >= $('#section11').offset().top-200){
                $mainBtn.removeClass('addLine');
                $mainBtn.eq(5).addClass('addLine');
               }
               if( $(window).scrollTop() <= $('#section3').offset().top-200 ){
                $mainBtn.removeClass('addLine');
               }
           }

            $(window).scroll(function(){
                scrollEventFn();
                scollFn()
                
            });

        },
        headerFn:function(){
          var $smoothBtn = $('#header .smooth-btn');
          var  $mainBtn = $('#header .main-btn');
          var b=0;
          var $mobileBtn = $('#header .mobile-btn');
          var $nav       = $('#header #nav');
          var $bar = $('#header .bar');

            $smoothBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        b = idx-1;
                        var hash = $(this).attr('href');
                        $mainBtn.removeClass('addLine');
                        $mainBtn.eq(b).addClass('addLine');
                        console.log($mainBtn);
                        $('html,body').animate({scrollTop:$(hash).offset().top});     ///스크롤값 변경시 클래스 추가 구현. 
                      
                    }
                });
            })

            $mobileBtn.on({
                click:function(e){
                    e.preventDefault();
                    $nav.stop().slideToggle(300);
                    $bar.toggleClass('addMobile');
                }
            });

            //데스크탑
            function pcFn(){
                $nav.stop().show(0);
                $('nav').css({display:'inline-block'});
            }

  

       //모바일
       function mobileFn(){
            $bar.removeClass('addMobile');
           $nav.stop().hide(0);
       }

  

       //리사이즈
       function resizeFn(){
           if( $(window).innerWidth() > 1200){
               pcFn();
           }
           else{
            mobileFn();
           }
       }
       $(window).resize(function(){
           resizeFn();
       });

   
           

        },  ///새로 고침시 첫 화면으로 가도록 하기 

        section1Fn:function(){
            var $slideWrap = $('#section1 .slide-wrap');
            var $pageBtn = $('#section1 .page-btn');
            var cnt = 0;
            var $slideView = $('#section1 .slide-view');
            var $slideW = $('#section1 .slide-view').innerWidth();
            var $slideLeft = $('#section1 .slide-view .left');
            var $slideRight = $('#section1 .slide-view .right');
            var $boxW = $slideW/2;
            var setId = null;
            var setId2 = null;

            function resizeFn(){
                $slideW = $('#section1 .slide-view').innerWidth();
                $slideLeft = $('#section1 .slide-view .left');
                $slideRight = $('#section1 .slide-view .right');
                $slideWrap = $('#section1 .slide-wrap');
                $boxW = $slideW/2;
                $slideWrap.css({width:$slideW*5,marginLeft:-$slideW*1});
                $slideLeft.css({width:$boxW });
                $slideRight.css({width:$boxW });
                mainSlideFn();

            }
            resizeFn();

            $(window).resize(function(){
                resizeFn();
            });

            ///1.슬라이드함수 
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600, 'easeInOutExpo',function(){
                    if(cnt>2)cnt=0;
                    if(cnt<0)cnt=2;
                    $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
                pageBtnEventFn();
                                
            }

        
            //2.카운트 함수 
            //2-1 증가 카운트 
            function nextCountFn(){
                cnt++;
                mainSlideFn();
            }



            //2-2 감소 카운트 
            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }

            //3.버튼 이벤트 
            //3-1. 버튼 컬러 변화 
            function pageBtnEventFn(){
                $pageBtn.removeClass('scale');
                $pageBtn.eq(cnt>2?0:cnt).addClass('scale');

            }
            pageBtnEventFn();
            
            ///3-2 이벤트리스너 
            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        stopFn();
                        cnt=idx;
                        mainSlideFn();
                        
                    }
                });
            });

            //4.스와이프 

            $slideView.swipe({
                swipeLeft:function(){
                    stopFn();
                    nextCountFn();
                },
                swipeRight:function(){
                    stopFn();
                    prevCountFn();
                }
            });

            //5. 자동 슬라이드 
            function autoPlay() {
               
                  setId = setInterval(nextCountFn,4000);
               }

               autoPlay();
                    
          
               function stopFn(){
                   var c = 0;
                   clearInterval(setId);
                   clearInterval(setId2);
                   

                   setId2 = setInterval(function(){
                       c++;
                       if(c>=4){
                        clearInterval(setId2);
                        nextCountFn()
                        autoPlay();
                       }
                   },1000);
               }
            
   

        },
        section2Fn:function(){
           
            var $topBox = $('#section2 .top-box');
            var $bottomBox = $('#section2 .bottom-box');
            var imgW = $('#section2 .gallery').innerWidth();
            var imgH = imgW*0.544444444;
            var $lableBox = $('#section2 .lable-box');
         

                imgW = $('#section2 .gallery').innerWidth();
                imgH = imgW*0.544444444;

                $topBox.css({height:imgH});
                $bottomBox.css({height:imgH});
                $lableBox.css({width: imgH});


            function resize(){
                imgW = $('#section2 .gallery').innerWidth();
                imgH = imgW*0.544444444;

                $topBox.css({height:imgH});
                $bottomBox.css({height:imgH});
                $lableBox.css({width: imgH});
            }
            $(window).resize(function(){
                resize();
            });
            


           


        },
        
        section4Fn:function(){
            //a버튼 메뉴 누를시 아래에 서브가 보인다. 
            //bar 버튼은 addhide class추가 
            
            var $mainMenu = $('#section4 .main-menu');
            var $sub = $('#section4 .sub');
           
            var $crossBtn = $('#section4 .cross-btn');
       

            ///초기값 펼치기
            $mainMenu.eq(0).next().slideDown();
            $crossBtn.eq(0).addClass('addHide');

            $mainMenu.each(function(idx){
                $(this).on({
                    click:function(){
                       if($crossBtn.eq(idx).hasClass('addHide') == false ){
                        $sub.slideUp();
                        $crossBtn.removeClass('addHide');
                        $(this).stop().next().slideToggle(600);
                        $crossBtn.eq(idx).toggleClass('addHide');
                       }
                       else{
                        $(this).stop().next().slideToggle(600);
                        $crossBtn.eq(idx).toggleClass('addHide');
                       }
                        
                    }
                });
            })
           
           
        },
        section5Fn:function(){
            //네비 버튼을 누르면 이미지 줌효과 내면서 변경 
            //반응형을 하기 위해서 변수 설정 
            var $menuBtn = $('#section5 .menu-btn');
            var $galUl = $('#section5 .gallery-box > ul');
            var $galLi = $('#section5 .gallery-box .col');
            var $galCon = $('#section5 .gallery-box .gallery-content');

            var $winW  = $(window).innerWidth();
            var cols = 4;
            var n = $('#section5 .gallery-box .col').length;
            var rows = Math.ceil(n/cols); 
            var imgW   = $winW/cols;
            var imgH   = imgW*0.775;
            var btnNum = 0;

            

            //반응형 갤러리 함수 

            function resizeGalFn(){
                $winW=$(window).innerWidth()+11;
                if( $winW > 1200){
                    cols = 4;
                }
                else if ( $winW > 980){
                    cols = 3;
                }
                else if ( $winW > 780){
                    cols = 2;
                }
                else {
                    cols = 1;
                }
                imgW = $winW/cols;
                imgH = imgW*0.775;

                if(btnNum == 0){
                    n = 8;
                    rows = Math.ceil(n/cols);
                    $galUl.css({width:$winW,height:imgH*rows});
                    $galLi.css({width:imgW,height:imgH});
                    $galCon.removeClass('addZoom');

                    if(cols ==4){
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*2, top: imgH*0},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*3, top: imgH*0},300);

                        $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(5).stop().show().animate({left: imgW*1, top: imgH*1},300);
                        $galLi.eq(6).stop().show().animate({left: imgW*2, top: imgH*1},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*3, top: imgH*1},300);
                    }
                    else if(cols == 3){
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*2, top: imgH*0},300);

                        $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(4).stop().show().animate({left: imgW*1, top: imgH*1},300);
                        $galLi.eq(5).stop().show().animate({left: imgW*2, top: imgH*1},300);

                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*2},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*2},300);
                    }
                    else if(cols == 2){
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);

                        $galLi.eq(2).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*1, top: imgH*1},300);

                        $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*2},300);
                        $galLi.eq(5).stop().show().animate({left: imgW*1, top: imgH*2},300);

                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*3},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*3},300);
                    }
                    else{
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*0, top: imgH*2},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*3},300);
                        $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*4},300);
                        $galLi.eq(5).stop().show().animate({left: imgW*0, top: imgH*5},300);
                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*6},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*0, top: imgH*7},300);
                    }
                    $galCon.eq(0).addClass('addZoom');
                    $galCon.eq(1).addClass('addZoom');
                    $galCon.eq(2).addClass('addZoom');
                    $galCon.eq(3).addClass('addZoom');
                    $galCon.eq(4).addClass('addZoom');
                    $galCon.eq(5).addClass('addZoom');
                    $galCon.eq(6).addClass('addZoom');
                    $galCon.eq(7).addClass('addZoom');

                }
                else if( btnNum == 1){ //show(zoom in) : 134578  
                    n = 6;
                    rows = Math.ceil(n/cols);
                    $galUl.css({width:$winW,height:imgH*rows});
                    $galLi.css({width:imgW,height:imgH});
                    $galCon.removeClass('addZoom');
                    $galLi.eq(1).stop().hide();
                    $galLi.eq(5).stop().hide();

                    if( cols == 4){ 
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*2, top: imgH*0},300);
                        $galLi.eq(4).stop().show().animate({left: imgW*3, top: imgH*0},300);

                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*1},300);

                    }
                    else if ( cols == 3){
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*2, top: imgH*0},300);

                        $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(6).stop().show().animate({left: imgW*1, top: imgH*1},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*2, top: imgH*1},300);
                    }
                    else if ( cols == 2){
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);

                        $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(4).stop().show().animate({left: imgW*1, top: imgH*1},300);

                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*2},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*2},300);
                    }
                    else{
                        $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                        $galLi.eq(2).stop().show().animate({left: imgW*0, top: imgH*1},300);
                        $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*2},300);
                        $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*3},300);
                        $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*4},300);
                        $galLi.eq(7).stop().show().animate({left: imgW*0, top: imgH*5},300);
                    }
                    $galCon.eq(0).addClass('addZoom');
                    $galCon.eq(2).addClass('addZoom');
                    $galCon.eq(3).addClass('addZoom');
                    $galCon.eq(4).addClass('addZoom');
                    $galCon.eq(6).addClass('addZoom');
                    $galCon.eq(7).addClass('addZoom');

                }
                else if ( btnNum == 2 ){ //show(zoom in) : 1367
                    n = 4;
                    rows = Math.ceil(n/cols);
                    $galUl.css({width:$winW,height:imgH*rows});
                    $galLi.css({width:imgW,height:imgH});

                    $galLi.eq(1).stop().hide();
                    $galLi.eq(3).stop().hide();
                    $galLi.eq(4).stop().hide();
                    $galLi.eq(7).stop().hide();
                    $galCon.removeClass('addZoom');

                    switch(cols){
                        case 4 :
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*2, top: imgH*0},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*3, top: imgH*0},300);
                            break;
                        case 3 :
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*2, top: imgH*0},300);

                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            break;
                        case 2 :
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(2).stop().show().animate({left: imgW*1, top: imgH*0},300);

                            $galLi.eq(5).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*1, top: imgH*1},300);
                            break;
                         default:   
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(2).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*0, top: imgH*2},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*3},300)

                    }
                    $galCon.eq(0).addClass('addZoom');
                    $galCon.eq(2).addClass('addZoom');
                    $galCon.eq(5).addClass('addZoom');
                    $galCon.eq(6).addClass('addZoom');

                }
                else if( btnNum==3){ //show(zoom in) : 2578 
                    n=4;
                    rows = Math.ceil(n/cols);
                    $galUl.css({width:$winW,height:imgH*rows});
                    $galLi.css({width:imgW,height:imgH});
                    $galCon.removeClass('addZoom');
                    $galLi.eq(0).stop().hide();
                    $galLi.eq(2).stop().hide();
                    $galLi.eq(3).stop().hide();
                    $galLi.eq(5).stop().hide();

                    switch(cols){
                        case 4:
                            $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(4).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*2, top: imgH*0},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*3, top: imgH*0},300);

                            break;
                        case 3:
                            $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(4).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*2, top: imgH*0},300);

                            $galLi.eq(7).stop().show().animate({left: imgW*0, top: imgH*1},300);

                            break;
                        case 2:
                            $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(4).stop().show().animate({left: imgW*1, top: imgH*0},300);

                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*1},300);

                            break;
                        default:
                            $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(4).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*2},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*0, top: imgH*3},300);

                    }
                    $galCon.eq(1).addClass('addZoom');
                    $galCon.eq(4).addClass('addZoom');
                    $galCon.eq(6).addClass('addZoom');
                    $galCon.eq(7).addClass('addZoom');

                }
                else if( btnNum ==4){ //show(zoom in) : 124678
                    n= 6;
                    rows = Math.ceil(n/cols);
                    $galUl.css({width:$winW,height:imgH*rows});
                    $galLi.css({width:imgW,height:imgH});
                    $galCon.removeClass('addZoom');
                    $galLi.eq(2).stop().hide();
                    $galLi.eq(4).stop().hide();

                    switch(cols){
                        case 4:
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(3).stop().show().animate({left: imgW*2, top: imgH*0},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*3, top: imgH*0},300);

                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*1},300);

                            break;
                        case 3:
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);
                            $galLi.eq(3).stop().show().animate({left: imgW*2, top: imgH*0},300);

                            $galLi.eq(5).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*1, top: imgH*1},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*2, top: imgH*1},300);

                            break;
                        case 2:
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(1).stop().show().animate({left: imgW*1, top: imgH*0},300);

                            $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*1, top: imgH*1},300);

                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*2},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*1, top: imgH*2},300);


                            break;
                        default:
                            $galLi.eq(0).stop().show().animate({left: imgW*0, top: imgH*0},300);
                            $galLi.eq(1).stop().show().animate({left: imgW*0, top: imgH*1},300);
                            $galLi.eq(3).stop().show().animate({left: imgW*0, top: imgH*2},300);
                            $galLi.eq(5).stop().show().animate({left: imgW*0, top: imgH*3},300);
                            $galLi.eq(6).stop().show().animate({left: imgW*0, top: imgH*4},300);
                            $galLi.eq(7).stop().show().animate({left: imgW*0, top: imgH*5},300);

                    }
                    $galCon.eq(0).addClass('addZoom');
                    $galCon.eq(1).addClass('addZoom');
                    $galCon.eq(3).addClass('addZoom');
                    $galCon.eq(5).addClass('addZoom');
                    $galCon.eq(6).addClass('addZoom');
                    $galCon.eq(7).addClass('addZoom');

                }



            }
            resizeGalFn();
            setTimeout(resizeGalFn,100);
            
            //2. 윈도우 반응형 매서드 함수 적용
            $(window).resize(function(){
                resizeGalFn();
                setTimeout(resizeGalFn,100);
            })

            //3.갤러리 버튼 이벤트 
            $menuBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        btnNum = idx;
                        resizeGalFn();
                        $menuBtn.removeClass('addNav');
                        $(this).addClass('addNav');
                    }
                })
            });


          

        },
        section7Fn:function(){
            var $textBox = $('#section7 .text-box');
            var textW    = $('#section7 .text-box').innerWidth();
            var textH    = textW;

                 textW    = $('#section7 .text-box').innerWidth();
                textH    = textW;
                $textBox.css({height: textH});

            function resizeFn(){
                textW    = $('#section7 .text-box').innerWidth();
                textH    = textW;
                $textBox.css({height: textH});
            }
            $(window).resize(function(){
                resizeFn();
            });

           
            
        },
        section8Fn:function(){
            var $ul = $('#section8 .content ul > li > ul');
            var column0 = $(' #section8 .content > ul > li').eq(0);
            var column1 = $(' #section8 .content > ul > li').eq(1);
            var column2 = $(' #section8 .content > ul > li').eq(2);
            var column3 = $(' #section8 .content > ul > li').eq(3);
            

          var cnt1 = [0,0,0];
          var cnt2 = [0,0,0];
          var cnt3 = [0,0,0];
          var cnt4 = [0,0,0];   //누적을 위해 초기값 0
          var setId1 = [null,null,null];
          var setId2 = [null,null,null];
          var setId3 = [null,null,null];
          var setId4 = [null,null,null];
          var timer = 2;
          var num1 = [];
          var num2 = [];
          var num3 = [];
          var num4 = [];  //배열 초기화
          var t = 0;


          column0.find('.col').each(function(idx){
            num1[idx] = $(this).data('number');
         
          });

          column1.find('.col').each(function(idx){
            num2[idx] = $(this).data('number');
            
          });

          column2.find('.col').each(function(idx){
            num3[idx] = $(this).data('number');
           
          });
          column3.find('.col').each(function(idx){
            num4[idx] = $(this).data('number');
            
          });

            //패럴럭스
          $(window).scroll(function(){

            if($(window).scrollTop() >= $('#section8').offset().top-400  ){
              if(t==0){
                t=1;  //변수를 수정해서 다음에 조건 만족 못하게 변경.
               
                $('#section8 .content > ul').addClass('addCounter');
                setTimeout(countFn,1000);
              }         
            } 
            else{
              t=0;
              cnt1 = [0,0,0];
              cnt2 = [0,0,0];
              cnt3 = [0,0,0];
              cnt4 = [0,0,0];
              setTimeout(formatFn,100); 
              $('#section8 .content > ul').removeClass('addCounter');
            }
           });

           
            function formatFn(){
                $ul.css({top:0});
              }
              
               setTimeout(formatFn,500);
                  
    
              setTimeout(countFn,3000);
                 
              
              function countFn(){
              ///1열의 3열 780
              setId1.forEach(function(el,idx){
                setId1[idx] = setInterval(function(){
                  cnt1[idx]++;
                  if( cnt1[idx] > 65*num1[idx] ){
                    clearInterval(setId1[idx]);
                  }
                  else{
                    column0.find('ul').eq(idx).css({top:-cnt1[idx] }); 
                  }    
                },timer);
              });
        
              //2열
    
              setId2.forEach(function(el,idx){
                setId2[idx] = setInterval(function(){
                  cnt2[idx]++;
                  if( cnt2[idx] > 65*num2[idx] ){
                    clearInterval(setId2[idx]);
                  }
                  else{
                    column1.find('ul').eq(idx).css({top:-cnt2[idx] }); 
                  }    
                },timer);
              });
            
             
    
              //3열
              setId3.forEach(function(el,idx){
                setId3[idx] = setInterval(function(){
                  cnt3[idx]++;
                  if( cnt3[idx] > 65*num3[idx] ){
                    clearInterval(setId3[idx]);
                  }
                  else{
                    column2.find('ul').eq(idx).css({top:-cnt3[idx] }); 
                  }    
                },timer);
              });
             
    
              ///4열
    
              setId4.forEach(function(el,idx){
                setId4[idx] = setInterval(function(){
                  cnt4[idx]++;
                  if( cnt4[idx] > 65*num4[idx] ){
                    clearInterval(setId4[idx]);
                  }
                  else{
                    column3.find('ul').eq(idx).css({top:-cnt4[idx] }); 
                  }    
                },timer);
              });
            }
              

            
        },
        section9Fn:function(){
            var $blogView = $('#section9 .blog-view');
            var $blogWrap = $('#section9 .blog-wrap');
            var cnt=0;

            var winW = $(window).innerWidth();
            var $viewW  = $('#section9 .blog-view').innerWidth();
            var $blogUl = $('#section9 .blog-view > ul');
            var $blogLi = $('#section9 .blog-view > ul > li');
            var cols = 4;
            var $blogLiW = $viewW/cols;
            var setId = null;
            var setId2 = null;
            

            function resizeFn(){
                winW = $(window).innerWidth();
                $viewW  = $('#section9 .blog-view').innerWidth();
                $blogUl = $('#section9 .blog-view > ul');
                $blogLi = $('#section9 .blog-view > ul > li');
                cols = 4;
                $blogLiW = $viewW/cols;
               


                if(winW > 1200){
                    cols = 4;
                }
                else if (winW >800){
                    cols =3;
                }
                else if (winW > 700){
                    cols =2;
                }
                else {
                    cols = 1;
                }
                $blogLiW = $viewW/cols;
                $blogLi.css({width: $blogLiW  });
                $blogUl.css({width: $blogLiW *7 });
            }
            resizeFn();
            setTimeout(resizeFn,100);
           
            $(window).resize(function(){
                resizeFn();
                setTimeout(resizeFn,100);
            });

            //1.메인 슬라이드 함수 
            function blogSlideFn(){
                if(cnt>3)cnt=3;
                if(cnt<0)cnt=0;
                $blogWrap.stop().animate({left:-$blogLiW*cnt},500);
            }
            //2.카운트 증가 함수 
            function nextCntFn(){
                cnt++;
                blogSlideFn();
            }
            //2-2.카운트 감소 함수 
            function prevCntFn(){
                cnt--;
                blogSlideFn();
            }
            //3. 터치 스와이프 
            $blogView.swipe({
                swipeLeft:function(e){
                    e.preventDefault();
                    stopFn();
                    nextCntFn();
                   
                },
                swipeRight:function(e){
                    e.preventDefault();
                    stopFn();
                    prevCntFn();
                   
                }
            });

            //4.자동 슬라이드 
            function playFn(){
                setId = setInterval(nextCntFn,8000);
            }
            playFn();

            function stopFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);

                setId2 = setInterval(function(){
                    
                    t++;
                    if(t>=4){
                        clearInterval(setId2);
                        nextCntFn();
                        playFn();

                    }
                },1000);
            }

             

        },
        section10Fn:function(){
            //호텔 이름 버튼 누를시 내용 변화 이벤트 
            var $nameBtn =  $('#section10 .name-btn');
            var $hotel   =  $('#section10 .hotel');
            var $boder   =  $('#section10 .boder');
            var $arrow   =  $('#section10 .arrow');
            var n = 0;

            $boder.eq(0).stop().addClass('addBoder');
            $arrow.eq(0).stop().addClass('addArrow');

            $nameBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        n = idx;
                        $boder.stop().removeClass('addBoder');
                        $boder.eq(n).stop().addClass('addBoder');
                        $arrow.stop().removeClass('addArrow');
                        $arrow.eq(n).stop().addClass('addArrow');
                        $hotel.stop().fadeOut(0);
                        $hotel.eq(n).stop().fadeIn(300);

                    }
                });
            });

            $(window).scroll(function(){

                if($(window).scrollTop() >= $('#section10').offset().top-600){
                    $('#section10 .content').addClass('addShow');
                }
                else{
                    $('#section10 .content').removeClass('addShow');
                }
            });




        },
        modalFn:function(){
            var $modal = $('#modal');
            var $closeBtn = $('#modal .close-btn');
            var $galCon = $('#section5 .gallery-box .gallery-content');
            var h4 = $('#section5 .gallery-box .gallery-content h4');
            var h5 = $('#section5 .gallery-box .gallery-content h5');
            var $modalH2 = $('#modal .left-content h2'); 
            var $modalH5 = $('#modal .left-content h5');
            var modalLeftbox = $('#modal .left-box');
            var arr = [ 'url(./img/hawa.jpg)', 'url(./img/peru.jpg)','url(./img/thailand.jpg)',
                        'url(./img/ast.jpg)', 'url(./img/sw.jpg)' ,'url(./img/nyc.jpg)',
                        'url(./img/south.jpg)', 'url(./img/iceland.jpg)'     ]
                                                                        

              //모달창 보여라 

              $galCon.each(function(idx){
                  $(this).on({
                      click:function(e){
                        e.preventDefault();
                        var txt = h4.eq(idx).text();
                        var txt2 = h5.eq(idx).text();
                        $modal.show();
                        $modalH2.text(txt);
                        $modalH5.text(txt2);
                        modalLeftbox.css({'background-image':arr[idx]});
                       
                        $('html').addClass('addScroll');
                      }
                  })
              });
          
            $closeBtn.on({
                click:function(e){
                    e.preventDefault();
                    $modal.hide();
                    $('html').removeClass('addScroll');
                }
            });
           



            

          
        }
    }

    Brando.init();

})(jQuery);