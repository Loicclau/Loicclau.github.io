/* code carrousel SN-BOT */
document.body.onload = function () {
  nbr = 4;
  p = 0;
  container_image1 = document.getElementById("container_image1");
  g = document.getElementById("g");
  d = document.getElementById("d");
  container_image1.style.width = 442 * nbr + "px";

  // Créer la balise vidéo
  videoDiv = document.createElement("div");
  videoDiv.className = "photo";
  video = document.createElement("video");
  video.src = "vid/VideoProjetSN-BOT.mp4";
  video.loop = true; // Ajouter l'attribut loop
  video.muted = true; // Ajouter l'attribut muted
  video.autoplay = true; // Ajouter l'attribut autoplay
  videoDiv.appendChild(video);
  container_image1.appendChild(videoDiv);

  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('img/ProjectSNBOT" + i + ".png')";
    container_image1.appendChild(div);
  }
  afficherMasquer();

  /* code carrousel Projet Playeur RUN*/
  nbr2 = 3;
  p2 = 0;
  container_image2 = document.getElementById("container_image2");
  g2 = document.getElementById("g2");
  d2 = document.getElementById("d2");
  container_image2.style.width = 442 * nbr2 + "px";

  // Créer la balise vidéo
  videoDiv2 = document.createElement("div");
  videoDiv2.className = "photo";
  video2 = document.createElement("video");
  video2.src = "vid/Projet Playeur RUN.mp4";
  video2.loop = true; // Ajouter l'attribut loop
  video2.muted = true; // Ajouter l'attribut muted
  video2.autoplay = true; // Ajouter l'attribut autoplay
  videoDiv2.appendChild(video2);
  container_image2.appendChild(videoDiv2);

  for (i = 1; i <= nbr2; i++) {
    div2 = document.createElement("div2");
    div2.className = "photo";
    div2.style.backgroundImage = "url('img/JeuImg" + i + ".png')";
    container_image2.appendChild(div2);
  }
  afficherMasquer2();

  /* code carrousel stock iris*/
  nbr3 = 5;
  p3 = 0;
  container_image3 = document.getElementById("container_image4");
  g3 = document.getElementById("g3");
  d3 = document.getElementById("d3");
  container_image3.style.width = 442 * nbr3 + "px";

  // Créer la balise vidéo
  videoDiv3 = document.createElement("div");
  videoDiv3.className = "photo";
  video3 = document.createElement("video");
  video3.src = "vid/video_presentation_stock.mp4";
  video3.loop = true; // Ajouter l'attribut loop
  video3.muted = true; // Ajouter l'attribut muted
  video3.autoplay = true; // Ajouter l'attribut autoplay
  videoDiv3.appendChild(video3);
  container_image3.appendChild(videoDiv3);

  for (i = 1; i <= nbr3; i++) {
    div3 = document.createElement("div3");
    div3.className = "photo";
    div3.style.backgroundImage = "url('img/GestionDeStock" + i + ".png')";
    container_image3.appendChild(div3);
  }
  afficherMasquer3();
};

/* code carrousel Krojanty*/
  nbr4 = 4;
  p4 = 0;
  container_image5 = document.getElementById("container_image5");
  g4 = document.getElementById("g4");
  d4 = document.getElementById("d4");
  container_image5.style.width = 442 * nbr4 + "px";

  // Créer la balise vidéo
  videoDiv4 = document.createElement("div");
  videoDiv4.className = "photo";
  video4 = document.createElement("video");
  video4.src = "vid/Krojanty-video.mp4";
  video4.loop = true; // Ajouter l'attribut loop
  video4.muted = true; // Ajouter l'attribut muted
  video4.autoplay = true; // Ajouter l'attribut autoplay
  videoDiv4.appendChild(video4);
  container_image5.appendChild(videoDiv4);

  for (i = 1; i <= nbr4; i++) {
    div4 = document.createElement("div4");
    div4.className = "photo";
    div4.style.backgroundImage = "url('img/Krojanty" + i + ".png')";
    container_image5.appendChild(div4);
  }
  afficherMasquer4();
/* fin de onload */

d.onclick = function () {
  if (p > -nbr + 1) p--;
  container_image1.style.transform = "translate(" + p * 442 + "px)";
  container_image1.style.transition = "all 0.5s ease";
  afficherMasquer();
};
g.onclick = function () {
  if (p < 0) p++;
  container_image1.style.transform = "translate(" + p * 442 + "px)";
  container_image1.style.transition = "all 0.5s ease";
  afficherMasquer();
};

function afficherMasquer() {
  if (p == 0) g.style.visibility = "hidden";
  else g.style.visibility = "visible";

  if (p == -nbr + 1) d.style.visibility = "hidden";
  else d.style.visibility = "visible";
}

d2.onclick = function () {
  if (p2 > -nbr2 + 1) p2--;
  container_image2.style.transform = "translate(" + p2 * 442 + "px)";
  container_image2.style.transition = "all 0.5s ease";
  afficherMasquer2();
};
g2.onclick = function () {
  if (p2 < 0) p2++;
  container_image2.style.transform = "translate(" + p2 * 442 + "px)";
  container_image2.style.transition = "all 0.5s ease";
  afficherMasquer2();
};

function afficherMasquer2() {
  if (p2 == 0) g2.style.visibility = "hidden";
  else g2.style.visibility = "visible";

  if (p2 == -nbr2 + 1) d2.style.visibility = "hidden";
  else d2.style.visibility = "visible";
}

d3.onclick = function () {
  if (p3 > -nbr3 + 1) p3--;
  container_image3.style.transform = "translate(" + p3 * 442 + "px)";
  container_image3.style.transition = "all 0.5s ease";
  afficherMasquer3();
};
g3.onclick = function () {
  if (p3 < 0) p3++;
  container_image3.style.transform = "translate(" + p3 * 442 + "px)";
  container_image3.style.transition = "all 0.5s ease";
  afficherMasquer3();
};

function afficherMasquer3() {
  if (p3 == 0) g3.style.visibility = "hidden";
  else g3.style.visibility = "visible";

  if (p3 == -nbr3 + 1) d3.style.visibility = "hidden";
  else d3.style.visibility = "visible";
}

d4.onclick = function () {
  if (p4 > -nbr4 + 1) p4--;
  container_image5.style.transform = "translate(" + p4 * 442 + "px)";
  container_image5.style.transition = "all 0.5s ease";
  afficherMasquer4();
};
g4.onclick = function () {
  if (p4 < 0) p4++;
  container_image5.style.transform = "translate(" + p4 * 442 + "px)";
  container_image5.style.transition = "all 0.5s ease";
  afficherMasquer4();
};

function afficherMasquer4() {
  if (p4 == 0) g4.style.visibility = "hidden";
  else g4.style.visibility = "visible";

  if (p4 == -nbr4 + 1) d4.style.visibility = "hidden";
  else d4.style.visibility = "visible";
}

// Fonction pour réinitialiser la variable p
//remettre les carrousels sur la video si le format d'ecran change
function resetP() {
  p = 0;
  container_image1.style.transform = "translate(" + p * -442 + "px)";
  container_image1.style.transition = "all 0.5s ease";
  afficherMasquer();

  p2 = 0;
  container_image2.style.transform = "translate(" + p2 * -442 + "px)";
  container_image2.style.transition = "all 0.5s ease";
  afficherMasquer2();

  p3 = 0;
  container_image3.style.transform = "translate(" + p3 * -442 + "px)";
  container_image3.style.transition = "all 0.5s ease";
  afficherMasquer3();

  p4 = 0;
  container_image5.style.transform = "translate(" + p4 * -442 + "px)";
  container_image5.style.transition = "all 0.5s ease";
  afficherMasquer4();
}

// Ajouter un écouteur d'événement pour surveiller les changements dans le media query
window
  .matchMedia("only screen and (max-width: 560px)")
  .addListener(function (e) {
    if (e.matches) {
      resetP(); // Si le media query est activé, appeler la fonction pour réinitialiser p
    }
  });
