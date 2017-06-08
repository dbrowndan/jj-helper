var actualCode = `

function jj_is_song_over() {
	let jj_times = document.querySelectorAll( ".playback-bar__progress-time" );

	let seek = jj_times[0].innerHTML.split( ":" );
	let current_s = seek[0] * 60 + parseInt( seek[1] );
	seek = jj_times[1].innerHTML.split( ":" );
	let full_len = seek[0] * 60 + parseInt( seek[1] );

	if( current_s >= full_len - 3 ) {
		document.querySelector( ".player-controls__buttons button[title=Pause]" ).click();
		location.reload();
	}
}
setInterval( jj_is_song_over, 950 );

function jj_play() {
	document.querySelector( ".player-controls__buttons button[title=Previous]" ).click();
	document.querySelector( ".tracklist-row.active" ).parentElement.nextSibling.querySelector( ".play-pause" ).click();
	console.log( "Started play" );
}

setTimeout( jj_play, 2000 );

`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();