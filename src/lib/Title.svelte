<script lang="ts">
    import { Heading } from "flowbite-svelte";
    export let className: string;
</script>

<Heading level="1" class="flex justify-center text-4xl font-bold {className}">
    <span class="bg-highlight"><slot /></span>
</Heading>

<style>
    .bg-highlight {
        @apply bg-accent-500;
        padding: 0.25rem;
    }
</style>