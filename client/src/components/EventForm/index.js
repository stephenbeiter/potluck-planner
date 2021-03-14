import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT, ADD_DISH } from '../../utils/mutations';
import DishForm from '../DishForm';



const EventForm = () => {
    // addEvent function from graphql mutations functions
    const [addEvent, { error }] = useMutation(ADD_EVENT);

    // add a dish to an existing event
    const [addDish, { dishError }] = useMutation(ADD_DISH);

    // store created event id
    const [eventId, setEventId] = useState('');

    // handling state for basic details on Event form
    const [eventState, setEventState] = useState({
        eventName: '', message: '', date: '', time: '', location: ''
    });

    // handling change for other fields within form
    const handleChangeEventForm = (event) => {
        const { name, value } = event.target;
        setEventState({
            ...eventState,
            [name]: value
        })
    };

    const handleSubmitEventForm = async event => {
        event.preventDefault();

        try {
            const { data } = await addEvent({
                variables: { ...eventState }
            });

            // retrieving id of created event
            setEventId(data.addEvent._id);

        } catch (e) {
            console.error(e);
        }
    }

    const [dishState, setDishState] = useState({
        dishName: ''
        // ,
        // dishType: ''
    });


    // handling change for Dishes within form
    const handleChangeDishForm = (event) => {
        const { name, value } = event.target;
        setDishState({
            ...dishState,
            [name]: value
        });
        // console.log("dishState:", dishState)
    };

    // dish form submit
    const handleSubmitDishForm = async event => {
        event.preventDefault();

        try {
            const { data } = await addDish({
                variables: { eventId, ...dishState }
            });

            console.log("addDish: data ", data);

        } catch (e) {
            console.error(e);
        }
    }

    return (
<<<<<<< HEAD
        <>
            <form onSubmit={handleSubmitEventForm}>
=======
        <div class="potluckbackground">
            <div class="potluckorange">
            <form onSubmit={handleSubmitForm}>
>>>>>>> feature/styling
                <div>
                    <label class="potluckform" htmlFor="eventName">Event Name:</label>
                    <input class="forminput"
                        placeholder="Name Your Event"
                        name="eventName"
                        type="text"
                        id="eventName"
                        onChange={handleChangeEventForm}
                    />
                </div>
                <br />
                <div>
                    <label class="potluckform" htmlFor="message">Welcome Message for Guests: </label>
                    <textarea class="forminput"
                        placeholder="Leave a Message for Your Guests:"
                        name="message"
                        type="text"
                        id="message"
                        onChange={handleChangeEventForm}
                    />
                </div>
                <br />
                <div>
                    <label class="potluckform" htmlFor="date">Event date: </label>
                    <input class="forminput"
                        placeholder="Event's Date"
                        name="date"
                        type="date"
                        id="date"
                        onChange={handleChangeEventForm}
                    />
                </div>
                <br />
                <div>
                    <label class="potluckform" htmlFor="time">Time: </label>
                    <input class="forminput"
                        placeholder="Event's Time"
                        name="time"
                        type="time"
                        id="time"
                        onChange={handleChangeEventForm}
                    />
                </div>
                <br />
                <div>
                    <label class="potluckform" htmlFor="location">Location: </label>
                    <input class="forminput"
                        placeholder="Enter the Location"
                        name="location"
                        type="text"
                        id="location"
                        onChange={handleChangeEventForm}
                    />
                </div>
<<<<<<< HEAD
                <br />
                {!eventId && (
                    <button style={{ fontWeight: '700' }}
                        type="submit"
                    >
                        Next
                    </button>
                )}
                {error && <span>Something went wrong...</span>}
                <br />
            </form>


            {eventId && (
                <DishForm handleChange={handleChangeDishForm} handleSubmit={handleSubmitDishForm} dish={dishState} />

            )}
            {dishError && <span>Something went wrong...</span>}
            <br />

            {eventId && (
                <form>
                    <label htmlFor="guestName">Guest Name:</label>
                    <input
                        placeholder="Guest name"
                        name="guestName"
                        type="name"
                    />
                    <label htmlFor="guestEmail">Guest Email:</label>
                    <input
                        placeholder="Guest Email"
                        name="guestEmail"
                        type="email"
                    />

                    <button
                        type="submit">
                        Update Guest/add another guest
                        </button>
                </form>
            )}
            <br />
            {eventId && (
                <Link to={`/event/${eventId}`}>
                    <button style={{ color: "navy", fontWeight: '700', fontSize: "1rem", width: "16vw", margin: "0.5rem" }}>
                        Review Event
                </button>
                </Link>
            )}
        </>
=======

                <p class="potluckformheader" style={{ fontWeight: '700' }}>Guests to Invite:</p>
                {guestInputFields.map(guestInputField => (
                    <div key={guestInputField.id}>
                        <label class="potluckform" htmlFor="guestName">Guest Name: </label>
                        <input class="forminput"
                            placeholder="Enter Their Name"
                            name="guestName"
                            type="name"
                            value={guestInputField.guestName}
                            onChange={(e) => handleChangeInputFields(guestInputField.id, e, guestInputFields, setGuestInputFields)}
                        />
                        <br />

                        <label class="potluckform" htmlFor="guestEmail">Guest Email: </label>
                        <input class="forminput"
                            placeholder="Enter Their Email"
                            name="guestEmail"
                            type="email"
                            value={guestInputField.guestEmail}
                            onChange={(e) => handleChangeInputFields(guestInputField.id, e, guestInputFields, setGuestInputFields)}
                        />
                        < br />
                        <button class="btn" onClick={(e) => handleAddInputFields(e, setGuestInputFields, guestInputFields, 'guestName', 'guestEmail')}> + Add Guests </button>
                        {/* removing guest input fields only onClick */}
                        <button class="btn" onClick={() => handleRemoveInputFields(guestInputField.id, setGuestInputFields, guestInputFields)}> - Remove Guests </button>
                    </div>
                ))}

                <p class="potluckformheader" style={{ fontWeight: '700' }}>Dishes to Share:</p>

                {dishInputFields.map(dishInputField => (
                    <div key={dishInputField.id}>
                        <label class="potluckform" htmlFor="dishType">Dish Type: </label>
                        <input class="forminput"
                            placeholder="Enter the Dish Type"
                            name="dishType"
                            type="text"
                            value={dishInputField.dishType}
                            onChange={(e) => handleChangeInputFields(dishInputField.id, e, dishInputFields, setDishInputFields)}
                        />

                        <label class="potluckform" htmlFor="dishDescription"> Dish Description: </label>
                        <input class="forminput"
                            placeholder="Describe the Dish"
                            name="dishDescription"
                            type="text"
                            value={dishInputField.dishDescription}
                            onChange={(e) => handleChangeInputFields(dishInputField.id, e, dishInputFields, setDishInputFields)}
                        />
                        <button class="btn" onClick={(e) => handleAddInputFields(e, setDishInputFields, dishInputFields, 'dishType', 'dishDescription')}> + Add Dishes </button>
                        {/* removing dish input fields only onClick */}
                        <button class="btn" onClick={() => handleRemoveInputFields(dishInputField.id, setDishInputFields, dishInputFields)}> - Remove Dishes </button>
                    </div>
                ))}
                <br />
                <button class="submitbutton"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
>>>>>>> feature/styling
    )
}

export default EventForm;
