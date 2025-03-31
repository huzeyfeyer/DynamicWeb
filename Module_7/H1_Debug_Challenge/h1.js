'use strict';

const users = [
    { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
    { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
    { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false }
];

// ✅ Bug 1 fix
const getUser = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error(`Gebruiker met ID ${userId} niet gevonden`);
    return user.name;
};

// ✅ Bug 2 fix
const checkAdminRights = (userId) => {
    const user = users.find(u => u.id === userId);
    return user?.isAdmin ?? false;
};

// ✅ Bug 3 fix
const formatEmail = (email) => {
    const match = email.match(/^(.+)@(.+)$/);
    if (!match) throw new Error(`Ongeldig e-mailadres: ${email}`);
    const username = match[1].toUpperCase();
    const domain = match[2];
    return `${username}@${domain}`;
};

// ✅ Bug 4 & 5 fix
const processUsers = () => {
    for (let i = 0; i < users.length; i++) {
        try {
            const user = getUser(users[i].id);
            const isAdmin = checkAdminRights(users[i].id);
            const formattedEmail = formatEmail(users[i].email);
            console.log(`✅ Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}`);
        } catch (error) {
            console.error(`❌ Fout bij gebruiker ${i}: ${error.message}`);
        }
    }
};

processUsers();