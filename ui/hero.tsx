import { engineerInfo, socialLinks } from "@/data/engineerInfo";
import SocialLink from "./SocialLink";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-8 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {engineerInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
            {engineerInfo.title}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {engineerInfo.bio}
          </p>
        </div>

        <div className="flex gap-6 justify-center items-center">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.name}
              href={link.href}
              ariaLabel={link.ariaLabel}
              iconPath={link.iconPath}
            />
          ))}
        </div>

        <div className="pt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View My Work
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
