import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PricingHero } from "@/components/zoho/PricingHero";
import { PricingBundles } from "@/components/zoho/PricingBundles";
import { WorkplaceBundle } from "@/components/zoho/WorkplaceBundle";
import { PricingContactCTA } from "@/components/zoho/PricingContactCTA";

export default function ZohoPricing() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <PricingHero />
                <PricingBundles />
                <WorkplaceBundle />
                <PricingContactCTA />
            </main>
            <Footer />
        </div>
    );
}
