<script lang="ts">
    export let typetext: string = "placeholder";

    const delay: number = 25;
    let currentDelay: number = 0;

    function getDelay(): number {
        currentDelay += delay;
        return currentDelay;        
    }

</script>

<p class="noMP typewriter">
    {#each typetext as char}
        <span class="typeletter" style="--delay: {getDelay()}ms">{char}</span>
    {/each}
</p>

<style>
    @keyframes type {
        0% {
            opacity: 0;
        }

        99% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .typeletter {
        opacity: 0;
        animation: type var(--delay) forwards;
    }
</style>