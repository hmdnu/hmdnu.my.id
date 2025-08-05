<script>
    import { icon } from "@/constants/icon";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let dropdown = $state(false);

    onMount(() => {
        document.documentElement.addEventListener("click", (e) => {
            if (
                e.target &&
                e.target.id !== "dropdown" &&
                e.target.id !== "dropdown-trigger"
            ) {
                dropdown = false;
            }
        });
    });

    function switchDarkMode() {
        document.dispatchEvent(
            new CustomEvent("set-theme", { detail: "dark" }),
        );
    }

    function switchLightMode() {
        document.dispatchEvent(
            new CustomEvent("set-theme", { detail: "light" }),
        );
    }
</script>

<div class="relative">
    <button
        id="dropdown-trigger"
        class={`hover:cursor-pointer hover:opacity-60`}
        aria-label="theme"
        onclick={() => (dropdown = !dropdown)}
    >
        <span class={`${icon.theme} size-6 pointer-events-none`}>asd</span>
    </button>
    {#if dropdown}
        <div
            in:fade={{ duration: 100 }}
            out:fade={{ duration: 100 }}
            class="absolute right-0 top-8 bg-white dark:bg-primary z-50 shadow-md rounded-md border border-gray-200 dark:border-neutral-500
            py-2 px-1 w-[100px] flex flex-col"
            id="dropdown"
        >
            <button
                onclick={switchDarkMode}
                class="hover:bg-gray-200 text-start px-2 py-1 rounded font-medium"
                id="theme-button">Dark</button
            >
            <button
                onclick={switchLightMode}
                class="hover:bg-gray-200 text-start px-2 py-1 rounded font-medium"
                id="theme-button">Light</button
            >
        </div>
    {/if}
</div>
