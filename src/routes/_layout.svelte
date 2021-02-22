<script>
  import { goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";

  function hotkeys(e) {
    if (e.key === "0" || e.keyCode === 48) goto(".");
    if (e.key === "1" || e.keyCode === 49) goto("1");
    if (e.key === "2" || e.keyCode === 50) goto("2");

    // console.log(e);
    // let target = e.key;
    // if (!isNaN(Number(target))) {
    //   if (target === "0") target = ".";
    //   goto(target);
    // }
  }
</script>

<svelte:window on:keydown={hotkeys} />
<Nav />
<main>
  <slot />
</main>
