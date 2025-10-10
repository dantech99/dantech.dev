import LogoLoop from "./LogoLoop"

const CertificatesSlider = ({ certificates }) => {
  // Transformar los certificados al formato esperado por LogoLoop
  const certificateItems = certificates.map(cert => ({
    src: cert.data.image,
    alt: cert.data.title,
    title: cert.data.description,
    href: `#certificate-${cert.data.id}`, // Enlace interno para mostrar más detalles
    ariaLabel: `Certificado: ${cert.data.title}`
  }));

  return (
    <div style={{ height: '300px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={certificateItems}
        speed={30}
        direction="left"
        logoHeight={160}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Certificados y formación educativa"
      />
    </div>
  )
}

export default CertificatesSlider;
