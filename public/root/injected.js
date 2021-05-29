/* this is directly injected into the page */
/* eslint-env jquery */
/* global LZString */

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

/**
 *
 * @param {*} initialRatingValues is an object with multiple {questionId: answer}
 * @param {*} disabled wether or not we
 * @returns
 */

// <!-- Rating --->
const createRatingElements = (initialRatingValues) => {
  let ratingElements = "";
  // create the rating elements
  for (let i = 0; i < ratingQuestion.length; i++) {
    const rating = ratingQuestion[i];

    const question = `<p class="rating-question">${rating.question}</p>`;
    let scale = "";
    for (let j = 1; j <= 5; j++) {
      let selectedCheck = "";
      // check if in the initial values for this ratingQuestion.id we selected this answer
      if (initialRatingValues) {
        selectedCheck =
          initialRatingValues[`${rating.id}`] >= j ? 'class="selected"' : "";
      }

      scale = `${scale}<button type="button" ${selectedCheck} data-answer=${j}></button>`;
    }
    ratingElements = `${ratingElements}<div class='rating-wrapper'>${question}<div class="rating-scale" data-question='${rating.id}'>${scale}</div></div>`;
  }
  return ratingElements;
};

/**
 * Function to extract a variable from the query string
 * @param query the query string
 * @param variable the variable we want to extract
 */

const getParameterByName = (query, variable) => {
  if (query) {
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
};

/**
 *  Decompress the router query
 * @param query the query
 * @returns
 */

const getDecompressedRouterQuery = (query) => {
  // decompress
  const decompressedRouterQuery =
    LZString.decompressFromEncodedURIComponent(query);
  return decompressedRouterQuery;
};

window.addEventListener("load", function (event) {
  const splittedPathname = new URL(document.URL).pathname.split("/");
  const splittedPathnameArrayPosition = splittedPathname.length - 1;
  const isLocalhost = new URL(document.URL).hostname === "localhost";

  const userContext = JSON.parse(
    document.getElementById("js-react-on-rails-context").innerHTML
  );

  // if this field is set, we are logged in
  const isUserLoggedIn = userContext.loggedInUsername !== null;

  console.log("userContext", userContext);
  console.log("splittedPathname", splittedPathname);
  console.log("rating script initialized");

  /**
   * General
   */

  if (isUserLoggedIn) {
    // display jitsi button in navbar
    $("div[class*=Topbar__topbarMenuSpacer__]").after(
      '<a class="jitsi-button" target="_blank" rel="noreferrer" href="https://apps.recscout.com/jitsi"><img src="https://sajadghawami.github.io/recscout-homepage/public/assets/images/icons/170px-Logo_Jitsi.png"></a>'
    );
  }

  // pages
  // listing page, display rating if
  const isListingsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "listings";

  if (isListingsPage || isLocalhost) {
    console.log("isListingsPage");

    // check if we have a query
    const query = window.location.search.substr(1);
    const decompressedRouterQuery = getDecompressedRouterQuery(query);

    if (decompressedRouterQuery !== null) {
      const lid = getParameterByName(decompressedRouterQuery, "lid");
      const uid = getParameterByName(decompressedRouterQuery, "uid");

      // check if the user and the listingid is right
      if (
        lid === splittedPathname[splittedPathnameArrayPosition] &&
        uid === userContext.loggedInUsername
      ) {
        // make the form visible
        $("#comment-form").css({
          display: "block",
        });

        // append rating elements to the comment box
        $(".listing_comment_content_text_area")
          .first()
          .after(createRatingElements());

        // add the event listener to the rating buttons
        const ratingData = {};
        $(".rating-wrapper button").click(function () {
          const clickedRatingButton = this;

          const question = $(clickedRatingButton).parent().data("question"); // gets the question id
          const answer = $(clickedRatingButton).data("answer"); // gets the actual selected answer

          ratingData[`${question}`] = answer;

          // remove all selected
          $(clickedRatingButton).siblings().removeClass("selected");
          // make self and all siblings selected that are smaller
          $(clickedRatingButton).addClass("selected");
          $(clickedRatingButton)
            .siblings()
            .each(function () {
              const fillUpStarRating = parseInt($(this).data("answer"), 10);
              console.log("fillUpStarRating, answer", fillUpStarRating, answer);
              if (fillUpStarRating <= answer) {
                $(this).addClass("selected");
              }
            });

          // push the data into the comment box
          $(".listing_comment_content_text_area")
            .first()
            .val(JSON.stringify(ratingData));
        });

        // add event listener to submit button
        $("#send_comment_button").click(function () {
          // make the form invvisible
          $("#comment-form").css({
            display: "none",
          });

          // now redirect to the page
          window.location.replace(
            window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname
          );
        });
      }
    }
  }

  // messages page
  const isMessagesTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";

  if (isMessagesTransactionsPage) {
    const messageContentBox = $("#message_content");

    $("#reply_form").before(
      $("<div></div>")
        .addClass("message-avatar-padding")
        .addClass("message-selection")
    );

    $(".message-selection")
      .append(
        $("<div></div>")
          .addClass("message-selection-column")
          .append(
            $("<a>Auftrag akzeptiert</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                messageContentBox.val(
                  "Hallo, \n hiermit nehme ich den Auftrag an. \n Mit freundlichen Grüßen, \n"
                );
              })
          )
          .append(
            $("<a>Auftrag storniert</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                messageContentBox.val(
                  "Hallo, \n hiermit storniere ich den Auftrag. \n Mit freundlichen Grüßen, \n"
                );
              })
          )
          .append(
            $("<a>Auftrag on hold</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                messageContentBox.val(
                  "Hallo, \n der Auftrag befindet sich derzeit on Hold. \n Mit freundlichen Grüßen, \n"
                );
              })
          )
      )

      .append(
        $("<div></div>")
          .addClass("message-selection-column")
          .append(
            $("<a>Vakanz besetzt</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                messageContentBox.val(
                  "Hallo, \n die Vakanz ist leider schon besetzt. \n Mit freundlichen Grüßen, \n"
                );
              })
          )
          .append(
            $("<a><div>Rechnungsstellung</div><div>(für Berater)</div></a>")
              .attr({ href: "https://payactive.eu/de/" })
              .attr({ target: "_blank" })
              .addClass("message-button-link")
          )
      );

    console.log("messages page");
  }

  // settings transaction page
  const isTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition] === "transactions";

  if (isTransactionsPage) {
    console.log("isTransactionsPage");

    // remove old elements
    $(".left-navi-section form").remove();
    $("#admin_transactions_count").remove();
    $("#admin_transactions").remove();

    // admin_transactions_count
    //admin_transactions
    $(".left-navi-section h2").after(
      '<div class="transaction-button-wrapper"><a class="transaction-button-link" href="#">payactive</a><a class="transaction-button-link" href="https://www.aifinyo.de/?source=recscout">aifinyo</a></div>'
    );
  }

  // contact page
  // if we find the contact-wrapper, it means we are on the homepage
  const elemContact = document.getElementsByClassName("new-feedback-form");
  if (elemContact.length) {
    // remove the page content
    const pageContent = document.getElementsByClassName("page-content");
    pageContent[0].parentNode.removeChild(pageContent[0]);

    // remove the title
    $(".title-container").remove();
    // add the contact
    const contactForm =
      '<iframe class="embedded-contact" width="100%" height="100%" src="https://recscout.hubspotpagebuilder.com/recscout-pr%C3%A4sentation" frameborder="0" style="height:100vh"></iframe>';
    $(".marketplace-lander").append(contactForm);
  }

  // WE PROBABLY DONT NEED THIS ANYMORE
  // Auto accept Rating Page
  // const isAutoAcceptRatingPage =
  //   splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";
  // if (isAutoAcceptRatingPage) {
  //   console.log("autoaccept, redirecting");
  //   // automatically accept
  //   $("a.accept")[0].click();
  // }

  // display rating
  const isReadRatingPage = $("#comment-list").length > 0;
  if (isReadRatingPage) {
    $(".comment-content").each(function () {
      const initialRatingValues = JSON.parse($(this).text());
      $(this).after(createRatingElements(initialRatingValues));
    });
  }

  // <!-- Homepage -->
  console.log("homepage script initialized");

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
