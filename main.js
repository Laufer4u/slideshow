
function addImage2Body(name, description, price) {

    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
}

function addImages() {
        
    var i;
    let prices = [];
    let descriptions = [];
    for (i = 0; i < 66; i++) {
        addImage2Body(i, descriptions[i], prices[i]);
    }
}

addImages()