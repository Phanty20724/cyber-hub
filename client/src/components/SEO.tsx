
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = "SCPSC Cyber Hub - Build the Future with Technology",
  description = "Join SCPSC Cyber Hub, the premier IT club for competitive programming, web development, AI/ML, video editing, and graphics designing. Let's build the future together.",
  keywords = "SCPSC, Cyber Hub, competitive programming, web development, AI, machine learning, video editing, graphics design, tech community, IT club, coding, programming, innovation",
  image = "https://scpscch.tech/og-image.png",
  type = "website",
  canonicalUrl,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://scpscch.tech${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, false);
    updateMetaTag('keywords', keywords, false);

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', type);

    // Twitter tags
    updateMetaTag('twitter:title', title, false);
    updateMetaTag('twitter:description', description, false);
    updateMetaTag('twitter:image', image, false);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEO;
