var api = {};

var frases = [
	{_id: 0, texto:'Current elections in Brazil have become a gigantic spectacle; the politicians are the ventriloquists and the people as puppets!', tempo: 20 },
	{_id: 1, texto:'Debuggers do not fix bugs, they only display them in slow motion.',tempo: 8 },
	{_id: 2, texto:'Life is what we do as we go through it.', tempo: 5 },
	{_id: 3, texto:'There are two difficult tasks in Computer Science: cache overriding and naming things.', tempo: 15 },
	{_id: 4, texto:'Computer science is as about computers as astronomy is about telescopes.', tempo: 15 },
	{_id: 5, texto:'On my machine it works.', tempo: 5 },
	{_id: 6, texto:'Hardware is what you kick, software is what you scold.', tempo: 12 },
	{_id: 7, texto:'Software in operation rather than comprehensive documentation.', tempo: 10 },
	{_id: 8, texto:'Iterar is human, recursion is divine.', tempo: 7},
	{_id: 9, texto:'There are three ways to develop software. The right way, the wrong way, and my way, which is just the wrong way, but faster.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
