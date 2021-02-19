<div class="container">
  <div class="pane">
    <div class="pane-header">Visual design</div>
    <div class="pane-content">
      <div class="grid-container">
        <div>
          <div
            class="block"
            style="background: linear-gradient(90deg, #7db3af 0%, #7db3af 15%, #3cf 100%);"
          />
          <h2
            >Le Parti des choses
            <div class="sous-titre-fr">Bardot et Godard</div></h2
          >
        </div>

        <div>
          <div
            class="block"
            style="background: linear-gradient(90deg, #ff406c 0%, #ff406c 15%, #ff4633 100%);"
          />

          <h2 class="ispick"
            >Madam Butterfly<div class="titre-vo">蝴蝶夫人</div></h2
          ></div
        >

        <div class="film3">
          <div
            class="block"
            style="background: linear-gradient(90deg, #888 0%, #888 15%, #aaa 100%);"
          />

          <h2 class="archived"
            >The Brilliant Biograph<div class="sous-titre-fr"
              >Earliest Moving Images of Europe (1897-1902)</div
            ></h2
          >
        </div>

        <div class="text1">
          <h3
            >Le mot des programmateurs / <span class="lang-en"
              >Curators' note</span
            ></h3
          >
          <p
            >Aliquam tincidunt sem vitae blandit pulvinar. Sed vehicula, tortor
            vel vehicula sollicitudin, nunc magna congue est, at faucibus orci
            sapien in ante. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Maecenas ornare nisi
            fringilla metus tempus feugiat.
          </p>
          <p class="lang-en"
            >Donec vitae mi eget justo bibendum gravida eget vitae dui.
            Curabitur sem sapien, interdum sed dolor sit amet, condimentum
            mattis tortor. Praesent neque massa, eleifend a placerat sed,
            placerat sit amet tellus. Duis erat elit, condimentum non mauris
            non, laoreet condimentum velit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    background-color: #444450;
  }
  .pane-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .grid-container {
    display: grid;
    width: 75vw;
    padding-top: 12px;
    flex: 0 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
    grid-auto-rows: min-content;
    grid-template-areas:
      ". . film3"
      "text1 text1 film3";
  }

  .film3 {
    grid-area: film3;
  }
  .text1 {
    grid-area: text1;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-top: 24px;
    margin-right: 24px;
  }

  .block {
    width: 24vw;
    height: 8vw;
    margin-bottom: 12px;
  }

  h2 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  h2 {
    color: #7db3af;
  }

  h2 .sous-titre-fr {
    color: #607b7f;
  }

  h2.ispick {
    color: #ff4256;
  }
  h2.archived {
    color: #eee;
  }

  h2.archived .sous-titre-fr {
    color: #ccc;
  }

  h2 .titre-vo {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 6px 0;
  }

  .lang-en {
    font-family: "Source Serif Pro", "Source Sans Pro", serif;
    font-size: 0.938em;
    font-weight: 300;
    color: #bbb;
  }
</style>
