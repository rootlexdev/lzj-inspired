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

const Footer2 = () => {
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
        <footer>
            <SuccessModal message="Subscription successful! Thank you for subscribing to our newsletter." />

            {/* CTA Section */}
            <div className="p-[7.5%] lg:flex justify-between items-center">
                <div className="w-full lg:max-w-[55%] mb-10 lg:mb-0">
                    <h2 className="font-clash-display text-3xl lg:text-[40px] font-bold mb-6 leading-tight">
                        Ready to Transform Your Business Operations?{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(107.38deg, #D4A84B 26.16%, #F7C74B 73.84%)",
                            }}
                        >
                            Try LZJ
                        </span>
                    </h2>

                    <p className="text-body-text text-lg">
                        Build Smarter. Operate Better. Grow Faster.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/get-started">
                        <Button className="w-full sm:w-auto">
                            Get Started Free
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Talk to Sales
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-soft-white lg:p-[7.5%] py-12 px-6">
                <div className="lg:flex items-start justify-between gap-12">
                    {/* Brand Column */}
                    <div className="w-full lg:max-w-[30%] mb-10 lg:mb-0">
                        <div className="flex items-center gap-x-3 mb-4">
                            <Image
                                src="/assets/logo.svg"
                                alt="LZJ ESOLEEN Logo"
                                className="w-12 h-12 object-contain"
                                width={48}
                                height={48}
                            />
                            <div>
                                <h3 className="font-clash-display text-2xl font-bold text-dark-navy">
                                    LZJ ESOLEEN
                                </h3>
                                <p className="text-body-text text-xs">LTD</p>
                            </div>
                        </div>

                        <p className="text-sm text-body-text leading-relaxed mb-6">
                            Building smart, adaptive systems for Africa&apos;s
                            growing businesses. From restaurants to retail, we
                            help teams operate with clarity, speed, and
                            accountability.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-x-3">
                            <Link
                                href="https://www.youtube.com/@LZJESOLEENLTD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-[0.625rem] bg-light-grey flex items-center justify-center text-body-text hover:bg-primary-gold hover:text-dark-navy transition-colors"
                            >
                                <BsYoutube className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@lzjesoleen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-[0.625rem] bg-light-grey flex items-center justify-center text-body-text hover:bg-primary-gold hover:text-dark-navy transition-colors"
                            >
                                <BsTiktok className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/lzjesoleen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-[0.625rem] bg-light-grey flex items-center justify-center text-body-text hover:bg-primary-gold hover:text-dark-navy transition-colors"
                            >
                                <BsInstagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                        {/* Products */}
                        <div className="flex flex-col gap-y-4">
                            <h4 className="text-dark-navy font-semibold">
                                Products
                            </h4>
                            <Link
                                href="/solutions/rms"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Restaurant Management
                            </Link>
                            <Link
                                href="/solutions"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors flex items-center gap-2"
                            >
                                Inventory System
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-grey text-body-text">
                                    Soon
                                </span>
                            </Link>
                            <Link
                                href="/solutions"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors flex items-center gap-2"
                            >
                                HR Management
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-grey text-body-text">
                                    Soon
                                </span>
                            </Link>
                            <Link
                                href="/solutions"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors flex items-center gap-2"
                            >
                                Customer CRM
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-grey text-body-text">
                                    Soon
                                </span>
                            </Link>
                            <Link
                                href="/solutions"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                All Solutions
                            </Link>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-y-4">
                            <h4 className="text-dark-navy font-semibold">
                                Resources
                            </h4>
                            <Link
                                href="/pricing"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/affiliate"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Affiliate Program
                            </Link>
                            {/* <Link href="/blog" className="text-body-text text-sm hover:text-primary-gold transition-colors">
                                Blog
                            </Link> */}
                            {/* <Link href="/help" className="text-body-text text-sm hover:text-primary-gold transition-colors">
                                Help Center
                            </Link> */}
                            {/* <Link href="/api" className="text-body-text text-sm hover:text-primary-gold transition-colors">
                                API Docs
                            </Link> */}
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-y-4">
                            <h4 className="text-dark-navy font-semibold">
                                Company
                            </h4>
                            <Link
                                href="/about"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/careers"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Careers
                            </Link>
                            <Link
                                href="/contact"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Contact Us
                            </Link>
                            {/* <Link href="/press" className="text-body-text text-sm hover:text-primary-gold transition-colors">
                                Press Kit
                            </Link> */}
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-y-4">
                            <h4 className="text-dark-navy font-semibold">
                                Legal
                            </h4>
                            <Link
                                href="/terms-service"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-body-text text-sm hover:text-primary-gold transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            {/* <Link href="/cookies" className="text-body-text text-sm hover:text-primary-gold transition-colors">
                                Cookie Policy
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-dark-navy py-10 px-6 lg:px-[7.5%]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                        <h4 className="text-soft-white font-semibold text-xl mb-1">
                            Subscribe to our newsletter
                        </h4>
                        <p className="text-body-text text-sm">
                            Get product updates, company news, and tips for
                            growing your business.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleSubscribe)}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full sm:w-72 px-4 py-3 rounded-[0.625rem] bg-white/5 border border-white/10 text-soft-white placeholder-body-text focus:outline-none focus:border-primary-gold/50 transition-colors"
                                                    disabled={isPending}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400 text-xs mt-1" />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="px-6 py-3 rounded-[0.625rem] text-dark-navy font-semibold whitespace-nowrap"
                                    style={{
                                        background:
                                            "linear-gradient(107.38deg, #F3F1CF 26.16%, #EDC675 73.84%)",
                                    }}
                                    disabled={isPending}
                                >
                                    {isPending ? "Subscribing..." : "Subscribe"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-soft-white py-6 px-6 lg:px-[7.5%] border-t border-light-grey">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <p className="text-body-text text-sm text-center md:text-left">
                        © {currentYear} LZJ ESOLEEN LTD. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
