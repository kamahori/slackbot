export type Difficulty = 'baby' | 'easy' | 'medium' | 'hard' | 'professional';

interface Achievement {
	id: string,
	difficulty: Difficulty,
	title: string,
	condition: string,
	category: string,
	counter?: string,
	reaction?: string,
	value?: number,
	manual?: true,
}

const achievements: Achievement[] = [
	{
		id: 'chat',
		difficulty: 'baby',
		title: 'はじめまして!',
		condition: 'パブリックなチャンネルで初めて発言する',
		category: 'basic',
		counter: 'chats',
		value: 1,
	},
	{
		id: 'chat-10times',
		difficulty: 'easy',
		title: 'ｽｯｺｺｺ',
		condition: 'パブリックなチャンネルで10回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 10,
	},
	{
		id: 'chat-1000times',
		difficulty: 'hard',
		title: '話の種',
		condition: 'パブリックなチャンネルで1000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 1000,
	},
	{
		id: 'chat-10000times',
		difficulty: 'hard',
		title: '竿の先',
		condition: 'パブリックなチャンネルで10000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 10000,
	},
	{
		id: 'chat-20000times',
		difficulty: 'hard',
		title: '禍の門',
		condition: 'パブリックなチャンネルで20000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 20000,
	},
	{
		id: 'chat-30000times',
		difficulty: 'hard',
		title: '喋喋喃喃',
		condition: 'パブリックなチャンネルで30000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 30000,
	},
	{
		id: 'chat-50000times',
		difficulty: 'hard',
		title: '縷縷綿綿',
		condition: 'パブリックなチャンネルで50000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 50000,
	},
	{
		id: 'chat-100000times',
		difficulty: 'hard',
		title: '立て板に水',
		condition: 'パブリックなチャンネルで100000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 100000,
	},
	{
		id: 'chat-10days',
		difficulty: 'medium',
		title: '常連',
		condition: 'パブリックなチャンネルでのべ10日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 10,
	},
	{
		id: 'chat-100days',
		difficulty: 'hard',
		title: 'いつものメンバー',
		condition: 'パブリックなチャンネルでのべ100日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 100,
	},
	{
		id: 'chat-1000days',
		difficulty: 'professional',
		title: 'TSGの主',
		condition: 'パブリックなチャンネルでのべ1000日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 1000,
	},

	// reactions

	{
		id: 'reaction-ha-5',
		difficulty: 'hard',
		title: '支離滅裂',
		condition: '1つのメッセージに5人以上から:ha:リアクションをもらう',
		category: 'reactions',
		reaction: 'ha',
		value: 5,
	},
	{
		id: 'reaction-wakari-5',
		difficulty: 'hard',
		title: 'デビルマン',
		condition: '1つのメッセージに5人以上から:wakari:リアクションをもらう',
		category: 'reactions',
		reaction: 'wakari',
		value: 5,
	},
	{
		id: 'reaction-koresuki-5',
		difficulty: 'hard',
		title: 'ジャガーマン',
		condition: '1つのメッセージに対し5人以上から:koresuki:リアクションをもらう',
		category: 'reactions',
		reaction: 'koresuki',
		value: 5,
	},
	{
		id: 'reaction-yakuza-5',
		difficulty: 'hard',
		title: '今日からやの付く自由業',
		condition: '1つのメッセージに対し5人以上から:yakuza:リアクションをもらう',
		category: 'reactions',
		reaction: 'yakuza',
		value: 5,
	},
	{
		id: 'reaction-shoki-ka-5',
		difficulty: 'hard',
		title: '狂気の沙汰ほど面白い...！',
		condition: '1つのメッセージに対し5人以上から:shoki-ka:リアクションをもらう',
		category: 'reactions',
		reaction: 'shoki-ka',
		value: 5,
	},
	{
		id: 'reaction-seyana-5',
		difficulty: 'hard',
		title: '聞いてよアカネちゃん！',
		condition: '1つのメッセージに対し5人以上から:seyana:リアクションをもらう',
		category: 'reactions',
		reaction: 'seyana',
		value: 5,
	},
	{
		id: 'reaction-chian-ga-nai-5',
		difficulty: 'hard',
		title: 'TSGMELTDOWN',
		condition: '1つのメッセージに対し5人以上から:chian-ga-nai:リアクションをもらう',
		category: 'reactions',
		reaction: 'chian-ga-nai',
		value: 5,
	},
	{
		id: 'reaction-context-5',
		difficulty: 'hard',
		title: 'コンテキスト不一致',
		condition: '1つのメッセージに対し5人以上から:context:リアクションをもらう',
		category: 'reactions',
		reaction: 'context',
		value: 5,
	},
	{
		id: 'reaction-pro-5',
		difficulty: 'hard',
		title: 'みんな違ってみんなプロ',
		condition: '1つのメッセージに対し5人以上から:pro:リアクションをもらう',
		category: 'reactions',
		reaction: 'pro',
		value: 5,
	},
	{
		id: 'reaction-shirimetsuretsu-5',
		difficulty: 'hard',
		title: '君はお肉が好き？',
		condition: '1つのメッセージに対し5人以上から:shirimetsuretsu:リアクションをもらう',
		category: 'reactions',
		reaction: 'shirimetsuretsu',
		value: 5,
	},
	{
		id: 'reaction-riaru-5',
		difficulty: 'hard',
		title: '理性ある生き物',
		condition: '1つのメッセージに対し5人以上から:riaru:リアクションをもらう',
		category: 'reactions',
		reaction: 'riaru',
		value: 5,
	},
	{
		id: 'reaction-erai-5',
		difficulty: 'hard',
		title: '地位は人をつくる',
		condition: '1つのメッセージに対し5人以上から:erai:リアクションをもらう',
		category: 'reactions',
		reaction: 'erai',
		value: 5,
	},
	{
		id: 'reaction-guchol-5',
		difficulty: 'hard',
		title: '台風の目',
		condition: '1つのメッセージに対し5人以上から:guchol:リアクションをもらう',
		category: 'reactions',
		reaction: 'guchol',
		value: 5,
	},
	{
		id: 'reaction-nanyanen-nannanode-5',
		difficulty: 'hard',
		title: 'お前はナンなんだ',
		condition: '1つのメッセージに対し5人以上から:nanyanen-nannanode:リアクションをもらう',
		category: 'reactions',
		reaction: 'nanyanen-nannanode',
		value: 5,
	},
	{
		id: 'reaction-hideo54-5',
		difficulty: 'hard',
		title: 'ドジでよく泣くキツネの子',
		condition: '1つのメッセージに対し5人以上から:hideo54:リアクションをもらう',
		category: 'reactions',
		reaction: 'hideo54',
		value: 5,
	},
	{
		id: 'reaction-hototogisu-5',
		difficulty: 'hard',
		title: '鳥さんが鳴いとるやんけ',
		condition: '1つのメッセージに対し5人以上から:hototogisu:リアクションをもらう',
		category: 'reactions',
		reaction: 'hototogisu',
		value: 5,
	},
	{
		id: 'reaction-ojigineko-5',
		difficulty: 'hard',
		title: 'ねこは今日もあなたの後ろでおじぎしている',
		condition: '1つのメッセージに対し5人以上から:ojigineko:リアクションをもらう',
		category: 'reactions',
		reaction: 'ojigineko',
		value: 5,
	},
	{
		id: 'reaction-serval-5',
		difficulty: 'hard',
		title: 'ねぇ、あなたは何のフレンズ？',
		condition: '1つのメッセージに対し5人以上から:serval:リアクションをもらう',
		category: 'reactions',
		reaction: 'serval',
		value: 5,
	},
	{
		id: 'reaction-pizzacat83-5',
		difficulty: 'hard',
		title: '415 Unsupported PizzaNeco Type',
		condition: '1つのメッセージに対し5人以上から:pizzacat83:リアクションをもらう',
		category: 'reactions',
		reaction: 'pizzacat83',
		value: 5,
	},
	{
		id: 'reaction-kurgm-5',
		difficulty: 'hard',
		title: '胡麻は2粒でもピリリと黒い',
		condition: '1つのメッセージに対し5人以上から:kurgm:リアクションをもらう',
		category: 'reactions',
		reaction: 'kurgm',
		value: 5,
	},
	{
		id: 'reaction-genius-5',
		difficulty: 'hard',
		title: '巨人の肩の上で',
		condition: '1つのメッセージに対し5人以上から:genius:リアクションをもらう',
		category: 'reactions',
		reaction: 'genius',
		value: 5,
	},
	{
		id: 'reaction-kachi-5',
		difficulty: 'hard',
		title: '明日まで考えておいてください。そしたら何か、見えてくるはずです',
		condition: '1つのメッセージに対し5人以上から:kachi:リアクションをもらう',
		category: 'reactions',
		reaction: 'kachi',
		value: 5,
	},
	{
		id: 'reaction-yami-5',
		difficulty: 'hard',
		title: '永劫の闇を司るTSGer',
		condition: '1つのメッセージに対し5人以上から:yami:リアクションをもらう',
		category: 'reactions',
		reaction: 'yami',
		value: 5,
	},
	{
		id: 'reaction-korosuzo-5',
		difficulty: 'hard',
		title: '丑三つ DOKI DOKI',
		condition: '1つのメッセージに対し5人以上から:korosuzo:リアクションをもらう',
		category: 'reactions',
		reaction: 'korosuzo',
		value: 5,
	},
	{
		id: 'reaction-mnemo-5',
		difficulty: 'hard',
		title: 'プログラミング風実績解放ゲーム',
		condition: '1つのメッセージに対し5人以上から:mnemo:リアクションをもらう',
		category: 'reactions',
		reaction: 'mnemo',
		value: 5,
	},

	// sushi-bot

	{
		id: 'get-sushi',
		difficulty: 'baby',
		title: '玉子',
		condition: 'sushi-botから寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'get-multiple-sushi',
		difficulty: 'easy',
		title: 'マグロ',
		condition: 'sushi-botから一度に2個以上の寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'get-infinite-sushi',
		difficulty: 'easy',
		title: 'ハマチ',
		condition: 'sushi-botから一度に無限個の寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'wednesday-sushi',
		difficulty: 'medium',
		title: 'すしすしすいようび',
		condition: '水曜日にsushi-botから寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'freezing',
		difficulty: 'easy',
		title: 'フリージング',
		condition: 'sushi-botに凍結される',
		category: 'sushi-bot',
	},
	{
		id: 'freezing-master',
		difficulty: 'hard',
		title: '氷属性',
		condition: '週間凍結ランキングで1位を獲得する',
		category: 'sushi-bot',
	},

	// tashibot

	{
		id: 'place',
		difficulty: 'easy',
		title: '旅人',
		condition: 'tashibotに反応される',
		category: 'tashibot',
	},
	{
		id: 'new-place',
		difficulty: 'medium',
		title: '開拓者',
		condition: 'tashibotで新しい地名を獲得する',
		category: 'tashibot',
	},
	{
		id: 'tashibot-2000km',
		difficulty: 'medium',
		title: '列島縦断',
		condition: 'tashibotの乗換案内で延べ2000km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 2000,
	},
	{
		id: 'tashibot-9297km',
		difficulty: 'medium',
		title: 'シベリア鉄道',
		condition: 'tashibotの乗換案内で延べ9297km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 9297,
	},
	{
		id: 'tashibot-10144km',
		difficulty: 'medium',
		title: '太平洋横断',
		condition: 'tashibotの乗換案内で延べ10144km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 10144,
	},
	{
		id: 'tashibot-40075km',
		difficulty: 'medium',
		title: '地球一周の旅',
		condition: 'tashibotの乗換案内で延べ40075km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 40075,
	},
	{
		id: 'tashibot-384400km',
		difficulty: 'hard',
		title: '月世界旅行',
		condition: 'tashibotの乗換案内で延べ384400km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 384400,
	},
	{
		id: 'tashibot-149597870km',
		difficulty: 'professional',
		title: '太陽への旅',
		condition: 'tashibotの乗換案内で延べ149597870km移動する',
		category: 'tashibot',
		counter: 'tashibotDistance',
		value: 149597870,
	},

	// dajare

	{
		id: 'zabuton',
		difficulty: 'easy',
		title: 'だじゃれを言うのは誰じゃ',
		condition: 'dajareボットから:zabuton:をもらう',
		category: 'dajare',
	},
	{
		id: 'zabutons',
		difficulty: 'easy',
		title: 'タワーの上に登ったわ―',
		condition: 'dajareボットから:zabutons:をもらう',
		category: 'dajare',
	},
	{
		id: 'flying-zabuton',
		difficulty: 'easy',
		title: '座布団がぶっ飛んだ',
		condition: 'dajareボットから:flying-zabuton:をもらう',
		category: 'dajare',
	},

	// pocky

	{
		id: 'pocky',
		difficulty: 'baby',
		title: 'はま寿司',
		condition: 'pockyに反応される',
		category: 'pocky',
	},
	{
		id: 'long-pocky',
		difficulty: 'medium',
		title: 'スーモ',
		condition: 'pockyから20文字以上の返答を得る',
		category: 'pocky',
	},

	// tahoiya

	{
		id: 'tahoiya',
		difficulty: 'easy',
		title: '千里の道も一歩から',
		condition: 'たほいやに参加する',
		category: 'tahoiya',
	},
	{
		id: 'daily-tahoiya-theme',
		difficulty: 'medium',
		title: '大智は愚の如し',
		condition: 'デイリーたほいやにお題を登録する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-over6',
		difficulty: 'medium',
		title: '坊主丸儲け',
		condition: 'たほいやで一度にプラス6点以上獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-over10',
		difficulty: 'hard',
		title: '一攫千金',
		condition: 'たほいやで一度にプラス10点以上獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-down10',
		difficulty: 'medium',
		title: '悪銭身につかず',
		condition: 'たほいやで前回より10点以上低い点数を獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive',
		difficulty: 'medium',
		title: '笑中に刀あり',
		condition: 'たほいやで他の人をひっかける',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive3',
		difficulty: 'hard',
		title: '麦飯で鯉を釣る',
		condition: 'たほいやで1度に3人以上をひっかける',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-5bet',
		difficulty: 'medium',
		title: '乾坤一擲',
		condition: 'たほいやで5枚BETする',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-singularity',
		difficulty: 'medium',
		title: 'シンギュラリティ',
		condition: 'たほいやでAIに振り込んでしまう',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-positive-coins-without-win',
		difficulty: 'hard',
		title: '負けるが勝ち',
		condition: 'たほいやで誤った選択肢にBETした上で正の得点を獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive-each-other',
		difficulty: 'hard',
		title: '鷸蚌の争い',
		condition: 'たほいやでお互いの登録した意味に振り込み合う (BOTを除く)',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-wins-10',
		difficulty: 'hard',
		title: '勝てば官軍',
		condition: 'たほいやで延べ10勝する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaWin',
		value: 10,
	},
	{
		id: 'tahoiya-wins-100',
		difficulty: 'professional',
		title: '百戦殆うからず',
		condition: 'たほいやで延べ100勝する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaWin',
		value: 100,
	},
	{
		id: 'tahoiya-deceive-total7',
		difficulty: 'medium',
		title: '狐七化け、狸は八化け',
		condition: 'たほいやで延べ8人をひっかける',
		category: 'tahoiya',
		counter: 'tahoiyaDeceive',
		value: 8,
	},
	{
		id: 'tahoiya-deceive-total300',
		difficulty: 'professional',
		title: '三百代言',
		condition: 'たほいやで延べ300人をひっかける',
		category: 'tahoiya',
		counter: 'tahoiyaDeceive',
		value: 300,
	},
	{
		id: 'tahoiya-participate-10',
		difficulty: 'medium',
		title: '芸は道によって賢し',
		condition: 'たほいやに10回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 10,
	},
	{
		id: 'tahoiya-participate-100',
		difficulty: 'hard',
		title: '松笠より年嵩',
		condition: 'たほいやに50回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 50,
	},
	{
		id: 'tahoiya-participate-300',
		difficulty: 'professional',
		title: '海千山千',
		condition: 'たほいやに300回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 300,
	},

	// mahjong

	{
		id: 'mahjong',
		difficulty: 'easy',
		title: 'みっつずつ、みっつずつ⋯⋯',
		condition: '麻雀BOTの四麻モードで和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-七対子',
		difficulty: 'medium',
		title: 'ふたつずつ、ふたつずつ⋯⋯',
		condition: '麻雀BOTの四麻モードで七対子を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-12000',
		difficulty: 'easy',
		title: 'ザンクを三回刻むより',
		condition: '麻雀BOTの四麻モードで満貫以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-24000',
		difficulty: 'medium',
		title: '来たぜぬるりと',
		condition: '麻雀BOTの四麻モードで倍満以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-36000',
		difficulty: 'hard',
		title: '御無礼',
		condition: '麻雀BOTの四麻モードで三倍満以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-48000',
		difficulty: 'professional',
		title: '麻雀って楽しいね！',
		condition: '麻雀BOTの四麻モードで役満を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-ikeda',
		difficulty: 'easy',
		title: '池田ァ！',
		condition: '麻雀BOTの四麻モードで七筒を切る',
		category: 'mahjong',
	},
	{
		id: 'mahjong-不聴立直',
		difficulty: 'medium',
		title: '後の三巡',
		condition: '麻雀BOTの四麻モードで不聴立直をする',
		category: 'mahjong',
	},
	{
		id: 'mahjong-ドラ8',
		difficulty: 'hard',
		title: 'ドラゴンロード',
		condition: '麻雀BOTの四麻モードでドラを8枚以上含む手で和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-海底摸月',
		difficulty: 'hard',
		title: '片腹大激痛',
		condition: '麻雀BOTの四麻モードで海底摸月を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-西単騎',
		difficulty: 'hard',
		title: '単騎は西で待て',
		condition: '麻雀BOTの四麻モードで西の単騎待ちで和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-一四索',
		difficulty: 'professional',
		title: '早い立直は一四索',
		condition: '麻雀BOTの四麻モードで、6巡以内に一四索の両面待ちで立直を行った上で和了する',
		category: 'mahjong',
	},

	// shogi

	{
		id: 'shogi',
		difficulty: 'easy',
		title: '勝ち将棋鬼の如し',
		condition: '将棋BOTで勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-shortest',
		difficulty: 'medium',
		title: '長い詰みより短い必至',
		condition: '将棋BOTで最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-over11',
		difficulty: 'hard',
		title: '勝ち将棋を勝て',
		condition: '将棋BOTで11手必勝以上の盤面で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-over19',
		difficulty: 'professional',
		title: '名人に定跡なし',
		condition: '将棋BOTで19手必勝以上の盤面で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-銀不成',
		difficulty: 'hard',
		title: '銀は不成に好手あり',
		condition: '将棋BOTで銀不成を含む手順で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-自陣飛車',
		difficulty: 'hard',
		title: '自陣飛車に好手あり',
		condition: '将棋BOTで自陣への飛車打を含む手順で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-自陣角',
		difficulty: 'hard',
		title: '遠見の角に好手あり',
		condition: '将棋BOTで自陣への角打を含む手順で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-歩成',
		difficulty: 'medium',
		title: 'マムシのと金',
		condition: '将棋BOTで歩成を含む手順で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-三桂',
		difficulty: 'hard',
		title: '三桂あって詰まぬことなし',
		condition: '将棋BOTで桂馬を3つ以上所持した初期盤面で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-打ち歩詰め',
		difficulty: 'hard',
		title: '打ち歩詰めに詰みの余地あり',
		condition: '将棋BOTで打ち歩詰めで敗北する',
		category: 'shogi',
	},

	// prime

	{
		id: 'prime',
		difficulty: 'baby',
		title: 'ピタゴラス',
		condition: '素数大富豪で遊ぶ',
		category: 'prime',
	},
	{
		id: 'prime-clear',
		difficulty: 'medium',
		title: 'ディオファントス',
		condition: '素数大富豪をクリアする',
		category: 'prime',
	},
	{
		id: 'prime-fast-clear',
		difficulty: 'hard',
		title: 'レオンハルト・オイラー',
		condition: '素数大富豪を4ターン以内でクリアする',
		category: 'prime',
	},
	{
		id: 'prime-fast-clear-no-draw',
		difficulty: 'hard',
		title: 'カール・フリードリヒ・ガウス',
		condition: '素数大富豪をドローせずに4ターン以内でクリアする',
		category: 'prime',
	},
	{
		id: 'prime-composition-8',
		difficulty: 'hard',
		title: 'ジョゼフ＝ルイ・ラグランジュ',
		condition: '素数大富豪で合成数出しによって8枚以上を同時に捨てる',
		category: 'prime',
	},
	{
		id: 'prime-grothendieck',
		difficulty: 'medium',
		title: 'アレクサンドル・グロタンディーク',
		condition: '素数大富豪でグロタンカットを発生させる',
		category: 'prime',
	},
	{
		id: 'prime-ramanujan',
		difficulty: 'hard',
		title: 'シュリニヴァーサ・ラマヌジャン',
		condition: '素数大富豪でラマヌジャン革命を発生させる',
		category: 'prime',
	},
	{
		id: 'prime-mersenne',
		difficulty: 'medium',
		title: 'マラン・メルセンヌ',
		condition: '素数大富豪で3桁以上のメルセンヌ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-fermat',
		difficulty: 'medium',
		title: 'ピエール・ド・フェルマー',
		condition: '素数大富豪で3桁以上のフェルマー素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-fibonacci',
		difficulty: 'medium',
		title: 'レオナルド・フィボナッチ',
		condition: '素数大富豪で3桁以上のフィボナッチ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-lucas',
		difficulty: 'medium',
		title: 'エドゥアール・リュカ',
		condition: '素数大富豪で3桁以上のリュカ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-wolstenholme',
		difficulty: 'hard',
		title: 'ジョセフ・ウォルステンホルム',
		condition: '素数大富豪で3桁以上のウォルステンホルム素数を捨てる',
		category: 'prime',
	},

	// voiperrobot

	{
		id: 'voiperrobot',
		difficulty: 'easy',
		title: 'はっつくパンツ',
		condition: 'ボイパーロボットで遊ぶ',
		category: 'voiperrobot',
	},
	{
		id: 'voiperrobot-battle',
		difficulty: 'easy',
		title: 'ひっつくパンツ',
		condition: 'ボイパーロボットバトルで遊ぶ',
		category: 'voiperrobot',
	},
	{
		id: 'voiperrobot-win-battle',
		difficulty: 'medium',
		title: 'くっつくパンツ',
		condition: 'ボイパーロボットバトルで勝つ',
		category: 'voiperrobot',
	},

	// ricochet-robots

	{
		id: 'ricochet-robots-play',
		difficulty: 'easy',
		title: 'Hey ハイパーロボット',
		condition: 'ハイパーロボットで遊ぶ',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear',
		difficulty: 'easy',
		title: 'われはロボット',
		condition: 'ハイパーロボットを正解する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest',
		difficulty: 'easy',
		title: 'オートマタ',
		condition: 'ハイパーロボットで最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over10',
		difficulty: 'medium',
		title: 'アンドロイド',
		condition: 'ハイパーロボットで10手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over15',
		difficulty: 'hard',
		title: 'オラクル',
		condition: 'ハイパーロボットで15手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over20',
		difficulty: 'professional',
		title: 'デウス・エクス・マキナ',
		condition: 'ハイパーロボットで20手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-buttle-play',
		difficulty: 'easy',
		title: 'ハイパーロボット対戦',
		condition: 'ハイパーロボットバトルで遊ぶ',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-debugger',
		difficulty: 'hard',
		title: 'ﾋﾟｭｰﾝ',
		condition: 'ハイパーロボットのバグを突く',
		category: 'ricochet-robots',
	},

	// achievements

	{
		id: 'achievements',
		difficulty: 'easy',
		title: '実績解除',
		condition: '初めて実績解除する',
		category: 'prime',
	},
	{
		id: 'achievements-3',
		difficulty: 'easy',
		title: '解解解除',
		condition: '難易度easy以上の実績を3つ解除する',
		category: 'prime',
	},
	{
		id: 'achievements-10',
		difficulty: 'medium',
		title: '解解解解解解解解解解除',
		condition: '難易度easy以上の実績を10個解除する',
		category: 'prime',
	},
	{
		id: 'achievements-master',
		difficulty: 'hard',
		title: '実績マスター',
		condition: '難易度medium以上の実績を10個解除する',
		category: 'prime',
	},

	// manual

	{
		id: 'sig',
		difficulty: 'medium',
		title: 'TSG初心者',
		condition: '分科会に参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'sig-3times',
		difficulty: 'hard',
		title: 'TSG中級者',
		condition: '分科会に3回以上参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'sig-5times',
		difficulty: 'hard',
		title: 'TSG上級者',
		condition: '分科会に5回以上参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'clubroom',
		difficulty: 'medium',
		title: '足跡',
		condition: 'TSGの部室を訪問する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'heiankyo-alien',
		difficulty: 'hard',
		title: '歴史との邂逅',
		condition: 'TSGの部室で平安京エイリアンをプレイする',
		category: 'manual',
		manual: true,
	},
	{
		id: 'scrapbox',
		difficulty: 'medium',
		title: '切り抜き箱',
		condition: 'scrapboxに自分の名前の記事を作成する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'github',
		difficulty: 'hard',
		title: 'コントリビューター',
		condition: 'GitHubのtsg-ut下のリポジトリにコミットする',
		category: 'manual',
		manual: true,
	},
	{
		id: 'github-slackbot',
		difficulty: 'hard',
		title: 'BOT駆動開発',
		condition: 'GitHubのtsg-ut/slackbotにコミットする',
		category: 'manual',
		manual: true,
	},
];

const achievementMap = new Map(achievements.map((achievement) => [achievement.id, achievement]));

export default achievementMap;
