  $(function() {
    $(".rslides").responsiveSlides({
    	auto: false,
        nav: true,
        speed: 500,
        namespace: "centered-btns"	
    });


    // toggle menu

	$(".toggle-mnu").click(function() {
	  	$(this).toggleClass("on")
	  	$(".hidden-mnu").slideToggle();
	  	return false;
	});

	$(".input-h").click(function(){
		$(".text-confirm").removeClass('hide');
	});


});





$(document).ready(function() {

	$('body').focus();
	
	$('.password2').change(function() {
      var pass1 = $(".password1").val();
      var pass2 = $(".password2").val();
	  
      if (pass1 != pass2) {
		$(".password2").css('border', 'red 2px solid');
      }
	});
});


// selling button
$(document).ready ( function(){
	var price = +($('.red').text());

	$(".buy_button").click(function() {
		if(localStorage.getItem('username') !== null || localStorage.getItem('password') !== null){	
				var now = new Date();
				var valid = $('.buy_input').val();

				if ($.isNumeric(valid)){
					if(valid > price){
		 				$('.buy_purpose-price').text((localStorage.getItem('username')+' предложил: ') + ($(".buy_input").val())+ ' грн.');
		 				$('.buy_purpose-date').text(now);
		 				$('.buy_purpose').css({'display' : 'block'});
		 
		 				price = +valid;
		 		
		 			}else{
		 				alert('Введите сумму больше предложеной');	
		 			}
			 	}else{ 
					alert('Введите ставку числом');
				}
			}else{
				alert("Пожалуйста войдите или зарегистрируйтесь чтобы делать ставки");
		};
	
	});
});


$(document).ready ( function(){

	//show content,manipulating with DOM(thats how we do without data)	

	$('.selling_item').hide();

	$(".toggle_accssesories").click(function() {
		$(".main_items").addClass('hide');
		$(".accesories .selling_item").show();
		$(".category_accsesories").addClass('active-category');
	});

	$(".toggle_kids").click(function(){
		$(".main_items").addClass('hide');
		$(".kids .selling_item").show();
		$(".category_kids").addClass('active-category');
	});

	$(".toggle_newYear").click(function() {
		$(".main_items").addClass('hide');
		$(".newYear .selling_item").show();
		$(".category_newYear").addClass('active-category');
	});

	$(".toggle_bags").click(function(){
		$(".main_items").addClass('hide');
		$(".bags .selling_item").show();
		$(".category_bags").addClass('active-category');
	});

	// category nav

	$(".category_accsesories").click(function(e) {
		e.preventDefault();
		$(".main_items").addClass('hide');
		// If we want some animation to show.Same for others(insted of string below)
		// $(".accesories .selling_item").slideToggle();
		$(".accesories .selling_item").show();
		$(".selling_item:not('.accesories .selling_item')").hide();
		$(".category_accsesories").addClass('active-category');
		$(".category-item:not('.category_accsesories')").removeClass('active-category');
	});

	$(".category_kids").click(function(e){
		e.preventDefault();
		$(".main_items").addClass('hide');
		$(".kids .selling_item").show();
		$(".selling_item:not('.kids .selling_item')").hide();
		$(".category_kids").addClass('active-category');
		$(".category-item:not('.category_kids')").removeClass('active-category');
	});

	$(".category_newYear").click(function(e) {
		e.preventDefault();
		$(".main_items").addClass('hide');
		$(".newYear .selling_item").show();
		$(".selling_item:not('.newYear .selling_item')").hide();
		$(".category_newYear").addClass('active-category');
		$(".category-item:not('.category_newYear')").removeClass('active-category');
	});

	$(".category_bags").click(function(e){
		e.preventDefault();
		$(".main_items").addClass('hide');
		$(".bags .selling_item").show();
		$(".selling_item:not('.bags .selling_item')").hide();
		$(".category_bags").addClass('active-category');
		$(".category-item:not('.category_bags')").removeClass('active-category');
	});

// searc

	$('.search_submit').click(function(e){
		e.preventDefault();
		var search = $('.search_form-input').val();
		if($('.selling_item:contains("'+ search +'")')){
			($('.selling_item:contains("'+ search +'")')).show();
			($('.selling_item:not(:contains("'+ search +'"))')).hide();
		}else{
			alert('Ничего не найдено');
		}

	});


// Emulation pagination
	
	$('.news_2page, .news_3page').hide();

	$('.pagin_page').click(function(){
		if($(this).hasClass('pagin_active')){
			
		}else{
			$('.pagin_active').removeClass('pagin_active');
			($(this).addClass('pagin_active'));
			var page = +($(this).text());

			$('.news_page').not('.news_'+page+'page').hide();
			$('.news_'+page+'page').fadeIn(800);
		}

	});


	$('.pag_prev').click(function(){
		var countpage = +($('.pagin_active').text());
		var showpage = countpage - 1;
		
		if (showpage >= 1) {
			$('.pagin_active').removeClass('pagin_active');
			$('.pagin_page'+showpage).addClass('pagin_active');
		
			$('.news_page').not('.news_'+showpage+'page').hide();
			$('.news_'+showpage+'page').fadeIn(800);
		}else{
			
		}
	});


	$('.pag_next').click(function(){
		var countpage = +($('.pagin_active').text());
		var showpage = countpage + 1;
		
		if (showpage <= 3) {
			$('.pagin_active').removeClass('pagin_active');
			$('.pagin_page'+showpage).addClass('pagin_active');
		
			$('.news_page').not('.news_'+showpage+'page').hide();
			$('.news_'+showpage+'page').fadeIn(800);
		}else{
			
		}
	});

});



// register login

$(document).ready(function() {
	// register

   $('.reg_subm').click(function(){
   	// e.preventDefault();
    var inputUsername = $('.input_user').val();
    var inputPassword= $('.input_password').val();
    localStorage.setItem("username", inputUsername);
    localStorage.setItem("password", inputPassword);
    alert('Спасибо за регистрацию' +" "+ localStorage.getItem('username'))
 	});

   // login

    $('.log_subm').click(function(){
   	// e.preventDefault();
    var inputUsername = $('.input_user').val();
    var inputPassword= $('.input_password').val();
    if ((inputUsername == localStorage.getItem('username')) && (inputPassword == localStorage.getItem('password'))) {
    	alert('Здраствуйте' +" "+ localStorage.getItem('username'))
    }else{
    	alert('Введите пожалуйста коректные данные,или зарегистрируйтесь')
    };
    
 });

});  


// share example 
Share = {
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
}; 



	
	