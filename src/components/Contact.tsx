import { useMemo, useState } from "react";
import { personal } from "@/data/content";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";

const CONTACT_ENDPOINT = "https://formspree.io/f/xkoqjppy";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const statusCopy = useMemo(() => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "sent":
        return "Message sent. I'll reply within 24 hours.";
      case "error":
        return "Something went wrong. Please try again.";
      default:
        return "";
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-border py-12 sm:py-16 md:py-20 reveal-up">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl mb-4">LET&apos;S BUILD SOMETHING.</h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-5 px-2">
          Open for junior or senior product-focused engineering roles and consulting engagements. Based in {personal.location}. Response time: under 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 px-4 sm:px-0">
          <a href={`mailto:${personal.email}`} className="btn-primary-system text-xs sm:text-sm justify-center">
            <Mail className="w-4 h-4" />
            {personal.email}
          </a>
          <a href={personal.calendly} target="_blank" rel="noopener noreferrer" className="btn-system text-xs sm:text-sm justify-center">
            <Calendar className="w-4 h-4" />
            BOOK A CALL
          </a>
          <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-system text-xs sm:text-sm justify-center">
            <Github className="w-4 h-4" />
            GITHUB
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-system text-xs sm:text-sm justify-center">
            <Linkedin className="w-4 h-4" />
            LINKEDIN
          </a>
        </div>

        <form
          className="max-w-xl mx-auto border border-border bg-surface p-4 text-left lift-card"
          onSubmit={handleSubmit}
        >
          <p className="font-mono text-[10px] text-accent-amber mb-3">QUICK MESSAGE</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-input"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            className="form-input w-full min-h-24 mb-3"
            required
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <button
              type="submit"
              className="btn-primary-system text-xs"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" ? "SENDING..." : status === "sent" ? "SENT" : "SEND MESSAGE"}
            </button>
            {statusCopy && (
              <span className={status === "error" ? "text-xs text-destructive" : "text-xs text-muted-foreground"}>
                {statusCopy}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
