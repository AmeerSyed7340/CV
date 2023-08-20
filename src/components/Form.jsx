import '../styles/Form.css'
export default function Form({legend, inputFeilds }) {
    function handleSubmit(event){
        event.preventDefault();
        inputFeilds.forEach((inputfeild, index) => {
            inputfeild.setter(event.target[index].value)
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <legend>{legend}</legend>
                {inputFeilds.map(field => (
                    <input key={field.placeholder} type={field.type} placeholder={field.placeholder} />
                ))}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
