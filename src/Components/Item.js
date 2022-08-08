import PropTypes from 'prop-types'

function Item({ feira, ano_feira }){
    return(
        <>
            <li>
                {feira} - {ano_feira}
            </li>    
        </>
    );
}
Item.propTypes = {
    feira: PropTypes.string.isRequired,
    ano_feira: PropTypes.number
}
export default Item