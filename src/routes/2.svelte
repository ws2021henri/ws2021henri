<script>
  import { Highlight } from "svelte-highlight";
  import { json } from "svelte-highlight/languages";
  import { a11yDark } from "svelte-highlight/styles";

  let code = `{
  "Séances spéciales": {
    "films": [
      {
        "id": 107456,
        "title": "Reise nach Lyon",
        "art": "Die",
        "titleFr": "Voyage à Lyon",
        "artFr": "Le",
        "director": "Claudia von Alemann",
        "year": 1981,
        "country": "République fédérale d'Allemagne-France-Suisse",
        "runtime": "1:52:34",
        "version": "VOSTF",
        "cast": "Rebecca Pauly, Jean Badin, Denise Péron, Sarah Stern",
        "crew_details": "<p>Réalisation et scénario&nbsp;: Claudia von Alemann / Photographie&nbsp;: Hille Sagel / Musique&nbsp;: Frank Wolff / Montage&nbsp;: Monique Dartonne / Production&nbsp;: Claudia von Alemann, Alemann Filmproduktion / Interprètes&nbsp;: Rebecca Pauly (Elisabeth), Jean Badin (Fernand), Denise Péron, Sarah Stern, Maurice Garden, Pierre-Émile Le Grand</p>",
        "synopsis": "<p>Elisabeth, jeune historienne allemande, se rend à Lyon pour marcher sur les pas de celle qui la fascine&nbsp;: Flora Tristan, écrivaine, socialiste, pionnière du féminisme au XIX<sup>e</sup> siècle. Elle connaît toute son œuvre, tous les documents d'archives, mais souhaite aller plus loin. Un siècle et demi après le passage à Lyon de son sujet d'études, Elisabeth tente de revivre son expérience de façon aussi concrète et sensorielle que possible.</p>",
        "restoration": "<p>Restauration 2K réalisée en 2018 par Alpha-Omega Digital sous la direction de Claudia von Alemann et la Deutsche Kinemathek, à partir du négatif original 16&nbsp;mm pour l'image et du mix magnétique 16&nbsp;mm pour le son. Cette restauration a également rendue possible grâce à l'Institut Lumière, qui l'a présentée à Lyon en octobre 2018 au festival Lumière en présence de Claudia von Alemann et Rebecca Pauly. Remerciements particuliers à Thierry Frémaux, Maelle Arnaud et Martin Koerber.</p>",
        "comment": "<p>«&nbsp;La ville n'est plus monuments mais habitants&nbsp;: changement radical de la représentation urbaine à l'écran. Alemann exauce les vœux d'un Grémillon&nbsp;: &quote;L'expression cinématographique [...] me paraît peu liée à cette fraude internationale des monuments historiques&nbsp;–&nbsp;qui si elle donne une personnalité officielle aux grandes villes n'exprime pas les mille visages populaires que [la ville] prodigue aux cœurs de ceux qui l'aiment.&quote;&nbsp;» (Philippe Roger, <em>Lyon&nbsp;: Lumière des ombres, 100 ans de cinéma</em>)</p><p><em>Le Voyage à Lyon</em> a été tourné en août 1978 puis en août 1979 par la réalisatrice allemande Claudia von Alemann. Cinéaste familière du documentaire et de la sociologie, c'est son attrait pour l'histoire ouvrière qui l'a fait s'intéresser d'une part à la ville de Lyon et à ses canuts, ces ouvriers de la soie dont les révoltes successives entre 1831 et 1848 comptent parmi les plus grandes insurrections sociales de France, et d'autre part à Flora Tristan, militante féministe et socialiste du début du XIX<sup>e</sup> siècle.</p><p>Si le point de départ de son film est sa lecture des mémoires de l'écrivaine révolutionnaire rédigées en 1844 lors de son tour de France, et en particulier son passage à Lyon qui l'a fortement impressionnée, elle va l'orienter sur une jeune femme habitée par Flora Tristan et non sur la figure de Flora Tristan elle-même. Cela donne un film sur une ville, sur une étrangère qui la découvre et l'arpente à la recherche d'un passé dont elle veut saisir la trace, mais dont l'esprit est accaparé par une histoire d'amour laissée en Allemagne. Peu de choses en définitive sur la militante Flora Tristan, mais une caméra qui offre une ville qu'elle découvre en la filmant. Le Lyon de la fin des années 1970, que l'on reconnaît et qui pourtant semble disparu, qu'il est précieux de voir imprimé par le grain du 16&nbsp;mm. Quel plaisir, cette déambulation dans les traboules des pentes de la Croix-Rousse, sur la place des Terreaux alors que la fontaine Bartholdi faisait face à l'hôtel de ville et non au palais Saint-Pierre, dans le quartier Saint-Paul et face à lui Saint-Vincent, ou sur les quais de Saône.</p><p>C'est la Deutsche Kinemathek de Berlin qui fut à l'initiative de la restauration, et c'est tout naturellement que l'Institut Lumière, la cinémathèque de Lyon, s'y est associé pour célébrer en retour celles (le film est profondément féminin) qui ont célébré sa ville.</p><p>Maelle Arnaud</p>",
        "vimeo": "509703806",
        "isCatFilm": false,
        "status": 2,
        "datePublished": "2021-02-17",
        "dateUnpublished": "2021-03-16",
        "isPick": false
      }
    ]
  }
}`;
</script>

<svelte:head>
  {@html a11yDark}
</svelte:head>

<div class="container">
  <div class="pane">
    <div class="pane-header"
      ><div>Data<br />(plain text file / JSON structure)</div></div
    >
    <div class="pane-content noscrollbar"
      ><Highlight language={json} {code} /></div
    >
  </div>

  <div class="pane">
    <div class="pane-header"><div>HENRI website</div></div>
    <iframe
      class="pane-content"
      title=""
      src="https://www.cinematheque.fr/henri/film/107456-le-voyage-a-lyon-claudia-von-alemann-1981/"
    /></div
  >
</div>

<style>
</style>
