'use client';

import { Award, BookOpen, GraduationCap, Microscope, Users } from 'lucide-react';
import { BulletList, CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

export default function PageAbout() {
  return (
    <>
      <HeroShell
        eyebrow="About OsteoPerio"
        title="A specialist identity that feels both premium and credible."
        description="This version presents OsteoPerio as a highly focused periodontal and implant surgery team in Barcelona, with strong university-level credibility and a calmer, more reassuring patient tone."
        primaryLabel="Request consultation"
        primaryPage="appointment"
        secondaryLabel="For referring dentists"
        secondaryPage="referring"
        aside={
          <div className="space-y-5">
            <InfoCard title="Brand direction">
              Position the clinic as the place patients go when the case is difficult, delicate, or already unsuccessful elsewhere.
            </InfoCard>
            <InfoCard title="Why it matters">
              Patients need warmth and reassurance. Dentists and students need to see excellence, rigor, and advanced surgical focus.
            </InfoCard>
          </div>
        }
      />

      <Section
        eyebrow="How to describe yourselves"
        title="Lead with expertise, then explain the experience of care."
        description="A top-level clinic brand should not sound like an abstract portfolio. It should feel concrete, expert, and calm."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Award, 'Specialist periodontology', 'Keep the language disciplined and focused on what you truly do best.'],
            [Microscope, 'Evidence-based surgery', 'Show precision and scientific rigor without overwhelming the patient with jargon.'],
            [Users, 'Collaborative treatment', 'Make clear that you work well with referring dentists and multidisciplinary teams.'],
            [GraduationCap, 'Academic authority', 'Use teaching, training, and postgraduate credibility to elevate the brand.'],
          ].map(([Icon, title, text]) => {
            const Cmp = Icon as typeof Award;
            return (
              <div key={title as string} className="rounded-3xl border border-[#e8e6df] bg-white p-7">
                <Cmp className="size-5 text-deep-green" />
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">{text as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Suggested copy direction"
        title="What patients should feel when they read about the team."
        description="They do not need to understand every technique. They need to feel that their case is being handled by serious professionals."
        className="bg-[#f7f5ef]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Message for patients">
            <BulletList
              items={[
                'You are being treated by surgeons dedicated to periodontal and implant-related surgery.',
                'We handle advanced soft-tissue, regenerative, and implant cases with careful planning.',
                'Your treatment is explained clearly, with realistic timelines and close follow-up.',
                'We welcome complex cases, second opinions, and referrals from other clinicians.',
              ]}
            />
          </InfoCard>
          <InfoCard title="Message for students and dentists">
            <BulletList
              items={[
                'OsteoPerio is a serious clinical environment for advanced case exposure.',
                'The brand can support observerships, case discussions, lectures, and postgraduate positioning.',
                'Education should reinforce authority, but remain secondary to patient care on the main site.',
                'The academic layer should feel selective, not generic or promotional.',
              ]}
            />
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="Recommended credibility blocks"
        title="These details should be visible once you replace placeholders with real information."
        description="Adding them later is simple, but the structure should already anticipate them."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Professional profiles', 'Names, titles, university affiliations, and a concise one-line summary of surgical focus for each doctor.'],
            ['Clinical philosophy', 'A short statement about precision, ethics, case selection, and patient communication.'],
            ['Research and teaching', 'Postgraduate activity, lectures, publications, master programs, or collaborations.'],
            ['Referring-doctor workflow', 'How referred patients are evaluated, treated, and returned with clear communication.'],
            ['International support', 'Language support, remote screening, and practical guidance for patients coming from abroad.'],
            ['Observership framework', 'A selective and professional description for advanced students and clinicians.'],
          ].map(([title, text]) => (
            <InfoCard key={title} title={title}>{text}</InfoCard>
          ))}
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="A great clinic story should sound human, not inflated."
            description="Once you add the final biographies and credentials, this lighter structure can present the team in a much more premium and trustworthy way."
            primaryLabel="View treatments"
            primaryPage="treatments"
            secondaryLabel="Contact us"
            secondaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
