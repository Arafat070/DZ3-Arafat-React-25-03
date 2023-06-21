import './App.css';
import {useEffect , useState} from "react";


function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    const [filter, setFilter] = useState('');

    return (
        <div>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            {data
                .filter(item => item.title.includes(filter))
                .map(item => (
                    <div key={item.id}>
                        <h2>{item.userId}</h2>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
        </div>
    );

}
export default App

