import './main.css'

function FormInput(props) {
    return (
        <div className="formInput">

        <input 
        placeholder={props.placeholder} 
        onChange={e=> props.setUsername(e.target.value)}/>            
        </div>
    )
}

export default FormInput
