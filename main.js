
function addImage2Body(name, description, price) {
    var src = document.createTextNode(name);
    var description = document.createTextNode(' Description: ' + description);
    var price = document.createTextNode(' Price: ' + price + '€');

    var x = document.createElement("img");
    x.src = './img/'+name+'.jpg';
    x.description = description;
    x.price = price; 

    document.body.appendChild(x);
    document.body.appendChild(x.description);
    document.body.appendChild(x.price);
}
addImage2Body('2', 'Fruits ', '1000');
addImage2Body('7', 'Ballet Shoes ', '800');