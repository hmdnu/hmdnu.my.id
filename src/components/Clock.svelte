<script>
    import { onMount, onDestroy } from "svelte";
    export let className = "";

    let clock = "";

    function updateTime() {
        const now = new Date();
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Jakarta",
        };
        clock = new Intl.DateTimeFormat("id-ID", options).format(now);
    }

    let interval;

    onMount(() => {
        updateTime();
        interval = setInterval(updateTime, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<span class={className}>{clock}</span>
