
function addImage2Body(folder, description, price) {
    var x = document.createElement("img");
    
    var src = document.createTextNode(folder);
    var description = document.createTextNode(description);
    var price = document.createTextNode(price);
    
        
    x.src = folder;
    x.description = description;
    x.price = price; 

    document.body.appendChild(x);
    document.body.appendChild(x.description);
    document.body.appendChild(x.price);
}
addImage2Body('./img/2.jpg', '55', 'price');
addImage2Body('./img/3.jpg', '56', 'price');