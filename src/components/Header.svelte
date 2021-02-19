<script>
  let data = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
</script>

<style>
  header {
    background-color: #123;
    padding: 2px;
  }

  .container {
    margin: 0;
  }

  .row {
    overflow: hidden;
    width: 100%;
    display: block;
    float: none;
    box-sizing: border-box;
  }

  .row > div {
    display: block;
    float: left;
    width: 18px;
    height: 18px;
    margin: 2px;
    background-color: #369;
    box-sizing: border-box;
  }
  .row > div.anim1 {
    animation: 3s cubic-bezier(0.45, 0, 0.55, 1) 8 forwards anim1;
  }
  .row > div.anim2 {
    animation: 5s cubic-bezier(0.45, 0, 0.55, 1) 8 forwards anim2;
  }

  @keyframes anim1 {
    0% {
      transform: rotate(0) scale(1);
      background-color: #369;
      border-radius: 0;
    }
    50% {
      transform: rotate(90deg) scale(.35);
      background-color: #fff;
      border-radius: 18px;
    }
    100% {
      transform: rotate(180deg) scale(1);
      background-color: #369;
      border-radius: 0;
    }
  }

  @keyframes anim2 {
    0% {
      transform: rotate(0) scale(1);
      background-color: #369;
      border-radius: 0;
    }
    50% {
      transform: rotate(-90deg) scale(.35);
      background-color: #036;
      border-radius: 18px;
    }
    100% {
      transform: rotate(180deg) scale(1);
      background-color: #369;
      border-radius: 0;
    }
  }
</style>

<header>
  <div class="container">
    {#each data as r, i}
      <div class="row">
        {#each r as c, j}
          <div
            class:anim1={c === 1}
            class:anim2={c === 0}
            style="animation-delay: {j * 15 + i * 5}ms" />
        {/each}
      </div>
    {/each}
  </div>
</header>
