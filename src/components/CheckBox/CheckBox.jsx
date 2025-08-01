import classNames from 'classnames'
import './CheckBox.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'

const CheckBox = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        isRequired,
    } = props

    return (
        <label
            className={classNames(className, 'checkbox')}
            htmlFor={id}
        >
            <input
                className='checkbox__input'
                id={id}
                type='checkbox'
                required={isRequired}
            />
            <span className="checkbox__label">
                {label}
            </span>
        </label>
    )
}

export default CheckBox