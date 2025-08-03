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
    <div>
        <button
            id="dropdown-trigger"
            class={`${icon.theme} hover:cursor-pointer hover:opacity-60 p-1 w-fit h-fit inline-flex`}
            aria-label="theme"
            onclick={() => (dropdown = !dropdown)}
        >
            <svg
                class="pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5v-17a8.5 8.5 0 0 1 0 17"
                />
            </svg>
        </button>
    </div>
    {#if dropdown}
        <div
            in:fade={{ duration: 100 }}
            out:fade={{ duration: 100 }}
            class="absolute bg-white dark:bg-primary z-50 shadow-md rounded-md border border-gray-200 dark:border-neutral-500
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
