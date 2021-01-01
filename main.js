
function addImage2Body(name, description, price) {

    let item = new Item(name, description, price);
    document.body.appendChild(item.element);
}

addImage2Body('2', 'Fruits ', '1000');
addImage2Body('7', 'Ballet Shoes ', '800');
