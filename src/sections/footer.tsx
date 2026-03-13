"use client";
import SuccessModal from "@/components/modals/success-modal";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSubscribeNewsletter } from "@/lib/features/public/use-subscribe-newsletter";
import { useSuccessModal } from "@/lib/stores/modals";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { toast } from "sonner";
import z from "zod";

const newsletterSchema = z.object({
    email: z.email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Footer = () => {
    const [, setOpen] = useSuccessModal();
    const currentYear = new Date().getFullYear();
    const { mutate: subscribe, isPending } = useSubscribeNewsletter();

    const form = useForm<NewsletterFormValues>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    });

    const handleSubscribe = (data: NewsletterFormValues) => {
        subscribe(
            {
                email: data.email,
            },
            {
                onSuccess() {
                    form.reset();
                    toast.success("Subscribed successfully!");
                    setOpen(true);
                },
                onError(error) {
                    console.log("ERR:", error);
                    toast.error(`Subscription failed: ${error.message}`);
                },
            },
        );
    };

    return (
        <div>
            <SuccessModal message="Subscription successful! Thank you for subscribing to our newsletter." />
            <div className="p-[7.5%] lg:flex justify-between items-center">
                <div className="w-full lg:max-w-[50%] mb-10 lg:mb-0">
                    <h1 className="font-clash-display text-[36px] font-bold mb-10">
                        Ready to Transform Your Business Operations?
                        <span className="ml-px inline-block text-primary-gold">
                            Try LZJ
                        </span>
                    </h1>

                    <p className="text-body-text text-lg">
                        Build Smarter. Operate Better. Grow Faster
                    </p>
                </div>
                <div>
                    <Link href="/get-started">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>

            {/* MID SECTION OF FOOTER */}
            <div className=" lg:flex items-center justify-between bg-soft-white lg:p-[7.5%] py-12 px-6">
                <div className=" w-full lg:max-w-[30%] mb-10 lg:mb-0">
                    <div className="flex items-center gap-x-4 mb-4">
                        <Image
                            src={"/assets/logo.svg"}
                            alt="logo"
                            className="w-[60px] h-10 object-contain"
                            width={100}
                            height={100}
                        />

                        <h1 className="font-clash-display text-4xl font-bold">
                            LZJ_ESOLEEN
                        </h1>
                    </div>

                    <p className="text-sm text-body-text">
                        LZJ builds modern, scalable digital systems designed for
                        African businesses. From workflows to analytics, we help
                        teams operate with clarity, speed, and accountability,
                        no complexity, no clutter. Transform how your business
                        works with technology that feels premium, performs
                        reliably, and grows with you.
                    </p>
                    {/* ICONS */}
                    <div className="flex justify-center lg:justify-start items-center gap-x-4 text-lg text-body-text mt-10">
                        <Link
                            href={"https://www.youtube.com/@LZJESOLEENLTD"}
                            target="_blank"
                        >
                            <BsYoutube />
                        </Link>
                        {/* <Link
                            href={"https://www.linkedin.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLinkedin />
                        </Link> */}
                        <Link
                            href={"https://www.tiktok.com/@lzjesoleen"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsTiktok />
                        </Link>
                        <Link
                            href={"https://www.instagram.com/lzjesoleen/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsInstagram />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-x-20 gap-y-10">
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">
                            Solutions
                        </h3>
                        <Link href={"/solutions"}>Dashboard & Analytics</Link>
                        <Link href={"/solutions"}>Worklow & Automation</Link>
                        <Link href={"/solutions"}>Portals</Link>
                        <Link href={"/solutions"}>Inventory Systems</Link>
                        <Link href={"/solutions"}>All Solutions</Link>
                    </div>
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">
                            Company
                        </h3>
                        <Link href={"/about"}>About Us</Link>
                        <Link href={"/careers"}>Contact Us</Link>
                        {/* <Link href={"/careers"}>Contact Us</Link> */}
                        {/* <Link href={"/blog"}>Blog</Link> */}
                        {/* <Link href={"/faqs"}>FAQs</Link> */}
                    </div>
                    <div className="flex flex-col text-body-text gap-y-4">
                        <h3 className="text-dark-navy font-semibold">Legal</h3>
                        <Link href={"/terms-service"}>Terms of Service</Link>
                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                        {/* <Link href={"/careers"}>Contact Us</Link> */}
                        {/* <Link href={"/blog"}>Blog</Link> */}
                        {/* <Link href={"/faqs"}>FAQs</Link> */}
                    </div>
                </div>
            </div>
            {/* Newsletter */}
            <div className="py-8 px-16 border-t border-b border-white/10 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-primary-gold font-semibold mb-1 text-2xl">
                            Subscribe to our newsletter
                        </h4>
                        <p className="text-[#64748B] text-sm">
                            Get product updates, company news, and more.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleSubscribe)}
                                className="flex items-center gap-3 w-full md:w-auto"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="flex-1 md:w-64 px-4 py-3 rounded-[0.625rem] bg-white/5 border border-primary-gold/40 text-primary placeholder-[#64748B] focus:outline-none focus:border-[#F7C74B]/80 transition-colors"
                                                    disabled={isPending}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    className="px-6 py-3 rounded-[0.625rem] text-[#0B0D13] font-semibold whitespace-nowrap"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                    disabled={isPending}
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="bg-soft-white p-10 flex justify-center items-center text-slate-grey border-t border-light-grey">
                <p className="text-center">
                    © LZJESOLEEN {currentYear}. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
