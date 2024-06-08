<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Dummy from '$lib/Dummy.svelte';
	import { Heading, P, Img, Gallery } from 'flowbite-svelte';
	import { Motion, AnimatePresence, AnimateSharedLayout } from 'svelte-motion';

	let works: {
		isOpen: boolean;
		title: string;
		description: string;
		image: string;
	}[] = [
		{
			isOpen: false,
			title: '作品1',
			description: '作品1の説明',
			image: ''
		},
		{
			isOpen: false,
			title: '作品2',
			description: '作品2の説明',
			image: ''
		},
		{
			isOpen: false,
			title: '作品3',
			description: '作品3の説明',
			image: ''
		},
        {
            isOpen: false,
            title: '作品4',
            description: '作品4の説明',
            image: ''
        },
        {
            isOpen: false,
            title: '作品5',
            description: '作品5の説明',
            image: ''
        },
        {
            isOpen: false,
            title: '作品6',
            description: '作品6の説明',
            image: ''
        }
	];
	let items = [false, false, false];
</script>

<Title className="mt-10">About</Title>

<P class="m-5">
	このページでは、部室に展示してある作品とその内容について紹介しています。<br />
</P>
<P class="m-5">
	作品は、部員が自由に作成したもので、それぞれの個性が詰まった素晴らしいものばかりです。ぜひ部室を訪ねていただき、実際にご覧ください。<br
	/>
</P>

<Heading level="2" class="my-5 pl-5 text-3xl font-bold">生徒作品展示一覧</Heading>

<AnimateSharedLayout>
	<Motion let:motion layout initial={{ borderRadius: 25 }}>
		<div use:motion class="">
			<Gallery class="gap-4 grid-cols-2 md:grid-cols-3 justify-center">
				{#each works as work, i}
					<Motion layout initial={{ borderRadius: 10 }} let:motion={m1}>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:click={() => {
								items = items.map((v, j) => (j === i ? !v : v));
							}}
							use:m1
						>
							<Motion layout let:motion={m2}>
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div
									class="flex flex-col items-center cursor-pointer"
									use:m2
									on:click={() => {
										work.isOpen = !work.isOpen;
									}}
								>
									{#if work.image !== ''}
										<Img src={work.image} alt={work.title} class="rounded-lg w-1/3" />
									{:else}
										<Dummy />
									{/if}
                                    <P class="font-bold text-[20px] pt-2">{work.title}</P>
								</div>
							</Motion>
							<AnimatePresence list={work.isOpen ? [{ key: 1 }] : []}>
								<Motion
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									let:motion={m3}
								>
									<div use:m3>
										<P class="text-center pt-2">{work.description}</P>
									</div>
								</Motion>
							</AnimatePresence>
						</div>
					</Motion>
				{/each}
			</Gallery>
		</div>
	</Motion>
</AnimateSharedLayout>
