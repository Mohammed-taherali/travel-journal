import React from "react"
import Header from "../components/Header"
import Card from "../components/Card"
import data from "../data"


export default function App() {
    const Cards = data.map(card => {
        return (
            <Card 
                key={card.id}
                info={card}
            />
        )
    })
    return (
        <div>
            <Header />
            <main className="main-section">
                {Cards}
            </main>
        </div>
    )
}