import React from "react";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    return (<>
    <MainNavigation></MainNavigation>
    <main>
        <h1>An error ocurred!</h1>
        <p>Could not find this page you are looking for!</p>
    </main>
    </>)
}