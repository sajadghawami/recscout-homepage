import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top",
    "container",
    "container-fluid"
  );

  const sectionHeader = {
    title: "Die Vision von RECSCOUT.",
    paragraph: "Wir bringen moderne Technologien in den Recruiting Markt.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{ width: "100%", textAlign: "left" }}
          />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
                // style={{ textAlign: "center" }}
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Was uns stört
                </div> */}
                <h3 className="mt-0 mb-12">Was uns stört.</h3>
                <p className="m-6">
                  Der HR-Dienstleistungsmarkt ist breit aufgestellt und schwankt
                  stark bei den Qualitätsansprüchen. Täglich erhalten
                  Unternehmen unzählige Angebote von unbekannten
                  HR-Dienstleistern - wie sollen Unternehmen diese gerecht
                  einschätzen können? Manche Unternehmen arbeiten daher aus
                  Gewohnheit mit mehr oder weniger guten Partnern aber sicher
                  nicht mit dem Passendsten.
                </p>

                <p className="m-6">
                  Recruiter stehen vor der Herausforderung, Unternehmen in
                  wenigen Minuten von der Qualität und Effizienz ihrer Arbeit
                  überzeugen zu müssen und werden meist abgewiesen, obwohl sie
                  in ihrem Bereich Experten sind und einen optimalen
                  Kandidaten-Pool aufweisen können, jedoch einfach an der nicht
                  vorhanden Transparenz scheitern.
                </p>

                <p className="m-6">
                  Das Resultat: Verlorene Energie, Zeit und Potenziale auf
                  beiden Seiten.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/vision.svg"
                  }
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
                // style={{ textAlign: "right" }}
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast recruitment
                </div> */}
                <h3 className="mt-0 mb-12">Was wir ändern.</h3>
                <p className="m-6">
                  RECSCOUT erleichtert die Zusammenarbeit zwischen Unternehmen
                  und Recruitern bereits vor Auftragserteilung. Wir schaffen auf
                  der Grundlage von Daten einen vertraulichen und transparenten
                  Markt, machen per Schnell-Suche Hidden-Champions im Recruiting
                  sichtbar und ermöglichen so einen entspannten, effizienten und
                  erfolgreichen Prozess für beide Seiten - genau so, wie Sie es
                  von modernen Plattformen z.B. zur Buchung von Unterkünften
                  oder Lieferdiensten kennen.
                </p>

                <p className="m-6">
                  Über RECSCOUT arbeiten zu jeder Vakanz stets die beiden best
                  möglichen Partner miteinander. Beide Parteien können absofort
                  bei Kontakt direkt und freundlich auf RECSCOUT verweisen und
                  von den gemeinsamen Vorteilen profitieren.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/change.svg"
                  }
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast recruitment
                </div> 
                <h3 className="mt-0 mb-12">Ein Blick in die Zukunft.</h3>
                <p className="m-0">
                  Weitere Features, wie der Zugriff auf einen nach
                  Fachrichtungen spezialisierten Researcher Pool mit ergänzenden
                  wechselbereiten Kandidaten oder die Nutzung eines Spec-Streams
                  sorgen für eine zusätzliche Wertschöpfung, welche Recscout in
                  einem Abo-Modell anbieten möchte.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/future.svg"
                  }
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
