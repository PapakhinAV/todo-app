export const EditIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536M9 11l3 3L20.485 5.515a2.121 2.121 0 10-3-3L9 11zM5 19h14"
        />
    </svg>
);
