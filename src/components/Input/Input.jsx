import './Input.css'

const Input = ({ label, value, id, contentClass, onChange }) => {
    return (
        <div className={['input-content', contentClass].join(' ')}>
            <input
                dir='auto'
                name={id}
                id={id + '-input'}
                type="text"
                className='input placeholder:text-right'
                placeholder={label}
                required
                value={value}
            />
            <label htmlFor={id + '-input'} className='label'>{label}</label>

        </div>
    )
}

const TextArea = ({ label, value, id, contentClass, onChange }) => {
    return (
        <div className={['input-content', contentClass].join(' ')}>
            <textarea
                dir='auto'
                name={id}
                id={id + '-input'}
                type="text"
                className='textarea placeholder:text-right h-full overflow-y-auto'
                placeholder={label}
                required
                value={value}
            />
            <label htmlFor={id + '-input'} className='label'>{label}</label>

        </div>
    )
}

export { Input, TextArea }