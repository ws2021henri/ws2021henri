<svelte:head>
  <title>All at once</title>
</svelte:head>

<div class="container">
  <div class="content">
    <h2
      >HENRI vu comme un prototype implique de travailler en même temps :<br
      /><span class="en"
        >HENRI as a prototype involves working all at once on:</span
      ></h2
    >
    <ul>
      <li
        >Conception visuelle et ergonomie / <span class="en"
          >Visual design and user experience</span
        >
      </li>
      <li style="margin-left: 1rem;"
        >Architecture des données / <span class="en">Data architecture</span>
      </li><li style="margin-left: 2rem;"
        >Développement technique / <span class="en">Technical development</span
        ></li
      >
      <li style="margin-left: 3rem;"
        >Édition de contenu (texte et iconographie) / <span class="en"
          >Content editing (texts and images)</span
        ></li
      >
    </ul>
  </div>
</div>

<style>
  .container {
    height: 99vh;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: inline-block;
    flex: 0 0 auto;
    font-size: 2rem;
    font-weight: 500;
  }

  .en {
    font-family: Source Serif Pro;
    color: #ccc;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
</style>
