import React , {useState} from 'react';

import './App.css';
import Task from './Components/Task';
function App() {
    const DATA = [
        {
            id: '01',
            title: 'Học bài',
            content: 'Học react',
            status: 'done',
        },
        {
            id: '02',
            title: 'Đọc truyện',
            content: 'One Piece characters 1000',
            status: 'cancel',
        },
        {
            id: '03',
            title: 'Chơi game',
            content: 'Dota 2',
            status: 'pending',
        },
    ]

    const [dataTask, setDataTask] = useState(DATA);

    const updateData = (value, index) => {
        console.log(value, index);
        const newData = [...dataTask]
        const task = {
            ...dataTask[index],
            title : value,
        }
        newData.splice(index, 1, task)
        setDataTask(newData);
    }

    const renderTask = () => {
        return dataTask.map((item, index) => {
            return <Task
                {...item}
                isLastItem={index === dataTask.length - 1}
                updateData={updateData}
                index={index}
                key={item.id}
            />
        })
    }

    return (
        <div className='container'>
            <h1 className='header'>To do list</h1>
            {renderTask()}
        </div>
    );
}

export default App;
