"use strict";

export function makeVisible(item) {
    item.style.display = 'block';
}

export function makeInvisible(item) {
    item.style.display = 'none';
}

export function isVisible(item) {
    return item.style.display === 'block';
}