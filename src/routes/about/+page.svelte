<script lang="ts">
	import Title from '$lib/Title.svelte';
	import images from '$lib/img/about';
	import { Heading, P, Img, Gallery, Button, Modal } from 'flowbite-svelte';

	type Work = {
		title: string;
		description: string;
		how: string;
		image: 'osero' | 'tamakoro' | 'gun' | 'suraimu' | 'random' | 'syokumon' | 'meiden';
	};

	let works: Work[] = [
		{
			title: 'オセロ（非対人戦）',
			description: 'オセロのルールはよく知られているルールと同じです。AIとの対戦ゲームです。今回僕はユニティ初心者でプログラミングが得意ではないのでzenn（エンジニアのための新しい情報共有サービス)を使って本を買い、それを参考にして作りました。',
			how: '全て左クリックで操作してください。\n' +
				'まずスタート画面でAIの強さ（難易度）、先攻後攻、駒が何処に置けるのかがわかるようになるアシスト機能のオンオフを選択しスタートボタンを押します。\n' +
				'スタートしたら好きな所に駒を置いてください。置けないときは、自動でパスされます。\n' +
				'途中でスタート画面に戻るには右下のリセットボタンを押してください。\n' +
				'ゲームの勝敗のリザルト画面が表示されたらゲーム画面のどこでもいいのでクリックしてくださいそうしたらまたスタート画面に飛びます。',
			image: 'osero'
		},
		{
			title: '玉転師',
			description: 'これは玉を操作しながら落ちないようにゴールを目指すゲームです。全部で2ステージあり全てクリアするとゲームクリアです。各ステージにチェックポイントはありません。',
			how: '十字キーで前後左右、スペースキーでジャンプができます。',
			image: 'tamakoro'
		},
		{
			title: 'GunFightCardGame',
			description: 'FPSゲームがテーマの簡単操作でできるカードゲーム！武器5種類とアイテム11種類、合計16種類のカードを駆使して対戦相手に勝利せよ！HPが5以下になると逆転チャンス！ハンドガンをスナイパーライフルに進化させて大ダメージ！',
			how: '操作はマウスのみ　ドラッグ&ドロップで各カードを指定の場所に置く。画面右側にあるボタンを操作しバトルフェーズ、エンドフェーズへの移行。',
			image: 'gun'
		},
		{
			title: 'スライム vs UFO',
			description: 'このゲームはスライム（プレイヤー）を操作して、攻めてくるUFO（敵）を倒してスコアを稼ぎながら１分間耐えるゲームですゲームです。',
			how: '選択画面　　矢印キー：選択　SPACEキー：決定\n' +
				'\n' +
				'戦闘画面　　Wキー：上移動　Aキー：左移動　Sキー：下移動　Dキー：右移動　\n' +
				'　　　　　　上矢印キー：攻撃　\n' +
				'\n' +
				'ゲームオーバーまたはゲームクリア画面\n' +
				'　　　　　　Gキー：タイトルに戻る　SPACEキー：リスタート',
			image: 'suraimu'
		},
		{
			title: '五目並べ・量子五目並べ（２人プレイ専用）',
			description: '五目並べと量子五目並べを遊ぶことができます。自分の色を５つ揃えたら勝ちです。量子五目並べは石を置いた時点で色が確定しておらず、観測をしたときに確立に従って色を確定させます。観測をしたときに自分の色がそろっていれば勝ちです。',
			how: '１．（五目並べ・量子五目並べ共通）置きたいマスをマウスでクリックして石を置きます。\n' +
				'２．（量子五目並べのみ）観測ボタンをクリックすることで観測をすることができます。観測は自分が石を置いた直後、相手のターンが表示されますが、そのタイミングで観測を行ってください。',
			image: 'random'
		},
		{
			title: 'Summon',
			description: 'このゲームは横スクロール2Dアクションゲームです。主人公はジャンプや移動などといった基本的アクションができません。しかしスコアを消費するとモンスターを召喚することができます。召喚を駆使して戦いましょう。',
			how: '各方向キーで移動、ジャンプはスペース、召喚はzまたはxです。召喚にはzでは5スコア、xでは15スコア消費します。が右上に載っているのでそこで確認してください。',
			image: 'syokumon'
		},
		{
			title: 'meiden防衛要塞',
			description: '向かってくるゾンビを倒して要塞を防衛するゲームです。主人公を上下に動かして矢を当ててゾンビを倒そう！ゾンビを倒すとスコアが増えます。高得点を目指してたくさんゾンビを倒そう！',
			how: '↑...主人公を上方向に移動\n' +
				'↓...主人公を下方向に移動\n' +
				'restartボタンをクリック...リスタート',
			image: 'meiden'
		}
	];

	let mordalOpen = false;
	let mordalContent: number | null = null;

</script>

<Title className="mt-10">About</Title>

<P class="m-5">
	このページでは、部室に展示してある作品とその内容について紹介しています。<br />
</P>
<P class="m-5">
	作品は、部員が自由に作成したもので、それぞれの個性が詰まった素晴らしいものばかりです。ぜひ部室を訪ねていただき、実際にご覧ください。<br
/>
</P>

<Heading level="2" class="my-5 pl-5 pt-4 text-3xl font-bold">生徒作品展示一覧</Heading>

<div class="p-5">
	<Gallery class="gap-4 grid-cols-2 md:grid-cols-3 justify-center">
		{#each works as work, i}
			<button
				class="h-full w-full"
				on:click={() => {
					mordalOpen = true;
					mordalContent = i;
					console.log(mordalContent);
				}}
			>
				<button
					class="flex flex-col h-full w-full items-center cursor-pointer"
				>
					<Img src={images[work.image].src}
							 class="w-full h-40 rounded-lg shadow-lg shadow-blue-500/20 object-cover"
							 alt={work.title} />
					<P class="font-bold text-[20px] text-center pt-2">{work.title}</P>
				</button>
			</button>
		{/each}
	</Gallery>
</div>

{#if mordalOpen && mordalContent !== null}
	<Modal
		title={works[mordalContent].title}
		autoclose
		bind:open={mordalOpen}
		on:close={() => {
		mordalOpen = !mordalOpen
		mordalContent = null
	}}>
		<div class="flex flex-col p-5 gap-5 max-h-[100vh-100px] overflow-y-auto">
			<Img src={images[works[mordalContent].image].src}
					 class="w-full h-40 rounded-lg shadow-lg shadow-blue-500/20 object-cover" alt={works[mordalContent].title} />
			<div>
				<p class="text-slate-800 font-bold">description</p>
				<p class="text-base leading-relaxed text-gray-500">
					{works[mordalContent].description}
				</p>
			</div>
			<div>
				<p class="text-slate-800 font-bold">How to play</p>
				<p class="text-base leading-relaxed text-gray-500">
					{works[mordalContent].how}
				</p>
			</div>
		</div>
		<svelte:fragment slot="footer">
			<Button on:click={() => {
				mordalOpen = !mordalOpen
				mordalContent = null
			}}>Close
			</Button>
		</svelte:fragment>
	</Modal>
{/if}