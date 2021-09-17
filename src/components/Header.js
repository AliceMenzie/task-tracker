import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('click')
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn' onClick={onAdd}>{showAdd ? 'Close' : 'Add' }</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
