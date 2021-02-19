<script>
  import { goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";

  function alert(e) {
    let target = e.key;
    if (!isNaN(Number(target))) {
      if (target === "0") target = ".";
      goto(target);
    }
  }
</script>

<svelte:window on:keyup={alert} />
<Nav />
<main>
  <slot />
</main>
