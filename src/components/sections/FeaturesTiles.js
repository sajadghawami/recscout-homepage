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
      " Sparen Sie Zeit, Kosten und Ihre wertvollen Nerven mit effektivem Recruiting.",
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
                  <p className="m-0 text-sm">
                    Erstellen Sie Ihren Account als Unternehmen oder Recruiter
                    schnell und kostenlos. In wenigen Schritten sind Sie
                    startbereit. Für Unternehmen ist die Plattform kostenfrei.
                    Für Recruiter erheben wir bei einem erfolgreichen Abschluss
                    eine Fee an dem gezahlten Honorar.
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
                  <p className="m-0 text-sm">
                    Finden und beauftragen Sie den richtigen Recruiter für Ihre
                    Vakanz. Nutzen sie dazu unsere branchenspezifische
                    Suchfunktion.
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
                  <p className="m-0 text-sm">
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
                  <p className="m-0 text-sm">
                    Über die Bewertungen ermöglichen wir ein sorgenfreies und
                    verbindliches Commitment zwischen Unternehmen und Recruitern
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
                  <p className="m-0 text-sm">
                    Die gesamte Kommunikation erfolgt über RECSCOUT - von der
                    ersten Anfrage bishin zum Vertragsabschluss. Genießen Sie
                    zudem unseren Kunden-Support via Mail, Telefon und Whatsapp.
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
                  <p className="m-0 text-sm">
                    Rechnungen werden schnell und digital über RECSCOUT
                    abgewickelt. Sie sind in Echtzeit über den Zahlungsprozess
                    informiert. Hierfür arbeiten wir mit starken Partnern
                    zusammen. Recruitern bieten wir zudem die Möglichkeit einer
                    Honorar-Auszahlung innerhalb von 48 Stunden an. Unternehmen
                    genießen gleichzeitig eine Zahlungsflexibilität bis zu 90
                    Tagen.
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
