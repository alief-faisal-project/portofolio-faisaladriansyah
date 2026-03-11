import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-text">
          <h1>
            WEB <span className="highlight">DEV</span>
          </h1>
        </div>

        <div className="hero-image">
          <Image src="/heroimage.png" alt="hero" width={520} height={520} />
        </div>
      </div>
    </section>
  );
}
