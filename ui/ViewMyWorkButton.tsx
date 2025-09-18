export interface ViewMyWorkButtonProps {
  handleViewMyWork: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function ViewMyWorkButton({
  handleViewMyWork,
}: ViewMyWorkButtonProps) {
  return (
    <a
      href="#projects"
      className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
      onClick={handleViewMyWork}
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
  );
}
