<script>
    import { onMount } from "svelte";

    onMount(() => {
        const theme =
            document.documentElement.attributes.getNamedItem(
                "data-theme",
            )?.value;

        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "hmdnu/hmdnu.my.id");
        script.setAttribute("data-repo-id", "R_kgDOO5v3xw");
        script.setAttribute("data-category", "General");
        script.setAttribute("data-category-id", "DIC_kwDOO5v3x84Csz7-");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute(
            "data-theme",
            `${theme === "dark" ? "gruvbox_dark" : "light"}`,
        );
        script.setAttribute("data-lang", "en");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        document.getElementById("giscus-container")?.appendChild(script);
    });
</script>

<div class="mt-20">
    <h1 class="text-200 font-bold">Comments :</h1>
    <div id="giscus-container"></div>
    <p class="mt-5 text-[14px] opacity-60">
        The comment section will appears shortly, if you dont see any, please
        turn off the adblocker.
    </p>
</div>
