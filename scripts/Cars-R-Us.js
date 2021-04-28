import { Interiors } from "./Interiors"
import { PaintColors } from "./PaintColors"
import { Technology } from "./Technology"
import { Wheels } from "./Wheels"

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Order</button>
        </article>

        <article class="orders">
            <h2>Car Orders</h2>
        </article>
    `
}