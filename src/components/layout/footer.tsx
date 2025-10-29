import Link from 'next/link';
import { FluteIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
];

const navLinks = [
  { name: 'Stories', href: '/stories' },
  { name: 'Events', href: '/events' },
  { name: 'Games', href: '/games' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary/10">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <FluteIcon className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">
              Krishna Kids Zone
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} aria-label={social.name}>
                        {/* Placeholder for social icons */}
                        <div className="h-5 w-5 rounded-full bg-muted-foreground/50" />
                    </a>
                </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ISKCON Kids Zone. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
