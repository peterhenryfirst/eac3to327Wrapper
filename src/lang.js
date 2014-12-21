/**
 * @author Anatoly Mironov (mirontoli)
 * http://sharepointkunskap.wordpress.com
 * http://www.bool.se
 *  
 * http://stackoverflow.com/questions/3605495/generate-a-list-of-localized-language-names-with-links-to-google-translate/14800384#14800384
 * http://stackoverflow.com/questions/10997128/language-name-from-iso-639-1-code-in-javascript/14800499#14800499
 * 
 * using Phil Teare's answer on stackoverflow
 * http://stackoverflow.com/questions/3217492/list-of-language-codes-in-yaml-or-json/4900304#4900304
 * Just for testing only. Incorporate in your own javascript namespace
 * Example: getLanguageName("cv-RU") --> Chuvash
 */
(function() {
  'use strict';
	
	/**
	 * @author Phil Teare
	 * using wikipedia data
	 */
	 /*
	var isoLangs = {
		"ab":{
			"name":"Abkhaz",
			"nativeName":"Ð°Ò§ÑÑƒÐ°"
		},
		"aa":{
			"name":"Afar",
			"nativeName":"Afaraf"
		},
		"af":{
			"name":"Afrikaans",
			"nativeName":"Afrikaans"
		},
		"ak":{
			"name":"Akan",
			"nativeName":"Akan"
		},
		"sq":{
			"name":"Albanian",
			"nativeName":"Shqip"
		},
		"am":{
			"name":"Amharic",
			"nativeName":"áŠ áˆ›áˆ­áŠ›"
		},
		"ar":{
			"name":"Arabic",
			"nativeName":"Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
		},
		"an":{
			"name":"Aragonese",
			"nativeName":"AragonÃ©s"
		},
		"hy":{
			"name":"Armenian",
			"nativeName":"Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"
		},
		"as":{
			"name":"Assamese",
			"nativeName":"à¦…à¦¸à¦®à§€à¦¯à¦¼à¦¾"
		},
		"av":{
			"name":"Avaric",
			"nativeName":"Ð°Ð²Ð°Ñ€ Ð¼Ð°Ñ†Ó€, Ð¼Ð°Ð³Ó€Ð°Ñ€ÑƒÐ» Ð¼Ð°Ñ†Ó€"
		},
		"ae":{
			"name":"Avestan",
			"nativeName":"avesta"
		},
		"ay":{
			"name":"Aymara",
			"nativeName":"aymar aru"
		},
		"az":{
			"name":"Azerbaijani",
			"nativeName":"azÉ™rbaycan dili"
		},
		"bm":{
			"name":"Bambara",
			"nativeName":"bamanankan"
		},
		"ba":{
			"name":"Bashkir",
			"nativeName":"Ð±Ð°ÑˆÒ¡Ð¾Ñ€Ñ‚ Ñ‚ÐµÐ»Ðµ"
		},
		"eu":{
			"name":"Basque",
			"nativeName":"euskara, euskera"
		},
		"be":{
			"name":"Belarusian",
			"nativeName":"Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ"
		},
		"bn":{
			"name":"Bengali",
			"nativeName":"à¦¬à¦¾à¦‚à¦²à¦¾"
		},
		"bh":{
			"name":"Bihari",
			"nativeName":"à¤­à¥‹à¤œà¤ªà¥à¤°à¥€"
		},
		"bi":{
			"name":"Bislama",
			"nativeName":"Bislama"
		},
		"bs":{
			"name":"Bosnian",
			"nativeName":"bosanski jezik"
		},
		"br":{
			"name":"Breton",
			"nativeName":"brezhoneg"
		},
		"bg":{
			"name":"Bulgarian",
			"nativeName":"Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº"
		},
		"my":{
			"name":"Burmese",
			"nativeName":"á€—á€™á€¬á€…á€¬"
		},
		"ca":{
			"name":"Catalan; Valencian",
			"nativeName":"CatalÃ "
		},
		"ch":{
			"name":"Chamorro",
			"nativeName":"Chamoru"
		},
		"ce":{
			"name":"Chechen",
			"nativeName":"Ð½Ð¾Ñ…Ñ‡Ð¸Ð¹Ð½ Ð¼Ð¾Ñ‚Ñ‚"
		},
		"ny":{
			"name":"Chichewa; Chewa; Nyanja",
			"nativeName":"chiCheÅµa, chinyanja"
		},
		"zh":{
			"name":"Chinese",
			"nativeName":"ä¸­æ–‡ (ZhÅngwÃ©n), æ±‰è¯­, æ¼¢èªž"
		},
		"cv":{
			"name":"Chuvash",
			"nativeName":"Ñ‡Ó‘Ð²Ð°Ñˆ Ñ‡Ó—Ð»Ñ…Ð¸"
		},
		"kw":{
			"name":"Cornish",
			"nativeName":"Kernewek"
		},
		"co":{
			"name":"Corsican",
			"nativeName":"corsu, lingua corsa"
		},
		"cr":{
			"name":"Cree",
			"nativeName":"á“€á¦áƒá”­ááá£"
		},
		"hr":{
			"name":"Croatian",
			"nativeName":"hrvatski"
		},
		"cs":{
			"name":"Czech",
			"nativeName":"Äesky, ÄeÅ¡tina"
		},
		"da":{
			"name":"Danish",
			"nativeName":"dansk"
		},
		"dv":{
			"name":"Divehi; Dhivehi; Maldivian;",
			"nativeName":"Þ‹Þ¨ÞˆÞ¬Þ€Þ¨"
		},
		"nl":{
			"name":"Dutch",
			"nativeName":"Nederlands, Vlaams"
		},
		"en":{
			"name":"English",
			"nativeName":"English"
		},
		"eo":{
			"name":"Esperanto",
			"nativeName":"Esperanto"
		},
		"et":{
			"name":"Estonian",
			"nativeName":"eesti, eesti keel"
		},
		"ee":{
			"name":"Ewe",
			"nativeName":"EÊ‹egbe"
		},
		"fo":{
			"name":"Faroese",
			"nativeName":"fÃ¸royskt"
		},
		"fj":{
			"name":"Fijian",
			"nativeName":"vosa Vakaviti"
		},
		"fi":{
			"name":"Finnish",
			"nativeName":"suomi, suomen kieli"
		},
		"fr":{
			"name":"French",
			"nativeName":"franÃ§ais, langue franÃ§aise"
		},
		"ff":{
			"name":"Fula; Fulah; Pulaar; Pular",
			"nativeName":"Fulfulde, Pulaar, Pular"
		},
		"gl":{
			"name":"Galician",
			"nativeName":"Galego"
		},
		"ka":{
			"name":"Georgian",
			"nativeName":"áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜"
		},
		"de":{
			"name":"German",
			"nativeName":"Deutsch"
		},
		"el":{
			"name":"Greek, Modern",
			"nativeName":"Î•Î»Î»Î·Î½Î¹ÎºÎ¬"
		},
		"gn":{
			"name":"GuaranÃ­",
			"nativeName":"AvaÃ±eáº½"
		},
		"gu":{
			"name":"Gujarati",
			"nativeName":"àª—à«àªœàª°àª¾àª¤à«€"
		},
		"ht":{
			"name":"Haitian; Haitian Creole",
			"nativeName":"KreyÃ²l ayisyen"
		},
		"ha":{
			"name":"Hausa",
			"nativeName":"Hausa, Ù‡ÙŽÙˆÙØ³ÙŽ"
		},
		"he":{
			"name":"Hebrew (modern)",
			"nativeName":"×¢×‘×¨×™×ª"
		},
		"hz":{
			"name":"Herero",
			"nativeName":"Otjiherero"
		},
		"hi":{
			"name":"Hindi",
			"nativeName":"à¤¹à¤¿à¤¨à¥à¤¦à¥€, à¤¹à¤¿à¤‚à¤¦à¥€"
		},
		"ho":{
			"name":"Hiri Motu",
			"nativeName":"Hiri Motu"
		},
		"hu":{
			"name":"Hungarian",
			"nativeName":"Magyar"
		},
		"ia":{
			"name":"Interlingua",
			"nativeName":"Interlingua"
		},
		"id":{
			"name":"Indonesian",
			"nativeName":"Bahasa Indonesia"
		},
		"ie":{
			"name":"Interlingue",
			"nativeName":"Originally called Occidental; then Interlingue after WWII"
		},
		"ga":{
			"name":"Irish",
			"nativeName":"Gaeilge"
		},
		"ig":{
			"name":"Igbo",
			"nativeName":"Asá»¥sá»¥ Igbo"
		},
		"ik":{
			"name":"Inupiaq",
			"nativeName":"IÃ±upiaq, IÃ±upiatun"
		},
		"io":{
			"name":"Ido",
			"nativeName":"Ido"
		},
		"is":{
			"name":"Icelandic",
			"nativeName":"Ãslenska"
		},
		"it":{
			"name":"Italian",
			"nativeName":"Italiano"
		},
		"iu":{
			"name":"Inuktitut",
			"nativeName":"áƒá“„á’ƒá‘Žá‘á‘¦"
		},
		"ja":{
			"name":"Japanese",
			"nativeName":"æ—¥æœ¬èªž (ã«ã»ã‚“ã”ï¼ã«ã£ã½ã‚“ã”)"
		},
		"jv":{
			"name":"Javanese",
			"nativeName":"basa Jawa"
		},
		"kl":{
			"name":"Kalaallisut, Greenlandic",
			"nativeName":"kalaallisut, kalaallit oqaasii"
		},
		"kn":{
			"name":"Kannada",
			"nativeName":"à²•à²¨à³à²¨à²¡"
		},
		"kr":{
			"name":"Kanuri",
			"nativeName":"Kanuri"
		},
		"ks":{
			"name":"Kashmiri",
			"nativeName":"à¤•à¤¶à¥à¤®à¥€à¤°à¥€, ÙƒØ´Ù…ÙŠØ±ÙŠâ€Ž"
		},
		"kk":{
			"name":"Kazakh",
			"nativeName":"ÒšÐ°Ð·Ð°Ò› Ñ‚Ñ–Ð»Ñ–"
		},
		"km":{
			"name":"Khmer",
			"nativeName":"áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš"
		},
		"ki":{
			"name":"Kikuyu, Gikuyu",
			"nativeName":"GÄ©kÅ©yÅ©"
		},
		"rw":{
			"name":"Kinyarwanda",
			"nativeName":"Ikinyarwanda"
		},
		"ky":{
			"name":"Kirghiz, Kyrgyz",
			"nativeName":"ÐºÑ‹Ñ€Ð³Ñ‹Ð· Ñ‚Ð¸Ð»Ð¸"
		},
		"kv":{
			"name":"Komi",
			"nativeName":"ÐºÐ¾Ð¼Ð¸ ÐºÑ‹Ð²"
		},
		"kg":{
			"name":"Kongo",
			"nativeName":"KiKongo"
		},
		"ko":{
			"name":"Korean",
			"nativeName":"í•œêµ­ì–´ (éŸ“åœ‹èªž), ì¡°ì„ ë§ (æœé®®èªž)"
		},
		"ku":{
			"name":"Kurdish",
			"nativeName":"KurdÃ®, ÙƒÙˆØ±Ø¯ÛŒâ€Ž"
		},
		"kj":{
			"name":"Kwanyama, Kuanyama",
			"nativeName":"Kuanyama"
		},
		"la":{
			"name":"Latin",
			"nativeName":"latine, lingua latina"
		},
		"lb":{
			"name":"Luxembourgish, Letzeburgesch",
			"nativeName":"LÃ«tzebuergesch"
		},
		"lg":{
			"name":"Luganda",
			"nativeName":"Luganda"
		},
		"li":{
			"name":"Limburgish, Limburgan, Limburger",
			"nativeName":"Limburgs"
		},
		"ln":{
			"name":"Lingala",
			"nativeName":"LingÃ¡la"
		},
		"lo":{
			"name":"Lao",
			"nativeName":"àºžàº²àºªàº²àº¥àº²àº§"
		},
		"lt":{
			"name":"Lithuanian",
			"nativeName":"lietuviÅ³ kalba"
		},
		"lu":{
			"name":"Luba-Katanga",
			"nativeName":""
		},
		"lv":{
			"name":"Latvian",
			"nativeName":"latvieÅ¡u valoda"
		},
		"gv":{
			"name":"Manx",
			"nativeName":"Gaelg, Gailck"
		},
		"mk":{
			"name":"Macedonian",
			"nativeName":"Ð¼Ð°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸ Ñ˜Ð°Ð·Ð¸Ðº"
		},
		"mg":{
			"name":"Malagasy",
			"nativeName":"Malagasy fiteny"
		},
		"ms":{
			"name":"Malay",
			"nativeName":"bahasa Melayu, Ø¨Ù‡Ø§Ø³ Ù…Ù„Ø§ÙŠÙˆâ€Ž"
		},
		"ml":{
			"name":"Malayalam",
			"nativeName":"à´®à´²à´¯à´¾à´³à´‚"
		},
		"mt":{
			"name":"Maltese",
			"nativeName":"Malti"
		},
		"mi":{
			"name":"MÄori",
			"nativeName":"te reo MÄori"
		},
		"mr":{
			"name":"Marathi (MarÄá¹­hÄ«)",
			"nativeName":"à¤®à¤°à¤¾à¤ à¥€"
		},
		"mh":{
			"name":"Marshallese",
			"nativeName":"Kajin MÌ§ajeÄ¼"
		},
		"mn":{
			"name":"Mongolian",
			"nativeName":"Ð¼Ð¾Ð½Ð³Ð¾Ð»"
		},
		"na":{
			"name":"Nauru",
			"nativeName":"EkakairÅ© Naoero"
		},
		"nv":{
			"name":"Navajo, Navaho",
			"nativeName":"DinÃ© bizaad, DinÃ©kÊ¼ehÇ°Ã­"
		},
		"nb":{
			"name":"Norwegian BokmÃ¥l",
			"nativeName":"Norsk bokmÃ¥l"
		},
		"nd":{
			"name":"North Ndebele",
			"nativeName":"isiNdebele"
		},
		"ne":{
			"name":"Nepali",
			"nativeName":"à¤¨à¥‡à¤ªà¤¾à¤²à¥€"
		},
		"ng":{
			"name":"Ndonga",
			"nativeName":"Owambo"
		},
		"nn":{
			"name":"Norwegian Nynorsk",
			"nativeName":"Norsk nynorsk"
		},
		"no":{
			"name":"Norwegian",
			"nativeName":"Norsk"
		},
		"ii":{
			"name":"Nuosu",
			"nativeName":"ê†ˆêŒ ê’¿ Nuosuhxop"
		},
		"nr":{
			"name":"South Ndebele",
			"nativeName":"isiNdebele"
		},
		"oc":{
			"name":"Occitan",
			"nativeName":"Occitan"
		},
		"oj":{
			"name":"Ojibwe, Ojibwa",
			"nativeName":"áŠá“‚á”‘á“ˆá¯á’§áŽá“"
		},
		"cu":{
			"name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
			"nativeName":"Ñ©Ð·Ñ‹ÐºÑŠ ÑÐ»Ð¾Ð²Ñ£Ð½ÑŒÑÐºÑŠ"
		},
		"om":{
			"name":"Oromo",
			"nativeName":"Afaan Oromoo"
		},
		"or":{
			"name":"Oriya",
			"nativeName":"à¬“à¬¡à¬¼à¬¿à¬†"
		},
		"os":{
			"name":"Ossetian, Ossetic",
			"nativeName":"Ð¸Ñ€Ð¾Ð½ Ã¦Ð²Ð·Ð°Ð³"
		},
		"pa":{
			"name":"Panjabi, Punjabi",
			"nativeName":"à¨ªà©°à¨œà¨¾à¨¬à©€, Ù¾Ù†Ø¬Ø§Ø¨ÛŒâ€Ž"
		},
		"pi":{
			"name":"PÄli",
			"nativeName":"à¤ªà¤¾à¤´à¤¿"
		},
		"fa":{
			"name":"Persian",
			"nativeName":"ÙØ§Ø±Ø³ÛŒ"
		},
		"pl":{
			"name":"Polish",
			"nativeName":"polski"
		},
		"ps":{
			"name":"Pashto, Pushto",
			"nativeName":"Ù¾ÚšØªÙˆ"
		},
		"pt":{
			"name":"Portuguese",
			"nativeName":"PortuguÃªs"
		},
		"qu":{
			"name":"Quechua",
			"nativeName":"Runa Simi, Kichwa"
		},
		"rm":{
			"name":"Romansh",
			"nativeName":"rumantsch grischun"
		},
		"rn":{
			"name":"Kirundi",
			"nativeName":"kiRundi"
		},
		"ro":{
			"name":"Romanian, Moldavian, Moldovan",
			"nativeName":"romÃ¢nÄƒ"
		},
		"ru":{
			"name":"Russian",
			"nativeName":"Ñ€ÑƒÑÑÐºÐ¸Ð¹ ÑÐ·Ñ‹Ðº"
		},
		"sa":{
			"name":"Sanskrit (Saá¹ská¹›ta)",
			"nativeName":"à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤à¤®à¥"
		},
		"sc":{
			"name":"Sardinian",
			"nativeName":"sardu"
		},
		"sd":{
			"name":"Sindhi",
			"nativeName":"à¤¸à¤¿à¤¨à¥à¤§à¥€, Ø³Ù†ÚŒÙŠØŒ Ø³Ù†Ø¯Ú¾ÛŒâ€Ž"
		},
		"se":{
			"name":"Northern Sami",
			"nativeName":"DavvisÃ¡megiella"
		},
		"sm":{
			"name":"Samoan",
			"nativeName":"gagana faa Samoa"
		},
		"sg":{
			"name":"Sango",
			"nativeName":"yÃ¢ngÃ¢ tÃ® sÃ¤ngÃ¶"
		},
		"sr":{
			"name":"Serbian",
			"nativeName":"ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
		},
		"gd":{
			"name":"Scottish Gaelic; Gaelic",
			"nativeName":"GÃ idhlig"
		},
		"sn":{
			"name":"Shona",
			"nativeName":"chiShona"
		},
		"si":{
			"name":"Sinhala, Sinhalese",
			"nativeName":"à·ƒà·’à¶‚à·„à¶½"
		},
		"sk":{
			"name":"Slovak",
			"nativeName":"slovenÄina"
		},
		"sl":{
			"name":"Slovene",
			"nativeName":"slovenÅ¡Äina"
		},
		"so":{
			"name":"Somali",
			"nativeName":"Soomaaliga, af Soomaali"
		},
		"st":{
			"name":"Southern Sotho",
			"nativeName":"Sesotho"
		},
		"es":{
			"name":"Spanish; Castilian",
			"nativeName":"espaÃ±ol, castellano"
		},
		"su":{
			"name":"Sundanese",
			"nativeName":"Basa Sunda"
		},
		"sw":{
			"name":"Swahili",
			"nativeName":"Kiswahili"
		},
		"ss":{
			"name":"Swati",
			"nativeName":"SiSwati"
		},
		"sv":{
			"name":"Swedish",
			"nativeName":"svenska"
		},
		"ta":{
			"name":"Tamil",
			"nativeName":"à®¤à®®à®¿à®´à¯"
		},
		"te":{
			"name":"Telugu",
			"nativeName":"à°¤à±†à°²à±à°—à±"
		},
		"tg":{
			"name":"Tajik",
			"nativeName":"Ñ‚Ð¾Ò·Ð¸ÐºÓ£, toÄŸikÄ«, ØªØ§Ø¬ÛŒÚ©ÛŒâ€Ž"
		},
		"th":{
			"name":"Thai",
			"nativeName":"à¹„à¸—à¸¢"
		},
		"ti":{
			"name":"Tigrinya",
			"nativeName":"á‰µáŒáˆ­áŠ›"
		},
		"bo":{
			"name":"Tibetan Standard, Tibetan, Central",
			"nativeName":"à½–à½¼à½‘à¼‹à½¡à½²à½‚"
		},
		"tk":{
			"name":"Turkmen",
			"nativeName":"TÃ¼rkmen, Ð¢Ò¯Ñ€ÐºÐ¼ÐµÐ½"
		},
		"tl":{
			"name":"Tagalog",
			"nativeName":"Wikang Tagalog, áœáœ’áœƒáœ…áœ” áœ†áœ„áœŽáœ“áœ„áœ”"
		},
		"tn":{
			"name":"Tswana",
			"nativeName":"Setswana"
		},
		"to":{
			"name":"Tonga (Tonga Islands)",
			"nativeName":"faka Tonga"
		},
		"tr":{
			"name":"Turkish",
			"nativeName":"TÃ¼rkÃ§e"
		},
		"ts":{
			"name":"Tsonga",
			"nativeName":"Xitsonga"
		},
		"tt":{
			"name":"Tatar",
			"nativeName":"Ñ‚Ð°Ñ‚Ð°Ñ€Ñ‡Ð°, tatarÃ§a, ØªØ§ØªØ§Ø±Ú†Ø§â€Ž"
		},
		"tw":{
			"name":"Twi",
			"nativeName":"Twi"
		},
		"ty":{
			"name":"Tahitian",
			"nativeName":"Reo Tahiti"
		},
		"ug":{
			"name":"Uighur, Uyghur",
			"nativeName":"UyÆ£urqÉ™, Ø¦Û‡ÙŠØºÛ‡Ø±Ú†Û•â€Ž"
		},
		"uk":{
			"name":"Ukrainian",
			"nativeName":"ÑƒÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°"
		},
		"ur":{
			"name":"Urdu",
			"nativeName":"Ø§Ø±Ø¯Ùˆ"
		},
		"uz":{
			"name":"Uzbek",
			"nativeName":"zbek, ÐŽÐ·Ð±ÐµÐº, Ø£Û‡Ø²Ø¨ÛÙƒâ€Ž"
		},
		"ve":{
			"name":"Venda",
			"nativeName":"Tshivená¸“a"
		},
		"vi":{
			"name":"Vietnamese",
			"nativeName":"Tiáº¿ng Viá»‡t"
		},
		"vo":{
			"name":"VolapÃ¼k",
			"nativeName":"VolapÃ¼k"
		},
		"wa":{
			"name":"Walloon",
			"nativeName":"Walon"
		},
		"cy":{
			"name":"Welsh",
			"nativeName":"Cymraeg"
		},
		"wo":{
			"name":"Wolof",
			"nativeName":"Wollof"
		},
		"fy":{
			"name":"Western Frisian",
			"nativeName":"Frysk"
		},
		"xh":{
			"name":"Xhosa",
			"nativeName":"isiXhosa"
		},
		"yi":{
			"name":"Yiddish",
			"nativeName":"×™×™Ö´×“×™×©"
		},
		"yo":{
			"name":"Yoruba",
			"nativeName":"YorÃ¹bÃ¡"
		},
		"za":{
			"name":"Zhuang, Chuang",
			"nativeName":"SaÉ¯ cueÅ‹Æ…, Saw cuengh"
		}
	}
	*/
	var isoLangs = {
		ab: { name: 'Abkhaz' },
		aa: { name: 'Afar' },
		af: { name: 'Afrikaans' },
		ak: { name: 'Akan' },
		sq: { name: 'Albanian' },
		am: { name: 'Amharic' },
		ar: { name: 'Arabic' },
		an: { name: 'Aragonese' },
		hy: { name: 'Armenian' },
		as: { name: 'Assamese' },
		av: { name: 'Avaric' },
		ae: { name: 'Avestan' },
		ay: { name: 'Aymara' },
		az: { name: 'Azerbaijani' },
		bm: { name: 'Bambara' },
		ba: { name: 'Bashkir' },
		eu: { name: 'Basque' },
		be: { name: 'Belarusian' },
		bn: { name: 'Bengali' },
		bh: { name: 'Bihari' },
		bi: { name: 'Bislama' },
		bs: { name: 'Bosnian' },
		br: { name: 'Breton' },
		bg: { name: 'Bulgarian' },
		my: { name: 'Burmese' },
		ca: { name: 'Catalan; Valencian' },
		ch: { name: 'Chamorro' },
		ce: { name: 'Chechen' },
		ny: { name: 'Chichewa; Chewa; Nyanja' },
		zh: { name: 'Chinese' },
		cv: { name: 'Chuvash' },
		kw: { name: 'Cornish' },
		co: { name: 'Corsican' },
		cr: { name: 'Cree' },
		hr: { name: 'Croatian' },
		cs: { name: 'Czech' },
		da: { name: 'Danish' },
		dv: { name: 'Divehi; Dhivehi; Maldivian;' },
		nl: { name: 'Dutch' },
		en: { name: 'English' },
		eo: { name: 'Esperanto' },
		et: { name: 'Estonian' },
		ee: { name: 'Ewe' },
		fo: { name: 'Faroese' },
		fj: { name: 'Fijian' },
		fi: { name: 'Finnish' },
		fr: { name: 'French' },
		ff: { name: 'Fula; Fulah; Pulaar; Pular' },
		gl: { name: 'Galician' },
		ka: { name: 'Georgian' },
		de: { name: 'German' },
		el: { name: 'Greek, Modern' },
		gn: { name: 'GuaranÃ­' },
		gu: { name: 'Gujarati' },
		ht: { name: 'Haitian; Haitian Creole' },
		ha: { name: 'Hausa' },
		he: { name: 'Hebrew (modern)' },
		hz: { name: 'Herero' },
		hi: { name: 'Hindi' },
		ho: { name: 'Hiri Motu' },
		hu: { name: 'Hungarian' },
		ia: { name: 'Interlingua' },
		id: { name: 'Indonesian' },
		ie: { name: 'Interlingue' },
		ga: { name: 'Irish' },
		ig: { name: 'Igbo' },
		ik: { name: 'Inupiaq' },
		io: { name: 'Ido' },
		is: { name: 'Icelandic' },
		it: { name: 'Italian' },
		iu: { name: 'Inuktitut' },
		ja: { name: 'Japanese' },
		jv: { name: 'Javanese' },
		kl: { name: 'Kalaallisut, Greenlandic' },
		kn: { name: 'Kannada' },
		kr: { name: 'Kanuri' },
		ks: { name: 'Kashmiri' },
		kk: { name: 'Kazakh' },
		km: { name: 'Khmer' },
		ki: { name: 'Kikuyu, Gikuyu' },
		rw: { name: 'Kinyarwanda' },
		ky: { name: 'Kirghiz, Kyrgyz' },
		kv: { name: 'Komi' },
		kg: { name: 'Kongo' },
		ko: { name: 'Korean' },
		ku: { name: 'Kurdish' },
		kj: { name: 'Kwanyama, Kuanyama' },
		la: { name: 'Latin' },
		lb: { name: 'Luxembourgish, Letzeburgesch' },
		lg: { name: 'Luganda' },
		li: { name: 'Limburgish, Limburgan, Limburger' },
		ln: { name: 'Lingala' },
		lo: { name: 'Lao' },
		lt: { name: 'Lithuanian' },
		lu: { name: 'Luba-Katanga' },
		lv: { name: 'Latvian' },
		gv: { name: 'Manx' },
		mk: { name: 'Macedonian' },
		mg: { name: 'Malagasy' },
		ms: { name: 'Malay' },
		ml: { name: 'Malayalam' },
		mt: { name: 'Maltese' },
		mi: { name: 'MÄ?ori' },
		mr: { name: 'Marathi (MarÄ?á¹­hÄ«)' },
		mh: { name: 'Marshallese' },
		mn: { name: 'Mongolian' },
		na: { name: 'Nauru' },
		nv: { name: 'Navajo, Navaho' },
		nb: { name: 'Norwegian BokmÃ¥l' },
		nd: { name: 'North Ndebele' },
		ne: { name: 'Nepali' },
		ng: { name: 'Ndonga' },
		nn: { name: 'Norwegian Nynorsk' },
		no: { name: 'Norwegian' },
		ii: { name: 'Nuosu' },
		nr: { name: 'South Ndebele' },
		oc: { name: 'Occitan' },
		oj: { name: 'Ojibwe, Ojibwa' },
		cu: { name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic' },
		om: { name: 'Oromo' },
		or: { name: 'Oriya' },
		os: { name: 'Ossetian, Ossetic' },
		pa: { name: 'Panjabi, Punjabi' },
		pi: { name: 'PÄ?li' },
		fa: { name: 'Persian' },
		pl: { name: 'Polish' },
		ps: { name: 'Pashto, Pushto' },
		pt: { name: 'Portuguese' },
		qu: { name: 'Quechua' },
		rm: { name: 'Romansh' },
		rn: { name: 'Kirundi' },
		ro: { name: 'Romanian, Moldavian, Moldovan' },
		ru: { name: 'Russian' },
		sa: { name: 'Sanskrit (Saá¹?ská¹>ta)' },
		sc: { name: 'Sardinian' },
		sd: { name: 'Sindhi' },
		se: { name: 'Northern Sami' },
		sm: { name: 'Samoan' },
		sg: { name: 'Sango' },
		sr: { name: 'Serbian' },
		gd: { name: 'Scottish Gaelic; Gaelic' },
		sn: { name: 'Shona' },
		si: { name: 'Sinhala, Sinhalese' },
		sk: { name: 'Slovak' },
		sl: { name: 'Slovene' },
		so: { name: 'Somali' },
		st: { name: 'Southern Sotho' },
		es: { name: 'Spanish; Castilian' },
		su: { name: 'Sundanese' },
		sw: { name: 'Swahili' },
		ss: { name: 'Swati' },
		sv: { name: 'Swedish' },
		ta: { name: 'Tamil' },
		te: { name: 'Telugu' },
		tg: { name: 'Tajik' },
		th: { name: 'Thai' },
		ti: { name: 'Tigrinya' },
		bo: { name: 'Tibetan Standard, Tibetan, Central' },
		tk: { name: 'Turkmen' },
		tl: { name: 'Tagalog' },
		tn: { name: 'Tswana' },
		to: { name: 'Tonga (Tonga Islands)' },
		tr: { name: 'Turkish' },
		ts: { name: 'Tsonga' },
		tt: { name: 'Tatar' },
		tw: { name: 'Twi' },
		ty: { name: 'Tahitian' },
		ug: { name: 'Uighur, Uyghur' },
		uk: { name: 'Ukrainian' },
		ur: { name: 'Urdu' },
		uz: { name: 'Uzbek' },
		ve: { name: 'Venda' },
		vi: { name: 'Vietnamese' },
		vo: { name: 'VolapÃ¼k' },
		wa: { name: 'Walloon' },
		cy: { name: 'Welsh' },
		wo: { name: 'Wolof' },
		fy: { name: 'Western Frisian' },
		xh: { name: 'Xhosa' },
		yi: { name: 'Yiddish' },
		yo: { name: 'Yoruba' },
		za: { name: 'Zhuang, Chuang' }
	};
	
	var language_map_2_to_3 = {
		aa: 'aar',
		ab: 'abk',
		af: 'afr',
		ak: 'aka',
		sq: 'alb',
		am: 'amh',
		ar: 'ara',
		an: 'arg',
		hy: 'arm',
		as: 'asm',
		av: 'ava',
		ae: 'ave',
		ay: 'aym',
		az: 'aze',
		ba: 'bak',
		bm: 'bam',
		eu: 'baq',
		be: 'bel',
		bn: 'ben',
		bh: 'bih',
		bi: 'bis',
		bs: 'bos',
		br: 'bre',
		bg: 'bul',
		my: 'bur',
		ca: 'cat',
		ch: 'cha',
		ce: 'che',
		zh: 'chi',
		cu: 'chu',
		cv: 'chv',
		kw: 'cor',
		co: 'cos',
		cr: 'cre',
		cs: 'cze',
		da: 'dan',
		dv: 'div',
		nl: 'dut',
		dz: 'dzo',
		en: 'eng',
		eo: 'epo',
		et: 'est',
		ee: 'ewe',
		fo: 'fao',
		fj: 'fij',
		fi: 'fin',
		fr: 'fre',
		fy: 'fry',
		ff: 'ful',
		ka: 'geo',
		de: 'ger',
		gd: 'gla',
		ga: 'gle',
		gl: 'glg',
		gv: 'glv',
		el: 'gre',
		gn: 'grn',
		gu: 'guj',
		ht: 'hat',
		ha: 'hau',
		he: 'heb',
		hz: 'her',
		hi: 'hin',
		ho: 'hmo',
		hr: 'hrv',
		hu: 'hun',
		ig: 'ibo',
		is: 'ice',
		io: 'ido',
		ii: 'iii',
		iu: 'iku',
		ie: 'ile',
		ia: 'ina',
		id: 'ind',
		ik: 'ipk',
		it: 'ita',
		jv: 'jav',
		ja: 'jpn',
		kl: 'kal',
		kn: 'kan',
		ks: 'kas',
		kr: 'kau',
		kk: 'kaz',
		km: 'khm',
		ki: 'kik',
		rw: 'kin',
		ky: 'kir',
		kv: 'kom',
		kg: 'kon',
		ko: 'kor',
		kj: 'kua',
		ku: 'kur',
		lo: 'lao',
		la: 'lat',
		lv: 'lav',
		li: 'lim',
		ln: 'lin',
		lt: 'lit',
		lb: 'ltz',
		lu: 'lub',
		lg: 'lug',
		mk: 'mac',
		mh: 'mah',
		ml: 'mal',
		mi: 'mao',
		mr: 'mar',
		ms: 'may',
		mg: 'mlg',
		mt: 'mlt',
		mn: 'mon',
		na: 'nau',
		nv: 'nav',
		nr: 'nbl',
		nd: 'nde',
		ng: 'ndo',
		ne: 'nep',
		nn: 'nno',
		nb: 'nob',
		no: 'nor',
		ny: 'nya',
		oc: 'oci',
		oj: 'oji',
		or: 'ori',
		om: 'orm',
		os: 'oss',
		pa: 'pan',
		fa: 'per',
		pi: 'pli',
		pl: 'pol',
		pt: 'por',
		ps: 'pus',
		qu: 'que',
		rm: 'roh',
		ro: 'rum',
		rn: 'run',
		ru: 'rus',
		sg: 'sag',
		sa: 'san',
		si: 'sin',
		sk: 'slo',
		sl: 'slv',
		se: 'sme',
		sm: 'smo',
		sn: 'sna',
		sd: 'snd',
		so: 'som',
		st: 'sot',
		es: 'spa',
		sc: 'srd',
		sr: 'srp',
		ss: 'ssw',
		su: 'sun',
		sw: 'swa',
		sv: 'swe',
		ty: 'tah',
		ta: 'tam',
		tt: 'tat',
		te: 'tel',
		tg: 'tgk',
		tl: 'tgl',
		th: 'tha',
		bo: 'tib',
		ti: 'tir',
		to: 'ton',
		tn: 'tsn',
		ts: 'tso',
		tk: 'tuk',
		tr: 'tur',
		tw: 'twi',
		ug: 'uig',
		uk: 'ukr',
		ur: 'urd',
		uz: 'uzb',
		ve: 'ven',
		vi: 'vie',
		vo: 'vol',
		cy: 'wel',
		wa: 'wln',
		wo: 'wol',
		xh: 'xho',
		yi: 'yid',
		yo: 'yor',
		za: 'zha',
		zu: 'zul'
	};
	
	var languageName = {
		Abkhaz: 'ab',
		Afar: 'aa',
		Afrikaans: 'af',
		Akan: 'ak',
		Albanian: 'sq',
		Amharic: 'am',
		Arabic: 'ar',
		Aragonese: 'an',
		Armenian: 'hy',
		Assamese: 'as',
		Avaric: 'av',
		Avestan: 'ae',
		Aymara: 'ay',
		Azerbaijani: 'az',
		Bambara: 'bm',
		Bashkir: 'ba',
		Basque: 'eu',
		Belarusian: 'be',
		Bengali: 'bn',
		Bihari: 'bh',
		Bislama: 'bi',
		Bosnian: 'bs',
		Breton: 'br',
		Bulgarian: 'bg',
		Burmese: 'my',
		'Catalan; Valencian': 'ca',
		Chamorro: 'ch',
		Chechen: 'ce',
		'Chichewa; Chewa; Nyanja': 'ny',
		Chinese: 'zh',
		Chuvash: 'cv',
		Cornish: 'kw',
		Corsican: 'co',
		Cree: 'cr',
		Croatian: 'hr',
		Czech: 'cs',
		Danish: 'da',
		'Divehi; Dhivehi; Maldivian;': 'dv',
		Dutch: 'nl',
		English: 'en',
		Esperanto: 'eo',
		Estonian: 'et',
		Ewe: 'ee',
		Faroese: 'fo',
		Fijian: 'fj',
		Finnish: 'fi',
		French: 'fr',
		'Fula; Fulah; Pulaar; Pular': 'ff',
		Galician: 'gl',
		Georgian: 'ka',
		German: 'de',
		'Greek, Modern': 'el',
		'GuaranÃ­': 'gn',
		Gujarati: 'gu',
		'Haitian; Haitian Creole': 'ht',
		Hausa: 'ha',
		'Hebrew (modern)': 'he',
		Herero: 'hz',
		Hindi: 'hi',
		'Hiri Motu': 'ho',
		Hungarian: 'hu',
		Interlingua: 'ia',
		Indonesian: 'id',
		Interlingue: 'ie',
		Irish: 'ga',
		Igbo: 'ig',
		Inupiaq: 'ik',
		Ido: 'io',
		Icelandic: 'is',
		Italian: 'it',
		Inuktitut: 'iu',
		Japanese: 'ja',
		Javanese: 'jv',
		'Kalaallisut, Greenlandic': 'kl',
		Kannada: 'kn',
		Kanuri: 'kr',
		Kashmiri: 'ks',
		Kazakh: 'kk',
		Khmer: 'km',
		'Kikuyu, Gikuyu': 'ki',
		Kinyarwanda: 'rw',
		'Kirghiz, Kyrgyz': 'ky',
		Komi: 'kv',
		Kongo: 'kg',
		Korean: 'ko',
		Kurdish: 'ku',
		'Kwanyama, Kuanyama': 'kj',
		Latin: 'la',
		'Luxembourgish, Letzeburgesch': 'lb',
		Luganda: 'lg',
		'Limburgish, Limburgan, Limburger': 'li',
		Lingala: 'ln',
		Lao: 'lo',
		Lithuanian: 'lt',
		'Luba-Katanga': 'lu',
		Latvian: 'lv',
		Manx: 'gv',
		Macedonian: 'mk',
		Malagasy: 'mg',
		Malay: 'ms',
		Malayalam: 'ml',
		Maltese: 'mt',
		'MÄ?ori': 'mi',
		'Marathi (MarÄ?á¹­hÄ«)': 'mr',
		Marshallese: 'mh',
		Mongolian: 'mn',
		Nauru: 'na',
		'Navajo, Navaho': 'nv',
		'Norwegian BokmÃ¥l': 'nb',
		'North Ndebele': 'nd',
		Nepali: 'ne',
		Ndonga: 'ng',
		'Norwegian Nynorsk': 'nn',
		Norwegian: 'no',
		Nuosu: 'ii',
		'South Ndebele': 'nr',
		Occitan: 'oc',
		'Ojibwe, Ojibwa': 'oj',
		'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic': 'cu',
		Oromo: 'om',
		Oriya: 'or',
		'Ossetian, Ossetic': 'os',
		'Panjabi, Punjabi': 'pa',
		'PÄ?li': 'pi',
		Persian: 'fa',
		Polish: 'pl',
		'Pashto, Pushto': 'ps',
		Portuguese: 'pt',
		Quechua: 'qu',
		Romansh: 'rm',
		Kirundi: 'rn',
		'Romanian, Moldavian, Moldovan': 'ro',
		Russian: 'ru',
		'Sanskrit (Saá¹?ská¹>ta)': 'sa',
		Sardinian: 'sc',
		Sindhi: 'sd',
		'Northern Sami': 'se',
		Samoan: 'sm',
		Sango: 'sg',
		Serbian: 'sr',
		'Scottish Gaelic; Gaelic': 'gd',
		Shona: 'sn',
		'Sinhala, Sinhalese': 'si',
		Slovak: 'sk',
		Slovene: 'sl',
		Somali: 'so',
		'Southern Sotho': 'st',
		'Spanish; Castilian': 'es',
		Spanish: 'es',
		Sundanese: 'su',
		Swahili: 'sw',
		Swati: 'ss',
		Swedish: 'sv',
		Tamil: 'ta',
		Telugu: 'te',
		Tajik: 'tg',
		Thai: 'th',
		Tigrinya: 'ti',
		'Tibetan Standard, Tibetan, Central': 'bo',
		Turkmen: 'tk',
		Tagalog: 'tl',
		Tswana: 'tn',
		'Tonga (Tonga Islands)': 'to',
		Turkish: 'tr',
		Tsonga: 'ts',
		Tatar: 'tt',
		Twi: 'tw',
		Tahitian: 'ty',
		'Uighur, Uyghur': 'ug',
		Ukrainian: 'uk',
		Urdu: 'ur',
		Uzbek: 'uz',
		Venda: 've',
		Vietnamese: 'vi',
		'VolapÃ¼k': 'vo',
		Walloon: 'wa',
		Welsh: 'cy',
		Wolof: 'wo',
		'Western Frisian': 'fy',
		Xhosa: 'xh',
		Yiddish: 'yi',
		Yoruba: 'yo',
		'Zhuang, Chuang': 'za'
	};
	
	var getLanguageName = function(key) {
		key = key.slice(0,2);
		var lang = isoLangs[key];
		return lang ? lang.name : undefined;
	};
	var getIsoLang = function(name) {
		//TODO: lookup with regexp or iterate in isoLangs if the key do not match.
		var iso = languageName[name];
		return iso ? iso : undefined;
	};
	/*
	var getLanguageNativeName = function(key) {
		key = key.slice(0,2);
		var lang = isoLangs[key];
		return lang ? lang.nativveName : undefined;
	}
	exports.getLanguageName = getLanguageName;
	exports.getLanguageNativeName = getLanguageNativeName;
	
	exports.removeNativeName = function(cb) {
		Object.keys(isoLangs).forEach(function(key) {
			delete isoLangs[key].nativeName;
			if (key == "za") {
				cb(isoLangs);
			}
		});
	};
	var languageName = {};
	exports.LanguageNameToIso = function(cb) {
		Object.keys(isoLangs).forEach(function(key) {
			//console.log('KEY: ' + key);
			languageName[isoLangs[key].name] = key;
			if (key == "za") {
				cb(languageName);
			}
		});
	};
	*/
	exports.getLanguageName = getLanguageName;
	exports.getIsoLang = getIsoLang;
})();