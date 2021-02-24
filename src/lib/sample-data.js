module.exports = {
  data: `{
  "Jean Epstein": {
    "header": "<p>L'œuvre de <strong>Jean Epstein</strong> (1897-1953) offre un nuancier de puissances formelles du cinéma&nbsp;: vitesses, durées, formes plastiques, narratives et descriptives. L'essentiel de sa filmographie est composée de quatre périodes clés, à peine étalées sur dix années, conservée et restaurée par la Cinémathèque française.</p>",
    "films": [
      {
        "id": 48361,
        "titleFr": "Chute de la maison Usher",
        "artFr": "La",
        "titleEn": "Fall of the House of Usher",
        "artEn": "The",
        "director": "Jean Epstein",
        "year": 1928,
        "country": "France",
        "adaptation": "D'après Edgar Allan Poe.",
        "runtime": "1:05:23",
        "version": "Sous-titres anglais (English subtitles in option)",
        "isCC": true,
        "en": "Film with English subtitles in option",
        "cast": "Marguerite Gance, Jean Debucourt, Charles Lamy",
        "synopsis": "<p>Lord Roderick Usher, inquiet pour sa compagne, souffrante, accueille dans sa demeure à l'atmosphère étrange et oppressante un ami d'enfance, après l'avoir appelé à l'aide.</p>",
        "restoration": "<p><em>La Chute de la maison Usher</em> a été restauré en 1997 par la Cinémathèque Royale de Belgique et la Cinémathèque française, en collaboration avec la Cineteca del Comune di Bologna, le Nederlands Filmmuseum et l'Archivo Nacional de la Imagen – Sodre (Montevideo). En 2013, le film a été restauré numériquement par la Cinémathèque française et mis en musique par Gabriel Thibaudeau d'après sa partition, interprétée par l'Octuor de France.</p>",
        "comment": "<p>«&nbsp;Tout concourt dans ce chef-d'œuvre à son unité. La maîtrise absolue du montage, du rythme où le ralenti, les surimpressions, les travellings, la caméra mobile jouent leur rôle et jamais gratuitement&nbsp;: il n'y a pas une image, un procédé technique qui ne soient là pour embellir le film&nbsp;; ils sont là pour nous impressionner dans le sens le plus noble comme les images et la cadence d'un vers. La qualité de la photographie, digne des plus grands chefs-d'œuvres du film allemand où grâce à l'orthochromatique les gris sont gris, les blancs sont blancs et les noirs d'un velouté unique...&nbsp;» (Henri Langlois, <em>Cahiers du cinéma</em>, juin 1953)</p>",
        "vimeo": "438507453",
        "isCatFilm": true,
        "status": 2,
        "datePublished": "2020-04-09",
        "restrict": false
      }
    ]
  }
}`,
  logic: `<svelte:head>
  <meta property="og:title" content={ogTitle} />
  <meta
    property="og:url"
    content="https://www.cinematheque.fr/henri/film/{film.slug}/" />
  <meta property="og:description" content={film.synopsis} />
  <meta property="og:image" content={film.thumb} />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="533" />
  <meta property="og:image:height" content="400" />

  <title>
    {artTitre(film.artFr, film.titleFr)}
    ({film.realisateurs},
    {film.annee}) - HENRI - La Cinémathèque française
  </title>
</svelte:head>

<section
  class="film-page"
  class:archived={film.isArchived}
  class:ispick={film.isPick}>
  <div class="container">
    {#if film.isArchived}
      <div class="video-wrapper">
        <div
          class="video-container"
          style="background-image:url({film.thumb}); background-repeat:
          no-repeat; background-size: contain; background-position: 50% 50%;">
          <div class="video-message">
            <div>Ce film n'est plus visible sur HENRI</div>
          </div>
        </div>
      </div>
    {:else}
      <div class="video-wrapper">
        <Restrict isRestricted={film.restrict} isPick={film.isPick}>
          <div class="video-container">
            <iframe
              title={artTitre(film.artFr, film.titleFr)}
              sandbox="allow-same-origin allow-scripts allow-popups"
              src="https://player.vimeo.com/video/{film.vimeo}?color={film.isPick ? 'ff4256' : '7db3af'}&texttrack=fr"
              frameborder="0"
              allow="fullscreen"
              allowfullscreen />
          </div>
        </Restrict>

        {#if film.ageMin}
          <div class="age-info">
            Film déconseillé aux moins de
            {film.ageMin}
            ans
            <PictoAge age={film.ageMin} />
          </div>
        {/if}
      </div>
    {/if}
    <article>
      {#if film.dateUnpublished && !film.isArchived}
        <div class="end">
          Film visible sur HENRI jusqu'au
          {dayjs(film.dateUnpublished).format('dddd D MMMM')}
        </div>
      {/if}
      <div>
        <div class="collection">{film.collection}</div>
      </div>

        <div class="titre-film">
        <h1 class="colored">
          {@html artTitre(film.artFr, film.titleFr) + " " + ba('<div class="sous-titre-fr">', '</div>', film.soustitleFr)}
        </h1>
        {#if film.titleNx}
          <div class="titre-vo colored">
            {film.titleNx}
            {#if film.title}[{artTitre(film.art, film.title)}]{/if}
          </div>
        {:else if film.title}
          <div class="titre-vo colored">
            {artTitre(film.artVo, film.title)}
          </div>
        {/if}
      </div>

      <div class="realisateurs">{film.director}</div>
      <div>
        {ba('', ' / ', film.country)}{film.year}
        /
        {film.duree}{ba(' / ', '', film.version)}
        {#if film.isCC}<span class="iscc" />{/if}
      </div>

      {@html ba('<div>', '</div>', film.adaptation)}
      {@html ba('<div>Avec ', '.</div>', film.cast)}
      {@html ba('<div>Accompagnement musical par ', '.</div>', film.accompaniment)}
      {@html ba('<div class="rem">', '</div>', film.remarl)}
      {@html ba('<div class="synopsis">', '</div>', film.synopsis)}
      {@html ba('<div>', '</div>', film.restoration)}

      {#if film.presentation && film.presentation.vimeo}
        <div class="presentation">
          <div class="video-wrapper presentation">
            <div class="video-container">
              <iframe
                title={artTitre(film.artFr, film.titleFr)}
                sandbox="allow-same-origin allow-scripts allow-popups"
                src="https://player.vimeo.com/video/{film.presentation.vimeo}?color={film.isPick ? 'ff4256' : '7db3af'}&texttrack=fr"
                frameborder="0"
                allow="fullscreen"
                allowfullscreen />
            </div>
            <p class="title">
              {@html film.presentation.title}
            </p>
          </div>
        </div>
      {/if}

      {@html ba('<hr><div>', '</div>', film.comment)}

      {#if !(!_.isUndefined(film.isCatFilm) && film.isCatFilm === false) || film.links}
        <div>
          {#if !(!_.isUndefined(film.isCatFilm) && film.isCatFilm === false)}
            <a
              class="catfilm colored"
              href="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id={film.id}">
              Plus de détails sur «&nbsp;{artTitre(film.artFr, film.titleFr)}&nbsp;»
              sur le Catalogue des restaurations et tirages de la Cinémathèque
              française
            </a>
          {/if}
          {#each film.links || [] as link}
            <a class="catfilm colored" href={link.url}>
              {@html link.text}
            </a>
          {/each}
        </div>
      {/if}
    </article>
  </div>
</section>`,
};
