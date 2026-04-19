'use client';

import { FormEvent, useState } from 'react';
import { Loader2, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTAStrip, HeroShell, InfoCard, Section } from '@/components/website/shared';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  patientType: 'patient',
  location: '',
  message: '',
};

export default function PageAppointment() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <HeroShell
        eyebrow="Request consultation"
        title="A consultation page should feel direct, reassuring, and easy to complete."
        description="This version focuses on capturing the essentials for patients, second opinions, international enquiries, and referrals without overwhelming the visitor."
        primaryLabel="Complete the form below"
        primaryPage="appointment"
        secondaryLabel="Contact page"
        secondaryPage="contact"
        aside={
          <InfoCard title="What this form should achieve">
            Enough information to triage the enquiry quickly, while keeping the experience simple enough that worried patients still complete it.
          </InfoCard>
        }
      />

      <Section
        eyebrow="Consultation form"
        title="Built for patients, referrals, and international cases."
        description="You can later connect this to your real email, CRM, or secure patient workflow. In this package, the route is already prepared for basic submission handling."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#e8e6df] bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-charcoal/70">
                Full name
                <input className="mt-2 h-12 w-full rounded-xl border border-[#d9d5ca] bg-[#fafaf5] px-4" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </label>
              <label className="text-sm text-charcoal/70">
                Email
                <input type="email" className="mt-2 h-12 w-full rounded-xl border border-[#d9d5ca] bg-[#fafaf5] px-4" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </label>
              <label className="text-sm text-charcoal/70">
                Phone or WhatsApp
                <input className="mt-2 h-12 w-full rounded-xl border border-[#d9d5ca] bg-[#fafaf5] px-4" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </label>
              <label className="text-sm text-charcoal/70">
                I am a...
                <select className="mt-2 h-12 w-full rounded-xl border border-[#d9d5ca] bg-[#fafaf5] px-4" value={form.patientType} onChange={(e) => setForm({ ...form, patientType: e.target.value })}>
                  <option value="patient">Patient</option>
                  <option value="international-patient">International patient</option>
                  <option value="referring-dentist">Referring dentist</option>
                  <option value="student">Student / observership enquiry</option>
                </select>
              </label>
              <label className="text-sm text-charcoal/70 md:col-span-2">
                Where are you contacting from?
                <input className="mt-2 h-12 w-full rounded-xl border border-[#d9d5ca] bg-[#fafaf5] px-4" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </label>
              <label className="text-sm text-charcoal/70 md:col-span-2">
                Tell us about the case or your main concern
                <textarea className="mt-2 min-h-40 w-full rounded-2xl border border-[#d9d5ca] bg-[#fafaf5] px-4 py-3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Example: gum recession, implant issue, second opinion, records available, travel dates, or referral details." required />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 text-sm leading-6 text-charcoal/65">
                <ShieldCheck className="mt-0.5 size-4 text-deep-green" />
                <span>This lightweight build includes a working submission route, but you should still connect your real clinic email and privacy text before launch.</span>
              </div>
              <Button type="submit" className="h-11 rounded-sm px-5">
                {status === 'loading' ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                {status === 'loading' ? 'Sending...' : 'Send enquiry'}
              </Button>
            </div>

            {status === 'success' && <p className="mt-4 text-sm text-deep-green">Your enquiry has been submitted. Replace the clinic contact details before going live.</p>}
            {status === 'error' && <p className="mt-4 text-sm text-red-700">Something went wrong while sending the enquiry.</p>}
          </form>

          <div className="space-y-6">
            <InfoCard title="Best use cases for this page">
              <ul className="space-y-3 text-charcoal/72">
                <li>Patients with gum recession, implant concerns, or bone-loss-related questions.</li>
                <li>People seeking a second opinion before deciding on major treatment.</li>
                <li>International patients who need to send records before travelling.</li>
                <li>Referring dentists who want a fast way to start a discussion.</li>
              </ul>
            </InfoCard>
            <InfoCard title="What to add after download">
              <ul className="space-y-3 text-charcoal/72">
                <li>Your real email delivery or CRM integration.</li>
                <li>Exact address, telephone, and clinic availability.</li>
                <li>Privacy language and consent text that matches your practice.</li>
                <li>Optional upload flow for records, photos, and CBCT files.</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTAStrip
            title="The form should feel simple enough to complete even when the patient is anxious."
            description="That is often the difference between interest and a real enquiry."
            primaryLabel="Need contact details?"
            primaryPage="contact"
          />
        </div>
      </section>
    </>
  );
}
