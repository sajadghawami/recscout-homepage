/* this is directly injected into the page */
/* eslint-env jquery */
/* global LZString */
/* global emailjs */

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

// wait for element to be shown
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

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

window.addEventListener("load", async function (event) {
  const splittedPathname = new URL(document.URL).pathname.split("/");
  const splittedPathnameArrayPosition = splittedPathname.length - 1;
  const isLocalhost = new URL(document.URL).hostname === "localhost";

  const userContext = JSON.parse(
    document.getElementById("js-react-on-rails-context").innerHTML
  );

  // if this field is set, we are logged in
  const isUserLoggedIn = userContext.loggedInUsername !== null;

  function autoResizeTextAreas() {
    $("textarea").each(function (textarea) {
      $(this).height($(this)[0].scrollHeight);
    });
  }

  console.log("userContext", userContext);
  console.log("splittedPathname", splittedPathname);
  console.log("rating script initialized");

  /**
   * General
   */
  // change menu name
  // $(".MenuPriority .MenuLabel").contents()[2].nodeValue = "Mehr";

  const isAboutPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "infos";
  if (isAboutPage) {
    // make wrapper fullwidth
    $(".wrapper").css({ maxWidth: "100%" });
  } else {
    // add the sidebar if not in about
    $(".left-navi").css({ display: "inline-block" });
  }

  if (isUserLoggedIn) {
    // display the add new card button
    $(".AddNewListingButton").attr("style", "display: inline-block !important");

    // display jitsi button in navbar
    $("div[class*=Topbar__topbarMenuSpacer__]").after(
      '<a class="jitsi-button" target="_blank" rel="noreferrer" href="https://apps.recscout.com/jitsi">Videochat starten</a>'
    );
  }

  // pages
  // settings
  const isSettingsPage =
    splittedPathname[splittedPathnameArrayPosition] === "settings";
  if (isSettingsPage) {
    // remove anzeigename
    $("#person_display_name").prev("small").remove();
    $("#person_display_name")
      .prevAll(".inline-label-container")
      .first()
      .remove();
    $("#person_display_name").prev(".alert-box-icon").remove();
    $("#person_display_name").remove();
    // add the links
    $("#person_description").before($("<br/>"));
    $("#person_description").before(
      $(
        "<a href='https://recscout.medium.com/musterprofil-personalberater-edcff48fe6f9' target='_blank' class='profile-link'><small>Mustervorlage für Personalberater</small></a>"
      )
    );
    $("#person_description").before($("<br/>"));
    $("#person_description").before(
      $(
        "<a href='https://recscout.medium.com/musterprofil-unternehmen-58112506312b' target='_blank' class='profile-link'><small>Mustervorlage für Unternehmen</small></a>"
      )
    );
    // add the placeholder
    $("#person_description").css({ height: "300px", resize: "auto" });
    $("#person_description").prop(
      "placeholder",
      "Für Recruiter (Personalberater):\nIn Ihrem Profil stehen Sie als Person im Mittelpunkt. Skizzieren Sie Ihre Expertise als Personalberater, Ihren Kundenfokus sowie weitere relevante Spezialisierungen. Eine Mustervorlage finden Sie in dem Link über diesem Textfeld.\n\nFür Unternehmen:\nSie entscheiden selbst, wann und mit welchen  Personalberatern Sie in Kontakt treten.  Stellen Sie Ihr Unternehmen für den weiteren Verlauf kurz vor:                                Empfehlung:   „Über uns” Text der Unternehmenshomepage einfügen. Ihr Profil wird nicht veröffentlicht. Ihre Informationen werden nur für von Ihnen kontaktierte Recruiter sichtbar."
    );

    // image upload
    $("#avatar_file").before($("<br/>"));
    $("#avatar_file").before(
      $(
        "<small>Als Berater laden Sie ein Business Portraitfoto von Ihnen als Person hoch.</small>"
      )
    );
    $("#avatar_file").before($("<br/>"));
    $("#avatar_file").before(
      $(
        "<small>Als Unternehmen können Sie hier Ihr Unternehmens Logo einfügen.</small>"
      )
    );
    $("#avatar_file").before($("<br/>"));
  }

  // listing page, display rating if
  const isListingsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "listings";

  if (isListingsPage) {
    console.log("isListingsPage");

    // check if this is a create new listing page
    const isCreateListingsPage =
      splittedPathname[splittedPathnameArrayPosition] === "new";

    if (isCreateListingsPage) {
      console.log("isCreateListingPage");

      function displayCreatingListingElements() {
        $("#listing_title").prop(
          "placeholder",
          "z.B. Senior SAP Consultant bei XY GmbH"
        );
        $("#listing_description").prop(
          "placeholder",
          "z.B. Informationen zu Ihrer Person, Ihrer Personalberatung und Ihrer Spezialisierung. Ihre Angaben hier sind wichtig für die Schlagwortsuche für potentielle Auftraggeber."
        );
        // meine kernpositionen
        $("#custom_fields_168716").prop(
          "placeholder",
          "z.B. Head of SAP Application, SAP S/4Hana, SAP Consultant (PP, SD, FI CO, MM, WM), Cloud Architect"
        );
        // meine referenzen
        $("#custom_fields_169340").prop(
          "placeholder",
          "z.B. SAP Solution Manager, SAP Key User, SAP PP Consultant bei Globaler Chemie & Pharma Konzern"
        );
        // Mein Beraterhonorar in Prozent auf das OTE*
        $("#custom_fields_165417").prop(
          "placeholder",
          "z.B. 25% bis 65.000€ OTE, 30% ab 65.000€ OTE"
        );
        // Mindestberaterhonorar
        $("#custom_fields_169342").prop("placeholder", "z.B. 15.000€");

        $('label[for="listing_image"]')
          .next(".info-text-container")
          .children(".info-text-content")
          .append(
            "Als erstes Bild sollten Sie immer ein Business Portraitfoto von Ihnen als Person einstellen. Als weitere Bilder können Sie z.B. Ihr Firmenlogo oder Themenbilder hochladen (optional)."
          );
      }

      // function watchForElement() {
      //   displayCreatingListingElements();
      //   waitForElm("#listing_title").then((elm) => {
      //     watchForElement();
      //   });
      // }
      // wait for the elem to appear
      waitForElm("#listing_title").then((elm) => {
        displayCreatingListingElements();
      });
    }

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
        // scroll to the comment form
        document
          .getElementById("comment-form")
          .scrollIntoView({ behavior: "smooth" });

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
    // track if we need to attach the message
    // and send it via mail
    let attachMessage = false;
    $('button[name="button"]').click(function (event) {
      console.log("attachMessage", attachMessage);
      if (attachMessage === true) {
        emailjs.send("service_6kq6oze", "template_6ed6agl", {
          userId: userContext.loggedInUsername,
          message: messageContentBox.val().replace(/\n/g, "<br />"),
        });
      }
    });

    // create the top buttons
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
                attachMessage = true;
                messageContentBox.val(
                  "Hiermit akzeptieren wir die Beauftragung über RECSCOUT.\n\nID: (Ihre interne Projektnummer, wenn vorhanden)\nVakanz:\nZielgehalt: X - X €\nBeraterhornorar: X % vom Jahreszielgehalt\nAnzahlung: X € / Erfolgsbasiert\nNachpräsentation:\nErgänzende Vereinbarung:\n\nDarüber Hinaus werden die AGB der Personalberatung XXX akzeptiert\n\nViele Grüße"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a>Auftrag storniert</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                attachMessage = true;
                messageContentBox.val(
                  "Hiermit stornieren wir die Beauftragung über RECSCOUT vom X für die Vakanz X. \n(Optional: Ihre interne Projektnummer)\n\nBegründung:\nOffener Rechnungsbetrag aus Anzahlung (optional):\n\nViele Grüße\n"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a>Auftrag on hold</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                messageContentBox.val(
                  "Hiermit pausieren wir die Beauftragung über RECSCOUT vom X für die Vakanz X.\n(Optional: Ihre interne Projektnummer)\n\nBegründung:\nOffener Rechnungsbetrag aus Anzahlung (optional): \nWir bitten Sie, die Suche erst nach erneuter Beauftragung fortzusetzen.\n\nBegründung:\n\nViele Grüße"
                );
                autoResizeTextAreas();
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
                  "HERZLICHEN GLÜCKWUNSCH!\n\nHiermit bestätigen wir den erfolgreichen Projektabschluss über RECSCOUT.\n\n(Optional: Ihre interne Projektnummer)\nVakanz:\nZielgehalt lt. Arbeitsvertrag: X €\n\nWir freuen uns über die erfolgreiche Zusammenarbeit und bitten Sie um Rechnungserstellung. Bitte senden Sie die Rechnung an XXX.\n\nVielen Dank für die erfolgreiche Zusammenarbeit!\n"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a><div>Rechnungsstellung</div><div>(für Berater)</div></a>")
              .attr({ href: "https://payactive.eu/de/" })
              .attr({ target: "_blank" })
              .addClass("message-button-link")
          )
      );
    // create the videocall button
    $('button[name="button"]').wrap(
      '<div class="message-form-submit-wrapper"></div>'
    );
    $(".message-form-submit-wrapper").append(
      $("<a>Videochat starten</a>")
        .attr({ href: "https://apps.recscout.com/jitsi" })
        .attr({ target: "_blank" })
        .addClass("message-button-link")
    );
    console.log("messages page");
  }

  // settings transaction page
  const isSettingsTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition] === "transactions";

  if (isSettingsTransactionsPage) {
    console.log("isSettingsTransactionsPage");

    // remove old elements
    // $(".left-navi-section form").remove();
    // $("#admin_transactions_count").remove();
    // $("#admin_transactions").remove();

    const payactiveEndpointData = await fetch(
      "https://apps.recscout.com/api/payactive"
    ).then(async (response) => await response.json());

    console.log("endpointData", payactiveEndpointData);

    // admin_transactions_count
    //admin_transactions
    $(".left-navi-section h2").after(
      `<div class="transaction-button-wrapper"><a class="transaction-button-link" href="${payactiveEndpointData.invitationUrl}">payactive</a><a class="transaction-button-link" href="https://www.aifinyo.de/?source=recscout">aifinyo</a></div>`
    );
  }

  // is create a new transaction page
  const isNewTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";

  const isGeneralTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition] === "new";

  if (isGeneralTransactionsPage && isNewTransactionsPage) {
    $("#message").val(
      "Hallo,\ngerne möchten wir Sie im - Chat oder per Videocall - kennenlernen und mit Ihnen folgende Punkte besprechen:\n\n1. Vorstellungsrunde\n2. Unsere aktuelle offene Vakanz\n3. Absprache der Konditionen\n4. (...)\n\nFolgende Terminvorschläge bieten wir Ihnen gerne an:\nTag, Datum um x Uhr\nTag, Datum um x Uhr\nWir freuen uns auf ein erstes Kennenlernen und würden Ihnen - nach einer erfolgreicher Absprache- gerne den Auftrag über RECSCOUT erteilen."
    );
    autoResizeTextAreas();
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

/**
 * Accordion
 */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
