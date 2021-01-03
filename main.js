
function addImage2Body(name, description, price) {

    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
}

function addImages() {
        
    var i;
    let prices = [];
    let descriptions = [];
    for (i = 1; i < 67; i++) {
        addImage2Body(i, descriptions[i-1], prices[i-1]);
    }
}

addImages()