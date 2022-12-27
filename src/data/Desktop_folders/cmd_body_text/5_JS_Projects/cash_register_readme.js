const cash_register_readme = [
    {
        type: "paragraph",
        data: "K~$ About this project"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This project is the fifth and final project from the five freecodecamp javascript algorithms and data structures certificate projects"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This project contains a function called checkCashRegister that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument which is a 2D array listing available currency in the drawer"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ This function has 3 possibilities to return:"
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change:'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: 'K~$ Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key'
    },
    {
        type: "break"
    },
    {
        type: "paragraph",
        data: "K~$ You can check the whole assignment"
    },
    {
        type: "link",
        data: "here",
        href: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register"
    }
]

export default cash_register_readme;