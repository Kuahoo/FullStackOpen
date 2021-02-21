import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div> 
            <h1>
                {props.course}
            </h1>
        </div> 
    )
}

const Part = (props) => {
    return (
        <div>
            <p key="{props.part.name}">
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Content = ({partsArray}) => {
    const renderedContent = partsArray.map((partObject) => 
            <Part key={partObject.name} part={partObject}/>
        );
    return (
        <div >
            {renderedContent} 
        </div>
    )
}

const Total = ({partsArray}) => {
    let exercisesList = partsArray.map((partObject) => 
       partObject.exercises 
    );
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const initialValue = 0;
    let sum = exercisesList.reduce(reducer, initialValue);
    return (
        <div>
            <p>Number of exercises {sum}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [ 
    {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }
]

    return (
        <div>
            <Header course={course} />
            <Content partsArray={parts}/>
            <Total partsArray={parts}/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))

