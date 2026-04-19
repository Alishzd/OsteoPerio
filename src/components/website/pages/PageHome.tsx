'use client';

import { ShieldCheck, Globe2, GraduationCap, HeartPulse, Stethoscope, MessagesSquare } from 'lucide-react';
import { BulletList, CTAStrip, HeroShell, InfoCard, Section, StatGrid } from '@/components/website/shared';

const treatmentCards = [
  {
    title: 'Gum recession and soft-tissue grafting',
    text: 'Microsurgical treatment for exposed roots, thin tissue, sensitivity, and aesthetic concerns.',
  },
  {
    title: 'Bone regeneration and ridge preservation',
    text: 'Advanced regenerative surgery for sites that need stable bone before or around implant therapy.',
  },
  {
    title: 'Peri-implant disease and complex implant surgery',
    text: 'Specialist care for failing implants, soft-tissue deficiencies, and demanding surgical planning.',
  },
  {
    title: 'Second opinions for difficult cases',
    text: 'Clear expert assessments for patients and dentists who need a surgical plan with confidence.',
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'Specialist-led care', text: 'Focused entirely on periodontology, mucogingival surgery, regeneration, and implant-related surgery.' },
  { icon: HeartPulse, title: 'Patient-first planning', text: 'The site now speaks to real patient problems first, while preserving your academic authority.' },
  { icon: Globe2, title: 'International-ready', text: 'Built to support remote pre-assessment, travel planning, and complex-care referrals from abroad.' },
  { icon: GraduationCap, title: 'Academic prestige', text: 'A clear route for students and clinicians who want observerships, education, and advanced case exposure.' },
];

export default function PageHome() {
  return (
    <>
      <HeroShell
        eyebrow="Barcelona · specialist perio and implant surgery"
        title="Elite gum and implant surgery for patients who need expertise, clarity, and trust."
        description="OsteoPerio is positioned for advanced treatment of gum recession, bone loss, peri-implant problems, and complex surgical cases, with a premium patient journey and a strong academic identity."
        primaryLabel="Request a consultation"
        primaryPage="appointment"
        secondaryLabel="Explore treatments"
        secondaryPage="treatments"
        aside={
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-deep-green">Why this version works better</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#e8e6df] bg-[#f8f6f0] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-charcoal/55">Main audience</p>
                <p className="mt-2 font-serif text-2xl text-charcoal">Patients first</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">The messaging now starts with patient problems and outcomes, while still showing expert-level surgical authority.</p>
              </div>
              <StatGrid
                stats={[
                  { value: '1', label: 'Stronger patient-first brand voice' },
                  { value: '2', label: 'Clearer paths for international patients and referrals' },
                  { value: '3', label: 'A separate place for education and observership positioning' },
                ]}
              />
            </div>
          </div>
        }
      />

      <Section
        eyebrow="What patients need to understand fast"
        title="The homepage should answer three questions immediately."
        description="A high-converting clinic website needs to reassure patients, show expertise, and make the next step simple."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Can you solve my problem?">
            Explain gum recession, implant complications, bone loss, failed grafts, and second opinions in patient language.
          </InfoCard>
          <InfoCard title="Why should I trust you?">
            Show specialist credentials, premium care standards, referring-doctor collaboration, and a calm, serious clinical tone.
          </InfoCard>
          <InfoCard title="How do I contact you?">
            Offer a clear consultation route, WhatsApp, and a direct path for patients travelling from outside Barcelona.
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="Core services"
        title="Treatment communication built around patient needs, not only procedure names."
        description="Patients usually search by symptoms, concerns, and outcomes. These treatment themes make the site easier to understand and easier to market."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {treatmentCards.map((card) => (
            <InfoCard key={card.title} title={card.title} className="h-full">
              {card.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Positioning"
        title="A premium clinic brand with real academic credibility."
        description="The strongest concept for OsteoPerio is not luxury for its own sake. It is specialist precision, premium care, and visible evidence of expertise."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="rounded-3xl border border-[#e8e6df] bg-white p-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-deep-green/10 text-deep-green">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">{point.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-charcoal/72 md:text-base">{point.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Recommended patient journey"
        title="Make it obvious what happens next."
        description="People with complex dental problems often hesitate because they do not know how the process works."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ['1. Initial contact', 'Patients send a message, records, or photos and quickly understand whether a consultation is appropriate.'],
            ['2. Specialist assessment', 'You explain the diagnosis, realistic options, timing, and whether the case can be treated locally or internationally.'],
            ['3. Surgical planning', 'The treatment plan is presented with clarity, timelines, healing expectations, and coordination when another dentist is involved.'],
            ['4. Follow-up and continuity', 'Patients feel supported before surgery, during healing, and when they return to their referring dentist or home country.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title} className="h-full">
              {text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What this no-media version keeps"
        title="The structure is upgraded even without images and video."
        description="This package removes the heavy media files, but still upgrades the message hierarchy, trust flow, and conversion logic."
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <InfoCard title="What is improved">
            <BulletList
              items={[
                'Stronger homepage copy with a patient-first offer.',
                'Cleaner navigation and simpler conversion paths.',
                'Dedicated international and education positioning.',
                'Lighter project package without large image and video files.',
                'Updated SEO foundation and a more realistic contact flow.',
              ]}
            />
          </InfoCard>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Stethoscope, title: 'For patients', text: 'Calm, specialist, trustworthy messaging.' },
              { icon: MessagesSquare, title: 'For referrals', text: 'A clear route for second opinions and referred surgical care.' },
              { icon: Globe2, title: 'For travel cases', text: 'A better frame for international consultations and surgery planning.' },
              { icon: GraduationCap, title: 'For students', text: 'A defined place for observerships and advanced education.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-[#e8e6df] bg-white p-6">
                <Icon className="size-5 text-deep-green" />
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="Invite patients to take the next step with confidence."
            description="Use this lighter version to finalize your copy, real clinic details, contact links, and legal information before launch."
            primaryLabel="Book consultation"
            primaryPage="appointment"
            secondaryLabel="Contact OsteoPerio"
            secondaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
