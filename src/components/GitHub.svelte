<script lang="ts">
    let pfp: string = "";
    let name: string = "";
    let description: string = "";
    let username: string = "";
    let repoCount: string = "";

    fetch('https://api.github.com/users/nils865')
        .then((response) => response.json())
        .then((data) => {
            pfp = data["avatar_url"];
            name = data["name"];
            description = data["bio"];
            username = data["login"];
            repoCount = data["public_repos"];
        });

</script>

<div id="profile">
    <div id="info">
        <img src="{pfp}" alt="ProfilePicture" id="pfp" draggable="false">
        <br>
        <div class="placeholder"></div>
        <a href="https://github.com/nils865" target="_blank" rel="noreferrer" class="noMP noStyle">{name}</a>
        <p class="description noMP">{description}</p>
    </div>
    <div id="contributions">
        <div class="fit-content">
            <div id="commitbox" class="fit-content">
                <img src="https://ghchart.rshah.org/391B74/{username}" alt="commit-history" class="commits">
            </div>
            <div id="repoinfo">
                <p class="noMP">Repositiories: {repoCount}</p>
                <div class="radio"></div>
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --pfp-size: 200px;
        --contribution-bg: #111;
    }

    #repoinfo {
        display: flex;
        justify-content: center
    }

    #repoinfo > p {
        font-size: 0.9em;
    }

    .commits {
        height: 104px;
        width: 663px;
        filter: invert(0.9);
    }

    #commitbox {
        padding: 0.5em;
        border-style: solid;
        border-color: var(--border);
        border-radius: 1em;
        background-color: var(--contribution-bg);
    }

    #contributions {
        height: var(--pfp-size);
        width: fit-content;

        display: flex;
        align-items: center;

        margin-left: 1em;
    }

    #profile {
        display: flex;
        justify-content: center;
    }

    #pfp {
        width: var(--pfp-size);
        height: var(--pfp-size);

        border-radius: 35px;
    }

    #info > a {
        font-size: 1.75rem;
    }

    .description {
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: var(--txt2);
    }
</style>
