<script>
  import { goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";

  function hotkeys(e) {
    if (e.key === "1" || e.keyCode === 49) goto(".");
    if (e.key === "2" || e.keyCode === 50) goto("2");
    if (e.key === "3" || e.keyCode === 51) goto("3");
    if (e.key === "4" || e.keyCode === 52) goto("4");

    // console.log(e);
    // let target = e.key;
    // if (!isNaN(Number(target))) {
    //   if (target === "0") target = ".";
    //   goto(target);
    // }
  }
</script>

<svelte:window on:keydown|preventDefault={hotkeys} />
<Nav />
<main>
  <slot />
</main>
