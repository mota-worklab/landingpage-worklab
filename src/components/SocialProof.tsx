import { Aperture, Box, Component, Hexagon, Waves } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Marcas ilustrativas">
      <div className="container">
        <p>
          Grandes produtos começam com boas parcerias.
   
        </p>
        <div className="brand-row">
          <span>
            <Aperture /> orbit<span className="brand-dot">®</span>
          </span>
          <span className="brand-nova">
            <Hexagon /> nova
          </span>
          <span>
            <Waves /> layers
          </span>
          <span className="brand-cubiq">
            <Box /> cubiq
          </span>
          <span>
            <Component /> vertice
          </span>
        </div>
      </div>
    </section>
  );
}
