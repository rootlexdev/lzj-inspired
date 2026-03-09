import React from "react";
import Hero from "./sections/hero";
import LiveFlow from "./sections/live-flow";
import MenuArchitect from "./sections/menu-architechure";
import AnalyticsReports from "./sections/analytics-reports";
import MultiBranchMap from "./sections/multi-branch-map";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <LiveFlow />
            <MenuArchitect />
            <AnalyticsReports />
            <MultiBranchMap />
        </div>
    );
};

export default LandingPage;
