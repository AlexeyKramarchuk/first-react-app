import './app-filter.css';

const AppFilter = (props) => {
const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'On the rise'},
    {name: 'moreThen1000', label: 'Salary is more than $1000'},
];

const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
        <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {label}
        </button>
    )
})


    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    On the rise
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary is more than $1000
            </button> */}
        </div>
    )
}


export default AppFilter;