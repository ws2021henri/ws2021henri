<svelte:head>
  <title>Building HENRI</title>
</svelte:head>

<div class="container">
  <div class="content">
    <div class="super"
      >Construire / <span style="font-family: Source Serif Pro; color: #ccc;"
        >Building</span
      ></div
    >
    <h1>HENRI</h1>

    <div class="url">www.cinematheque.fr/henri</div>
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
    /* outline: solid 1px red; */
  }

  .super {
    font-size: 3rem;
  }
  h1 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 12rem;
    line-height: 11rem;
  }

  .url {
    margin-top: 24px;
    font-size: 2.25rem;
    text-align: center;
  }
</style>
