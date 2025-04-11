export type MenuLinkProps = {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type ContactInfo = {
  email: string;
  location: string;
  linkedin: string;
  github: string;
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};
