'use client';

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

export default function PageContact() {
  return (
    <>
      <HeroShell
        eyebrow="Contact"
        title="Make contact details feel trustworthy, precise, and easy to use."
        description="A premium clinic website should never hide the next step. This no-media version keeps contact clear and simple while you replace placeholders with final practice details."
        primaryLabel="Request consultation"
        primaryPage="appointment"
        secondaryLabel="International patients"
        secondaryPage="projects"
        aside={<InfoCard title="Launch reminder">Before publishing, replace all placeholder details below with your exact clinic address, phone, WhatsApp number, and legal information.</InfoCard>}
      />

      <Section
        eyebrow="Contact options"
        title="Use multiple routes, but keep them consistent everywhere on the site."
        description="If phone, WhatsApp, footer, and form details do not match, trust drops immediately."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Phone">
            <div className="flex items-start gap-3"><Phone className="mt-1 size-4 text-deep-green" /><div><p>+34 93 XXX XX XX</p><p className="mt-2 text-charcoal/60">Replace with your real clinic line.</p></div></div>
          </InfoCard>
          <InfoCard title="WhatsApp">
            <div className="flex items-start gap-3"><MessageCircle className="mt-1 size-4 text-deep-green" /><div><p>+34 6XX XXX XXX</p><p className="mt-2 text-charcoal/60">Use the same number in the floating action button.</p></div></div>
          </InfoCard>
          <InfoCard title="Email">
            <div className="flex items-start gap-3"><Mail className="mt-1 size-4 text-deep-green" /><div><p>info@osteoperio.com</p><p className="mt-2 text-charcoal/60">Update this before launch if needed.</p></div></div>
          </InfoCard>
          <InfoCard title="Clinic address">
            <div className="flex items-start gap-3"><MapPin className="mt-1 size-4 text-deep-green" /><div><p>Carrer de Muntaner<br />08011 Barcelona, Spain</p><p className="mt-2 text-charcoal/60">Replace with the exact full address and map pin.</p></div></div>
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="What this page should later include"
        title="You do not need a lot of design here. You need confidence and clarity."
        description="Once your real operational details are in place, this page can become one of the strongest trust pages on the site."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="For local patients">Exact location, clinic access information, nearby transport, and a realistic opening-hours statement.</InfoCard>
          <InfoCard title="For international patients">Clear direction on sending records in advance, travel timing, and how the first remote discussion works.</InfoCard>
          <InfoCard title="For referring clinicians">A direct route for professional communication, ideally with email plus a structured referral form.</InfoCard>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="The best contact page removes doubt."
            description="Patients should never wonder who to message, what to send, or how quickly they can get started."
            primaryLabel="Send enquiry"
            primaryPage="appointment"
            secondaryLabel="Back to home"
            secondaryPage="home"
          />
        </div>
      </section>
    </>
  );
}
