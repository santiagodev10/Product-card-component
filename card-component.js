import { LitElement, html, css } from "lit";

class CardComponent extends LitElement {
    // 1. Define propiedades reactivas. Lit las observa automáticamente como atributos.
    //    Los atributos como 'product-title' se mapearán a la propiedad 'productTitle'.
    static properties = {
        brand: { type: String },
        img: { type: String },
        productTitle: { type: String },
        productCollection: { type: String },
        productDescription: { type: String },
        price: { type: String }, // Considera Number si quieres hacer cálculos
    };

    // 2. Define tus estilos usando la propiedad static styles de Lit
    static styles = css`
        /* Usa :host para aplicar estilos al elemento personalizado en sí */
        :host {
            display: block; /* Los elementos personalizados son inline por defecto */
            border: 1px solid #eee;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            margin: 15px;
            font-family: sans-serif;
        }

        article {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        div:first-of-type { /* Contenedor para marca e imagen */
            position: relative;
            text-align: center;
            padding-bottom: 10px; /* Espacio para la marca */
            background-color: #f9f9f9;
        }

        span { /* Nombre de la marca */
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8em;
            font-weight: bold;
            color: #555;
            z-index: 1;
        }

        figure {
            margin: 0;
            width: 100%;
            height: 200px; /* Altura fija para el contenedor de la imagen */
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain; /* Asegura que la imagen se ajuste sin recortar */
            display: block;
        }

        div:last-of-type { /* Contenedor para los detalles del texto */
            padding: 15px;
            display: flex;
            flex-direction: column;
            flex-grow: 1; /* Permite que esta sección ocupe el espacio restante */
            justify-content: space-between;
        }

        .product-title {
            font-size: 1.3em;
            margin: 0 0 5px 0;
            color: #333;
        }

        .product-collection {
            font-size: 0.9em;
            color: #666;
            margin: 0 0 10px 0;
        }

        .product-description {
            font-size: 0.85em;
            color: #777;
            line-height: 1.4;
            margin: 0 0 15px 0;
            flex-grow: 1; /* Permite que la descripción ocupe el espacio disponible */
        }

        div:last-of-type > div { /* Contenedor de precio y botón */
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px; /* Espacio encima del precio/botón */
        }

        .price {
            font-size: 1.4em;
            font-weight: bold;
            color: #007bff;
        }

        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.2s ease;
        }

        button:hover {
            background-color: #0056b3;
        }
    `;

    // 3. El método render de LitElement crea y actualiza automáticamente el Shadow DOM
    render() {
        return html`
            <article class="card-component">
                <div class="card-component--brand-container">
                    <span>${this.brand}</span>
                    <figure>
                        <img src=${this.img || ''} alt="product image"/>
                    </figure>
                </div>

                <div class="card-component--details-container">
                    <h1 class="product-title">${this.productTitle}</h1>
                    <h2 class="product-collection">${this.productCollection}</h2>
                    <p class="product-description">${this.productDescription}</p>
                    <div>
                        <span class="price">${this.price}</span>
                        <button @click=${this.#handleClick}>Comprar</button>
                    </div>
                </div>
            </article>
        `;
    }

    #handleClick() {
        console.log(`Has hecho click en el botón de ${this.productTitle}`);
    };

    // connectedCallback, disconnectedCallback y attributeChangedCallback
    // son manejados automáticamente por el sistema de propiedades de LitElement.
    // Solo necesitas implementarlos si tienes efectos secundarios no relacionados con la renderización.

    // Ejemplo de uso de connectedCallback si es necesario para efectos secundarios no relacionados con la renderización
    connectedCallback() {
        super.connectedCallback(); // Siempre llama a super.connectedCallback()
        // console.log('CardComponent conectado al DOM!');
        // Aquí podrías añadir escuchadores de eventos que no estén manejados por la plantilla de Lit
    }

    // Ejemplo de uso de attributeChangedCallback si es necesario para efectos secundarios no relacionados con la renderización
    // Nota: Por lo general, no necesitas esto si estás usando propiedades estáticas
    // attributeChangedCallback(name, oldValue, newValue) {
    //     super.attributeChangedCallback(name, oldValue, newValue); // Siempre llama a super
    // }
}

customElements.define("card-component", CardComponent);