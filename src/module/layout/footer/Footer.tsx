"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Loader2 } from "lucide-react"
import { useState } from "react";
import toast from "react-hot-toast";
import { useAddSubscriberMutation } from "@/state/api";
import { generate32BitUUID } from "@/lib/service/generate32BitUUID";

export default function Footer() {
  const [addSubscriber, { isLoading }] = useAddSubscriberMutation();
  const [email, setEmail] = useState<string>("");
  const isValidEmail = (email: string): boolean => {
    // This regex is more strict and will catch more invalid email formats
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailRegex.test(email) && email.includes('.') && !email.endsWith('.')
  }
  const subscriberHandler = async () => {
    if (!email || !email.trim()) {
      toast.error("Email field should not be empty.");
      return;
    }
    if (!isValidEmail(email.trim())) {
      toast.error("Please enter a valid email address.")
      return
    }
    try {
      await addSubscriber({ email: email.trim(), uuid: generate32BitUUID() });
      setEmail("")
      toast.success("Thank you for subscribing! Stay tuned for exciting project updates coming your way.")
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <footer className="bg-background">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Karnalwebtech</h3>
            <p className="text-sm text-muted-foreground">
              Crafting cutting-edge web solutions to bring your ideas to life. Let’s build something extraordinary together!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/projects" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/about-us" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/contact-us" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <Link href="/privacy-policy" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy policy</Link>
              <Link href="/terms-conditions " prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & conditions </Link>
              <Link href="/faq " prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Faq </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <div>

              <Input placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-blue-500/30 mb-2 bg-white/5 text-black placeholder:text-gray-400" />
              <Button className="w-full bg-black hover:text-gray-200" onClick={() => subscriberHandler()}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> <span>Subscribe...</span>
                  </>
                ) : (
                  "Subscribe"
                )}</Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <p className="text-sm text-muted-foreground">© 2023 Karnalwebtech. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link target="__blank" href="https://www.linkedin.com/in/karnalwebtech" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link target="__blank" href="https://www.instagram.com/karnalwebtech" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}