<script>
	import '../app.css';
	import src from '$lib/img/logo.svg';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';
	import '@fontsource/orbitron';
</script>

<Navbar class=" bg-primary-500">
	<NavBrand href="/">
		<img {src} class="me-3 h-6 w-auto sm:h-9" alt="Logo" />
	</NavBrand>
	<NavHamburger class="text-white lg:text-primary-500" />
	<NavUl activeUrl="text-white" activeClass="text-white" nonActiveClass="text-white">
		<NavLi class="text-primary-500 md:text-white lg:text-white" href="/">Home</NavLi>
		<NavLi class="text-primary-500 md:text-white lg:text-white" href="/about">About</NavLi>
		<NavLi class="text-primary-500 md:text-white lg:text-white" href="/access">Access</NavLi>
	</NavUl>
</Navbar>
<div class="main">
	<slot />
	<Footer footerType="logo" class="mt-5">
		<div
			class="flex flex-col items-center justify-center space-y-4 py-6 text-sm text-gray-500 sm:flex-row sm:space-y-0 dark:text-gray-400"
		>
			<FooterBrand href="/" class=" flex justify-center h-auto w-auto" {src} alt="Logo" />
			<FooterLinkGroup
				ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<FooterLink href="/">Home</FooterLink>
				<FooterLink href="/">About</FooterLink>
				<FooterLink href="/">Access</FooterLink>
			</FooterLinkGroup>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
		<FooterCopyright href="https://mdn-misc.com" by="MISC" />
	</Footer>
</div>

<style>
	.main {
		width: 100%;
		height: calc(100vh - 4rem);
		font-family: "Orbitron", Noto Sans JP, sans-serif;
	}
</style>
