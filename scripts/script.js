$(document).ready(function () {
    $("#logo").fadeIn(1000);
    $("a").fadeIn(2000);
    $(".content").fadeIn(2000);
});

$("#balazs").mouseenter(function () {
    $(".jpg_text_balazs").slideDown(500);
});

$("#balazs").mouseleave(function () {
    $(".jpg_text_balazs").slideUp(500);
});


$("#amanda").mouseenter(function () {
    $(".jpg_text_amanda").slideDown(500);
});

$("#amanda").mouseleave(function () {
    $(".jpg_text_amanda").slideUp(500);
});

$("input").mouseenter(function () {
    $(this).css({
        "background-color": "#cccccc",
    });
});
$("input").mouseleave(function () {
    $(this).css("background-color", "#ffffff");
});

$("button").mouseenter(function () {
    $(this).css({
        "color": "#fff",
        "background-color": "#000000",
        "scale": "1.1",
    });
});
$("button").mouseleave(function () {
    $(this).css({
        "color": "#000000",
        "background-color": "#fff",
        "scale": "1",
    });
});
$("button").click(function () {
    $(this).css({
        "scale": "1"
    });
});

$('.card_1').children().click(function (e) {
    e.preventDefault();
    const image = $(this).attr('href');
    $('#zoombg').css('display', 'flex')
    $('#zoombg').find('img').attr('src', image)
})

$('.card_2').children().click(function (e) {
    e.preventDefault();
    const image = $(this).attr('href');
    $('#zoombg').css('display', 'flex')
    $('#zoombg').find('img').attr('src', image)
})

$('#zoombg').on('click', function () {
    $(this).fadeOut(1000)
})

$(window).ready(function () {
    let width = $(window).width();
    if (width < 1024) {
        $("#logo").off('click');
        $("#logo").on('click', function () {
            $(".hidden").slideToggle(500);
        })
        $('.line').click(function () {
            $(".hidden").slideUp(500);
        })
    }
});

$('button').click(function (e) {
    e.preventDefault();

    let user = $('#user_name').val();
    let email = $('#email').val();
    let date = $('#date_time').val();
    let barber = $('#barbers').val();
    let service = $('#service').val();

    $.ajax({
        url: 'process.php',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            name: user,
            email: email,
            time: date,
            barber: barber,
            services: service
        }),

        success: function (response, status) {



            if (response.status == 'error') {
                $('#info').html(response.errors.map(err => `<li style = "color: red", "list-style: none">${err}</li>`).join(''));
            }
            else {
                $('#info').html(response.message);
            }
        }

    });

})

$('button').click(function (e) {
    e.preventDefault();
    $('#info_window').fadeIn(500)
    $('#info_window').css('display', 'flex')
    $('#info_window').find('#info')
});


$("button").click(function () {
    $(".sing_info").animate({
        top: '0px',
    }, 'slow');
});

$('#close').on('click', function (e) {
    e.preventDefault();
    $('#info_window').fadeOut(500)
})

$('#close').on('click', function (e) {
    e.preventDefault();
    $('.sing_info').animate({
        top: "1000px"
    }, 'slow')
})