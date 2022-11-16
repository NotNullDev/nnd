export type FancyTextType = {
    text: string
    className?: string
}

export default function FancyText({text, className}: FancyTextType) {
    return (
            <div
              className={`font-bold bg-gradient-to-br from-indigo-600 to-orange-500 bg-clip-text text-opacity-0 text-transparent  p-1 ${className ?? ""}`}
            >
              {text}
            </div>
    )
}