"use client";

import { HelpCircle } from "lucide-react";
import { faqItems } from "../data/faq-items";
import { SectionHeader } from "../components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/effects/fade-in";

export function FAQSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="FAQ"
            subtitle="关于合作模式，您可能想了解的问题"
            badge={{ text: "常见问题", icon: HelpCircle }}
            className="mb-16"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-100 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-slate-50 text-left text-slate-900 font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-600 leading-relaxed">
                    <div className="pl-11">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
