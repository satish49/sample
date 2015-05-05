var chkIsFirstLoad = 0;
var selCategoryTab;
var selLeftSideColour;
var selSearchKeyword;
var selCategoryValue;

var selAddFavColourCode;
var selAddFavColourFamily;
var selAddFavColourRGB;

var selAddFavColourId;
var selAddFavColourPageNo;
var selAddFavColourShadePos;
var selAddFavColourIsItemBoth;
var selval = 0;
var inputValue;
var webSiteHostpathname;
AsyncFalse();
$(document).ready(
function () {


    chkIsFirstLoad = 0;
    webSiteHostpathname = "https://www.asianpaints.com";
    AddSnapItItems();
    BindMyFavCount();
    BindCategoryTabsClick();
    BindSearchClick();
    BindResetClick();
    BindFavoritesClick();
    BindRadioClick();

    BindFavoritesWithoutLogin();
	
	
 

    $('#ContentPlaceHolder1_txtSearch').keypress(function (e) {
        if (e.which == 13) {
            jQuery(this).blur();
            $('#lnkButtonSearch').click();
            return false;
        }
    });
    $('#ContentPlaceHolder1_txtSearch').keydown(function (e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
                e.preventDefault();
            }
        }
    });

    chkIsFirstLoad = 1;
    $(".spectra_colour_list li").live('click', function () {
        $(this).addClass("active_shade").siblings().removeClass("active_shade");
        inputValue = $(this).find('input').val();        
        GetSelectedValuesLeftListRadioBox();
    });
});

function AsyncFalse() {
    $('#UpdateProgress1').show();
    $.ajaxSetup({
        async: false
    });
}
function AsyncTrue() {
    $.ajaxSetup({
        async: true
    });
    $('#UpdateProgress1').hide();
}
 	
 


function BindCategoryTabsClick() {
	$("#JSDetailsList").empty();
document.getElementById('loadingImage').style.display = 'block';
    if (chkIsFirstLoad == 0) {
        selCategoryTab = $('#CategoryHeadTabs li:first-child').text();
    }
    $('#CategoryHeadTabs li').click(function () {

        if ($(this).index() == '0') {
            selCategoryTab = $(this).text();
            //$(document).attr("title", "Wall Colours, Wall Colour Paints, Colours by Family - Asian Paints");
        }
        else if ($(this).index() == '1') {
            //selCategoryTab = $(this).text();            
            selCategoryTab = 'Aspira';
            //$(document).attr("title", "Glitter Wall Paint, Glitter Paint Colours - Asian Paints");
        }
        else if ($(this).index() == '2') {
            selCategoryTab = $(this).text();

            //$(document).attr("title", "Special Colour Shades, Special Shades - Asian Paints");
        }
        else if ($(this).index() == '3') {
            selCategoryTab = $(this).text();
            //$(document).attr("title", "Ultima Metallics Colour Shades - Asian Paints");
        }
        else if ($(this).index() == '4') {
            selCategoryTab = $(this).text();
            //$(document).attr("title", "Wood Paint Colours, Wood Colour Palette - Asian Paints");
        }
        selCategoryValue = selCategoryTab;
        $(this).addClass('active').siblings().removeClass('active');
        BindLeftColours();
        FillGridDetailsColours();

        $(".goBackMain").hide();


    });


}

function BindLeftColours() { 
$("#JSDetailsList").empty();
document.getElementById('loadingImage').style.display = 'block'; 
    AsyncFalse();
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillLeftList&QlstCategoryTab=" + selCategoryTab;

    $.getJSON(url, function (data) {
        var options = "";
        var defChecked = 0;
        var justCnt = 0;
        for (k in data) {
            if (data[k].CSF_ColourFamily != null) {
                justCnt = justCnt + 1;
                var actualCSSClass = data[k].CSF_ColourFamily.toLowerCase().replace(/ /g, '').split("&");
                if (defChecked == 0) {
                    selLeftSideColour = data[k].CSF_ColourFamily;
                    var islast = "";
                    if (justCnt == data.length) {
                        islast = "<li class='" + actualCSSClass[0] + " last active_shade'>";
                    }
                    else {
                        islast = "<li class='" + actualCSSClass[0] + " active_shade'>";
                    }
                    options += islast +
                    "<div class='list_data'>" +
                    "<span class='spectra_bullet cheked'></span>" +
                    "<input id='" + data[k].CSF_ColourFamily + "' name='lftradio' value='" + data[k].CSF_ColourFamily + "' type='radio' " + "  />" +
                    "<label for='" + data[k].CSF_ColourFamily + "'>" + data[k].CSF_ColourFamily + "</label>" +
                    "</div>" +
                    "</li>";
				
                    if (selCategoryTab == 'Special Shades') {
                        selCategoryValue = data[k].CSF_ColourFamily;
                    }
                }
                else {
                    var islast = "";
                    if (justCnt == data.length) {
                        islast = "<li class='" + actualCSSClass[0] + " last'>";
                    }
                    else {
                        islast = "<li class='" + actualCSSClass[0] + "'>";
                    }
                    options += islast +
                    "<div class='list_data'>" +
                    "<span class='spectra_bullet uncheked'></span>" +
                    "<input id='" + data[k].CSF_ColourFamily + "' name='lftradio' value='" + data[k].CSF_ColourFamily + "' type='radio' " + "  />" +
                    "<label for='" + data[k].CSF_ColourFamily + "'>" + data[k].CSF_ColourFamily + "</label>" +
                    "</div>" +
                    "</li>";
					
                }
                defChecked = 1;

            }
        }
        //document.write(options + "<br/>");
        $("#JSLeftColourList").empty();        
        if (selCategoryTab == 'Aspira') {
            selval = 0;
        }
        if (selCategoryTab == 'Aspira' || selCategoryTab == 'Glitter') {
            $("#JSLeftColourList").html("<div class='acorList first'><h3>Aspira <span class='sText'>(Exclusive Le Corbusier Shades)</span></h3></div>");
            $("#JSLeftColourList").append("<div class='acorList'><h3>Glitter</h3><ul class='spectra_colour_list acorData'>" + options + "</ul></div>");
            acorList();
        }
        else {

            $("#JSLeftColourList").html("<ul class='spectra_colour_list'>" + options + "</ul>");
        }

    });
    AsyncTrue();
}

function GetSelectedValuesLeftListRadioBox() {
    //selLeftSideColour = $('input:radio[name=lftradio]:checked').val();
    selLeftSideColour = inputValue;
    if (selCategoryTab == 'Special Shades') {
        selCategoryValue = selLeftSideColour;
    }    
    FillGridDetailsColours();
    $(".goBackMain").hide();
}


function FillGridDetailsColours() {
	$("#JSDetailsList").empty();
	alert(document.getElementById('loadingImage').style.display);
	document.getElementById('loadingImage').style.display = 'block';
	
	alert(document.getElementById('loadingImage').style.display);
   AsyncFalse();
    //selLeftSideColour = selLeftSideColour.replace("&", "@");
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillGridList&QlstCategoryTab=" + selCategoryTab + "&QlstColourFamily=" + selLeftSideColour;
 
 if(selLeftSideColour!="TRACTOR SYNTHETIC & ACRYLIC DISTEMPER / TRACTOR EMULSION")
 {
    var filenam12="colors/"+selCategoryTab+"_"+selLeftSideColour+".txt";

	var options = "";
	var ckMsg = "";
	
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//alert(xmlhttp.responseText);
			var ss=xmlhttp.responseText;
			ckMsg = 1
			options=ss;
		
			$("#JSDetailsList").empty();
			$("#JSDetailsList").html("<ul class='spectra_list'>" + options + "</ul>");
			POPUpFunction();
			
			 $(".spectra_popup").hide();
			$(".spectra_popupsearch").hide();
			$(".spectra_popupfavorites").hide();
			$(".goBackMain").hide();

			////Following is for hide the search div.
			$("#JSSearchResult").empty();
			$('#JSSearchResult').hide();
			$('.spectra_content_left, .spectra_content_right').show();
			$("#JSListFavorites").empty();
			$('#JSListFavorites').hide();
			$("#JSListFavoritesControlsSavePrint").empty();
			$("#JSListFavoritesControlsSavePrint").hide();
		}
	  }
	
		var filename="colors/"+selCategoryTab+"_"+selLeftSideColour+".txt";
		xmlhttp.open("GET",filename,true);
		xmlhttp.send();
 }
 else
 {
	// alert("no tractor");
	 $("#JSDetailsList").empty();
     $("#JSDetailsList").html("<h2>No colour found in the category.</h2>");
 }
 
 
 
	//	$("#mydata").html("var "+selCategoryTab+"_"+selLeftSideColour+"=[");
		//alert(data);
     /*   
	  $.getJSON(url, function (data) {
        var options = "";
        var ckMsg = "";
	 for (k in data) {
			//alert('hi');
            if (data[k].CSF_ColourFamily != null) {                
                ////The following check is to display 'Plus popup' only in 'Colours by Family' category.
                if (selCategoryTab.toLowerCase() == "Colours by Family".toLowerCase()) {
                    ckMsg = 1;                    
                    options += "<li>" +
                  "<div class='shade_container'> <span  draggable='true' ondragstart='drag(event)' class='colour_code'  style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> <a class='plus_ico' onclick='GetPlusIconClick(" + data[k].CSF_Id + "," + data[k].CSF_PageNo + "," + data[k].CSF_ShadePosition + ");'></a></div>" +                  
                  "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" +
                  "</li>";
			//	  	$("#mydata").append("{ 'CSF_Red':'"+data[k].CSF_Red +"', 'CSF_Green':'"+data[k].CSF_Green+"', 'CSF_Blue':'"+data[k].CSF_Blue+"', 'CSF_ShadeCode':'"+data[k].CSF_ShadeCode+"', 'CSF_ShadeName':'"+data[k].CSF_ShadeName+"'}");
				//  $("#mydata").append("<ul>"+"<li>"+data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue+"</li>"+"<li>"+"</li>"+"<li>"+data[k].CSF_ShadeCode + "," + data[k].CSF_ShadeName +"</li>"+"</ul>");
				}
                else {
                    ckMsg = 1;                    
                    options += "<li>" +
                  "<div class='shade_container'> <span draggable='true' ondragstart='drag(event)' class='colour_code'  style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickNonItems(" + data[k].CSF_Id + "," + data[k].CSF_PageNo + "," + data[k].CSF_ShadePosition + ");'></a></div>" +
                  "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" +
                  "</li>";
		//		  	$("#mydata").append("{ 'CSF_Red':'"+data[k].CSF_Red +"', 'CSF_Green':'"+data[k].CSF_Green+"', 'CSF_Blue':'"+data[k].CSF_Blue+"', 'CSF_ShadeCode':'"+data[k].CSF_ShadeCode+"', 'CSF_ShadeName':'"+data[k].CSF_ShadeName+"'}");
			
				//  $("#mydata").append("<ul>"+"<li>"+data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_ShadePosition+"</li>"+"<li>"+data[k].CSF_ShadeCode + "," + data[k].CSF_ShadeName +"</li>"+"</ul>");
				
                }
            }
        }*/
	//	$("#mydata").append("]");
        // if (ckMsg == 1) {
			// //alert("ckMsg=111");
            // $("#JSDetailsList").empty();
			// //alert(options);
            // $("#JSDetailsList").html("<ul class='spectra_list'>" + options + "</ul>");
            // POPUpFunction();
        // }
        // else {
			// //alert("ckMsg=0sa");
            // $("#JSDetailsList").empty();
            // $("#JSDetailsList").html("<h2>No colour found in the category.</h2>");
        // }
        // ////Following is for if popup window already opened then close it.
        // $(".spectra_popup").hide();
        // $(".spectra_popupsearch").hide();
        // $(".spectra_popupfavorites").hide();
        // $(".goBackMain").hide();

        // ////Following is for hide the search div.
        // $("#JSSearchResult").empty();
        // $('#JSSearchResult').hide();
        // $('.spectra_content_left, .spectra_content_right').show();
        // $("#JSListFavorites").empty();
        // $('#JSListFavorites').hide();
        // $("#JSListFavoritesControlsSavePrint").empty();
        // $("#JSListFavoritesControlsSavePrint").hide();


   // });
    AsyncTrue();
	document.getElementById('loadingImage').style.display = 'none';
}


function GetPlusIconClickNonItems(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpListNonItems&QlstColurId=" + ColourId;

    $.getJSON(url, function (data) {
        var optionsBigImg = "";

        var isLarge = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";

        var optionsListCCloseTxt = "";
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {

                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "0";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        //Following link is hide because it will only appear in 'Colour by family'
                        // IsAvailableLink = "<a href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "' class='view_shade'>View products in this colour</a>";
                       //Edited by Jamil 23/08/2013
                        IsAvailableLink = "<a href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                       // alert(selCategoryTab);
                        //IsAvailableLink = "";
                    }

                    /////Here we are hiding AddTOFav if already saved.
                    var IsExistAddFav = "";
                    var urlfav = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillToCheckFavAlready&QlstShadeCode=" + data[k].CSF_ShadeCode;
                    $.getJSON(urlfav, function (dataFav) {
                        for (i in dataFav) {
                            IsExistAddFav = dataFav[i].CSF_ShadeName;
                        }
                    });

                    var ToDisplayAddToIcon = "";
                    if (IsExistAddFav == "N") {
                        ToDisplayAddToIcon = "<a href='javascript:ToCheckOnlineonFavorite();'><img src='./images/add-to-fav.png' class='fav_ico' /></a>";
                    }

                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'>" + ToDisplayAddToIcon + " </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" + IsAvailableLink;
                }
            }
        }

        $("#JSPOPupList").empty();
        $("#JSPOPupList").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>" + optionsBigImg + optionsListCCloseTxt);
        POPUpFunction();
    });
    AsyncTrue();
}

function GetPlusIconClick(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();    
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpList&QlstColurId=" + ColourId + "&QlstPageNo=" + clrPageNo + "&QlstShadePosition=" + clrShadePosition + "&QlstColourFamily=" + selLeftSideColour;

    $.getJSON(url, function (data) {
        var optionsBigImg = "";
        var optionsSimilerColImageStartCommonTxt = "";
        var optionsSimilerColImage = "";
        var optionsSimilerColImageLastCommonTxt = "";

        var optionsListColImageStartCommonTxt = "";
        var optionsListColImage = "";
        var optionsListColImageLastCommonTxt = "";

        var isLarge = "";
        var isSimilerLarge = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";
		var optionsListCCloseTxt = "";;
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {

                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "1";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        IsAvailableLink = "<a  href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                    }

                    /////Here we are hiding AddTOFav if already saved.
                    var IsExistAddFav = "";
                    var urlfav = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillToCheckFavAlready&QlstShadeCode=" + data[k].CSF_ShadeCode;
                    $.getJSON(urlfav, function (dataFav) {
                        for (i in dataFav) {
                            IsExistAddFav = dataFav[i].CSF_ShadeName;                            
                        }
                    });
                   
                    var ToDisplayAddToIcon = "";
                    if (IsExistAddFav == "N") {
                        ToDisplayAddToIcon = "<a href='javascript:ToCheckOnlineonFavorite();'><img src='./images/add-to-fav.png' class='fav_ico' /></a>";
                    }

                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'>" + ToDisplayAddToIcon + " </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> " + IsAvailableLink;
                }
                else if (data[k].CSF_IsPopUpBigImg == 'N') {
                    isSimilerLarge = 1;
                    optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list border'>";
                    optionsSimilerColImageLastCommonTxt = "</ul>";
                    optionsSimilerColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
						
                }
                else if (data[k].CSF_IsPopUpBigImg == 'L') {
                    isLarge = 1;
                    optionsListColImageStartCommonTxt = "<p>Colours that complement chosen colour are</p><ul class='spectra_list'><div class='holder'><div id='panemain' class='scroll-pane' style='overflow:auto; width:330px; height:100px;  '>";
                    optionsListColImageLastCommonTxt = "</div></div></ul>";
                    optionsListColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
						
                }
            }
        }

        ////Following is to check if 'Similer or complement colour list' is not available in DB.
        if (isSimilerLarge == 1 && isLarge != 1) {
            optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list'>";
        }

        $("#JSPOPupList").empty();
        $("#JSPOPupList").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>"+ optionsBigImg + optionsSimilerColImageStartCommonTxt + optionsSimilerColImage + optionsSimilerColImageLastCommonTxt + optionsListColImageStartCommonTxt + optionsListColImage + optionsListColImageLastCommonTxt + optionsListCCloseTxt);
        
		POPUpFunction();
    });
    AsyncTrue();
}

function GetPlusIconClickSearch(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();    
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpListSearchNon&QlstColurId=" + ColourId + "&QlstPageNo=" + clrPageNo + "&QlstShadePosition=" + clrShadePosition;

//    $.getJSON(url, function (data) {
//        var optionsBigImg = "";
//        var optionsListCCloseTxt = "<a class='minus_ico'></a>";
//        var IsAvailableLink = "";

//        for (k in data) {
//            if (data[k].CSF_IsPopUpBigImg != null) {
//                if (data[k].CSF_IsPopUpBigImg == 'Y') {

//                    selAddFavColourCode = data[k].CSF_ShadeCode;
//                    selAddFavColourFamily = data[k].CSF_ShadeName;
//                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

//                    if (data[k].CSF_IsAvailableProductShade != "") {
//                        IsAvailableLink = "<a href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "' class='view_shade'>View products in this colour</a>";
//                    }

//                    //optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'><a href='javascript:AddToFavoritesPOPUpIconClick();'><img src='./images/add-to-fav.png' class='fav_ico' /></a> </div>" +
//                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'><a href='javascript:ToCheckOnlineonFavorite();'><img src='./images/add-to-fav.png' class='fav_ico' /></a> </div>" +
//                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" + IsAvailableLink;

//                }
//            }
//        }

//        $("#JSPOPupListSearch").empty();
//        $("#JSPOPupListSearch").html(optionsBigImg + optionsListCCloseTxt);
//        POPUpFunctionSearch();
//    });


    $.getJSON(url, function (data) {
        var optionsBigImg = "";
        var optionsSimilerColImageStartCommonTxt = "";
        var optionsSimilerColImage = "";
        var optionsSimilerColImageLastCommonTxt = "";

        var optionsListColImageStartCommonTxt = "";
        var optionsListColImage = "";
        var optionsListColImageLastCommonTxt = "";

        var isLarge = "";
        var isSimilerLarge = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";
		var optionsListCCloseTxt = "";
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {

                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "1";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        IsAvailableLink = "<a  href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                    }

                    /////Here we are hiding AddTOFav if already saved.
                    var IsExistAddFav = "";
                    var urlfav = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillToCheckFavAlready&QlstShadeCode=" + data[k].CSF_ShadeCode;
                    $.getJSON(urlfav, function (dataFav) {
                        for (i in dataFav) {
                            IsExistAddFav = dataFav[i].CSF_ShadeName;
                        }
                    });

                    var ToDisplayAddToIcon = "";
                    if (IsExistAddFav == "N") {
                        ToDisplayAddToIcon = "<a href='javascript:ToCheckOnlineonFavorite();'><img src='./images/add-to-fav.png' class='fav_ico' /></a>";
                    }

                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'>" + ToDisplayAddToIcon + " </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> " + IsAvailableLink;
                }
                else if (data[k].CSF_IsPopUpBigImg == 'N') {
                    isSimilerLarge = 1;
                    optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list border'>";
                    optionsSimilerColImageLastCommonTxt = "</ul>";
                    optionsSimilerColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
                }
                else if (data[k].CSF_IsPopUpBigImg == 'L') {
                    isLarge = 1;
                    optionsListColImageStartCommonTxt = "<p>Colours that complement chosen colour are</p><ul class='spectra_list'><div class='holder'><div id='panemain1' class='scroll-pane' style='overflow:auto; width:330px; height:100px;  '>";
                    optionsListColImageLastCommonTxt = "</div></div></ul>";
                    optionsListColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
                }
            }
        }

        ////Following is to check if 'Similer or complement colour list' is not available in DB.
        if (isSimilerLarge == 1 && isLarge != 1) {
            optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list'>";
        }

        $("#JSPOPupListSearch").empty();
        $("#JSPOPupListSearch").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>"+ optionsBigImg + optionsSimilerColImageStartCommonTxt + optionsSimilerColImage + optionsSimilerColImageLastCommonTxt + optionsListColImageStartCommonTxt + optionsListColImage + optionsListColImageLastCommonTxt + optionsListCCloseTxt);
        POPUpFunctionSearch();
    });

    AsyncTrue();
}

function GetPlusIconClickSearchNonItem(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();    
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpListSearchNon&QlstColurId=" + ColourId;

    $.getJSON(url, function (data) {
        var optionsBigImg = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";
		var optionsListCCloseTxt = "";
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {

                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "0";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        //Following link is hide because it will only appear in 'Colour by family'
                        IsAvailableLink = "<a href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                        //IsAvailableLink = "";
                    }

                    /////Here we are hiding AddTOFav if already saved.
                    var IsExistAddFav = "";
                    var urlfav = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillToCheckFavAlready&QlstShadeCode=" + data[k].CSF_ShadeCode;
                    $.getJSON(urlfav, function (dataFav) {
                        for (i in dataFav) {
                            IsExistAddFav = dataFav[i].CSF_ShadeName;
                        }
                    });

                    var ToDisplayAddToIcon = "";
                    if (IsExistAddFav == "N") {
                        ToDisplayAddToIcon = "<a href='javascript:ToCheckOnlineonFavorite();'><img src='./images/add-to-fav.png' class='fav_ico' /></a>";
                    }

                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'>" + ToDisplayAddToIcon + " </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" + IsAvailableLink;

                }
            }
        }

        $("#JSPOPupListSearch").empty();
        $("#JSPOPupListSearch").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>"+ optionsBigImg + optionsListCCloseTxt);
        POPUpFunctionSearch();
    });

    AsyncTrue();
}

function AddItems() {
   
    for (k in $.trim($("#hdntxtFavoritesNameList").val()).split("|")) {
        var resultOuter = $.trim($("#hdntxtFavoritesNameList").val()).split("|");
        var resultInner = resultOuter[k].split("@");
        //alert("inside1= " + resultInner[0]);//ShadeCode
        if ($.trim(resultInner[0]).length >= 3 && $.trim(resultInner[0]).length <= 5) {           
            var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillAddMyFav&QlstShadeCode=" + $.trim(resultInner[0]) + "&QlstFromSection=CS";
            $.getJSON(url, function (data) {

                var options = "";
                var ckMsg = "";
                for (k in data) {

                }
            });
        }
    }

}

function AddSnapItItems() {
    AsyncFalse();
    var strTab = "";
    strTab = GetQueryStringParams("tab");
    strTab = $.trim(strTab)
    strTab = strTab.replace(/%20/g, " ");
    
    if (strTab == "") {
        //window.open("colour-spectra.aspx", "_self");
        AsyncTrue();
        return;
    }

    if (strTab.toLowerCase() != 'snapit'.toLowerCase()) {     
        window.open("colour-spectra.aspx", "_self");
        AsyncTrue();
        return;
    }
   

    if (strTab != "") {
        var isUserLogged = false;
        isUserLogged = CheckUserLoginStatus();
        if (!isUserLogged) {
            AsyncTrue();
            return;
        }
        else {
            var strShades = GetQueryStringParams("shadecode");
            strShades = $.trim(strShades)
            strShades = strShades.replace(/%20/g, " ");

            if (strShades != '') {
                AsyncFalse();
                var ps = strShades.split('|');
                for (var i = 0; i < ps.length; i++) {
                    if ($.trim(ps[i]).length >= 3 && $.trim(ps[i]).length <= 4) {
                        var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillAddMyFav&QlstShadeCode=" + $.trim(ps[i]) + "&QlstFromSection=SnapIt";
                        $.getJSON(url, function (data) {
                            var options = "";
                            var ckMsg = "";
                            for (k in data) {

                            }
                        });
                    }
                }
                AsyncTrue();
                window.open("colour-spectra-favorites.aspx?tab=snapit", "_self");
            }
        }
    }
    AsyncTrue();         

}

function AddToFavoritesPOPUpIconClick() {
    //alert(selAddFavColourCode + " " + selAddFavColourFamily);

    var existText = $.trim($("#hdntxtFavoritesNameList").val());
    var existRespectiveText = $.trim($("#hdntxtFavoritesRespectiveIds").val());
    var existRespectiveIsItembthText = $.trim($("#hdntxtFavoritesRespectiveIsItemBoth").val());
    if($.trim(existText)=='')
    {
        $("#hdntxtFavoritesNameList").val($.trim(selAddFavColourCode) + "@" + $.trim(selAddFavColourFamily) + "@" + $.trim(selAddFavColourRGB));
        $("#hdntxtFavoritesRespectiveIds").val($.trim(selAddFavColourId) + "@" + $.trim(selAddFavColourPageNo) + "@" + $.trim(selAddFavColourShadePos));
        $("#hdntxtFavoritesRespectiveIsItemBoth").val($.trim(selAddFavColourIsItemBoth));
        $("#txtFavoritesCount").val(parseInt($("#txtFavoritesCount").val()) + 1);        
    }
    else {
        if ($.trim($("#hdntxtFavoritesNameList").val()).indexOf(selAddFavColourCode) > -1) {
            alert("You have already favorited this shade.");
        }
        else {            
            $("#hdntxtFavoritesNameList").val($.trim(existText) + "|" + $.trim(selAddFavColourCode) + "@" + $.trim(selAddFavColourFamily) + "@" + $.trim(selAddFavColourRGB));
            $("#hdntxtFavoritesRespectiveIds").val($.trim(existRespectiveText) + "|" + $.trim(selAddFavColourId) + "@" + $.trim(selAddFavColourPageNo) + "@" + $.trim(selAddFavColourShadePos));
            $("#hdntxtFavoritesRespectiveIsItemBoth").val($.trim(existRespectiveIsItembthText) + "|" + $.trim(selAddFavColourIsItemBoth));
            $("#txtFavoritesCount").val(parseInt($("#txtFavoritesCount").val()) + 1);           
        }
    }
    AddItems();        
    var MySelectedFavoritesList = $.trim($("#hdntxtFavoritesNameList").val());
    var TotFavoritesCnt = $.trim($("#txtFavoritesCount").val());
    
    BindMyFavCount();
    
//    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=setWithoutLogin&QlstMyshortlist=" + MySelectedFavoritesList + "&QlstFavCont=" + TotFavoritesCnt;
//    $.getJSON(url, function (data) {
//        var options = "";
//        for (k in data) {
//            if (data[k].CSF_IsSuccess == 'Y') {
//              
//            }
//        }
//    });

    selAddFavColourCode = '';
    selAddFavColourFamily = '';
    selAddFavColourRGB = '';

    selAddFavColourId = '';
    selAddFavColourPageNo = '';
    selAddFavColourShadePos = '';
    selAddFavColourIsItemBoth = '';

    ////Following is for if popup window already opened then close it.    
    $(".spectra_popup, .spectraOverlay").hide();
    $(".spectra_popupsearch, .spectraOverlaySearch").hide();
    $(".spectra_popupfavorites, .spectraOverlayFavorites").hide();
    $('body,html').animate({ scrollTop: $('.Wrapperbg ').offset().top }, 300);

    //Edited by Labdhi
    $('.badge_text').text('1 star added').show();
    setTimeout(function () { $('.badge_text').fadeOut() }, 4000);
    //Edited by Labdhi
}

function BindFavoritesWithoutLogin() {
//    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=getPrevdata";
//    $.getJSON(url, function (data) {
//        var options = "";
//        for (k in data) {
//            if (data[k].CSF_IsSuccess != '0') {
//                $("#hdntxtFavoritesNameList").val(data[k].CSF_Message);
//                $("#txtFavoritesCount").val(data[k].CSF_IsSuccess);

//                if (data[k].CSF_IsLogin == 'Y') {
//                    SaveResult();
//                }
//            }
//        }
//    });
}


function BindFavoritesClick() {
    $('#JSFavorites').click(function () {
        AsyncFalse();
        var isUserLogged = false;
        isUserLogged = CheckUserLoginStatus();
        if (!isUserLogged) {
            AsyncTrue();           
            return;
        }
        else {
            window.open("colour-spectra-favorites.aspx?tab=cs", "_self");
        }
        AsyncTrue();                
    });
//    $('#JSFavorites').click(function () {
//        $("#JSSearchResult").empty();
//        $('#JSSearchResult').hide();
//        $('.spectra_content_left, .spectra_content_right').hide();
//        $(".goBackMain").show();
//        selSearchKeyword = '';

//        if (parseInt($("#txtFavoritesCount").val()) > 0) {
//            $("#JSListFavorites").empty();
//            var options = "";
//            for (k in $.trim($("#hdntxtFavoritesNameList").val()).split("|")) {
//                var resultOuter = $.trim($("#hdntxtFavoritesNameList").val()).split("|");
//                var resultInner = resultOuter[k].split("@");
//                //alert("inside1= " + resultInner[0]);//ShadeCode
//                //alert("inside2= " + resultInner[1]);//ShadeFamilyName
//                //alert("inside3= " + resultInner[2]);//Shade RGB

//                var resultRespectiveOuter = $.trim($("#hdntxtFavoritesRespectiveIds").val()).split("|");
//                var resultRespectiveInner = resultRespectiveOuter[k].split("@");
//                //alert("insideRespective1= " + resultRespectiveInner[0]);// ColourId
//                //alert("insideRespective2= " + resultRespectiveInner[1]);//clrPageNo
//                //alert("insideRespective3= " + resultRespectiveInner[2]);//clrShadePosition

//                var resultRespectiveIsItembOuter = $.trim($("#hdntxtFavoritesRespectiveIsItemBoth").val()).split("|");
//                //alert("resultRespectiveOuter= " + resultRespectiveIsItembOuter[k]);//Is it Non Item or Item in 'colours by family'

//                //                options += "<li>" +
//                //                    "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + resultInner[2] + ")'></span></div>" +
//                //                    "<span class='shade_code'>" + resultInner[0] + "</span> <span class='shade_name'>" + resultInner[1] + "</span>" +
//                //                    "</li>";                    

//                if (resultRespectiveIsItembOuter[k] != 0) {                 
//                    //ckMsg = 1;
//                    options += "<li>" +
//                          "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + resultInner[2] + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickFavorites(" + resultRespectiveInner[0] + "," + resultRespectiveInner[1] + "," + resultRespectiveInner[2] + ");'></a> </div>" +
//                          "<span class='shade_code'>" + resultInner[0] + "</span> <span class='shade_name'>" + resultInner[1] + "</span>" +
//                          "</li>";
//                }
//                else {                   
//                    //ckMsg = 1;
//                    options += "<li>" +
//                          "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + resultInner[2] + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickFavoritesNonItem(" + resultRespectiveInner[0] + "," + resultRespectiveInner[1] + "," + resultRespectiveInner[2] + ");'></a> </div>" +
//                          "<span class='shade_code'>" + resultInner[0] + "</span> <span class='shade_name'>" + resultInner[1] + "</span>" +
//                          "</li>";
//                }
//            }
//            $("#JSListFavorites").html("<ul class='spectra_list'>" + options + "</ul>");
//            $("#JSListFavoritesControlsSavePrint").empty();
//            $("#JSListFavoritesControlsSavePrint").html("  <div class='spectra_btn'><a href='javascript:;' onclick=SaveResult();>Save</a></div><div class='spectra_form'><label>To:</label><div class='input_field'><input id='txtToEmail' type='text' value='' maxlength='50' /></div><label>CC: </label><div class='input_field'><input id='txtCCEmail' type='text' value='' maxlength='50' /></div></div><div class='spectra_btn'><a href='javascript:;' onclick=SendEmail();>Email</a></div><div class='spectra_btn'><a onclick='DocPrint()'  href='javascript:;'>Print</a></div>");
//            $("#JSListFavoritesControlsSavePrint").show();            
//            POPUpFunctionFavorites();
//        }
//        else {
//            $("#JSListFavorites").empty();
//            $("#JSListFavorites").html("<h2>Sorry, No color is selected as favorite by you.</h2>");
//            $("#JSListFavoritesControlsSavePrint").hide();
//        }

//        $('#JSListFavorites').show();

//        ////Following is for if popup window already opened then close it.
//        $(".spectra_popup").hide();
//        $(".spectra_popupsearch").hide();
//        $(".spectra_popupfavorites").hide();   
//    });
}

function GetPlusIconClickFavorites(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpListFav&QlstColurId=" + ColourId + "&QlstPageNo=" + clrPageNo + "&QlstShadePosition=" + clrShadePosition;

    $.getJSON(url, function (data) {
        var optionsBigImg = "";
        var optionsSimilerColImageStartCommonTxt = "";
        var optionsSimilerColImage = "";
        var optionsSimilerColImageLastCommonTxt = "";

        var optionsListColImageStartCommonTxt = "";
        var optionsListColImage = "";
        var optionsListColImageLastCommonTxt = "";

        var isLarge = "";
        var isSimilerLarge = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";
		var optionsListCCloseTxt = "";
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {                   
                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "1";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        IsAvailableLink = "<a  href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                    }

                    //optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'><a href='javascript:AddToFavoritesPOPUpIconClick();'><img src='./images/add-to-fav.png' class='fav_ico' /></a> </div>" +
                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> " + IsAvailableLink;
                }
                else if (data[k].CSF_IsPopUpBigImg == 'N') {                   
                    isSimilerLarge = 1;
                    optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list border'>";
                    optionsSimilerColImageLastCommonTxt = "</ul>";
                    optionsSimilerColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
                }
                else if (data[k].CSF_IsPopUpBigImg == 'L') {                   
                    isLarge = 1;
                    optionsListColImageStartCommonTxt = "<p>Colours that complement chosen colour are</p><ul class='spectra_list'><div class='holder'><div id='panemain2' class='scroll-pane' style='overflow:auto; width:330px; height:100px;  '>";
                    optionsListColImageLastCommonTxt = "</div></div></ul>";
                    optionsListColImage += "<li>" +
                        "<div class='shade_container'> <span class='colour_code' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span> </li>";
                }
            }
        }

        ////Following is to check if 'Similer or complement colour list' is not available in DB.
        if (isSimilerLarge == 1 && isLarge != 1) {
            optionsSimilerColImageStartCommonTxt = "<p>Similar colours</p><ul class='spectra_list'>";
        }

        $("#JSPOPupListFavorites").empty();
        $("#JSPOPupListFavorites").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>"+ optionsBigImg + optionsSimilerColImageStartCommonTxt + optionsSimilerColImage + optionsSimilerColImageLastCommonTxt + optionsListColImageStartCommonTxt + optionsListColImage + optionsListColImageLastCommonTxt + optionsListCCloseTxt);
        POPUpFunctionFavorites();
    });

    AsyncTrue();
}

function GetPlusIconClickFavoritesNonItem(ColourId, clrPageNo, clrShadePosition) {
    AsyncFalse();
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillPopUpListFavNon&QlstColurId=" + ColourId;

    $.getJSON(url, function (data) {
        var optionsBigImg = "";
        //var optionsListCCloseTxt = "<a class='minus_ico'></a>";
		var optionsListCCloseTxt = "";
        var IsAvailableLink = "";

        for (k in data) {
            if (data[k].CSF_IsPopUpBigImg != null) {
                if (data[k].CSF_IsPopUpBigImg == 'Y') {

                    selAddFavColourCode = data[k].CSF_ShadeCode;
                    selAddFavColourFamily = data[k].CSF_ShadeName;
                    selAddFavColourRGB = data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue;

                    selAddFavColourId = ColourId;
                    selAddFavColourPageNo = clrPageNo;
                    selAddFavColourShadePos = clrShadePosition;
                    selAddFavColourIsItemBoth = "0";

                    if (data[k].CSF_IsAvailableProductShade != "") {
                        //Following link is hide because it will only appear in 'Colour by family'
                        IsAvailableLink = "<a href='" + webSiteHostpathname + "/test-your-ideas/tools/paint-selector-spectra-result.aspx?shadecode=" + data[k].CSF_ShadeCode + "&shadename=" + data[k].CSF_ShadeName + "&category=" + selCategoryValue + "' class='view_shade'>View products in this colour</a>";
                        //IsAvailableLink = "";
                    }

                    
                    optionsBigImg += "<div class='popup_shade' style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'> </div>" +
                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" + IsAvailableLink;

                }
            }
        }

        $("#JSPOPupListFavorites").empty();
        $("#JSPOPupListFavorites").html("<img src='./images/close-spectra-popup.png' alt='Close' title='Close' class='close_spctra'/>"+ optionsBigImg + optionsListCCloseTxt);
        POPUpFunctionFavorites();
    });

    AsyncTrue();
}

function DocPrint() {
    alert("Please select 'Page Setup' from the File menu on your browser and check the box for 'Print Background (colors & images)' before printing.");
	javascript:;window.print();
        
}

function ToCheckOnlineonFavorite() {
    AsyncFalse();
    var isUserLogged = false;
    isUserLogged = CheckUserLoginStatus();
    if (!isUserLogged) {
        AsyncTrue();
        return;
    }
    else {        
        AddToFavoritesPOPUpIconClick();
    }
    AsyncTrue();
}
function SaveResult() {
    AsyncFalse();
    var isUserLogged = false;
    isUserLogged = CheckUserLoginStatus();
    if (!isUserLogged) {
        AsyncTrue();
        return;
    }
    else {
        var MySelectedFavoritesList = $.trim($("#hdntxtFavoritesNameList").val());
        
        var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=ResultSave&QlstMyshortlist=" + MySelectedFavoritesList;
        $.getJSON(url, function (data) {
            var options = "";          
            for (k in data) {
                if (data[k].CSF_IsSuccess == 'Y') {
                    var pathname = window.location.protocol + '//' + window.location.host   
                    window.location.href = pathname+"/user-profile/my-past-order.aspx?id=3&v=" + data[k].CSF_Message;                  
                }
            }
            //Edited by Labdhi
            $('.badge_text').text('1 star added').show();
            setTimeout(function () { $('.badge_text').fadeOut() }, 4000);
            //Edited by Labdhi
        });
    }
    AsyncTrue();
}
function SendEmail() {    
    if ($.trim($("#txtToEmail").val()) == '') {
        alert("Please enter To EmailId.");
        return;
    }
    if ($.trim($("#txtCCEmail").val()) != '') {
        if ($.trim($("#txtToEmail").val())==$.trim($("#txtCCEmail").val())) {
            alert("To EmailId and CC EmailId should not be same.");
            return;
        }
    }

    AsyncFalse();
    var ToEmail = $.trim($("#txtToEmail").val());
    var CCEmail = '';
    if ($.trim($("#txtCCEmail").val()) != '') {
        CCEmail = $.trim($("#txtCCEmail").val());
    }
    var MySelectedFavoritesList = $.trim($("#hdntxtFavoritesNameList").val());
   
    var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=sendIdemail&QlstToEmail=" + ToEmail + "&QlstCCEmail=" + CCEmail + "&QlstMyshortlist=" + MySelectedFavoritesList;
    $.getJSON(url, function (data) {
        var options = "";
        var ckMsg = "";
        for (k in data) {
            if (data[k].CSF_IsSuccess == 'Y') {
                alert(data[k].CSF_Message);
                $.trim($("#txtToEmail").val(''))
                $.trim($("#txtCCEmail").val(''))

            }
            else {
                alert(data[k].CSF_Message);
            }
        }
    });

    AsyncTrue();
}




function BindResetClick() {
    $('#lnkButtonReset').click(function () {
        $("#JSSearchResult").empty();
        $('#JSSearchResult').hide();
        $('.spectra_content_left, .spectra_content_right').show();
        $("#ContentPlaceHolder1_txtSearch").val('Shade Code/Name');
        selSearchKeyword = '';

        $("#JSListFavorites").empty();
        $('#JSListFavorites').hide();
        $("#JSListFavoritesControlsSavePrint").empty();
        $("#JSListFavoritesControlsSavePrint").hide();
        $(".goBackMain").hide();
              
    });
}

function BindRadioClick() {
    $("input[type='radio']").change(function () {
        var selection = $(this).val();  
              
        if ($('input:radio')) {
            $("<span class='uncheked'></span>").insertBefore('input:radio');
        }
        $('input:checked').prev('span').addClass('cheked').removeClass('uncheked');
    });
}

function BindSearchClick() {
    AsyncFalse();
    $('#lnkButtonSearch').click(function () {
        $(".goBackMain").show();
        var selSearchBy = "byname"; // $("input[radcodename$]:checked").val();

        if ($.trim($("#ContentPlaceHolder1_txtSearch").val()) != "" && $.trim($("#ContentPlaceHolder1_txtSearch").val()) != "Shade Code/Name") {
            selSearchKeyword = $.trim($("#ContentPlaceHolder1_txtSearch").val());
        }
        else {
            if (selSearchBy == "byname") {
                alert('Please enter Shade Name or Shade Code.');
            }
            else {
                alert('Please enter Shade Code.');
            }
            selSearchKeyword = '';
            AsyncTrue();
            return;
        }
        if (selSearchKeyword.toLowerCase() != 'Shade Code'.toLowerCase() && selSearchKeyword.toLowerCase() != "") {

            var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillSearchList&QlstSearchCode=" + selSearchKeyword + "&QlstSearchBy=" + selSearchBy;

            $.getJSON(url, function (data) {
                var options = "";
                var ckMsg = "";
                for (k in data) {
                    if (data[k].CSF_ColourFamily != null) {
                        //                        ckMsg = 1;
                        //                        options += "<li>" +
                        //                            "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickSearch(" + data[k].CSF_Id + "," + data[k].CSF_PageNo + "," + data[k].CSF_ShadePosition + ");'></a> </div>" +
                        //                        "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" +
                        //                        "</li>";

                        ////The following check is to display 'Plus popup' only in 'Colours by Family' category.

                        if (k != 0 && data[k].CSF_ShadeCode == data[k - 1].CSF_ShadeCode) {                            
                        }
                        else {
                            if (data[k].CSF_ShadePosition != 0) {
                                ckMsg = 1;
                                options += "<li>" +
                          "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickSearch(" + data[k].CSF_Id + "," + data[k].CSF_PageNo + "," + data[k].CSF_ShadePosition + ");'></a> </div>" +
                          "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" +
                          "</li>";
                            }
                            else {
                                ckMsg = 1;
                                options += "<li>" +
                          "<div class='shade_container'> <span class='colour_code'  style='background-color:rgb(" + data[k].CSF_Red + "," + data[k].CSF_Green + "," + data[k].CSF_Blue + ")'></span> <a class='plus_ico' onclick='GetPlusIconClickSearchNonItem(" + data[k].CSF_Id + "," + data[k].CSF_PageNo + "," + data[k].CSF_ShadePosition + ");'></a> </div>" +
                          "<span class='shade_code'>" + data[k].CSF_ShadeCode + "</span> <span class='shade_name'>" + data[k].CSF_ShadeName + "</span>" +
                          "</li>";
                            }
                        }


                    }

                }
                if (ckMsg == 1) {
                    $("#JSSearchResult").empty();
                    $("#JSSearchResult").html("<ul class='spectra_list'>" + options + "</ul>");
                    POPUpFunctionSearch();

                }
                else {
                    $("#JSSearchResult").empty();
                    $("#JSSearchResult").html("<h2>Sorry, no matching shades found. </h2>");
                }
                ////Following is for if popup window already opened then close it.
                $(".spectra_popup").hide();
                $(".spectra_popupsearch").hide();
                $(".spectra_popupfavorites").hide();
            });

            $('#JSSearchResult').show();
            $('.spectra_content_left, .spectra_content_right').hide();
            $("#JSListFavorites").empty();
            $('#JSListFavorites').hide();
            $("#JSListFavoritesControlsSavePrint").empty();
            $("#JSListFavoritesControlsSavePrint").hide();

        }

    });
    AsyncTrue();
}

var flagLeft = true;

function acorList() {

    $('.acorList h3').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle().parents(this);
        $('.acorList h3').not(this).removeClass('active').next().slideUp().removeClass('active');

        selCategoryTab = $('.acorList .active').text();
        if (selCategoryTab == 'Aspira (Exclusive Le Corbusier Shades)') {
            selCategoryTab = 'Aspira';
        }
        selCategoryValue = selCategoryTab;       
        if (selCategoryTab == 'Glitter' && flagLeft == false) {
            flagLeft = true;
            selval = 1;
            BindLeftColours();
            FillGridDetailsColours();
            $(".goBackMain").hide();

        }
        else if (selCategoryTab == 'Aspira' && flagLeft) {
            flagLeft = false;
            BindLeftColours();
            FillGridDetailsColours();
            $(".goBackMain").hide();

        }
    }).eq(selval).click();  

} 

function BindMyFavCount() {
    AsyncFalse();
    var urlck = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillToCheckOnline";    
    $.getJSON(urlck, function (dataOnline) {        
        for (i in dataOnline) {            
            if (dataOnline[i].CSF_IsOnlineCurrentUser == "Y") {
                var url = "https://www.asianpaints.com/Handlers/ColourSpectraFetchHandler.ashx?Section=fillTotalFavCount";
                $.getJSON(url, function (data) {
                    var options = "";
                    var ckMsg = "";
                    for (k in data) {                        
                        $("#txtActualFavoritesCount").val(data[k].CSF_ShadeName);
                    }
                });
            }
            else {
                AsyncTrue();
                $("#txtActualFavoritesCount").val("0");
                return;
            }
        }
    });
    
    AsyncTrue();
}


function POPUpFunction() {
    /*function for lightbox starts here*/
    var ulpos = ($(".spectra_list").position().left + $(".spectra_list").width())   
    $(".shade_container .plus_ico").click(function () {
        $(".spectra_popupsearch").hide();
        var myLeft = $(this).parents("li").position().left;
        var myRight = myLeft + $(this).parents("li").outerWidth();
        var myTop = $(this).parents("li").position().top;
        if (myLeft + ($(".spectra_popup").outerWidth()) < ulpos) {
            var boxLeft = myLeft + "px";
            var boxTop = myTop + "px";
            var boxMl = "auto";
        }
        else {
            var boxLeft = myLeft + "px";
            var boxTop = myTop + "px";
            var boxMl = (($(".spectra_popup").outerWidth() - $(this).parents("li").outerWidth()) * -1) + "px";

        }
        $(".spectra_popup").css({
            'left': boxLeft,
            'top': boxTop,
            'margin-left': boxMl
        }, 100)
        //$(".spectraOverlay, .spectra_popup").show();
		$(".spectraOverlay, .spectra_popup").show();
		 setTimeout(function () { $('#panemain').jScrollPane(); }, 1000);
		 $('body,html').animate({scrollTop: $('.spectra_popup').offset().top -100}, 300);
		
    })

    $(".minus_ico, .close_spctra").click(function () {
        $(".spectra_popup, .spectraOverlay").hide();

    })

	 $(".spectraOverlay").click(function () {
        $(".minus_ico").click()
    });
	 $(document).keyup(function(e) {
		if (e.keyCode == 27) { // Esc
			$(".minus_ico").click() // close lightbox
		}
	});
    /*function for lightbox ends here*/
}


function POPUpFunctionSearch() {
    /*function for lightbox starts here*/
    var ulpos = ($(".spectra_list").position().left + $(".spectra_list").width())
    ulpos = '764';
    $(".shade_container .plus_ico").click(function () {
        var myLeft = $(this).parents("li").position().left;
        var myRight = myLeft + $(this).parents("li").outerWidth();
        var myTop = $(this).parents("li").position().top;
        if (myLeft + ($(".spectra_popupsearch").outerWidth()) < ulpos) {
            var boxLeft = myLeft + "px";
            var boxTop = myTop + "px";
            var boxMl = "auto";
        }
        else {
            var boxLeft = myLeft + "px";
            var boxTop = myTop + "px";
            var boxMl = (($(".spectra_popupsearch").outerWidth() - $(this).parents("li").outerWidth()) * -1) + "px";

        }
        $(".spectra_popupsearch").css({
            'left': boxLeft,
            'top': boxTop,
            'margin-left': boxMl
        }, 100)
        $(".spectraOverlaySearch, .spectra_popupsearch").show();
        setTimeout(function () { $('#panemain1').jScrollPane(); }, 1000);

    })

    $(".minus_ico,.close_spctra").click(function () {
        $(".spectra_popupsearch, .spectraOverlaySearch").hide();

    })

    $(".spectraOverlaySearch").click(function () {
        $(".minus_ico").click()
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // Esc
            $(".minus_ico").click() // close lightbox
        }
    });
    /*function for lightbox ends here*/
}


function POPUpFunctionFavorites() {
    /*function for lightbox starts here*/
    var ulpos = ($(".spectra_list").position().left + $(".spectra_list").width())
    ulpos = '764';
    $(".shade_container .plus_ico").click(function () {
        var myLeft = $(this).parents("li").position().left;
        var myRight = myLeft + $(this).parents("li").outerWidth();
        var myTop = $(this).parents("li").position().top;
        if (myLeft + ($(".spectra_popupfavorites").outerWidth()) < ulpos) {
            var boxLeft = myLeft + "px"
            var boxTop = myTop + "px"
            var boxMl = "auto"
        }
        else {
            var boxLeft = myLeft + "px"
            var boxTop = myTop + "px"
            var boxMl = (($(".spectra_popupfavorites").outerWidth() - $(this).parents("li").outerWidth()) * -1) + "px"

        }
        $(".spectra_popupfavorites").css({
            'left': boxLeft,
            'top': boxTop,
            'margin-left': boxMl
        }, 100)
        $(".spectraOverlayFavorites, .spectra_popupfavorites").show();
        setTimeout(function () { $('#panemain2').jScrollPane(); }, 1000);

    })

    $(".minus_ico").click(function () {
        $(".spectra_popupfavorites, .spectraOverlayFavorites").hide();

    })

    $(".spectraOverlayFavorites").click(function () {
        $(".minus_ico").click()
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // Esc
            $(".minus_ico").click() // close lightbox
        }
    });
    /*function for lightbox ends here*/   
			
		 
}
