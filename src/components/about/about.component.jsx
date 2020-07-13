import React from "react";

import SectionHeader from "../section-header/section-header.component";

import "./about.styles.scss";

const About = () => (
   <section class="about">
      <SectionHeader>
         <h2>O NAS</h2>
      </SectionHeader>
      <div class="about__text">
         <p>
            <span>NOMA ARCHITEKCI</span> to pracownia projektowa założona w 2011 roku. W branży
            architektonicznej działamy od 2003 r.
         </p>
         <p>
            W projektowaniu stawiamy na uniwersalizm, prostotę i oryginalność, przy jednoczesnym
            indywidualnym podejściu do Klienta. Tworzymy z pasją i zaangażowaniem.
         </p>
         <p>
            Naszą główną dziedziną działania są pełnobranżowe dokumentacje budowlane. Zarówno dla
            klientów indywidualnych, biznesowych jak i dla instytucji publicznych.
         </p>
         <p>
            Dzięki wieloletniemu doświadczeniu w branży możemy zaoferować sprawdzony zespół
            projektantów.
         </p>
         <p>
            Współpracujemy z projektantami różnych branż, dzięki czemu nasza oferta jest
            kompleksowa.
         </p>
      </div>
   </section>
);

export default About;
