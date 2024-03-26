export default function WrapperMain({ children }) {
    return (
        <section
            style={{
                backgroundColor: "#f2b800",
            }}
            className="wrapperMainBlock"
        >
            {children}
        </section>
    )
}
