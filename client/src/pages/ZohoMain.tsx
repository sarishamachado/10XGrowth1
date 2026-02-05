import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ZohoHero } from "@/components/zoho/ZohoHero";
import { WhatIsZoho } from "@/components/zoho/WhatIsZoho";
import { WhyZoho } from "@/components/zoho/WhyZoho";
import { PartnershipSection } from "@/components/zoho/PartnershipSection";
import { CoreServices } from "@/components/zoho/CoreServices";
import { ZohoProductsPreview } from "@/components/zoho/ZohoProductsPreview";
import { ZohoMainCTA } from "@/components/zoho/ZohoMainCTA";

export default function ZohoMain() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <ZohoHero />
                <WhatIsZoho />
                <WhyZoho />
                <PartnershipSection />
                <CoreServices />
                <ZohoProductsPreview />
                <ZohoMainCTA />
            </main>
            <Footer />
        </div>
    );
}
