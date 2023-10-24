

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
            <button onClick={handleDecrement} style={{ width: '30px',backgroundColor: "#F5F0FF",border: '1px solid #E0DBE8'}} >-</button>
            <input type="number" min="1" value={quantity} onChange={handleInputChange} style={{ width: '30px',border: '1px solid #E0DBE8',textAlign:"center" }} />
            <button onClick={handleIncrement} style={{ width: '30px',backgroundColor: "#F5F0FF",border: '1px solid #E0DBE8' }}  >+</button>
        </div>
    );

}


export default QuantitySelector;