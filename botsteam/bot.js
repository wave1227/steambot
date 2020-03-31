const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp')
var SteamCommunity = require('steamcommunity');
var community = new SteamCommunity();
const config = require('./config.json');
const client = new SteamUser();


const logOnOptions = {
	accountName: config.username,
	password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('Logado Com Sucesso STEAMBOT Feito Por wave1227.');
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	client.gamesPlayed(["•Escreve !about para saberes cenas sobre mim", 440]);
});

client.on("friendMessage", function(steamID, message) {
	if (message == "• !botfeatures") {
		client.chatMessage(steamID, "O BOT Inclui:\n\n> Auto Steam Message\n> Aceita Pedidos De Amizade Automaticamente\n> Mensagens como um jogo non-steam que vão mudando de X em X tempo\n> Comandos Configuráveis\n> Inteligência Artificial (BETA)");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !smurf") {
		client.chatMessage(steamID, "https://steamcommunity.com/id/peeptracy");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !discord1337") {
		client.chatMessage(steamID, "https://discord.gg/7FnFWYK");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !configs") {
		client.chatMessage(steamID, "Queres alguma config:\n\n> SteamBOT: 3€ faz !bot para veres as informações do bot\n> WebSite: 7€\n> Server de CS:GO: BREVEMENTE (Fazendo Preços) ");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !ajuda") {
		client.chatMessage(steamID, "Lista De Comandos:\n\n> !about: Informação Sobre O wave1227\n> !bot: Informações sobre BOT\n> !configs: Caso Queiras Algum Tipo De Config Feita Por Mim\n>  !design: Caso Queiras Um Trabalho De Design Feito Por Mim\n> !discord1337: Para poderes entrar na melhor comunidade de discord de Tecnologia, Segurança informatica, Informatica, Hacking, entre oturos fundamentos\n OBRIGADO!"
);
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !design") {
		client.chatMessage(steamID, "Queres algum tipo de trabalho de design:\n\nArtwork: 5€\n> Logos Para Canais E Para Comunidades: 2,50€\n> Layout LiveStream: 3€\n> Layout LiveStream Animado: 5€\n> Banner: 2€\n> Design Para Grupos: 1€");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !criador") {
		client.chatMessage(steamID, "Este SteamBot foi feito pelo:\n\n^_^ wave1227 ^_^");
	}
});
client.on("friendMessage", function(steamID, message) {
	if (message == "• !about") {
		client.chatMessage(steamID, "Sobre Mim:\n\nChamo-me *teu nome* Tenho *tua idade* e Sou Designer e Configurador de WebSites | Game Servers | SteamBots sei mexer em HTML, JavaScript e CSS");
	}
});
client.on('friendRelationship', function(sid, relationship) {
	if (relationship == SteamUser.EFriendRelationship.RequestRecipient) {
		console.log("Novo Pedido De Amizade" +sid);
		client.addFriend(sid, function (err, name) {
			if (err) {
				console.log(err);
				return;
			}
			console.log("Aceitas-te O Pedido De"+name)
		})
	}
})
client.on('friendsList', function() {
	for (var sid in client.myFriends);
		var relationship = client.myFriends[sid]
		if (relationship == SteamUser.EFriendRelationship.RequestRecipient) {
		console.log("Novo Pedido De Amizade" +sid);
		client.addFriend(sid, function (err, name) {
			if (err) {
				console.log(err);
				return;
			}
			console.log("Aceitas-te O Pedido De" +name)
		

	
 })}})





		client.on("friendMessage", function(steam, message) {
    if (message == "• !assina") {
        client.chatMessage(steam, "teu perfil foi assinado por mim :)");
        community.postUserComment(steam, 'Signed By wave1227'
)


}})


