import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PartnerHero } from "@/components/zoho/PartnerHero";
import { WhyChoose10xGrowth } from "@/components/zoho/WhyChoose10xGrowth";
import { ZohoProductsShowcase } from "@/components/zoho/ZohoProductsShowcase";
import { ScheduleCallCTA } from "@/components/zoho/ScheduleCallCTA";

export default function ZohoPartner() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <PartnerHero />
                <WhyChoose10xGrowth />
                <ZohoProductsShowcase />
                <ScheduleCallCTA />
            </main>
            <Footer />
        </div>
    );
}
