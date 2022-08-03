const QuizErrorMessage = ({ children }) => {
    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
                borderradius: 4,
                backgroundColor: "orangered",
                textAlign: "center",
                color: "white",
                textTransform: "capitalize",
            }}
        >
            {children}
        </div>
    );
};


export default QuizErrorMessage;