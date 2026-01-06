import { useState } from 'react';

function Inventory(props) {
    const [items, setItems] = useState([]);
    const inventoryList = items.map((item) => (
        <li>{item}</li>
    ));
    const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.itemName.value.trim();
    if (!name) return;

    setItems((prev) => [...prev, name]);
    e.target.reset();
  };
    
    return (
        <div className="inventory-page App-page"> 
            <h1>Inventory</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
                <label>Item Name:</label>
                <input type="text" name="itemName" />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {inventoryList}
            </ul>
        </div>
    );
}

export default Inventory;