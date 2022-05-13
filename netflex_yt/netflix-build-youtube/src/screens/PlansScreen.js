import React, {useState, useEffect } from 'react'
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {db} from '../firebase';
import './PlansScreen.css';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);


    useEffect(() => {
        db.collection('products').where('active', '==' , true)
        .get()
        .then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ('prices').get();
                priceSnap.docs.forEach((price) => {
                    products[productDoc.id].prices = {
                        priceId : price.id,
                        priceData : price.data(),
                    }
                })
            })
            setProducts(products);
        });
    }, []);

    console.log(products);

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price : priceId,
            success_url : window.location.origin,
            cancel_url : window.location.origin,
        });

        docRef.onSnapshot(async (snap) => {
            const {error, sessionId} = snap.data();

            if(error) {
                //sorry an error to your customers and
                //inspect your cloud Fucntion logs in the Firebase console.
                alert(`An error occured: ${error.message}`)
            }
            
            if(sessionId) {
                //we have a session, let's redirect to Checkout
                //init stripe
                const stripe = await loadStripe("pk_test_51Ky7aFDiwAuDw7BEApLHbB8LlHd7EwjEz5kdttJT4OgpcKskqwnTIG1kBZaN2x6v4xQ62bRQnyA0tSPztk9UYeEv00Dd9ZazYJ");
                stripe.redirectToCheckout({sessionId});  
            };
        })
    };

    return (<div className="plansScreen">
            {Object.entries(products).map(([productId, productData]) => {
                //TODO add some logic to check if the user's subscription is active..
                return (
                   <div className="plansScreen__plan">
                       <div className="plansScreen__info">
                           <h5>{productData.name}</h5>
                           <h6>{productData.description}</h6>
                       </div>
                       <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
                   </div>
                )
            })}
        </div>)
}

export default PlansScreen
