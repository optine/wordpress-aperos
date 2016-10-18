
 let util_photo = [];
 let util_email	= [];
 let util_name	= [];
 	function user_slack(){
 		let jeton =  emdevnet.slack.com/messages/dev1/team/	
 	}

 	let eleves = [
 		new eleves(Xiong,Stan),
 		new eleves(Saigot,Pierre),
 		new eleves(Campan,Loan),
 		new eleves(Lhuaire,Bastien),
 		new eleves(Dussol,clement),
 		new eleves(Coquin,Axel),
 	];
 	this.util.init( eleve );

		this.eleves = eleves;		

		//  création de la représentation de la palette
		
		let $eleves = $('#eleves'),
			$one 	= $eleves.children('li').detach();

		for(let j=0; j<eleves.length; j++){

			let li 		= $one.clone(),
				eleve 	= this.eleves[j];

			eleve.id 	= j;

			li.css(eleve.to_string())
			  .attr('title', eleve.name);
			$eleves.append(li);
		}

		// gestion des click
		
		var self = this;

		$('#eleves').on('click', 'li', function(){

			let index = $( "#eleves li" ).index( this );

		});
	}

}



function refresh_bar(){
	context.fillStyle = "#95FF76";
	context.fillRect(80,100,100,15);
};


 	