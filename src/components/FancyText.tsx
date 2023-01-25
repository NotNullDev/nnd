export type FancyTextType = {
    text: string
    className?: string
}

export default function FancyText({text, className}: FancyTextType) {
    return (
            <div
              className={`font-bold bg-gradient-to-br from-indigo-600 to-orange-500 bg-clip-text text-opacity-0 text-transparent  p-1 text-6xl ${className ?? ""}`}
              style={{
                // some weird bug on chrome
                WebkitBackgroundClip: "text",
                // @ts-ignore
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent"
              }}
            >
              {text}
            </div>
    )
}