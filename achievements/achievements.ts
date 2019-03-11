interface Achievement {
	id: string,
	difficulty: 'baby' | 'easy' | 'medium' | 'hard' | 'professional',
	title: string,
	condition: string,
}

const achievements: Achievement[] = [
	{
		id: 'chat',
		difficulty: 'baby',
		title: 'はじめまして!',
		condition: 'publicなチャンネルで初めて発言する',
	},
	{
		id: 'chat-10times',
		difficulty: 'easy',
		title: 'おしゃべりしよう',
		condition: 'publicなチャンネルで10回以上発言する',
	},
	{
		id: 'chat-1000times',
		difficulty: 'hard',
		title: '話のタネ',
		condition: 'publicなチャンネルで1000回以上発言する',
	},
	{
		id: 'chat-10days',
		difficulty: 'medium',
		title: '常連',
		condition: 'publicなチャンネルでのべ10日間発言する',
	},
	{
		id: 'chat-100days',
		difficulty: 'hard',
		title: 'いつものメンバー',
		condition: 'publicなチャンネルでのべ100日間発言する',
	},
	{
		id: 'chat-1000days',
		difficulty: 'professional',
		title: 'TSGの主',
		condition: 'publicなチャンネルでのべ1000日間発言する',
	},
	{
		id: 'get-sushi',
		difficulty: 'baby',
		title: '玉子',
		condition: 'sushi-botから寿司をもらう',
	},
	{
		id: 'get-multiple-sushi',
		difficulty: 'easy',
		title: 'マグロ',
		condition: 'sushi-botから2個以上の寿司をもらう',
	},
	{
		id: 'get-infinite-sushi',
		difficulty: 'easy',
		title: 'ハマチ',
		condition: 'sushi-botから無限個の寿司をもらう',
	},
	{
		id: 'dosushi',
		difficulty: 'hard',
		title: 'DoSushi',
		condition: 'sushi-botから1週間に10万個以上の寿司をもらう',
	},
	{
		id: 'wednesday-sushi',
		difficulty: 'medium',
		title: 'すしすしすいようび',
		condition: '水曜日にsushi-botから寿司をもらう',
	},
	{
		id: 'freezing',
		difficulty: 'easy',
		title: 'フリージング',
		condition: 'sushi-botに凍結される',
	},
	{
		id: 'freezing-master',
		difficulty: 'hard',
		title: '凍結の使い手',
		condition: '週間凍結ランキングで1位を獲得する',
	},
	{
		id: 'place',
		difficulty: 'easy',
		title: '旅人',
		condition: 'tashibotに反応される',
	},
	{
		id: 'new-place',
		difficulty: 'medium',
		title: '開拓者',
		condition: 'tashibotで新しい地名を獲得する',
	},
	{
		id: 'zabuton',
		difficulty: 'easy',
		title: 'だじゃれを言うのは誰じゃ',
		condition: 'dajareボットから:zabuton:をもらう',
	},
	{
		id: 'zabutons',
		difficulty: 'easy',
		title: 'タワーの上に登ったわ―',
		condition: 'dajareボットから:zabutons:をもらう',
	},
	{
		id: 'flying-zabuton',
		difficulty: 'easy',
		title: '座布団がぶっ飛んだ',
		condition: 'dajareボットから:flying-zabuton:をもらう',
	},
	{
		id: 'pocky',
		difficulty: 'baby',
		title: 'はま寿司',
		condition: 'pockyに反応される',
	},
	{
		id: 'long-pocky',
		difficulty: 'medium',
		title: 'スーモ',
		condition: 'pockyから20文字以上の返答を得る',
	},
	{
		id: 'tahoiya',
		difficulty: 'easy',
		title: 'たほいやーへの道',
		condition: 'たほいやに参加する',
	},
	{
		id: 'daily-tahoiya-theme',
		difficulty: 'medium',
		title: 'ゲームマスター',
		condition: 'デイリーたほいやにお題を登録する',
	},
	{
		id: 'tahoiya-over6',
		difficulty: 'medium',
		title: '坊主丸儲け',
		condition: 'たほいやで一度にプラス6点以上獲得する',
	},
	{
		id: 'tahoiya-over10',
		difficulty: 'hard',
		title: '大漁',
		condition: 'たほいやで一度にプラス10点以上獲得する',
	},
	{
		id: 'achievements',
		difficulty: 'easy',
		title: '解除',
		condition: '初めて実績解除する',
	},
	{
		id: 'achievements-3',
		difficulty: 'easy',
		title: '解解解除',
		condition: '難易度easy以上の実績を3つ解除する',
	},
	{
		id: 'achievements-10',
		difficulty: 'medium',
		title: '解解解解解解解解解解除',
		condition: '難易度easy以上の実績を10個解除する',
	},
	{
		id: 'achievements-master',
		difficulty: 'medium',
		title: '実績マスター',
		condition: '難易度medium以上の実績を10個解除する',
	},
];

export default achievements;