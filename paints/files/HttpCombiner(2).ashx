function cartClick(){try{if($(".accDrop").attr("style")=="display: block;"){$(".accInfo ul.accDrop").hide()}$(".cart_img").addClass("active");$(".cart ul.accDropCart").toggle();$(".cart .accBtnup").toggle();$(".cart .accBtn").toggle()}catch(a){alert(a)}}var documentScroll=0;$(function(){$(".badge_count, .badge_popup").hover(function(){$(".badge_popup").show();$("#starloader").show();$(".badge_container_top").hide();$(".badge_container_mid").hide();getstarbadges();$("#starloader").hide();$(".badge_container_top").show();$(".badge_container_mid").show()},function(){$(".badge_popup").hide()});if($(".breadcrumb").hasClass("show_ezycolor")){$(".ezycolour_logo").removeClass("ezycolour_hidden")}$(".nav ul li.ideasEngine, .nav ul li.colourchef, .nav ul li.intiativesOffers, .nav ul li.Makeover, .nav ul li.Invites, .nav ul li.apexduracastallura").find("a").append('<img src="./../images/newIcon.png">');var b=0;var d;var e;$(".cart .cart_img, .cart .accBtnup, .cart .accBtn").live("click",function(){cartClick()});$(".signinBtn, .registerBtn, .star_login").click(function(){signinclick();$(".reg_lightbox input").each(function(f){})});$(".registerBtn").live("click",function(){$(".RegisterLink a.login_link").click()});$(".passwordTxt").click(function(){$(this).hide();$(this).next("input").focus()});$(".passwordBlur").blur(function(){if($(this).val()==""){$(this).parent().find(".passwordTxt").show()}else{return false}});$(".passwordBlur").focus(function(){$(this).parent().find(".passwordTxt").hide()});var c=$(".breadcrumb ul li").eq(2).text();$(".quickLinks ul li a").each(function(){if($(this).text()==c){$(this).parent().addClass("sel")}});$(".close_lightbox, .overlay_ins, .overlay, .cancel_link, .experienceClose a").click(function(){$(".overlay, .reg_lightbox, .inspiration-intro, .experience-intro").hide()});$(" .overlay, .cancel_link").click(function(){$(".overlay, .lightbox").hide();$(".experienceClose").click()});$(".loginLink a.login_link").click(function(){$("h2.lightbox_title").html("Sign In");$(".lightbox_top p").html("Login to get access to our complete range of home decor tools and services.");$(".registerBox").hide();$(".loginBox").show()});$(".RegisterLink a.login_link").click(function(){$("h2.lightbox_title").html("Register");$(".lightbox_top p").html("Register to get access to our complete range of home decor tools and services.");$(".registerBox").show();$(".loginBox").hide()});$(".header .nav ul li").not(".header .nav ul li ul li").hover(function(){var f=$(this).children("a").text();if(f=="Products"){$(this).find("span").css({right:"225px"})}else{$(this).find("span").css({left:"225px"})}$(this).children("ul").slideDown()},function(){$(this).children("ul").hide()});$(".header .nav ul li ul li ul li ul li").hover(function(){$(this).find("span").fadeIn()},function(){$(this).find("span").hide()});if(/webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){setInterval(function(){$("#panemain").jScrollPane()},200)}$(".wrapper, html").click(function(f){if($(f.target).closest(".select_room_opt .selectbox").length===0){$(".selectbox-wrapper").hide()}});$(".Categorybox").click(function(){$(".Catserach").toggle()});$(".wrapper",document).click(function(f){if($(f.target).closest(".Categorybox").length===0&&$(f.target).closest(".Catserach").length===0){$(".Catserach").hide()}});$(".Catserach ul li a").click(function(){var f=$(this).text();$(".Categorybox input").val(f);$(".Catserach").hide()});inspirationWall();$(".tabbed_content li").click(function(){$(".tab_content .tab_content_info").eq($(this).index()).show().siblings().hide();$(this).addClass("active_tab").siblings().removeClass("active_tab")}).eq(0).click();$(".view_largeImg, .comments").live("click",function(){var i=$(document).height();var f=$(".lightbox");var g=$(window).height();var k=$(window).width();var j=$(this).offset().top-150;var h=k/2-((parseInt(f.css("width")))/2);$("html,body").animate({scrollTop:j},500);f.css({left:h,top:j});$(".overlay_ins").show().css("height",i);$(".lightbox").show()});$(".close").click(function(){$(".overlay_ins, .lightbox, .overlay").hide();if(showMCP){showmcp("","");showMCP=false}});$(".lightbox ul").width($(".lightbox ul li").length*590);var a=$(".lightbox ul li").length;$(".prev").css("visibility","hidden");if(a<2){$(".next").css("visibility","hidden")}$(".prev").live("click",function(){$(".next").css("visibility","visible");if($(".lightbox ul li.active_slide").prevAll().length==1){$(this).css("visibility","hidden")}$(".lightbox ul li.active_slide").removeClass("active_slide").prev().addClass("active_slide").show().siblings().hide()});$(".next").live("click",function(){$(".prev").css("visibility","visible");if($(".lightbox ul li.active_slide").nextAll().length==1){$(this).css("visibility","hidden")}$(".lightbox ul li.active_slide").removeClass("active_slide").next().addClass("active_slide").show().siblings().hide()});$(".nav ul li.experiance a, .box a.exp_mag").click(function(){var i=$(this).attr("rel");$.get(i,function(k){$(".experience").html(k)});$(".overlay, .experience").fadeIn();setTimeout(function(){$("#experienceFlash").animate({top:"0px"}),800},300);setTimeout(function(){$(".experienceClose").fadeIn("slow")},1500);var f=$(".experience");var j=$(window).width();var g=j/2-(f.width()/2);f.css({left:g,top:"25px"});var h=$("body").offset().top;$("html, body").animate({scrollTop:h},300)});$(".experienceClose").live("click",function(){dataLayerPush("Experience Magic","Unload","Experience Magic");$.get("https://www.asianpaints.com/Handlers/ColourHeartbeatHandler.ashx?Section=ResetSessionValues",function(f){});$(".overlay, .experience").hide();$(".experience").html("")});$(".footerLinks ul li a, #movers_n_shakers li a, .colorFad, .get li a.linkArrow, .termsright a").not(".footerLinks ul.social li a, .footerLinks ul li.country a, .corporatewrap ul#movers_n_shakers li a, .footerLinks ul li.sitemap a").click(function(){var f=$(document).height();var g=$(this).attr("rel");$.get(g,function(h){$(".lightboxContainer3").html(h)});$(".overlay3, .popupbox3").show();$(".overlay3").css("height",f);setTimeout(function(){$("#panemain").jScrollPane()},1500)});$(".calculateLogic_btn a").live("click",function(){var f=$(document).height();var g=$(this).attr("rel");$.get(g,function(h){$(".lightboxContainer3").html(h)});$(".overlay3, .popupbox3").show();$(".overlay3").css("height",f);setTimeout(function(){$("#panemain").jScrollPane()},1500)});$(".footerLinks ul li a").not(".footerLinks ul.social li a, .footerLinks ul li.country a, .footerLinks ul li.sitemap a").click(function(){var h=$(window).width();var g=$(document).height();var f=g-785+"px";$(".popupbox3").css("left",(h-$(".popupbox3").width())/2+"px");$(".popupbox3").css("top",f);$("html,body").animate({scrollTop:f},1000)});$("#movers_n_shakers li a, .colorFad, .calculateLogic_btn a, .get li a.linkArrow, .termsright a").not(".corporatewrap ul#movers_n_shakers li a").live("click",function(){var g=$(window).width();var f=$(window).scrollTop()+50+"px";$(".popupbox3").css("left",(g-$(".popupbox3").width())/2+"px");$(".popupbox3").css("top",f)});$(".closebtn3, .overlay3").click(function(){$(".overlay3, .popupbox3").hide()});$(".corporatewrap ul#movers_n_shakers li a").click(function(){var g=$(document).height();var h=$(this).attr("rel");$.get(h,function(k){$(".lightboxContainer3").html(k)});$(".overlay3, .popupbox3").show();$(".overlay3").css("height",g);setTimeout(function(){$("#panemain").jScrollPane()},1500);var j=$(window).width();var i=$(document).height();var f=$("html,body").scrollTop();$(".popupbox3").css("left",(j-$(".popupbox3").width())/2+"px");$(".popupbox3").css("top",0);$("html,body").animate({scrollTop:0},1000)});$(".closebtn1, .overlay1").click(function(){$(".overlay1, .popupbox1").hide()});$(".cropImg a#firstImg1").click(function(){$("#ContentPlaceHolder1_fluImage1").focus()});$(".cropImg a#secondImg2").click(function(){$("#ContentPlaceHolder1_fluImage2").focus()});$(".left_content").find(".lastLevel").parent().parent().parent().addClass("noBg");$(".left_content").find(".sel").parent().parent("li").addClass("sel");$(".left_content").find(".sel").parent().parent("li").parent().parent("li").addClass("sel");$(".left_content").find(".sel").each(function(){$(this).parent("ul").show();$(this).children("ul").show()});$(".footerLinks ul li.country, .header .top-navigation .country").hover(function(){$(this).children("ul").slideToggle()});$(".wrapper",document).click(function(f){if($(f.target).closest(".footerLinks ul li.country, .header .top-navigation .country, .pagination>ul li").length===0&&$(f.target).closest(".footerLinks ul li.country ul, .header .top-navigation .country ul").length===0){$(".footerLinks ul li.country ul, .header .top-navigation .country ul").hide()}});setTimeout(function(){$("#panemain").jScrollPane()},1500);$(document).on("mousewheel",function(){setTimeout(function(){documentScroll=$(document).scrollTop()},200)});$(".contactbox .submit").live("click",function(){paintScroll()});$(".sortOrder ul li").click(function(){$(this).addClass("sel").siblings().removeClass("sel")})});function onLoadImg(){$(".loader").hide();$("#tagImgPopup, .large_img_box .favorite").css("visibility","visible")}function paintScroll(){window.scrollTo(0,documentScroll)}function clearText(a){if(a.defaultValue==a.value){a.value=""}else{if(a.value==""){a.value=a.defaultValue}}}function inspirationWall(){$(".image_block").hover(function(){$(this).children(".img_content").children(".image_info").stop(true,false).animate({bottom:"0"})},function(){var a=$(".img_content p").height()+50;$(this).children(".img_content").children(".image_info").stop(true,false).animate({bottom:0-a})})}function signinclick(){try{$(".signinbtn a").click();var g=$(document).height();var a=$(".reg_lightbox");var d=$(window).height();var i=$(window).width();var b=parseInt(a.css("height"));var f=i/2-((parseInt(a.css("width")))/2);var h=(d-b)/2;a.css({left:f,top:h+$(window).scrollTop()});$(".overlay").show().css("height",g);$(".reg_lightbox").show();$(".registerBox").hide();$(".loginBox").show();$("h2.lightbox_title").html("Sign In");$(".lightbox_top p").html("Log in to get access to our complete range of home decor tools and services.")}catch(c){alert(c)}}$(".extCompare").click(function(){window.open("/products/compare-product/index.html","name","width=950,height=700,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");return false});$(".metalCompare").click(function(){window.open("/products/compare-product/enamels-omparison-chart.html","name","width=950,height=700,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");return false});$(".interiorCompare").click(function(){window.open("/products/compare-product/interior-comparison-chart.html","name","width=950,height=700,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");return false});$(".woodCompare").click(function(){window.open("/products/compare-product/comparison-chart.html","name","width=950,height=700,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");return false});$(document).on("keydown",function(a){if(a.keyCode===27){$(".lightbox3, .overlay3,.reg_lightbox,.overlay_ins, .overlay, .lightbox, .validationsummary, .vSummary1, .validationsummary, .overlay_new, .overlayContent, .pop_layer, .transparent_layer, .effectsbox, .box_overlay, .Quizbox, .experience-intro").hide()}});$(".gry_click").click(function(){$(".login_div, .transparentLayer").hide();$(".footerLinks ul li a").eq(0).click();setTimeout(function(){$(".jspPane").animate({top:-2795+"px"},1000);$(".jspDrag").animate({top:203+"px"},1000)},800)});$(".termsncond").live("click",function(){setTimeout(function(){$(".jspPane, .jspDrag").animate({top:0+"px"},300)},500)});$(function(){$(".accordion h3").click(function(){$(this).toggleClass("active");$(this).next().slideToggle().parents(this);$(".accordion h3").not(this).removeClass("active").next().slideUp().removeClass("active")}).eq(0).click();$(".overlay").click(function(){homePopupClose()})});function homePopupClose(){$(".overlay, .experience-intro").hide()}function badgesNotification(){$("html,body").animate({scrollTop:0},600)}function getstarbadges(){var a="https://www.asianpaints.com/Handlers/StarBadgesHandler.ashx?Section=getStarBadges&time="+Math.random();$.getJSON(a,function(b){$("#ResTotBadge").html(b[0].TotalBadges);$("#spanTotalStar").html(b[0].TotalStar);$("#spangetInspired").html(b[0].getInspired);$("#spanTryandDecide").html(b[0].TryandDecide);$("#spanMakeItHappen").html(b[0].MakeItHappen);$("#spanLetsCelebrate").html(b[0].LetsCelebrate);$("#spanSocialmedia").html(b[0].Socialmedia)})}function showRegister(){$("h2.lightbox_title").html("Register");$(".lightbox_top p").html("Register to get access to our complete range of home decor tools and services.");$(".registerBox").show();$(".loginBox").hide()};﻿var checkRegistration = GetQueryStringParams("Register");

var windowSizeArray = ["width=500,height=500", "width=500,height=500", "width=500,height=500"];
$(document).ready(function () {
    $('#facebookSSO,#twitterSSO,#googleSSO').click(function (event) {
        var url = "https://www.asianpaints.com/single-sign-on/singlesignon.aspx?key=" + $(this).attr("title");
        var windowName = "singlesignon";
        var windowSize = windowSizeArray[$(this).attr("rel")];
        window.open(url, windowName, windowSize);
        event.preventDefault();
    });
    $('.validationsummary').click(function (event) {
        if ($(event.target).attr("class") == "validationsummary") {
            $(this).hide();

        }
    });
    $('.validationsummary div span').live("click", function (event) {
        $(this).parents(".validationsummary").hide();
        if (showMCP) { showmcp('', ''); showMCP = false; }
       // $('.badge_text').text('1 badge added').show(); setTimeout(function () { $('.badge_text').fadeOut() }, 4000);
    });
    if (checkRegistration == "1") {
        signinclick(); showRegister(); homePopupClose(); $(".overlay").show(); 
    }
});
function showGlobalError(strMessage) {
    $('#divGlobalMessage').css("display", "block");
    $('#divGlobalMessage').html('<div><h3>Please correct following information</h3><span></span></div><ul><li>' + strMessage + '</li></ul>');
}
function showGlobalMessage(strMessage, strHeading) {
    $('#divGlobalMessage').css("display", "block");
    $('#divGlobalMessage').html('<div><h3>' + strHeading + '</h3><span></span></div><ul><li style="list-style:none;">' + strMessage + '</li></ul>');
}


function CheckUserLoginStatus() {
    try {
        var isUserLoggedIn = false;
        var urlToProcess = "https://www.asianpaints.com/Handlers/UserHandler.ashx?Section=CheckLoggedInStatus";

        var jqxhr = $.ajax({ url: urlToProcess, async: false, cache: false })
    .done(function (data) {

        if (data == "True") {

            isUserLoggedIn = true;

        }
        else {
            signinclick();
            isUserLoggedIn = false;



        }
    }
     )
    .fail(function () { alert("Error " + jqxhr.statusText); isUserLoggedIn = false; });


        return isUserLoggedIn;
    } catch (e) {
    alert(e);
    }
   
}
function validateLogin() {
    var isUserLoggedIn = false;
    var urlToProcess = "https://www.asianpaints.com/Handlers/UserHandler.ashx?Section=CheckLoggedInStatus";
    var jqxhr = $.ajax({ url: urlToProcess, async: false, cache: false })
    .done(function (data) {
        if (data == "True") {
            isUserLoggedIn = true;
        }
        else {
            isUserLoggedIn = false;
        }
    }
     )
    .fail(function () { alert("Error " + jqxhr.statusText); isUserLoggedIn = false; });
    return isUserLoggedIn;
}
function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var strToReturn = "";
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            strToReturn = sParameterName[1];
        }

    }
    return strToReturn;

}


var Check;function inputt(){if($("input:checkbox, input:radio").prev("span").length==0){$("<span class='uncheked'></span>").insertBefore("input:checkbox, input:radio")}$("input:checkbox").live("click",function(){Check=$(this).is(":checked");if(Check){$(this).prev("span").addClass("cheked").removeClass("uncheked")}else{$(this).prev("span").addClass("uncheked").removeClass("cheked")}});$("input:radio").live("click",function(){Check=$(this).is(":checked");if($(this).parent().attr("class")=="radiobox"){if(Check){$(this).prev("span").addClass("cheked").removeClass("uncheked").siblings("span").addClass("uncheked").removeClass("cheked")}}if(Check){$(this).prev("span").addClass("cheked").removeClass("uncheked").parent().parent().siblings().find("span").addClass("uncheked").removeClass("cheked")}});$("input:checked").prev("span").addClass("cheked").removeClass("uncheked")}inputt();