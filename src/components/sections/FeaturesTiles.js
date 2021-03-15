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
    title: "RecScout - und das HR Team ist happy",
    paragraph:
      "#More Trust Less Bullshit oder 'das Ziel vom effektiven Spaß bei der Zusammenarbeit'. Sparen Sie Ihre Zeit, Ihre Kosten und Ihre kostbaren Nerven mit effektiven Recruiting.",
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-01.svg"
                      }
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Keine Kosten</h4>
                  <p className="m-0 text-sm">
                    Erstellen Sie Ihren Account als Unternehmen oder Recruiter
                    schnell und kostenlos. In wenigen Schritten sind Sie
                    startbereit. Als Unternehmen zahlen Sie wie gewohnt eine Fee
                    an den Recruiter.
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-02.svg"
                      }
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Matching / Inbound Sales + Referrals + Leads
                  </h4>
                  <p className="m-0 text-sm">
                    Direkte Suche um den besten zu finden. Entdecke Recscout –
                    der Marktplatz, der sich Ihrem Recruiting-Prozess anpasst.
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-05.svg"
                      }
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Bewertungen</h4>
                  <p className="m-0 text-sm">
                    Recruiter können nach einem deal bewertet werden. das sorgt
                    für qualität und vertrauen zwischen auftraggeber und
                    recruiter. zudem sind alle bemüht eine optimale leistung zu
                    zeigen
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-04.svg"
                      }
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Kommunikation</h4>
                  <p className="m-0 text-sm">
                    Direkte gespräche über den chat. alle gespräche zentral
                    geordnet. Genießen Sie zudem unseren Support bei Fragen zu
                    Recruiting-Prozessen oder unserem Marktplatz per Mail,
                    Telefon und Whatsapp.
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-03.svg"
                      }
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Zahlungen</h4>
                  <p className="m-0 text-sm">
                    Zahlungen direkt über die recscout plattform. Allein die
                    Iban ist ausreichend. alle zahlungen passend zu den
                    prozessen.
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={
                        "https://sajadghawami.github.io/recscout-homepage/public/assets/images/feature-tile-icon-06.svg"
                      }
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Kommende Features</h4>
                  <p className="m-0 text-sm">
                    Wir arbeiten schon an neuen features. wir möchten recruitern
                    die mögleichkeit geben auf ausgeschriebene stellen passende
                    kandidaten vorzustellen, ohne die tägliche arbeit der hr
                    partner auf unternehmensseite zu stören. zudem
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
