
function addImage2Body(folder, description, price) {
    var x = document.createElement("img");
    
    var src = document.createTextNode(folder);
    var description = document.createTextNode(' Description: ' + description);
    var price = document.createTextNode(' Price: ' + price + '€');

    x.src = './img/'+folder+'.jpg';
    x.description = description;
    x.price = price; 

    document.body.appendChild(x);
    document.body.appendChild(x.description);
    document.body.appendChild(x.price);
}
addImage2Body('2', 'Fruits ', '1000');
addImage2Body('7', 'Ballet Shoes ', '800');