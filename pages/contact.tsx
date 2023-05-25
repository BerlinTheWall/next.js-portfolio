import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
function Contact() {
  return (
    <>
      <Head>
        <meta name="description" content="send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
}
export default Contact;
