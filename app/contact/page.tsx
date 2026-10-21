import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, TrainFront } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import data from "@/data/content-data.json";

export const metadata = {
  title: "Contact Sri Lanka Railways",
  description: "Sri Lanka Railways headquarters, general inquiries and operations contact details.",
};

export default function ContactPage() {
  const contact = data.contact;

  return (
    <SiteShell>
      <main className="contact-page">
        <section className="simple-hero wrap">
          <div className="eyebrow"><span className="gold-dot" /> SRI LANKA RAILWAYS · CONTACT</div>
          <h1>Get in touch<br /><em>with the railway.</em></h1>
          <p>Find the right contact for general railway inquiries, train operations, or help with your journey.</p>
        </section>

        <section className="contact-grid wrap" aria-label="Railway contact details">
          <article className="contact-card contact-address-card">
            <span className="contact-icon"><MapPin size={20} /></span>
            <span className="eyebrow">HEADQUARTERS</span>
            <h2>Railway Headquarters</h2>
            <p>{contact.address}</p>
            <p className="contact-person">General Manager: {contact.generalManager}</p>
          </article>

          <article className="contact-card">
            <span className="contact-icon"><Phone size={20} /></span>
            <span className="eyebrow">PHONE CONTACTS</span>
            <h2>Call the right team</h2>
            <div className="contact-methods">
              <a href={`tel:${contact.headOffice.replaceAll(" ", "")}`}><span>Head office</span><strong>{contact.headOffice}</strong></a>
              <a href={`tel:${contact.fortInquiries.replaceAll(" ", "")}`}><span>Fort inquiries</span><strong>{contact.fortInquiries}</strong></a>
              <a href={`tel:${contact.operations.replaceAll(" ", "")}`}><span>Train operations</span><strong>{contact.operations}</strong></a>
            </div>
          </article>

          <article className="contact-card contact-email-card">
            <span className="contact-icon"><Mail size={20} /></span>
            <span className="eyebrow">GENERAL MANAGER</span>
            <h2>Email Sri Lanka Railways</h2>
            <p>For general correspondence, contact the office of the General Manager.</p>
            <a className="contact-email-link" href={`mailto:${contact.email}`}>{contact.email}<ArrowRight size={16} /></a>
          </article>
        </section>

        <section className="contact-next wrap">
          <TrainFront size={21} />
          <div><strong>Need a station-specific contact?</strong><p>Find station contact numbers and rail line details in the station directory.</p></div>
          <Link href="/stations">Explore stations <ArrowRight size={15} /></Link>
        </section>
      </main>
    </SiteShell>
  );
}
