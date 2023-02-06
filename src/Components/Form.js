import useForm from "../hook/useForm";
import "./Form.css";
import { Form, json } from "react-router-dom";
import { store } from "../store";

function FormComponent() {

  const {
    value: nameValue,
    isValid: nameIsValid,
    valueFormError: nameFormError,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useForm((name) => {
    return name.trim() !== "";
  });

  const {
    value: addressValue,
    isValid: addressIsValid,
    valueFormError: addressFormError,
    hasError: addressHasError,
    changeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: addressReset,
  } = useForm((name) => {
    return name.trim() !== "";
  });

  return (
    <Form method="POST">
      <div className="form-holder">
        <div>
          <label htmlFor="name">Full name:</label>
          <input
          name='name'
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <p className={nameFormError}>Please enter name</p>
      </div>
      <div className="form-holder">
        <div>
          <label htmlFor="address">Delivery adderess:</label>
          <input
          name='address'
            type="text"
            id="address"
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
        </div>
        <p className={addressFormError}>Please enter address</p>
      </div>
      <button>Send</button>
    </Form>
  );
}

export default FormComponent;

export async function action({request, params}) {
    const data = await request.formData();

    const { cart } = store.getState()

    const cartData = {
        cart: cart,
        personalData: {
            name: data.get('name'),
            address: data.get('address')
        }
    }

    const response = await fetch('https://react-router-c29dd-default-rtdb.firebaseio.com/cart.json' ,{
        method: 'POST',
        body: JSON.stringify(cartData),
        headers: {
            "Content-type": "application/json",
          },
    })

    if (!response.ok) {
        throw json({message: 'Could not send cart data!'}, {
            status: 500
        })
    }

    return response

    console.log(cartData)
}
