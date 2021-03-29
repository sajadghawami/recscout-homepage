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
      "Sparen Sie Zeit, Kosten und Ihre wertvollen Nerven mit effektiven Recruiting.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
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
                  <p className="m-0 text-sm">
                    Über Filter, wie Spezialisierung, Preis, Erreichbarkeit,
                    Branche, Standort etc. finden Sie direkt den richtigen
                    Recruiter für Ihre Vakanz und können gezielt in die
                    Projektabsprache starten
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
                    unser transparentes bewertungssystem sorgt für vertrauen und
                    qualität. investieren sie direkt beim start in eine
                    erfolgversprechende zusammenarbeit.
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
                  <h4 className="mt-0 mb-8">Optimierung</h4>
                  <p className="m-0 text-sm">
                    mit jedem abgeschlossen projekt optimieren wir die
                    zusammenarbeit auf der basis von vertrauen und bewiesener
                    leistungsfähigkeit. So können beide Parteien im
                    bestmöglichen setup miteinander offen und auf augenhöhe
                    arbeiten.
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
                    Direkte gespräche über den chat. alle gespräche zentral
                    geordnet. Genießen Sie zudem unseren Kunden-Support bei
                    Fragen zu Recruiting-Prozessen oder unserem Marktplatz per
                    Mail, Telefon und Whatsapp.
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
                    Rechnungslegung und Zahlungen werden einfach und transparent
                    über die RecScout Plattform abgewickelt - passend zu den
                    individuellen Prozessen. Recruiter erhalten ihr Honorar
                    innerhalb von 24 Stunden und Firmen genießen und behalten
                    ihre Zahlungsflexibilität und gewohnten Zahlungsziele.
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
