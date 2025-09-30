import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is this different from hiring a traditional marketing agency?",
      answer: "Traditional agencies charge $10K-$20K/month for similar services. We use AI to automate content creation, ad optimization, and reporting—delivering the same quality at a fraction of the cost. Plus, we specialize exclusively in aesthetic medicine, so we understand your unique challenges and regulations."
    },
    {
      question: "Do you work with practices outside of dermatology and aesthetics?",
      answer: "Currently, we focus exclusively on dermatology, med spas, and aesthetic medicine. This specialization allows us to deliver better results because we understand your unique challenges, HIPAA regulations, and patient journey intimately."
    },
    {
      question: "Is the AI-generated content original and safe to use?",
      answer: "Yes. All content is uniquely generated for your practice, fact-checked for accuracy, and aligned with your brand voice. You approve everything before it goes live. We also ensure HIPAA compliance in all patient-facing communications and never use generic medical advice."
    },
    {
      question: "What if I'm already running ads but not seeing results?",
      answer: "This is extremely common. Most aesthetic clinics waste ad spend on poor targeting, weak landing pages, or no follow-up system. Our free audit will show you exactly where your ads are failing and how we'd fix them to improve ROI."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see increased social media engagement within the first 2 weeks. Patient bookings typically increase measurably by week 4-6 as our automation and ads gain traction. By month 3, you'll have a clear picture of ROI and growth trajectory."
    },
    {
      question: "Do I need to provide content or images?",
      answer: "No. We create everything from scratch using AI tools and professional stock libraries. However, if you have existing photos, videos, or specific branding materials, we're happy to incorporate them into your content strategy."
    },
    {
      question: "What's included in the free marketing audit?",
      answer: "We analyze your website, social media presence, ad performance, online reviews, and current automation systems. You'll receive a detailed 20-slide presentation showing your scores in each area, your biggest opportunities, and our recommended strategy with projected ROI."
    },
    {
      question: "Can I cancel after the 3-month minimum?",
      answer: "Yes. After the initial 3-month commitment, you can cancel anytime with 30 days' notice. However, most clients choose to stay because they're seeing consistent ROI and patient growth. The 3-month minimum ensures we have adequate time to implement and optimize your systems."
    },
    {
      question: "How do you ensure HIPAA compliance?",
      answer: "All our systems are built with healthcare privacy in mind. We use HIPAA-compliant platforms for all patient communications, never store protected health information, and all team members are trained on healthcare privacy regulations. We can provide documentation for your compliance audits."
    },
    {
      question: "What kind of support do I get?",
      answer: "Every client gets a dedicated account manager, weekly performance reports, and priority support. Growth and Premium package clients also get direct access to our team via Slack for quick questions and approvals."
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Common Questions About{" "}
            <span className="text-gradient-primary">AI Marketing for Aesthetic Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about our AI-powered marketing system.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-soft border-0 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <p className="text-primary font-semibold">
            Book your free audit and get all your questions answered personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;