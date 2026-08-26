import { engineerInfo, socialLinks } from "@/data/engineerInfo";
import SocialLink from "./SocialLink";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-8 py-16 relative overflow-hidden">
      {/* Subtle animated neutral gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-indigo-50 animate-gradient-shift" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-gradient-to-br from-stone-200 to-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
      </div>
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {engineerInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-stone-900">
            {engineerInfo.title}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-rose-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
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

      {/* Smooth wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
        >
          <path
            d="M0,32 C320,64 420,0 720,32 C1020,64 1120,0 1440,32 L1440,74 L0,74 Z"
            className="fill-stone-50/50"
          />
        </svg>
      </div>
    </section>
  );
}
