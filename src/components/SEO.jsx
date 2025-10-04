import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  article = false,
  schema = null 
}) => {
  const siteTitle = "Swami Vivekananda Institute of Paramedical & Nursing"
  const siteUrl = "https://svipn.netlify.app" // Replace with your actual domain
  const defaultImage = `${siteUrl}/assets/Swami_Vivekananda_Institute-logo.png`
  
  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || "Leading paramedical and nursing institute in West Bengal. Offering DMLT, BMLT, GNM, ANM, BPT courses with 100% placement assistance. Modern facilities, experienced faculty, and hands-on clinical training.",
    image: image || defaultImage,
    url: url || siteUrl,
    keywords: keywords || "paramedical institute, nursing college, DMLT, BMLT, GNM, ANM, BPT, medical laboratory technology, physiotherapy, healthcare education, West Bengal, Sikkim, medical courses, nursing courses, paramedical courses, healthcare training, clinical training, medical education, nursing education, paramedical training"
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Swami Vivekananda Institute of Paramedical & Nursing" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@SVIPNOfficial" />
      <meta name="twitter:creator" content="@SVIPNOfficial" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content={siteTitle} />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="West Bengal, India" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />
      
      {/* Educational Institution Tags */}
      <meta name="category" content="Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:author" content="Swami Vivekananda Institute" />
          <meta property="article:section" content="Education" />
          <meta property="article:tag" content="Healthcare Education" />
        </>
      )}
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Swami Vivekananda Institute of Paramedical & Nursing",
          "alternateName": "SVIPN",
          "url": siteUrl,
          "logo": defaultImage,
          "description": seo.description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Medical College Road",
            "addressLocality": "Siliguri",
            "addressRegion": "West Bengal",
            "postalCode": "734001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "Admissions",
            "email": "info@svipn.edu.in",
            "availableLanguage": ["English", "Hindi", "Bengali"]
          },
          "sameAs": [
            "https://www.facebook.com/SVIPNOfficial",
            "https://www.instagram.com/SVIPNOfficial",
            "https://www.linkedin.com/company/svipn",
            "https://www.youtube.com/c/SVIPNOfficial"
          ],
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Dr. Rajesh Kumar"
          },
          "numberOfStudents": 100,
          "educationalCredentialAwarded": [
            "Diploma in Medical Laboratory Technology (DMLT)",
            "Bachelor in Medical Laboratory Technology (BMLT)",
            "General Nursing and Midwifery (GNM)",
            "Auxiliary Nurse Midwifery (ANM)",
            "Bachelor of Physiotherapy (BPT)"
          ],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "AICTE Approved",
            "recognizedBy": {
              "@type": "Organization",
              "name": "All India Council for Technical Education"
            }
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
