import './style.css'

export default function History({ arr }) {
    return (
        <div>
            <h2 className="history">Histórico:</h2>
            {arr.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}
