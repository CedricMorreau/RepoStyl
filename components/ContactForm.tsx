"use client"

import { useState } from "react"
import Button from "./Button";

export default function ContactForm() {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            alert("Thanks for your message i'll replay asap!")
            setLoading(false)

            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Message not sent")
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col my-8'>
                <input type='text' autoComplete="off" placeholder="Name" className="focus:outline-none" required minLength={3} id="name" />
            </div>

            <div className='w-full flex flex-col my-8'>
                <input type='email' autoComplete="off" placeholder="Email" className="focus:outline-none" required minLength={10} id="email" />
            </div>

            <div className="w-full flex flex-col my-8">
                <textarea rows={4} name="message" placeholder="How can i help?" className="w-full focus:outline-none" minLength={10} maxLength={500} />
            </div>

            <button type="submit" disabled={loading} className="rounded-full">
                <Button buttonText="Send" />
            </button>
        </form>
    )
}