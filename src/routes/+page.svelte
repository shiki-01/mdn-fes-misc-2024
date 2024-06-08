<script lang="ts">
    import src from '$lib/img/main_1.mp4';
    import asset1 from '$lib/img/asset1.svg';
    import { Img, Heading, P, Button, Modal } from 'flowbite-svelte';

    let clickOutsideModal = false;
</script>


<Img src={src} class="w-full h-full object-cover" alt="Main 1" />

<div class="w-full flex justify-end">
    <Img src={asset1} class="my-10 w-full max-w-[500px]" alt="Asset 1" />
</div>

<Heading level="1" class="text-center text-4xl font-bold">Home</Heading>

<P class="text-center text-lg m-5">
    皆さんようこそ。 ここは MISC の、いつもと少し違うホームページ。<br />
    「文化祭」というビックイベントを前に、今年は特設ホームページを作成することにしました。<br />
</P>
<P class="text-center text-lg m-5">
    何か特別な理由があるかって？<br />
    全くありません。ただ、いつもと違うことをしてみたかったんです。<br />
</P>
<P class="text-center text-lg m-5">
    このページは、文化祭の情報を発信するためのものです。<br />
    何か質問があれば、部室の部員にお気軽にお問い合わせください。<br />
</P>

<div class="flex justify-center">
    <Button class="mt-10" on:click={() => clickOutsideModal = true}>オリジナルPVを見る</Button>
</div>

<Modal id="modal" title="オリジナルPV" bind:open={clickOutsideModal} autoclose outsideclose>
    <P class="text-center text-lg">※音声が出ます</P>
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/955205345?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="main_1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
</Modal>