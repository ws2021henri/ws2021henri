<script>
  let visible = [false];

  function hotkeys(e) {
    let key = e.key;
    if (key === "A" || key === "a") visible[0] = !visible[0];
  }
</script>

<svelte:window on:keydown|preventDefault={hotkeys} />

<svelte:head>
  <title>All at once</title>
</svelte:head>

<div class="container">
  <div class="content">
    <h2
      >HENRI envisagé comme prototype signifie travailler en même temps :<br
      /><span class="en"
        >HENRI seen as a prototype involves working all at once on:</span
      ></h2
    >
    <ul>
      <li
        >Conception visuelle et ergonomie / <span class="en"
          >Visual design and user experience</span
        >
      </li>
      <li class="separate" style="margin-left: 1rem;"
        >Architecture des données / <span class="en">Data architecture</span>
      </li>

      <li style="margin-left: 2rem;"
        >Développement technique / <span class="en">Technical development</span
        ></li
      >
      <hr class:visible={visible[0]} />
      <li style="margin-left: 3rem;"
        >Édition de contenu (données, textes, images) / <span class="en"
          >Content editing (data, texts and images)</span
        ></li
      >
    </ul>

    <p style="font-size: 1.5rem; margin-top: 48px; margin-left: 3rem;"
      >... même après le lancement de la plate-forme.<br /><span class="en"
        >... even after the platform has been launched.</span
      ></p
    >
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

  hr {
    display: none;
    padding: 0;
    margin: 12px;
    border: solid 4px #fff;
    transform: scaleX(2);
  }

  hr.visible {
    display: block;
  }

  /* li {
    margin-top: 6px;
    padding-bottom: 6px;
    border-bottom: solid 4px transparent;
  } */

  .visible {
    border-bottom-color: #fff;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
</style>
