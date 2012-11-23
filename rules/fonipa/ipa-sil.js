( function ( $ ) {
	'use strict';

	var ipaSil = {
		id: 'ipa-sil',
		name: 'Internation Phonetic Alphabet - SIL',
		description: 'Internation Phonetic Alphabet - SIL',
		date: '2012-11-23',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'mapping by Martin Hosken and Lorna A. Priest; implementation by Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			['B=', 'ʙ'],
			['f=', 'ɸ'],
			['b=', 'β'],
			['m>', 'ɱ'],
			['v<', 'ⱱ'],
			['v=', 'ʋ']
		]
	};
	$.ime.register( ipaSil );

} ( jQuery ) );