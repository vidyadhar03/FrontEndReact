

const QuantitySelector = ({ quantity, onQuantityChange,productId }) => {

    const handleIncrement = (event) => {
        // event.stopPropagation();
        onQuantityChange(quantity + 1);
    };

    const handleDecrement = (event) => {
        // event.stopPropagation();
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    const handleInputChange = (event) => {
        // event.stopPropagation();
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity)) {
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div style={{ marginBottom: '10px' }}>
            <button onClick={handleDecrement} style={{ width: '30px' }} >-</button>
            <input type="number" min="1" value={quantity} onChange={handleInputChange} style={{ width: '30px' }} />
            <button onClick={handleIncrement} style={{ width: '30px' }}  >+</button>
        </div>
    );

}


export default QuantitySelector;