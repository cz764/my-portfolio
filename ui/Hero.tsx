import { engineerInfo, socialLinks } from "@/data/engineerInfo";
import SocialLink from "./SocialLink";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-8 py-16">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold md:text-7xl">
            {engineerInfo.name}
          </h1>
          <p className="text-2xl text-muted-foreground md:text-3xl">
            {engineerInfo.title}
          </p>
        </div>

        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          {engineerInfo.bio}
        </p>

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.name}
              href={link.href}
              ariaLabel={link.ariaLabel}
              iconPath={link.iconPath}
            />
          ))}
        </div>

        <Button size="lg" asChild>
          <a href="#projects">View My Work</a>
        </Button>
      </div>
    </section>
  );
}
