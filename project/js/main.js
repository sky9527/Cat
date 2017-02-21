/**
 * Created by feique on 16/9/6.
 */
$(function () {
    $('#fullpage').fullpage({
        anchors:['home','abouts','services','solutions','clients','contacts'],
        menu:'#mymenu',
        navigation:'true',
        navigationPosition: 'right',
        scrollingSpeed: 800,
        afterLoad: function (anchorLink, index) {
            function page34(){
                $('.services-item').hover(function () {
                    $(this).children('p').css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        '-ms-transform': 'scale(1)',
                        '-o-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    })
                }, function () {
                    $(this).children('p').css({
                        '-webkit-transform': 'scale(0)',
                        '-moz-transform': 'scale(0)',
                        '-ms-transform': 'scale(0)',
                        '-o-transform': 'scale(0)',
                        'transform': 'scale(0)'
                    })
                });
                var width = null;
                function changeColor(width) {
                    if (width < 992) {
                        $('.services-item').hover(function () {
                            $(this).css({
                                backgroundColor: '#00c2ff'
                            }).children('i').css({
                                color: '#fff'
                            })
                        }, function () {
                            $(this).css({
                                backgroundColor: ''
                            }).children('i').css({
                                color: '#00c2ff'
                            })
                        })
                    } else {
                        $('.services-item').hover(function () {
                            $(this).css({
                                backgroundColor: ''
                            }).children('i').css({
                                color: '#00c2ff'
                            })
                        })
                    }
                }

                changeColor($(window).width());
                $(window).resize(function () {
                    width = $(window).width();
                    changeColor(width);
                });
            }
            if(index==1){
                $('.navbar-shiguang').css({backgroundColor:'rgba(0,0,0,0)'})
            }else{
                $('.navbar-shiguang').css({backgroundColor:'rgba(0,0,0,0.4)'})
            }
            if (index == 2) {
                $('.nav-tabs').css({visibility: 'visible', 'animation-name': 'bounceInRight'});
                $('.tab-content').css({
                    visibility: 'visible',
                    'animation-delay': '0.2s',
                    'animation-name': 'bounceInRight'
                })
            }
            if (index == 3) {
                $('.ser-title').css({visibility: 'visible', 'animation-name': 'rubberBand'});
                $('.ser-item').css({visibility: 'visible', 'animation-delay': '.4s', 'animation-name': 'bounceIn'})
                page34();
            }
            if (index == 4) {
                $('.sol-title').css({visibility: 'visible', 'animation-name': 'rubberBand'});
                $('.sol-item-top').css({
                    visibility: 'visible',
                    'animation-delay': '.4s',
                    'animation-name': 'bounceInDown'
                });
                $('.sol-item-bottom').css({
                    visibility: 'visible',
                    'animation-delay': '.4s',
                    'animation-name': 'bounceInUp'
                });
                page34();
            }
            if (index == 5) {
                $('.cli-title').css({visibility: 'visible', 'animation-name': 'rubberBand'});
                $('.cli-item').css({visibility: 'visible','animation-delay': '.4s', 'animation-name': 'flipInY'}).hover(function () {
                    $('img', this).css({
                        '-webkit-transform': 'scale(1.2)',
                        '-moz-transform': 'scale(1.2)',
                        '-ms-transform': 'scale(1.2)',
                        '-o-transform': 'scale(1.2)',
                        'transform': 'scale(1.2)'
                    })
                }, function () {
                    $('img', this).css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        '-ms-transform': 'scale(1)',
                        '-o-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    })
                })
            }
            if(index==6){
                $('.con-title').css({visibility: 'visible', 'animation-name': 'rubberBand'});
                $('.con-item').css({visibility: 'visible','animation-delay': '.4s', 'animation-name': 'flipInX'})
            }
        }
    })
});
$('.carousel').carousel({
    pause: "hover"
});
$('.navbar-respond').children('li').hover(function () {
    $(this).children().css({color: '#00c2ff'});
}, function () {
    $(this).children().css({color: '#fff'});
})
