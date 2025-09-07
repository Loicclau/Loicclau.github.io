$(".header_navbar_toggle").click(function (e) {
  e.preventDefault();
  $(".header_navbar").toggleClass("is-open");
  $(".header_navbar_toggle").toggleClass("is-open");
});

$(".header_navbar_menu_link").click(function (e) {
  if ($(".header_navbar_toggle").hasClass("is-open")) {
    // Exécuter le code seulement si le toggle est ouvert
    $(".header_navbar").toggleClass("is-open");
    $(".header_navbar_toggle").toggleClass("is-open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".header_navbar_logo_intro");
  setTimeout(function () {
    title.style.transform = "translateX(0)";
    title.style.opacity = 1; // Changer l'opacité pour montrer le titre
  }, 10); // Ajouter un délai de 0.1 seconde avant de montrer le titre
});

/* Transition gauche loic */
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".header_navbar_logo_name");
  setTimeout(function () {
    title.style.opacity = 1;
    title.style.transform = "translateX(0)";
  }, 300);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".header_navbar_logo_work");
  setTimeout(function () {
    title.style.opacity = 1;
  }, 700);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".btn-get-started");
  setTimeout(function () {
    title.style.transform = "translateY(0)";
    title.style.transform = "translateX(0)";
    title.style.opacity = 1;
  }, 700);
});

/* ZOOM PHOTO */
$(document).ready(function () {
  var articlePhoto = $(".article_photo");
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();

  $(window).scroll(function () {
    scrollPosition = $(this).scrollTop();

    articlePhoto.each(function () {
      var offsetTop = $(this).offset().top;

      if (scrollPosition > offsetTop - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });
});

//mouvement pour les skill
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".container_Skill");

  // Fonction à exécuter lorsque l'élément devient visible
  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // Arrêter de surveiller une fois que l'élément est visible
      }
    });
  }
  // Créer un observer pour surveiller l'élément
  var options = {
    root: null,
    threshold: 0.1, // Pourcentage de visibilité requis pour déclencher l'observation
  };
  var observer = new IntersectionObserver(revealText, options);
  // Commencer à observer l'élément
  observer.observe(title);
});

/*Bouton footer*/
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".class_social_icon");

  // Fonction à exécuter lorsque l'élément devient visible
  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target); // Arrêter de surveiller une fois que l'élément est visible
      }
    });
  }
  // Créer un observer pour surveiller l'élément
  var options = {
    root: null,
    threshold: 0.2, // Pourcentage de visibilité requis pour déclencher l'observation
  };
  var observer = new IntersectionObserver(revealText, options);

  // Commencer à observer l'élément
  observer.observe(title);
});

/*TEXTE PARTIE ABOUT*/
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_about1");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_about2");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

/*TEXTE PARTIE projets*/
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_projets");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_projets2");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_projets3");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".texte_projets4");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".Titre_SNBOT");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".Titre_PlayerRUN");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".Titre_Portfolio");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".Titre_Gestion");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});

/*Le carrousel anim juste portefolio car pas de fleche*/
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".carrouselGauche2");

  function revealText(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)"; // Déplacez l'élément vers sa position originale
        observer.unobserve(entry.target);
      }
    });
  }
  var options = {
    root: null,
    threshold: 0.3,
  };

  var observer = new IntersectionObserver(revealText, options);
  observer.observe(title);
});
