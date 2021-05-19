import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section section-inner",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "RECSCOUT - More Trust Less Bullshit",
    paragraph:
      "Sparen Sie Zeit, Kosten und Nerven, indem Sie die anstrengende "Projektanbahnung" ausklammern 
      und stattdessen mit den richtigen Beratern direkt in produktive Projektabsprachen starten.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container container-fluid" style={{ width: "100%" }}>
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            style={{ width: "100%", textAlign: "left" }}
          />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/quick_start.svg"
                      }
                      alt="Features tile icon 01"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Schneller Start</h4>
                  <p className="m-0">
                    Erstellen Sie Ihren Account als Unternehmen oder Recruiter
                    schnell und kostenlos. In wenigen Schritten sind Sie
                    startbereit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/matching.svg"
                      }
                      alt="Features tile icon 02"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Matching</h4>
                  <p className="m-0">
                    Vermeiden Sie Risiken und finden wie beauftragen Sie 
                    über unsere spezifische Suchfunktion den richtigen 
                    Recruiter für Ihre Vakanz.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/rating.svg"
                      }
                      alt="Features tile icon 03"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Bewertungen</h4>
                  <p className="m-0">
                    Unser Bewertungssystem schafft einen transparenten Markt und
                    macht Hidden-Champions im Recruiting sichtbar.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/optimize.svg"
                      }
                      alt="Features tile icon 04"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Commitment</h4>
                  <p className="m-0">
                    Über Bewertungen ermöglichen wir ein verbindliches Commitment
                    direkt bei der ersten Zusammenarbeit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/communicate.svg"
                      }
                      alt="Features tile icon 05"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Kommunikation</h4>
                  <p className="m-0">
                    Kommunizieren Sie per Chat und Video über RECSCOUT - von der
                    ersten Anfrage bis zum Vertragsabschluss und der Rechnung.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/homepage/payment.svg"
                      }
                      alt="Features tile icon 06"
                      width="100%"
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Zahlungen</h4>
                  <p className="m-0">
                    Zahlungen werden bequem digital abgewickelt.
                    Nutzen Sie moderne E-Rechnungen oder Factoring.
                    LINK ZUM BLOG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
