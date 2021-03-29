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
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Die Vision von RECSCOUT.",
    paragraph:
      "RECSCOUT bietet eine transparente und effiziente Zusammenarbeit zwischen Unternehmen und Recruitern",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Was uns stört
                </div> */}
                <h3 className="mt-0 mb-12">Was uns stört</h3>
                <p className="m-0">
                  Während unserer täglichen Arbeit im Recruitment haben wir
                  einige Faktoren gefunden die uns stören. Unabhängig vom
                  Arbeitgeber sind sie im Stile eines Wilhelm Tells auf den
                  Punkt überschneidend. Der HR-Dienstleistungsmarkt ist breit
                  aufgestellt und schwankt bei den Qualitätsansprüchen
                  Stichwort: "Schwarze Schafe". Täglich erhalten Unternehmen
                  unzählige Angebote von HR-Dienstleistern welche dann auch oft
                  konsequent und nicht immer freundlich abgewiesen werden,
                  obwohl der Recruiter wirklich einen passenden Kandidaten
                  anbieten wollte und konnte.
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
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast recruitment
                </div> */}
                <h3 className="mt-0 mb-12">Was wir ändern.</h3>
                <p className="m-0">
                  RECSCOUT erleichtert die Zusammenarbeit zwischen Firmen und
                  Recruitern bereits vor Auftragserteilung. Wir schaffen einen
                  transparenten Markt, machen Hidden-Champions im Recruiting
                  sichtbar und ermöglichen so einen effizienten und
                  erfolgreichen Prozess für beide Seiten - und dies ganz ohne
                  mühselige Anrufe und Kontaktversuche.
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

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast recruitment
                </div> */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
