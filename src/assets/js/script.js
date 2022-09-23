"use strict";

// JavaScript Document

( function( $ )
{
	var winObj = $( window ),
		bodyObj = $( 'body' ),
		headerObj = $( 'header' );
		
	/*----------------------------------------------------*/
	/* DataTables Initialize
	/*----------------------------------------------------*/
	var dTables = $( '.dTables' );
	if( dTables.length )
	{
		dTables.DataTable(
		{
			responsive: true,
			info: false,
			language: {
				search: '',
				searchPlaceholder: 'Search here...',
				paginate: {
					previous: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
					next: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
				}
			}
		} );
	}

	/*----------------------------------------------------*/
	/* FormStyler Modern Initialize
	/*----------------------------------------------------*/
	var styledControls = $( 'select' );
	if( styledControls.length )
	{
		styledControls.styler( 
		{
			select: {
				search: {
					limit: 10
				},
				smartPosition: false
			}
		} );
	}

	/*----------------------------------------------------*/
	/* WOW Initialize
	/*----------------------------------------------------*/
	// new WOW().init();

	/*----------------------------------------------------*/
	/*	Animated Scroll To Top
	/*----------------------------------------------------*/
	var toTop = $( '#toTop' );
	toTop.on( 'click', function()
	{
		$( 'html, body' ).animate( {
			scrollTop: 0
		}, 600 );
		return false;
	} );

	winObj.on( 'scroll', function()
	{
		if( $( this ).scrollTop() != 0 )
		{
			toTop.fadeIn();
		}
		else
		{
			toTop.fadeOut();
		}
	} );

	// /*----------------------------------------------------*/
	// /* Toggle menu
	// /*----------------------------------------------------*/
	// headerObj.on( 'click', '.toggle_menu', function()
	// {
	// 	$( this ).toggleClass( 'open' );
	// 	if( $( this ).hasClass( 'open' ) )
	// 	{
	// 		$( '.menu' ).addClass( 'open' );
	// 		bodyObj.addClass('no-scroll');
	// 	}
	// 	else
	// 	{
	// 		$( '.menu' ).removeClass( 'open' );
	// 		$( '.menu-item-has-children' ).removeClass( 'open-list' );
	// 		bodyObj.removeClass( 'no-scroll' );
	// 	}
	// } );

	/*----------------------------------------------------*/
	/* Mobile Sub Menu
	/*----------------------------------------------------*/
	headerObj.on( 'click', '.menu.open a', function( e )
	{
		if( $( this ).siblings().length )
		{
			if( !$( this ).parent().hasClass( 'open-list' ) )
			{
				$( this ).parent().addClass( 'open-list' );
				e.preventDefault();
			}
			else
			{
				$( this ).parent().removeClass( 'open-list' );
			}
		}
	} );

	/*----------------------------------------------------*/
	/* Equal height
	/*----------------------------------------------------*/
	// $( '.equal-height' ).matchHeight();

	/*----------------------------------------------------*/
	/* Sliders Settings
	/*----------------------------------------------------*/
	$( '.tabs-slider' ).slick( {
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		responsive: [{
			breakpoint: 1120,
			settings: {
				autoplay: true
			}
		},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$('.tabs-slider').on( 'click', 'li', function() {
		$( this ).addClass( 'active' );
		if( $( this ).hasClass( 'active' ) ) {
			$('.tabs-slider li').removeClass( 'active' );
		}
	} );

	$( '.testimonial-slider' ).slick( {
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$( '.game-img-slider' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: false,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$( '.top-slider-bl' ).slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: false,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>'
	} );

	$( '.post-slider' ).slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		infinite: true,
		dots: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>'
	} );

	/*----------------------------------------------------*/
	/* LightBox Initiali
	/*----------------------------------------------------*/

	// lightbox.option( {
	// 	showImageNumberLabel: false,
	// 	disableScrolling: true
	// } );

	/*----------------------------------------------------*/
	/*	Trimming
	/*----------------------------------------------------*/

	// Trimming string
		var dataTrim = $( '[data-trim]' );
		dataTrim.each( function()
		{
			var stringLength = $( this ).attr( 'data-trim' ),
				string = $( this ).text().trim();
			if( string.length > stringLength )
			{
				$( this ).text( string.slice( 0, stringLength - 3 ) + '...' );
			}
	} );

	// Trimming text
	var dataTrimText = $( '[data-trim-text]' );
	dataTrimText.each( function()
	{
		var stringLength = $( this ).attr( 'data-trim-text' ),
			string = $( this ).text().trim();
		if( string.length > stringLength )
		{
			$( this ).text( string.slice( 0, stringLength - 3 ) ).append( '<span class="more_btn inline-block uppercase pointer fsize-14 fweight-700 ml5 color-5">Read More <i class="fa fa-level-down text-gradient" aria-hidden="true"></i></span>' );
		}

		bodyObj.on( 'click', '.more_btn', function()
		{
			$( this ).attr( 'style', 'display: none' );
			$( this ).parent().text( string.slice() );
			$( '.read-more-wrap' ).closest( '.post-content' ).addClass( 'read-open' );
		} );
	} );

	/*----------------------------------------------------*/
	/*	Video Settings
	/*----------------------------------------------------*/
	$( '.buttonbar' ).on( 'click', '.play', function()
	{
		var video = $( '.stream-bl video' ),
			button = $( '.play' );
		if( video[ 0 ].paused )
		{
			video[ 0 ].play();
			$( this ).addClass( 'pause-show' );
			$( this ).removeClass( 'play-show' );
		}
		else
		{
			video[ 0 ].pause();
			$( this ).addClass( 'play-show' );
			$( this ).removeClass( 'pause-show' );
		}
	} );

	

	/*----------------------------------------------------*/
	/* Parallax Initialize
	/*----------------------------------------------------*/
	// $( '.parallax' ).paroller();

	/*----------------------------------------------------*/
	/*	Progress Bar
	/*----------------------------------------------------*/
	function progressBarCreator( count, animate )
	{
		var bar = new ProgressBar.Line( count, {
			strokeWidth: 1,
			color: '#1e1d32',
			trailColor: '#1e1d32',
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 10000,
			svgStyle: null,
			text: {
				value: '',
				alignToBottom: false
			},
			from: {
				color: '#00cbd6'
			},
			to: {
				color: '#7c69e3'
			},
			// Set default step function for all animate calls
			step: function( state, bar )
			{
				bar.path.setAttribute( 'stroke', state.color );
				var value = ( Math.round( bar.value() * 100 ) + '%' );
				if( value === 0 )
				{
					bar.setText( '' );
				}
				else
				{
					bar.setText( value );
				}

				bar.text.style.color = state.color;
			}
		} );

		bar.text.style.fontFamily = '"Roboto"';
		bar.text.style.fontSize = '14px';

		bar.animate( animate, {
			duration: 2500
		}, function() {} );
	}

	var mainLine = $( '.skills' );
	if( mainLine.length )
	{
		mainLine.on( 'inview', function ( event, isInView )
		{
			if( isInView )
			{
				if( !$( this ).hasClass( 'visible' ) )
				{
					$( this ).addClass( 'visible' );
					
					progressBarCreator( progressline69, 0.69 );
					progressBarCreator( progressline80, 0.80 );
					progressBarCreator( progressline52, 0.52 );
					progressBarCreator( progressline90, 0.90 );
				}
			}
		} );
	}

	var gamesChar = $( '.game-char' );
	if( gamesChar.length )
	{
		gamesChar.on( 'inview', function ( event, isInView )
		{
			if( isInView )
			{
				if( !$( this ).hasClass( 'visible' ) )
				{
					$( this ).addClass( 'visible' );
					
					progressBarCreator( progressline69, 0.69 );
					progressBarCreator( progressline80, 0.80 );
					progressBarCreator( progressline52, 0.52 );
					progressBarCreator( progressline90, 0.90 );
					progressBarCreator( progressline30, 0.30 );
				}
			}
		} );
	}

	/*----------------------------------------------------*/
	/*	Add class to each element
	/*----------------------------------------------------*/	
	var itemChar = $( '.each-element' );
	if( itemChar.length )
	{
		var classes = ['first', 'second', 'third'];

		$(function() 
		{
			var target = $('.item, .vertical-item');
			target.each(function(index) 
			{
				$(this).addClass(classes[index % 3]);
			});
		});
	}

	/*----------------------------------------------------*/
	/* Calendar Settings
	/*----------------------------------------------------*/

	var calendarBl = $( '.calendar-bl' );
	if( calendarBl.length )
	{
		calendarBl.dateRangePicker( {
			inline: true,
			container: '.calendar-container',
			alwaysOpen: true,
			singleDate: true,
			singleMonth: true,
			showTopbar: false,
			customArrowPrevSymbol: '<i class="fa fa-angle-left fsize-14"></i>',
			customArrowNextSymbol: '<i class="fa fa-angle-right fsize-14"></i>'
		} );
	}

	/*----------------------------------------------------*/
	/*	Google maps
	/*----------------------------------------------------*/
	if( $( '#map' ).length )
	{
		function initialize()
		{
			var mapOptions = {
				center: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				zoom: 15,
				styles: [
					{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
					{
					  featureType: 'administrative.locality',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'poi',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'poi.park',
					  elementType: 'geometry',
					  stylers: [{color: '#263c3f'}]
					},
					{
					  featureType: 'poi.park',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#6b9a76'}]
					},
					{
					  featureType: 'road',
					  elementType: 'geometry',
					  stylers: [{color: '#38414e'}]
					},
					{
					  featureType: 'road',
					  elementType: 'geometry.stroke',
					  stylers: [{color: '#212a37'}]
					},
					{
					  featureType: 'road',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#9ca5b3'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'geometry',
					  stylers: [{color: '#746855'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'geometry.stroke',
					  stylers: [{color: '#1f2835'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#f3d19c'}]
					},
					{
					  featureType: 'transit',
					  elementType: 'geometry',
					  stylers: [{color: '#2f3948'}]
					},
					{
					  featureType: 'transit.station',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'water',
					  elementType: 'geometry',
					  stylers: [{color: '#17263c'}]
					},
					{
					  featureType: 'water',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#515c6d'}]
					},
					{
					  featureType: 'water',
					  elementType: 'labels.text.stroke',
					  stylers: [{color: '#17263c'}]
					}
				],
				disableDefaultUI: true,
				scrollwheel: false,
				draggable: true
			};

			var map = new google.maps.Map( document.getElementById( 'map' ), mapOptions );

			// Create marker
			var marker = new google.maps.Marker( {
				position: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				map: map,
				title: 'INDIEGA',
				animation: google.maps.Animation.DROP,
				icon: '../assets/images/marker.png'
			} );

			// Marker animation
			marker.setAnimation( google.maps.Animation.BOUNCE );
		}

		google.maps.event.addDomListener( window, 'load', initialize );
	}

	$(".main-menu a").click(function () {
		// $(this).parent('li').addClass("active").siblings().removeClass("active")
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -120+ "px"}, 500);
		return false;//不要这句会有点卡顿
	})

	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()

	})

	function Toast(msg, duration) {
		duration = isNaN(duration) ? 2000 : duration;
		var m = document.createElement('div');
		m.innerHTML = msg;
		console.log(m)
		m.setAttribute("class", "fadeIn");
		m.style.cssText =
			"font-family: 'Play-Regular'; max-width:60%;min-width: 150px;padding:10px 14px;min-height: 50px;color: #fff;line-height: 18px;display:flex;justify-content: center;align-items: center;"+
			"text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background:rgba(30,29,50,.6);font-size: 16px;";
		document.body.appendChild(m);
		setTimeout(function() {
			var d = 0.5;
			m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
			m.style.opacity = '0';
			setTimeout(function() {
				document.body.removeChild(m)
			}, d * 1000);
		}, duration);
	}
	function alertSuccess() {
		let ele = document.getElementById('Email').value
		let emailtest = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
		if (emailtest.test(ele)) {
			Toast('SUCCESS')		
		} else {
			Toast('Please enter the correct email  address')
		}
	}
	$("#submitEmail").click(()=>{
		alertSuccess()
	})	
}( jQuery ) );