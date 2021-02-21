<script>
  import hljs from "highlight.js";
  import { Highlight } from "svelte-highlight";
  import { xml, json } from "svelte-highlight/languages";
  import { a11yDark } from "svelte-highlight/styles";

  import svelte from "../lib/svelte-highlight-svelte.js"; // Svelte syntax highlighting
  import { data, logic } from "../lib/sample-data.js";

  let paneVisible = [true, false, true];

  function hotkeys(e) {
    let key = e.key;
    if (key === "A" || key === "a") paneVisible[0] = !paneVisible[0];
    if (key === "Z" || key === "z") paneVisible[1] = !paneVisible[1];
    if (key === "E" || key === "e") paneVisible[2] = !paneVisible[2];
  }
</script>

<svelte:window on:keyup={hotkeys} />

<svelte:head>
  <title>Data and output</title>
  {@html a11yDark}
</svelte:head>

<div class="container">
  <div class="pane" class:visible={paneVisible[0]}>
    <div class="pane-header"
      ><div>Data<br />(plain text file / JSON structure)</div></div
    >
    <div class="pane-content noscrollbar"
      ><Highlight language={json} code={data} /></div
    >
  </div>

  <div class="pane" class:visible={paneVisible[1]}>
    <div class="pane-header"><div>Logic<br />← Data into HTML →</div></div>
    <div class="pane-content noscrollbar"
      ><Highlight language={svelte} code={logic} /></div
    >
  </div>

  <div class="pane" class:visible={paneVisible[2]}>
    <div class="pane-header"><div>HENRI website</div></div>
    <iframe
      class="pane-content"
      title=""
      src="https://www.cinematheque.fr/henri/film/48361-la-chute-de-la-maison-usher-jean-epstein-1928/"
    /></div
  >
</div>

<style>
  .pane {
    display: none;
  }
  .pane.visible {
    display: block;
  }

  .pane:hover .pane-header {
    background-color: #555 !important;
  }
</style>
