<script>
    import { icon } from "@/constants/icon";
    import { navItems } from "@/constants/nav";
    import Theme from "./Theme.svelte";

    let toggle = false;

    function handleOpenNav() {
        toggle = !toggle;

        if (toggle) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
</script>

<nav class="flex justify-between md:items-end items-center py-5 sticky top-0 bg-white z-50">
    <a href="/" class="text-300 font-bold hover:opacity-50">hmdnu</a>
    <div class="flex items-center gap-5">
        <div class="md:flex hidden gap-5">
            {#each navItems as item}
                <a href={item.url} class="font-semibold text-100 hover:opacity-50">
                    {item.name}
                </a>
            {/each}
        </div>

        <!-- <Theme /> -->
    </div>

    <div class="md:hidden flex">
        <div>
            <button
                on:click={handleOpenNav}
                class={`${icon.menu} size-6 hover:cursor-pointer ${!toggle ? "text-primary" : "text-slate-300"}`}
                aria-label="menu"
            ></button>
        </div>
    </div>
</nav>
<div class="flex md:hidden flex-col gap-2.5 items-end right-0 transition-all">
    {#if toggle}
        {#each navItems as item}
            <a href={item.url} class="font-semibold text-100 hover:opacity-50">
                {item.name}
            </a>
        {/each}
    {/if}
</div>
