import React from "react";

const TEAM_MEMBERS = [
    {
        name: "Oluwaseun Adeyemi",
        role: "Chief Executive Officer",
        description:
            "10+ years in fintech and operations. Previously led digital transformation at a major Nigerian bank.",
        initial: "OA",
    },
    {
        name: "Chidinma Okonkwo",
        role: "Chief Technology Officer",
        description:
            "Former senior engineer at a Silicon Valley startup. Expert in scalable distributed systems.",
        initial: "CO",
    },
    {
        name: "Emeka Nwachukwu",
        role: "Head of Product",
        description:
            "Product leader with experience building B2B SaaS platforms across Africa and Europe.",
        initial: "EN",
    },
    {
        name: "Aisha Mohammed",
        role: "Head of Customer Success",
        description:
            "Customer experience specialist who has helped scale support operations for multiple startups.",
        initial: "AM",
    },
    {
        name: "Tunde Bakare",
        role: "Head of Engineering",
        description:
            "Full-stack architect with a passion for building reliable, performant systems.",
        initial: "TB",
    },
    {
        name: "Funke Adebayo",
        role: "Head of Marketing",
        description:
            "Growth marketing expert with deep experience in the African tech ecosystem.",
        initial: "FA",
    },
];

const TeamMembersWithNames = () => {
    return (
        <section className="py-20 px-6 bg-white team-section">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7C74B]/15 border border-[#F7C74B]/30 mb-6">
                        <span className="text-[#0B0D13] text-sm font-medium">
                            Our Team
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B0D13] mb-4">
                        Meet the People Behind LZJ
                    </h2>
                    <p className="text-[#64748B] max-w-2xl mx-auto">
                        A diverse team of experts passionate about transforming
                        African business operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TEAM_MEMBERS.map(member => (
                        <div
                            key={member.name}
                            className="team-card bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#F7C74B]/30 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    <span className="text-[#0B0D13] font-bold text-xl">
                                        {member.initial}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0B0D13]">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#F7C74B] text-sm font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMembersWithNames;
