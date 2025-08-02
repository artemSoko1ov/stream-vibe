import getIdFromTitle from '@/utils/getIdFromTitle'
import './Field.scss'
import classNames from 'classnames'

const Field = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        /**
         * undefined (default) | 'email' | 'textarea'
         */
        type,
        placeholder,
        isRequired,
    } = props

    const Component = type === 'textarea' ? 'textarea' : 'input'

    return (
       <div
       className={classNames(className, 'field')}
       >
        <label className="field__label" htmlFor={id}
        >
            {label} {isRequired && (
                <span 
                className="field__required-star"
                aria-hidden="true"
                >*</span>
            )}
            <div className="field__body"
            >
                <Component 
                    className='field__control'
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={isRequired}
                />
            </div>
        </label>
       </div>
    )
}

export default Field