import React from "react";
import Headertest from "@/components/Headertest";


interface User {
    id: number;
    name: string;
}

async function getData(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/usersadsf");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

async function Page() {

    const users = await getData();

    return (
        <div>

            <Headertest/>

            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}

export default Page;
