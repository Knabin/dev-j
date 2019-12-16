(function () {
    var isBigSize = false;

    $("#test1").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>소통의 귀재</b><br>원활한 커뮤니케이션을 주도할 수 있는 사람에게 주어지는 칭호입니다.'
    });

    $("#test2").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>여행의 길잡이</b><br>올바른 방향으로 바르게 이끄는 사람에게 주어지는 칭호입니다.'
    });

    $("#test3").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>무한 피드백</b><br>꾸준히 자신을 돌아보며 부족한 부분을 고치는 사람에게 주어지는 칭호입니다.'
    });

    $("#test4").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>리더의 선글라스</b><br>바람직한 리더의 자질이 있는 사람에게 주어지는 칭호입니다.'
    });

    $("#test5").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>미래의 스타</b><br>미래지향적인 사람에게 주어지는 칭호입니다.'
    });

    $("#test6").tooltipsy({
        offset: [10, 0],
        css: {
            'font-size': '0.6em',
            'padding': '10px',
            'max-width': '200px',
            'color': '#fff',
            'background-color': '#000',
            '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
            'text-shadow': 'none'
        },
        content: '<b>우직한 소나무</b><br>꾸준하게 노력하는 사람에게 주어지는 칭호입니다.'
    });

    $(document).ready(function () {
        $("body").css("display", "none");
        $("body").fadeIn(2000);
        $('#mask').css({
                height: $(window).height(),
                width: $(window).width()
            })
            .fadeIn('fast', function () {
                $('body').css('background-image', 'url(images/bg.gif)');
                $('#mask').fadeOut('slow');
            });
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // 모바일 환경X
            var scroll = new fullScroll({
                displayDots: true,
                dotsPosition: 'left',
                animateTime: 1.0,
                animateFunction: 'ease'
            });
            $('#btn_detail').click(function (event) {
                window.location.hash = "#1";
            });

            $('#btn_quest').click(function (event) {
                window.location.hash = "#2";
            });

            if (window.innerWidth >= 756) {
                $('.dots').css({
                    display: "block"
                });
                isBigSize = true;

            } else {
                document.body.style.overflowY = "visible";
                $('.dots').css({
                    display: "none"
                });
                $("header").position('fixed');
                isBigSize = false;
            }

        } else {
            document.body.style.overflowY = "visible";
            
            $('.dots').css({
                display: "none"
            });
            $("header").position('fixed');
            isBigSize = false;
        }

        $(window).resize(function () {
            if (window.innerWidth >= 756) {
                if (!isBigSize) {
                    window.location.hash = "#0";
                    $('html,body').animate({
                        scrollTop: 0
                    }, 250);
                    document.body.style.overflowY = "hidden";
                    $('.dots').css({
                        display: "block"
                    });

                    isBigSize = true;
                }
            } else {
                if (isBigSize) {
                    $('html,body,#main').animate({
                        scrollTop: 0
                    }, 250);
                    document.body.style.overflowY = "visible";
                    $('.dots').css({
                        display: "none"
                    });
                    window.location.hash = "#0";
                    this.fullScroll.changeCurrentPosition;
                    $("header").position('fixed');
                    isBigSize = false;
                }
            }

        });

        // hide the menu when the page load
        $("#navigation-list").hide();
        // when .menuBtn is clicked, do this
        $("#mobile_menu").click(function () {
            // open the menu with slide effect
            if ($("#navigation-list").is(':visible') == false) {
                $("#m_menu").css('backgroundColor', 'white');
                $("#navigation-list").slideDown("fast");
            } else {
                $("#m_menu").css('backgroundColor', 'inherit');
                $("#navigation-list").hide();
            }

        });
        $(".m_move").on("click", function (e) {
            $("#mobile_menu").trigger('click');
            e.preventDefault();
            var thisTarget = $(this).attr("href");
            console.log(thisTarget + ", " + $(thisTarget).offset().top);
            $('html,body').animate({
                scrollTop: '+=' + $(thisTarget).offset().top
            }, 400);
            $("header").position('fixed');
        });

    });
})(jQuery);