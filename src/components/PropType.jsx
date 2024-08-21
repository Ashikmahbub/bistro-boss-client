 import PropTypes from 'prop-types'

const PropsType = ({prop}) => {
    return (
        <div>
            <h1 className="text-5xl">{prop}</h1>
        </div>
    );
};
PropsTypes.propTypes = {
    prop: PropTypes.node,
}

export default PropsType;