export default function WrapperMain({ children }) {
    return (
        <section
            style={{
                backgroundImage: `url('./images/BackgroundYellow.png')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="wrapperMainBlock"
        >
            {children}
        </section>
    )
}
