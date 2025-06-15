export default function History({ arr }) {
    return (
        <div>
            <h2>Histórico:</h2>
            {arr.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}
