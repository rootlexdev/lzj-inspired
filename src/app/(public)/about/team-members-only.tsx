import React from "react";

const TeamMembersOnly = () => {
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
                        The People Behind LZJ
                    </h2>
                    <p className="text-[#64748B] max-w-2xl mx-auto">
                        A diverse team of experts passionate about transforming
                        African business operations.
                    </p>
                </div>

                <div className="bg-[#0B0D13] rounded-3xl p-8 lg:p-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "👨‍💻",
                                title: "Engineers",
                                count: "15+",
                                description:
                                    "Full-stack, backend, mobile, and DevOps specialists building reliable systems.",
                            },
                            {
                                icon: "🎨",
                                title: "Designers",
                                count: "5+",
                                description:
                                    "UI/UX experts creating intuitive, beautiful interfaces.",
                            },
                            {
                                icon: "📊",
                                title: "Analysts",
                                count: "8+",
                                description:
                                    "Data and business analysts turning insights into action.",
                            },
                            {
                                icon: "📈",
                                title: "Growth",
                                count: "10+",
                                description:
                                    "Marketing, sales, and customer success driving adoption.",
                            },
                        ].map(dept => (
                            <div key={dept.title} className="text-center">
                                <span className="text-5xl mb-4 block">
                                    {dept.icon}
                                </span>
                                <p
                                    className="text-3xl font-bold bg-clip-text text-transparent mb-1"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                >
                                    {dept.count}
                                </p>
                                <h3 className="text-[#F8F8F8] font-semibold mb-2">
                                    {dept.title}
                                </h3>
                                <p className="text-[#64748B] text-sm leading-relaxed">
                                    {dept.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <h3 className="text-[#F8F8F8] font-semibold text-xl mb-3">
                            United by a Common Mission
                        </h3>
                        <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">
                            Our team brings together diverse backgrounds and
                            expertise — from fintech veterans to startup
                            founders, from Silicon Valley engineers to local
                            market experts. What unites us is a shared belief
                            that African businesses deserve world-class
                            technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembersOnly;
