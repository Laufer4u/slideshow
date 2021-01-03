
function addImage2Body(name, description, price) {
    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
}

function addImages() {
    let i; let folderLength = 67;
    let prices = [];
    let descriptions = [];
    for (i = 0; i < folderLength-1; i++) {
        addImage2Body(i, descriptions[i], prices[i]);
    }
}

addImages();