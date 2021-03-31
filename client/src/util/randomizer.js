import React from 'react';

function randomizer(arr) {
    console.log(arr);
    let randomSelection = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomSelection);
    return randomSelection;
}

export default randomizer;