'use strict';

const users = [
    { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
    { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
    { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
    { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
];

document.getElementById("showUsers").addEventListener("click", () => {
    console.table(users);

    console.group("Gebruikersrollen");
    users.forEach(user => {
        if (user.role === "Admin") {
            console.info(`${user.name} is een admin`);
        } else if (user.role === "Editor") {
            console.warn(`${user.name} is een editor`);
        } else {
            console.error(`${user.name} is een gewone gebruiker`);
        }
    });
    console.groupEnd();
});
