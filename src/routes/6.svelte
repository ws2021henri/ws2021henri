<svelte:head>
  <title>What's new on HENRI?</title>
</svelte:head>

<div class="container">
  <div class="content">
    <h1 class="fr">“Quoi de neuf sur HENRI?”</h1>
    <h1 class="en">“What's new on HENRI?”</h1>
    <div class="small"><em>Télérama</em>, 18 février 2021</div>
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

  h1 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 5rem;
    line-height: 7rem;
  }

  h1.fr {
    transform: translateX(-8rem);
  }

  h1.en {
    font-family: Source Serif Pro;
    color: #ccc;
    transform: translateX(8rem);
  }

  .small {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: right;
  }
</style>
