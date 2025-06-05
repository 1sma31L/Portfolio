import AnimatedDiv from '@/components/AnimatedDiv';
import { ContactForm } from '@/components/Form';
import { MdEmail } from 'react-icons/md';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with me for any questions, inquiries, or collaboration opportunities. I'm open to discussing projects, providing support, or exploring new ventures together. Reach out to connect!",
};

function Contact() {
  return (
    <AnimatedDiv id={3}>
      <main className="container flex flex-col gap-8 px-4 md:px-0 py-16 min-h-screen">
        <div className="space-y-6">
          <div className="flex gap-3 items-center">
            <MdEmail className="text-2xl md:text-3xl text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Contact Me
            </h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            Feel free to reach out to me for questions, inquiries, or
            collaborations. Open to new opportunities and challenges.
          </p>
          <ContactForm />
        </div>
      </main>
    </AnimatedDiv>
  );
}

export default Contact;
