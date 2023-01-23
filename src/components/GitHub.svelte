<script lang="ts">
    let pfp: string = "img/placeholder.png";
    let name: string = "placeholder";
    let description: string = "placeholder";

    fetch('https://api.github.com/users/nils865')
        .then((response) => response.json())
        .then((data) => {
            pfp = data["avatar_url"];
            name = data["name"]
            description = data["bio"]
        });

</script>

<div id="profile">
    <div id="info">
        <img src="{pfp}" alt="ProfilePicture" id="pfp" draggable="false">
        <br>
        <div class="placeholder"></div>
        <a href="https://github.com/nils865" target="_blank" rel="noreferrer" class="noMP noStyle">{name}</a>
        <p id="description" class="noMP">{description}</p>
    </div>
</div>

<style>
    .placeholder {
        height: 0.35rem;
        width: 0;
    }

    #profile {
        display: flex;
        justify-content: center;
    }

    #pfp {
        width: 200px;
        height: 200px;

        border-radius: 35px;
    }

    #info > a {
        font-size: 1.75rem;
    }

    #description {
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: var(--txt2);
    }
</style>
