<script>
    import { icon } from "@/constants/icon";
    import { onMount } from "svelte";

    let theme = "dark";

    onMount(() => {
        theme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", theme);
    });

    function themeSwitcher() {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<button
    on:click={themeSwitcher}
    class={`${theme === "dark" ? icon.lightMode : icon.darkMode} size-5 text-primary hover:cursor-pointer`}
    aria-label="theme-button"
></button>
