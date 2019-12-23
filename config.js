module.exports = {
	/* The token of your Discord Bot */
	token: "NjUzNTQxOTgwNjkyODA3Njgx.Xf9M1Q.45Eg8T4o4OAe5rwW3RorqH95EAw",
	/* For the support server */
	support: {
		id: "658260771448291338", // The ID of the support server
		logs: "658260771448291341", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "rNjyRvVOFiZOSF5D16H0oRuXqP_Fdh0p", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: ".", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "HALU🌛 | Guilds Indonesia" // And the default footer for the embeds
	},
	defaultLanguage: "english", // The default language for the new servers
	botname: "HALU🌛", // The name of the bot
	/* Bot's owner informations */
	owner: {
		id: "634456486046859315", // The ID of the bot's owner
		name: "Syarief Hidayat" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// SIMPLE YOUTUBE API: https://console.developers.google.com/
		simpleYoutube: "AIzaSyC8GHxFJ17uRpUYuyUngZ4lrlWNV_P85-w",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "c8fbdfc483ff7509f86c549941acd5af1670e9f80954c98cbca48e815f8fc6128c691d57a4e2a2241c08f7337ac8b7b29f13b8fca63e13b053bfdb079464a7b6"
	},
	/* The emojis that are required for certain commands */
	emojis: {
		error: ":x:",
		// RE: https://cdn.discordapp.com/emojis/565212755804684318.png
		success: ":white_check_mark:",
		// RE: https://cdn.discordapp.com/emojis/565212709591973896.png
		loading: ":arrows_counterclockwise:",
		// RE: https://cdn.discordapp.com/emojis/565214530121105418.gif
		stats: ":chart_with_upwards_trend:",
		// RE: https://img.icons8.com/flat_round/64/000000/bar-chart-isometric.png
		ram: ":gear:",
		// RE: https://img.icons8.com/color/96/000000/processor.png
		version: ":grey_question:",
		// RE: https://img.icons8.com/color/96/000000/installing-updates.png
		link: ":link:",
		// RE: https://img.icons8.com/color/96/000000/link.png
		voice: ":loud_sound:",
		// RE: https://img.icons8.com/color/96/000000/speaker.png
		add: ":heavy_plus_sign:",
		// RE: https://img.icons8.com/flat_round/64/000000/plus.png
		vote: "<:atlanta_vote:598175768274665492>",
		// RE: https://img.icons8.com/flat_round/96/vote-button.png 
		help: ":grey_question:",
		// RE: https://img.icons8.com/color/96/000000/help.png
		warn: ":warning:",
		// RE: https://img.icons8.com/flat_round/64/000000/error--v1.png
		games: ":game_die:",
		// RE: https://img.icons8.com/color/96/000000/computer.png
		crown: ":crown:",
		// RE: https://img.icons8.com/flat_round/96/000000/crown.png
		discriminator: ":hash:",
		// RE: https://img.icons8.com/color/96/000000/hashtag-2.png
		bot: ":robot:",
		// RE: https://img.icons8.com/color/96/000000/bot.png
		avatar: ":frame_photo:",
		// RE: https://img.icons8.com/color/96/000000/picture.png
		calendar: ":calendar_spiral:",
		// RE: https://img.icons8.com/color/96/000000/calendar.png
		calendar2: ":calendar:",
		// RE: https://img.icons8.com/color/96/000000/calendar-2.png
		up: ":up:",
		// RE: https://img.icons8.com/cotton/64/000000/circled-up--v2.png
		pencil: ":pencil2:",
		// RE: https://img.icons8.com/color/96/000000/pencil.png
		roles: ":pencil:",
		// RE: https://img.icons8.com/color/96/000000/admin-settings-male.png
		color: ":rainbow:",
		// RE: https://img.icons8.com/color/96/000000/color-palette.png
		minecraft: ":pick:",
		// RE: https://img.icons8.com/color/96/000000/minecraft-sword.png 
		users: ":family_mwg:",
		// RE: https://img.icons8.com/color/96/000000/group.png
		title: ":label",
		// RE: https://img.icons8.com/color/96/000000/tag-window.png
		singer: ":man_singer:",
		// RE: https://img.icons8.com/ios-filled/96/000000/rap.png
		time: ":timer:",
		// RE: https://img.icons8.com/color/96/000000/future.png
		search: ":mag_right",
		// RE: https://img.icons8.com/cotton/96/000000/search--v2.png
		desc: ":bookmark_tabs:",
		// RE: https://img.icons8.com/color/96/000000/text-box.png
		playlist: ":musical_score:",
		// RE: https://img.icons8.com/color/96/000000/smart-playlist.png
		channels: ":speech_balloon:",
		// RE: https://img.icons8.com/color/96/000000/filled-chat.png
		afk: ":mute:",
		// RE: https://img.icons8.com/color/96/000000/no-microphone.png
		id: ":card_index",
		// RE: https://img.icons8.com/color/96/000000/id-verified.png
		ip: ":pushpin:",
		// RE: https://img.icons8.com/color/96/000000/ip-address.png
		folder: ":file_folder:",
		// RE: https://img.icons8.com/color/344/opened-folder.png
		desc2: ":notepad_spiral:",
		// RE: https://img.icons8.com/color/344/edit-property.png
		patreon: "https://cdn6.aptoide.com/imgs/2/8/e/28e759bcb1e00ad978afdf443e60c11e_icon.png",
		// RE: https://cdn6.aptoide.com/imgs/2/8/e/28e759bcb1e00ad978afdf443e60c11e_icon.png
		server: ":global_with_meridians:",
		// RE: https://img.icons8.com/color/96/000000/root-server.png
		boost: ":b:",
		// RE: https://i.goopics.net/w7LAR.png
		status: {
			idle: ":i:",
			// RE: https://i.goopics.net/bRVWW.png
			dnd: ":d:",
			// RE: https://i.goopics.net/lWN3A.png
			offline: ":o:",
			// RE: https://i.goopics.net/WRPWl.png
			online: ":n:"
			// RE: https://i.goopics.net/QdGW0.png
		},
		letters: {
			a: ":regional_indicator_a:",
			// RE: https://i.goopics.net/RNemO.png
			w: ":regional_indicator_w:",
			// RE: https://i.goopics.net/AyKOA.png
			r: ":regional_indicator_r:",
			// RE: https://i.goopics.net/7PKen.png
			d: ":regional_indicator_d:"
			// RE: https://i.goopics.net/vAgj7.png
		},
		categories: {
			administration: ":man_detective:",
			// RE: https://img.icons8.com/color/96/000000/horizontal-settings-mixer.png
			economy: ":moneybag:",
			// RE: https://img.icons8.com/color/96/000000/banknotes.png
			fun: ":roller_coaster:",
			// RE: https://img.icons8.com/color/96/000000/smiling.png
			general: ":bookmark:",
			// RE: https://i.goopics.net/3X5oq.png
			images: ":frame_photo:",
			// RE: https://img.icons8.com/color/96/000000/picture.png
			moderation: ":hammer:",
			// RE: https://img.icons8.com/color/96/000000/police-badge.png
			music: ":musical_note:",
			// RE: https://img.icons8.com/color/96/000000/musically.png
			owner: ":crown:",
			// RE: https://img.icons8.com/color/96/000000/queen-uk.png
			custom: ":wrench:"
			// RE: https://img.icons8.com/color/96/000000/request-service.png
		}
	},
	/* The others utils links */
	others: {
		github: "https://github.com/halubotdc", // Founder's github account
		donate: "https://patreon.com/Androz2091" // Donate link
	},
	/* The badges for the badges command */
	badges: {
		games: [
			{ name: "Minecraft", emoji: "", price: 1200 },
			{ name: "GTA", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Fortnite", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Mario", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "LOL", emoji: "XXXXXXXXXXX", price: 1200 }
		],
		flags: [
			{ name: "France", emoji: ":flag_fr:", price: 1500 },
			{ name: "Canada", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Swiss", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Great Britain", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "USA", emoji: ":flag_us:", price: 1500 }
		],
		others: [
			{ name:"Rich", emoji: "XXXXXXXXXXX", price: 18000 },
			{ name:"Troll", emoji: "XXXXXXXXXXX", price: 3000 },
			{ name:"Atlanta", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name:"IAMABOT", emoji: "XXXXXXXXXXX", price: 1000 },
			{ name:"Discordien", emoji: "XXXXXXXXXXX", price: 500 }
		]
	},
	/* The Bot status */
	status: [
		{
			name: "@HALU🌛 help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: ".help : HALU🌛",
			type: "WATCHING"
		}
	],
	proMode: true, // Whether the bot is in pro mode (only users in the proUsers array will be able to invite the bot)
	/* The pro users */
	proUsers: [
		"634456486046859315",
		"634456486046859315"
	]
}
