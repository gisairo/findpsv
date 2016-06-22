(function ($) {
	 var routes = TAFFY([{"route_short_name":"23","route_long_name":"Kangemi","route_desc":"Odeon-Westlands-Kangemi"},{"route_short_name":"100","route_long_name":"Kiambu","route_desc":" O.T.C-Pangani-Muthaiga Roundabout-Kiambu Rd-Kiambu Institute-Kiambu"},{"route_short_name":"58","route_long_name":"Buruburu","route_desc":"Town to Buruburu"},{"route_short_name":"23","route_long_name":"Kariobangi South","route_desc":"Town to K-South"},{"route_short_name":"11","route_long_name":"Highridge","route_desc":"Odeon-AgaKhan-HighRidge"},{"route_short_name":"107","route_long_name":"Ndenderu","route_desc":"Odeon-UN-Ruaka-Ndenderu"},{"route_short_name":"11","route_long_name":"Ruaka","route_desc":"Odeon-UN-Ruaka"},{"route_short_name":"106","route_long_name":"Banana","route_desc":"Odeon-UN-Ruaka-Banana"},{"route_short_name":"8","route_long_name":"Kibera","route_desc":"Railways-NgongRoad-Kibera"},{"route_short_name":"111","route_long_name":"Ngong","route_desc":"Railways-NgongRoad-Karen-Ngong"},{"route_short_name":"4","route_long_name":"Kaberia","route_desc":"Railways-NgongRoad-Wanyee-Kaberia"},{"route_short_name":"2","route_long_name":"Dagoretti","route_desc":"Railways-NgongRoad-Kawangware-DagorettiMkt"},{"route_short_name":"102","route_long_name":"Kikuyu","route_desc":"Railways-NgongRoad-Kawangware-Kikuyu"},{"route_short_name":"34","route_long_name":"Kenyatta","route_desc":"Kenyatta-Mbagathi-wilson-Langata"},{"route_short_name":"1","route_long_name":"Dagoretti Market","route_desc":"Karen-Karinde-Dagoretti Market"},{"route_short_name":"103","route_long_name":"Wangige","route_desc":"Dagoretti Market-Uthiru-Kinoo-Wangige"},{"route_short_name":"3","route_long_name":"Uthiru","route_desc":"Dagoretti Corner-Uthiru"},{"route_short_name":"12","route_long_name":"South C","route_desc":"Town-RedCross-Mugoya"},{"route_short_name":"12","route_long_name":"KPA","route_desc":"Town-RedCross-College Of Insurance-Amboseli"},{"route_short_name":"48","route_long_name":"Othaya","route_desc":"Odeon-Chiromo-Kileleshwa-Othaya"},{"route_short_name":"105","route_long_name":"Kikuyu","route_desc":"Odeon-Westlands-Kangemi-Regen-Kikuyu"},{"route_short_name":"30","route_long_name":"Uthiru","route_desc":"Odeon-Westlands-Kangemi-Uthiru"},{"route_short_name":"48","route_long_name":"Kawangware","route_desc":"Westlands-ABC-Lavington-Kawangware"},{"route_short_name":"129","route_long_name":"Wangige","route_desc":"Kikuyu-Magu-Kingeero-Wangige"},{"route_short_name":"24","route_long_name":"Karen","route_desc":"Town-Hardy-Karen"},{"route_short_name":"6","route_long_name":"Eistleigh","route_desc":"Konja-Pangani Fly Over-Guru Nanak-Pangani gals-mlango-eistleigh"},{"route_short_name":"11","route_long_name":"Pangani","route_desc":"Odeon-Pangani fly over-pangani girls-mlango-Pangani terminal"},{"route_short_name":"14","route_long_name":"Kariobangi south","route_desc":"Ronald Ngala-Juja road-Eastleigh-Huruma-Kariobangi"},{"route_short_name":"15","route_long_name":"Langata","route_desc":"Bus Station-Nyayo-Wilson-Langata"},{"route_short_name":"16","route_long_name":"Highrise","route_desc":"Bus Station-Nyayo-Tmall-Highrise"},{"route_short_name":"17","route_long_name":"Kayole ","route_desc":"EastLeigh-Rounda-Umoja 2-kayole"},{"route_short_name":"44","route_long_name":"Mwiki","route_desc":"Bus Station-Pangani-Roysabu-Kasarani-Mwiki"},{"route_short_name":"18","route_long_name":"Eastleigh","route_desc":"Eastleigh-Rounda-Dandora-Kayole"},{"route_short_name":"25","route_long_name":"Baba Dogo","route_desc":"Odeon-Pangani-Alssops-Baba dogo"},{"route_short_name":"32","route_long_name":"Dandora","route_desc":"Otc-Kariokor-Mlango-Rounda-Dandora"},{"route_short_name":"33","route_long_name":"ngummo","route_desc":"Race course-Ngong rd-KNH-Ngummo"},{"route_short_name":"42","route_long_name":"Dandora","route_desc":"Allsops-Rounda-Dandora"},{"route_short_name":"43","route_long_name":"Ngumba","route_desc":"Bus station-Pangani-Alssops-Ngumba"},{"route_short_name":"44","route_long_name":"kahawa","route_desc":"Odeon-Pangani-Roysabu-Githurai-Ku"},{"route_short_name":"45","route_long_name":"Kenyatta University","route_desc":"Munyu rd-Pangani-Roysabu-Githurai-Ku"},{"route_short_name":"46","route_long_name":"Huruma","route_desc":"Ronald Ngala-Juja road-Eastleigh-Huruma"},{"route_short_name":"115","route_long_name":"Limuru","route_desc":"Odeon-Westlands-Kangemi-Limuru"},{"route_short_name":"45","route_long_name":"Ruiru town","route_desc":"Munyu rd-Pangani-Roysabu-Githurai-Ku-Ruiru"},{"route_short_name":"2030","route_long_name":"Rounder","route_desc":"Allsops-Rounda"},{"route_short_name":"29","route_long_name":"Mathare North","route_desc":"Ngara-Pangani-Alssops-Drive in-Mathare"},{"route_short_name":"46","route_long_name":"Yaya","route_desc":"Town-Valleyroad-Hurlinghum-Yaya"},{"route_short_name":"33","route_long_name":"SouthB","route_desc":"Ngumo-Highrise-NairobiWest-SouthB"},{"route_short_name":"11","route_long_name":"SouthB\/Hazina","route_desc":"Town-IndustrialArea-SouthB-Hazina"},{"route_short_name":"118","route_long_name":"Wangige","route_desc":"Town-Westlands-Kabete-Wangige"},{"route_short_name":"108","route_long_name":"Gachie","route_desc":"UN-NewMuthaiga-Gachie-Gichagi"},{"route_short_name":"405","route_long_name":"Nyayo","route_desc":"City stadium-Nyayo stadium"},{"route_short_name":"33","route_long_name":"Doni Carbanas","route_desc":"Donholm-Rounda-Carbanas"},{"route_short_name":"19","route_long_name":"komarocks","route_desc":"Donholm-Caltex-Komarocks"},{"route_short_name":"33","route_long_name":"Pipeline Mombasa road","route_desc":"Commercial-Mombasa rd-Tajmall-Pipeline"},{"route_short_name":"33","route_long_name":"Fedha Estate Gate A","route_desc":"Commercial-carbanas-Tuskys-Village-Gate A- Posta"},{"route_short_name":"7","route_long_name":"Gikomba","route_desc":"Town-Kariokor Dc-Gikomba"},{"route_short_name":"69","route_long_name":"Hillocks Gm","route_desc":"Muthurwa-Hillocks-GM"},{"route_short_name":"33","route_long_name":"Imara Daima","route_desc":"Commercial-Belleview-Imara Daima"},{"route_short_name":"34","route_long_name":"Jacaranda","route_desc":"Ambassadeur-Donholm-Jacaranda"},{"route_short_name":"34","route_long_name":"JKIA","route_desc":"Ambassadeur-Donholm-rounda-JKIA"},{"route_short_name":"46","route_long_name":"Kawangware","route_desc":"Kencom-Valley road-Yaya-Kawangware"},{"route_short_name":"1961","route_long_name":"Kayole-Caltex","route_desc":"Kayole-Jacaranda-Savanna-caltex"},{"route_short_name":"1960","route_long_name":"Kayole","route_desc":"Kayole-Donholm-Town"},{"route_short_name":"7","route_long_name":"Kenyatta","route_desc":"Kencom-Community-Equity center-Kenyatta Hospital"},{"route_short_name":"126","route_long_name":"Kiserain","route_desc":"Railways-Langata rd-rongai-Kiserain"},{"route_short_name":"19","route_long_name":"Komarocks","route_desc":"Ambassadeur-Donholm-Jacaranda-Komarocks"},{"route_short_name":"70","route_long_name":"Lunga Lunga","route_desc":"Muthurwa-Likoni-Sinai-Lunga Lunga"},{"route_short_name":"10","route_long_name":"Maringo","route_desc":"Muthurwa-Makadara-Maringo"},{"route_short_name":"126","route_long_name":"Ngong Kiserain","route_desc":"Kiserain"},{"route_short_name":"33","route_long_name":"Pipeline Jogoo road","route_desc":"Muthurwa-Donholm-Pipeline"},{"route_short_name":"17","route_long_name":"Kayole ","route_desc":"Rounda-Umoja 2-kayole"},{"route_short_name":"38","route_long_name":"Ruai","route_desc":"Town-Donholm-Njiru-Ruai"},{"route_short_name":"35","route_long_name":"Umoja","route_desc":"Town-Donhol-Umoja"},{"route_short_name":"33","route_long_name":"Utawala","route_desc":"Utawala-Ambassauder"},{"route_short_name":"24","route_long_name":"Hardy","route_desc":"Odeon-Westlands-Kangemi"},{"route_short_name":"119","route_long_name":"Wangige","route_desc":"Khoja-Westgate-Wangige"},{"route_short_name":"11","route_long_name":"MP Shah","route_desc":"Khoja-MP Shah-Westgate"},{"route_short_name":"48","route_long_name":"Othaya","route_desc":"Odeon-Chiromo-Bypass-Methodist-Othaya"},{"route_short_name":"24","route_long_name":"Karen","route_desc":"Bomas-Karen Hospital-Karen"},{"route_short_name":"32","route_long_name":"Ayani","route_desc":"Kencom-Community-KNH-Ayani"},{"route_short_name":"48","route_long_name":"Lavington","route_desc":"Odeon-Chiromo-Strathmore-Lavington"},{"route_short_name":"14","route_long_name":"Strathmore","route_desc":"Bus Station-Nairobi West-Madaraka-Strathmore"},{"route_short_name":"14","route_long_name":"Deep West","route_desc":"Bus Station-Nairobi West-TMall"},{"route_short_name":"25","route_long_name":"Lucky Summer","route_desc":"Odeon-Pangani-Alssops-Baba dogo-Lucky Summer"},{"route_short_name":"36","route_long_name":"Dandora","route_desc":"City Stadium-Buruburu-kwa mbao-Dandora"},{"route_short_name":"31","route_long_name":"Dandora","route_desc":"Gikomba-Rounda-Dandora"},{"route_short_name":"44","route_long_name":"Zimmerman","route_desc":"Odeon-Pangani-Roysabu-Zimmerman-Ku"},{"route_short_name":"45","route_long_name":"Githurai","route_desc":"Munyu rd-Pangani-Roysabu-Githurai"},{"route_short_name":"46","route_long_name":"Rounda","route_desc":"Ronald Ngala-Juja road-Eastleigh-Rounda"},{"route_short_name":"49","route_long_name":"Sunton","route_desc":"Odeon-Pangani-Roysabu-Kasarani-Sunton"},{"route_short_name":"116","route_long_name":"Limuru","route_desc":"Konja-Ngara-Banana-Limuru"},{"route_short_name":"120","route_long_name":"Githunguri","route_desc":" Kaka-Pangani-Muthaiga Roundabout-Kiambu Rd-Kiambu Institute-Kiambu-Githunguri"},{"route_short_name":"121","route_long_name":"Ndumberi","route_desc":" Kaka-Pangani-Muthaiga Roundabout-Kiambu Rd-Kiambu Institute-Kiambu-Ndumberi"},{"route_short_name":"6","route_long_name":"Eastleigh","route_desc":"Church Army-Biafra-Joster"},{"route_short_name":"26","route_long_name":"Kariobangi","route_desc":"Makadara-Harambee-outering-Kariobangi"},{"route_short_name":"110","route_long_name":"Athiriver","route_desc":"Town-Mombasa rd-Devki-Makadara"},{"route_short_name":"110","route_long_name":"Kitengela","route_desc":"Railways-Mombasa rd-mlolongo-Kitengela"},{"route_short_name":"125","route_long_name":"Rongai","route_desc":"Railways-Langata rd-Bomas -Rongai"},{"route_short_name":"1961","route_long_name":"Kayole","route_desc":"Ladhes rd-Jogoo rd-Jacaranda-Kayole"},{"route_short_name":"3738","route_long_name":"Ruai","route_desc":"Rounda-saika-Ruai "},{"route_short_name":"110","route_long_name":"Athiriver Kitengela","route_desc":"Athiriver-Makadara-Kitengela"},{"route_short_name":"3","route_long_name":"Gikomba Ngara","route_desc":"Gikomba-kariokor-Ngara"},{"route_short_name":"33","route_long_name":"Pipeline_Cabanas","route_desc":"Commercial-Jogoord-Pipeline-Cabanas"},{"route_short_name":"33","route_long_name":"Nyayo Estate GAte B","route_desc":"Accra_road-Jogoo road-Donholm-Fedha-Gate B"},{"route_short_name":"126","route_long_name":"Rongai-Kiserian","route_desc":"Rongai-Nkoroi-Kiserian"},{"route_short_name":"3560","route_long_name":"Umoja 2","route_desc":"Donholm-Mtindwa-Umoja 2"},{"route_short_name":"237","route_long_name":"Thika Town","route_desc":"Munyu rd-Pangani-Roysambu-Githurai-Ku-Ruiru-Juja-Thika"},{"route_short_name":"20","route_long_name":"Mwiki","route_desc":"Mama Lucy Hospital-kayole-Njiru-Mwiki"},{"route_short_name":"18","route_long_name":"Kayole","route_desc":"Bus Station-Round About-Dandora-Kayole"},{"route_short_name":"114","route_long_name":"Limuru","route_desc":"Ngara-Westlands-Kangemi-Limuru"},{"route_short_name":"135","route_long_name":"Limuru","route_desc":"Kaka-Westlands-Kangemi-Limuru"},{"route_short_name":"100","route_long_name":"Kiambu Hospital","route_desc":" Ngara-Pangani-Muthaiga Roundabout-Kiambu Rd-Kiambu Institute-Kiambu Hospital"},{"route_short_name":"28","route_long_name":"Kariobangi south","route_desc":"Gikomba-Eastleigh-Huruma-Kariobangi"},{"route_short_name":"23","route_long_name":"Westlands","route_desc":"Nation Building-Muesum Hill-Grafin College-Westlands"},{"route_short_name":"19","route_long_name":"Komarocks","route_desc":"Ronald Ngala-Jogoo rd-Kangundo rd-Mama Lucy-Komarocks"},{"route_short_name":"26","route_long_name":"Kariobangi via Salem","route_desc":"Aquinas - Salem-Outering- Kariobangi"},{"route_short_name":"33","route_long_name":"Mukuru kwa Njenga","route_desc":"Bus Station- Mombasa rd-Imara-St Bakhita"},{"route_short_name":"4","route_long_name":"Saika","route_desc":"Ronald Ngala-Jogoo rd - Kangundo rd-Saika-Kayole Junction"}]);

	$('#btnSearch').click(function(e) {
		var typedsearchkey = $('#searchkey').val();
		// console.log(typedsearchkey);
		e.preventDefault();
		var updater = routes(function() {
			// console.log(this);
			var re = new RegExp(typedsearchkey, "i");
			// console.log(re);
			if (this.route_short_name == typedsearchkey || this.route_long_name == typedsearchkey || re.test(this.route_desc)){
				return true;
			} else { 
				return false;
			}
		});
				var sets = JSON.parse(updater.stringify());
				if (updater.count()) {
					$('#result').html('');
					for (var i = 0; i < updater.count(); i++) {
						sets[i];
						addItem('set', sets[i]);
						// console.log(sets);
					};

				} else {
					$('#result').html('');
					$('#result').append('<div class="list_item">'+'No results'+'</div> ');
				}
				
		// console.log(updater.count());

	});
	function addItem (item, itemData) {
		switch(item){
			case 'set':
				// console.log(itemData);
					
					$('#result').append('<div class="list_item_rno">'+itemData.route_short_name+'</div> ');
					$('#result').append('<div class="list_item_rln">'+itemData.route_long_name+'</div> ');
					$('#result').append('<div class="list_item_rd">'+itemData.route_desc+'</div> ');
				
				// $('#result').html('');
				
				
			break;
		}
	}
	$('#searchform').on('submit', function (e) {
		var typedsearchkey = $('#searchkey').val();
		// console.log(typedsearchkey);
		e.preventDefault();
		var updater = routes(function() {
			// console.log(this);
			var re = new RegExp(typedsearchkey, "i");
			// console.log(re);
			if (this.route_short_name == typedsearchkey || this.route_long_name == typedsearchkey || re.test(this.route_desc)){
				return true;
			} else { 
				return false;
			}
		});
		var sets = JSON.parse(updater.stringify());
		if (updater.count()) {
			$('#result').html('');
			for (var i = 0; i < updater.count(); i++) {
				sets[i];
				addItem('set', sets[i]);
				// console.log(sets);
			};

		} else {
			$('#result').html('');
			$('#result').append('<div class="list_item">'+'No results'+'</div> ');
		}
	})
})(jQuery);
