export default function WrapperMain({ children }) {
    return (
        <section
            style={{
                backgroundColor: "#f8df3b",
            }}
            className="wrapperMainBlock"
        >
            {children}
        </section>
    )
}
