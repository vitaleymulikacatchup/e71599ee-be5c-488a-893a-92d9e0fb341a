"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          buttonText="Get Demo"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
          onButtonClick={() => { /* Handle button click */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Discover NovaSaaS"
          subtitle="Your ultimate SaaS solution"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { /* Handle primary button click */ }}
          onSecondaryButtonClick={() => { /* Handle secondary button click */ }}
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About Us"
          descriptions={["Innovative solutions for modern challenges.", "Confidently leading in the tech space."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: "Step 1", description: "Register your account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start benefiting from our services", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Our tokenomics model is designed to provide stability and growth."
          tokenData={[{ value: "100M", description: "Total Supply" }, { value: "30M", description: "Market Cap" }, { value: "5M", description: "Circulating Supply" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => { /* Handle Home click */ } }, { label: "About", onClick: () => { /* Handle About click */ } }, { label: "Contact", onClick: () => { /* Handle Contact click */ }}] },
            { title: "Help", items: [{ label: "FAQ", onClick: () => { /* Handle FAQ click */ } }, { label: "Support", onClick: () => { /* Handle Support click */ }}] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => { /* Handle Privacy click */ } }, { label: "Terms of Service", onClick: () => { /* Handle Terms click */ }}] }
          ]}
          copyrightText="© 2023 NovaSaaS. All rights reserved."
          onPrivacyClick={() => { /* Handle Privacy click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
