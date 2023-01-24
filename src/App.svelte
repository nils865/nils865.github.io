<script lang="ts">
    import GitHub from "./components/GitHub.svelte";
    import Terminal from "./components/Terminal/Terminal.svelte";
</script>

<div id="main">
    <p>some switches</p>
    <GitHub />
    <div class="space"></div>
    <Terminal name="description" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ipsa ea aliquam cupiditate optio id, consectetur cumque nisi at quia nemo, animi ex similique molestias sit! Odit est sed in." />
</div>

<style>
    #main:nth-child(1) {
        padding-top: 1em;
    }

    #main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .space {
        width: 0;
        height: 5em;
    }
</style>
