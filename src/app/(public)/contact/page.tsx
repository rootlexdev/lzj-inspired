"use client";
import { PhoneIcon } from "lucide-react";
import ContactForm from "./contact-form";
import { BsEnvelopeOpenFill } from "react-icons/bs";
import Link from "next/link";

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <div className="py-12 md:py-20 w-full md:w-1/2 mx-auto px-8 md:px-0">
                <div>
                    <h1 className="font-bold font-clash-display text-center text-4xl mb-5">
                        Talk to our sales team
                    </h1>
                    <p className="text-muted-foreground text-center">
                        Get in touch and ask us anything. Learn how your team
                        can ramp up business efficiency with better
                        collaboration. See what scaling without friction looks
                        like when you use LZJ Solutions to fit your exact needs.
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4 my-6">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-full">
                            <BsEnvelopeOpenFill className="text-primary-gold size-6" />
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-xl font-semibold text-dark-navy">
                                Write to us
                            </h1>
                            <Link
                                href={"mailto:info@lzjesoleen.com"}
                                className="text-body-text cursor-pointer"
                            >
                                info@lzjesoleen.com
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-full">
                            <PhoneIcon className="size-6 text-primary-gold" />
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-xl font-semibold text-dark-navy">
                                Call us
                            </h1>
                            <p className="text-body-text">+234 701 241 7471</p>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
