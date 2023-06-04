"use strict";
// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["Available"] = "available";
    AnimalStatus["NotAvailable"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    if (res.status === AnimalStatus.Available) {
        return true;
    }
    else {
        return false;
    }
}
function checkAnimalData(animal) {
    if (isAvailable(animal)) {
        return animal.data;
    }
    else {
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
