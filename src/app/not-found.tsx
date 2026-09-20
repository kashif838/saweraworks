import Link from "next/link";
import Hero from "@/components/Hero";

export default function NotFound() {
  return (
    <>
      <Hero image="/images/hero-services.jpg" title="Page not found" crumb="404" position="center 60%" />
      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <p className="lead">The page you asked for does not exist or has moved.</p>
          <Link href="/" className="btn btn-dark">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
