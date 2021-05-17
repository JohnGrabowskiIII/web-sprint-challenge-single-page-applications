
export default function Pizza(props) {

    const {change, state, disabler} = props

    return (
        <>
            <form id='pizza-form' >
                <label>
                    Name for Order
                    <input name='name' type='text' id='name-input' onChange={change} value={state.name} />
                </label>
                <label>
                    Size
                    <select name='size' id='size-dropdown' onChange={change} value={state.size} >
                        <option value='small' >Small</option>
                        <option value='medium' >Medium</option>
                        <option value='large' >Large</option>
                    </select>
                </label>
                <label>
                    Pepperoni
                    <input name='pepperoni' type='checkbox' onChange={change} value={state.pepperoni} />
                </label>
                <label>
                    Sausage
                    <input name='sausage' type='checkbox' onChange={change} value={state.sausage} />
                </label>
                <label>
                    Spinach
                    <input name='spinach' type='checkbox' onChange={change} value={state.spinach} />
                </label>
                <label>
                    Onion
                    <input name='onion' type='checkbox' onChange={change} value={state.onion} />
                </label>
                <label>
                    Special Request
                    <input name='special' type='text' id='special-text' onChange={change} value={state.special} />
                </label>
                <button id='order-button' disabled={disabler} >Submit your Order</button>
            </form>
        </>
    )

}