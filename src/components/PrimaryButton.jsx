export default function PrimaryButton({text, href}) {
    return (
        <a href={`${href}`} className="font-classy text-black bg-[#f2f2f2] px-6 py-3 border-black/30 border" style={{textShadow: '0 0 8px white'}}>
            {`${text}`}
        </a>
    )
}