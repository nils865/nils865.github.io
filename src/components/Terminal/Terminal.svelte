<script lang="ts">
    export let text: string = "placeholder";
    export let name: string = "placeholder";

    import Typewriter from "./Typewriter.svelte";
</script>

<div id="terminal">
    <div id="header">
        <div id="underline" class="layered"></div>
        <div id="title" class="layered noMP">
            <p class="noMP">{name}.sh</p>
        </div>
        <div id="icons" class="layered noMP">
            <div class="redIcon icon"></div>
            <div class="yellowIcon icon"></div>
            <div class="greenIcon icon"></div>
        </div>
    </div>
    <div id="textbox">
        <span class="prefix layered">$:</span>
        <p class="noMP layered">
            <Typewriter typetext={text}/>
        </p>
    </div>
</div>

<style>
    #terminal {
        --terminal-bg: #131316;
        --terminal-txt: #EFEFFE;
        --terminal-border: #444449;
        --terminal-border-dark: #242429;

        --terminal-red: #FF5F5A;
        --terminal-green: #2ACA44;
        --terminal-yellow: #FFBE2E;

        width: 600px;
        height: 300px;

        background-color: var(--terminal-bg);

        border-style: solid;
        border-radius: 1em;
        border-color: var(--terminal-border);
    }
    
    .prefix {
        color: var(--terminal-green);
    }

    .layered {
        grid-column: 1;
        grid-row: 1;
    }

    #textbox {
        margin: 1em;

        display: grid;

        font-family: 'Cascadia Mono Light', monospace;
    }


    #textbox > p {
        color: var(--terminal-txt);

        margin-left: 1.5em;
    }

    #header {
        width: 100%;
        height: 30px;

        color: var(--terminal-border);
        font-family: 'Rubik', sans-serif;

        display: grid;
    }

    #title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #underline {
        height: 100%;
        width: calc(100% - 2em);
        margin: 0 1em;

        border-bottom-style: solid;
        border-bottom-color: var(--terminal-border-dark);

        z-index: 696969;
    }

    #icons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;

        margin: 0 1em;
    }

    .icon {
        width: 1em;
        height: 1em;

        margin: 0 0.25em;

        border-radius: 100%;
    }

    .redIcon {
        background-color: var(--terminal-red);
        margin-left: 0;
    }

    .yellowIcon {
        background-color: var(--terminal-yellow);
    }

    .greenIcon {
        background-color: var(--terminal-green);
    }
</style>