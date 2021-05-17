
export default function Pizza(props) {



    return (
        <>
            <h1>pizza loaded</h1>
            {/* PIZZA SIZE IS DROPDOWN MENU */}
            <form id='pizza-form' >
                <label>
                    Name for Order
                    <input type='text' id='name-input' />
                </label>
                <label>
                    Size
                    <select>
                        <option selected value='small' >Small</option>
                        <option value='medium' >Medium</option>
                        <option value='large' >Large</option>
                    </select>
                </label>
                <label>
                    Pepperoni
                    <input type='checkbox' />
                </label>
                <label>
                    Sausage
                    <input type='checkbox' />
                </label>
                <label>
                    Spinach
                    <input type='checkbox' />
                </label>
                <label>
                    Onion
                    <input type='checkbox' />
                </label>
                <label>
                    Special Request
                    <input type='text' id='special-text' />
                </label>
                <button id='order-button' >Submit your Order</button>
            </form>
        </>
    )

}