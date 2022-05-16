    let products = JSON.parse(localStorage.getItem("Products")) || [];
    let price = 0;
    let totalQuantity = 0;
    let totalPrice = 0;
         // show added elements from localstorage
    function all()
    {
        var product = localStorage.getItem("Products");
        var products = JSON.parse(product);

        products.map((element) => {
            var createDiv = document.createElement("div");
            createDiv.innerHTML = 
                        `
                        <div class="list">
                            <h3 id="id">${element.id}</h3>
                            <h4 id="name">${element.name}</h4>
                            <h4 id="price">${element.price}</h4>
                            <input id="quantity" type="number" value="${element.quantity}">
                            <button type="submit" class="btnremove"  onclick="deleteitem(${element.id})">REMOVE ELEMENT</button>
                        </div>
                        `;
            document.querySelector(".output-div").appendChild(createDiv);
        });
}

    all();

    function update()
    {
        var divList = document.querySelectorAll(".list");
            divList.forEach(function(list){
                var id = list.parentElement.children[0].children[0].textContent;
                var name = list.parentElement.children[0].children[1].textContent;
                var price = list.parentElement.children[0].children[2].textContent;
                var quantity = list.parentElement.children[0].children[3].value;

                let pro = products.find(x=>x.id == id);
                pro.name = name;
                pro.price = price;
                pro.quantity = quantity;
                totalQuantity += parseInt(quantity);
                var multipliedprice = quantity * price;
                totalPrice += parseInt(multipliedprice);
            });

            localStorage.setItem("Products", JSON.stringify(products));
            localStorage.setItem("Quantity", totalQuantity);
            localStorage.setItem("Total", totalPrice);

            totalQuantity = 0;
            totalPrice = 0;
    }

    // remove element sinle element from localstorage
    function deleteitem(index){
        localStorage.removeItem(index);
    }

    function TotalPrice()
    {
        var tot = parseInt(localStorage.getItem("Total"));
        document.getElementById("totalprice").innerHTML = `Total : ${tot}`;
    }

    TotalPrice();