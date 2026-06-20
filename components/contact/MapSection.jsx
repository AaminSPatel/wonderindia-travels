export default function MapSection() {
  return (
    <section id="map" className="container-px pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-glass">
        <iframe
          title="WanderIndia office location"
          src="https://www.google.com/maps?q=Andheri+East+Mumbai&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
