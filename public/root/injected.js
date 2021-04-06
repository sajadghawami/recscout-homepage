/* eslint-env jquery */
window.addEventListener("load", function (event) {
  console.log("rating script initialized");

  // functions
  const ratingQuestion = [
    {
      id: 1,
      question: "Qualität der Profile",
    },
    {
      id: 2,
      question: "Zuverlässigkeit",
    },
    {
      id: 3,
      question: "Zusammenarbeit insgesamt",
    },
  ];

  const createRatingElements = (initialRatingValues, disabled = false) => {
    // const disableCheck = initialRatingValues ? "disabled" : "";

    let ratingElements = "";
    // create the rating elements
    for (let i = 0; i < ratingQuestion.length; i++) {
      const rating = ratingQuestion[i];

      const question = `<p class="rating-question">${rating.question}</p>`;
      let scale = "";
      for (let j = 1; j <= 5; j++) {
        let selectedCheck = "";
        // if (disableCheck) {
        // check if in the initial values for this ratingQuestion.id we selected this answer
        if (initialRatingValues) {
          selectedCheck =
            initialRatingValues[`${rating.id}`] >= j ? 'class="selected"' : "";
        }

        scale = `${scale}<button ${disabled} ${selectedCheck} data-answer=${j}></button>`;
      }
      ratingElements = `${ratingElements}<div class='rating-wrapper'>${question}<div class="rating-scale" data-question='${rating.id}'>${scale}</div></div>`;
    }
    return ratingElements;
  };

  // get the pathname
  const splittedPathname = new URL(document.URL).pathname.split("/");
  const splittedPathnameArrayPosition = splittedPathname.length - 1;

  // pages
  const isLocalhost = new URL(document.URL).hostname === "localhost";
  const isCreateRatingPage =
    splittedPathname[splittedPathnameArrayPosition] === "new" &&
    splittedPathname[splittedPathnameArrayPosition - 1] === "feedbacks";
  const isAutoAcceptRatingPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";
  const isReadRatingPage = $("#profile-testimonials-list").length > 0;

  // Rating Page
  if (isCreateRatingPage || isLocalhost) {
    // append rating elements
    $("#testimonial_text").after(createRatingElements());

    // add the event listener
    const ratingData = {};
    $(".rating-wrapper button").click(function () {
      // remove all selected
      $(this).siblings().removeClass("selected");
      $(this).addClass("selected");
      const question = $(this).parent().data("question"); // gets the question id
      const answer = $(this).data("answer"); // gets the actual selected answer
      ratingData[`${question}`] = answer;
      $("#testimonial_text").val(JSON.stringify(ratingData));
    });
  }
  // Auto accept Rating Page
  if (isAutoAcceptRatingPage) {
    console.log("autoaccept, redirecting");
    // automatically accept
    $("a.accept")[0].click();
  }

  // display rating
  if (isReadRatingPage) {
    $(".testimonial-message").each(function () {
      const initialRatingValues = JSON.parse($(this).text());
      $(this).after(createRatingElements(initialRatingValues));
    });
  }
});

// <!-- Homepage -->
window.addEventListener("load", function (event) {
  console.log("recscout script initialized");

  // fucntions
  const injectReact = () => {
    // inject react
    const reactScript = document.createElement("script");
    reactScript.type = "text/javascript";
    reactScript.src =
      "https://sajadghawami.github.io/recscout-homepage/public/main.js";
    $("head").append(reactScript);
  };

  // if we find the customization-wraper, it means we are on the homepage
  const elem = document.getElementsByClassName(
    "community-customization-wrapper"
  );
  if (elem.length) {
    // now remove the cover image
    const coverImage = document.getElementsByClassName("coverimage");
    coverImage[0].parentNode.removeChild(coverImage[0]);
    // remove the page content
    const pageContent = document.getElementsByClassName("page-content");
    pageContent[0].parentNode.removeChild(pageContent[0]);
    // change the classname so we dont get overrides
    document
      .getElementsByClassName("marketplace-lander")[0]
      .classList.add("root-entry");
    document
      .getElementsByClassName("root-entry")[0]
      .classList.remove("marketplace-lander");
    // add the animation classes
    document.body.classList.add("is-loaded");
    document.body.classList.add("has-animations");

    // add our entry
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.getElementsByClassName("root-entry")[0].appendChild(root);

    // inject react
    injectReact();
  }
});