"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { all } from "country-codes-list";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Zod schema
const schema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  company: z.string().min(2, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  phoneCode: z.string().min(1, "Country code required"),
  phone: z.string().min(5, "Phone number required"),
  goal: z.string().min(2, "Please specify your goal"),
});

type DemoForm = z.infer<typeof schema>;

// Helper to get flag emoji from country ISO code
function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

// Get country codes and names (unique dial codes only)
const seenDialCodes = new Set<string>();
const countryOptions: { code: string; label: string; flag: string }[] = all()
  .filter((country) => {
    const dial = `+${country.countryCallingCode}`;
    if (seenDialCodes.has(dial)) return false;
    seenDialCodes.add(dial);
    return true;
  })
  .map((country) => ({
    code: `+${country.countryCallingCode}`,
    label: country.countryNameEn,
    flag: getFlagEmoji(country.countryCode),
  }));

export default function DemoDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm<DemoForm>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phoneCode: countryOptions.find(c => c.code === '+1')?.code || countryOptions[0]?.code || '+1',
      phone: "",
      goal: "",
    },
  });

  // Ensure countryOptions[0] is set as default if available
  useEffect(() => {
    if (!form.getValues("phoneCode") && countryOptions[0]) {
      form.setValue("phoneCode", countryOptions[0].code);
    }
  }, [form]);

  // Submit handler to send email via API
  const onSubmit = async (data: DemoForm) => {
    setLoading(true);
    try {
      const res = await fetch('/api/send-demo-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        setLoading(false);
        form.reset();
        setTimeout(() => {
          setSuccess(false);
          onOpenChange(false);
        }, 2500);
      } else {
        setLoading(false);
        alert('Failed to send demo request. Please try again.');
      }
    } catch {
      setLoading(false);
      alert('Failed to send demo request. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-white/5 z-50 backdrop-blur-sm" />
      <DialogContent
        className="fixed left-1/2 top-1/2 z-50 w-full border-none xl:max-w-[1120px] md:max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[url('/images/dialog-mobile.png')] md:bg-[url('/images/dialog-web.png')] bg-cover bg-center bg-no-repeat shadow-xl p-0 overflow-hidden"
      >
        <div className="relative w-full h-full p-6 md:p-12 ">
          <DialogClose asChild>
          </DialogClose>
          <DialogTitle className="text-2xl md:text-4xl font-light text-white text-center my-12 md:my-20 ">
            {success ? 'Thank you for your interest!' : 'Book a personalized demo'}
          </DialogTitle>
          {success ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] text-white text-lg font-light">
              <svg className="w-16 h-16 mb-4 text-[#67F5C8] animate-spin-slow" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              <div>Thank you for reaching out!<br />Our team will get in touch with you soon.</div>
            </div>
          ) : (
            <Form {...form}>
              <form className="space-y-6 text-white" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormItem>
                    <FormLabel className="text-sm md:text-xl font-light">Full Name</FormLabel>
                    <FormControl>
                      <Input className="bg-[#FFFFFF]/5  text-sm md:text-xl border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" placeholder="Enter your full name" {...form.register("fullName")}/>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="text-sm md:text-xl font-light">Company Name</FormLabel>
                    <FormControl>
                      <Input className="bg-[#FFFFFF]/5  text-sm md:text-xl border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" placeholder="Enter your company name" {...form.register("company")}/>
                    </FormControl>
                  </FormItem>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">
                  <FormItem>
                    <FormLabel className="text-sm md:text-xl font-light">Business Email</FormLabel>
                    <FormControl>
                      <Input className="bg-[#FFFFFF]/5 text-sm md:text-xl border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" type="email" placeholder="Enter your work email" {...form.register("email")}/>
                    </FormControl>
                  </FormItem>
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="text-sm md:text-xl font-light">Phone Number</FormLabel>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="col-span-2 lg:h-18 h-full">
                        <Select
                          value={form.watch("phoneCode")}
                          onValueChange={val => form.setValue("phoneCode", val)}
                        >
                          <SelectTrigger className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 text-white rounded-md px-3 py-6 lg:py-[35px] focus:ring-0 focus:outline-0 lg:h-16 h-full">
                            <SelectValue className="text-white text-sm md:text-xl">
                              {(() => {
                                const selected = countryOptions.find(c => c.code === form.watch('phoneCode'));
                                return selected ? (
                                  <span className="flex  text-sm md:text-xl items-center gap-2">{selected.flag} {selected.code}</span>
                                ) : null;
                              })()}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="bg-[#18181B] text-white border border-[#FFFFFF]/10 rounded-xl shadow-lg p-1">
                            {countryOptions.map((c) => (
                              <SelectItem
                                key={c.code}
                                value={c.code}
                                className="text-white text-sm md:text-xl rounded-lg px-3 py-3 cursor-pointer transition-colors flex items-center gap-2 data-[state=checked]:bg-[#232323] data-[highlighted]:bg-[#333]/80 data-[highlighted]:text-white data-[state=checked]:text-[#F1FA38]"
                              >
                                <span className="flex items-center gap-2">{c.flag} {c.code} {c.label}</span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Phone number"
                          type="tel"
                          className="bg-[#FFFFFF]/5  text-sm md:text-xl col-span-4 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18"
                          {...form.register("phone")}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                </div>
                <FormItem>
                  <FormLabel className="text-sm md:text-xl font-light">What are you looking to achieve?</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Translate my company documents..."
                      {...form.register("goal")}
                      className="bg-[#FFFFFF]/5 border  text-sm md:text-xl border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18"
                    />
                  </FormControl>
                </FormItem>
                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    className="text-lg w-full md:w-fit px-8 py-3 text-[#2C2C2C] h-12 flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 mr-2 text-[#67F5C8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    ) : null}
                    {loading ? 'Sending...' : 'Book a Demo'}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

DemoDialog.displayName = 'DemoDialog'; 