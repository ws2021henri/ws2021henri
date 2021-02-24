<script>
  let paneVisible = [true, false];

  function hotkeys(e) {
    let key = e.key;
    if (key === "A" || key === "a") paneVisible[0] = !paneVisible[0];
    if (key === "Z" || key === "z") paneVisible[1] = !paneVisible[1];
  }
</script>

<svelte:window on:keydown|preventDefault={hotkeys} />

<svelte:head>
  <title>Visual design</title>
</svelte:head>

<div class="container">
  <div class="pane" class:visible={paneVisible[0]}>
    <div class="pane-header">Day one: homepage</div>
    <div class="pane-content noscrollbar">
      <img src="henri-day-one-home.jpg" alt="Homepage" />
    </div>
  </div>
  <div class="pane" class:visible={paneVisible[1]}>
    <div class="pane-header">Day one: film</div>
    <div class="pane-content noscrollbar">
      <img src="henri-day-one-film.jpg" alt="Film" />
    </div>
  </div>
</div>

<style>
  /* .container {
    background-color: #444450;
  } */

  .pane {
    display: none;
  }
  .pane.visible {
    display: block;
  }

  .pane-content {
    position: relative;
    display: block;
  }

  .pane-content > img {
    display: block;
    width: 45vw;
    height: auto;
    margin: 0 auto;
  }
</style>
