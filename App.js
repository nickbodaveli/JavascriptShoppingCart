

let index = 0;

    function check()
    {
        let products = JSON.parse(localStorage.getItem("Products")) || [];

        if(localStorage.getItem("Quantity") === null)
        {
            localStorage.setItem("Quantity", 0);
        }

        if(localStorage.getItem("Total") === null)
        {
            localStorage.setItem("Total", 0);
        }
    }

    check();

    // add element into localstorage
    function create()
    {
        var btncart = document.querySelectorAll(".btncart");
            btncart.forEach(function(btn){
                btn.addEventListener("click", function(event){
                    var id   = event.target.parentElement.children[0].textContent;
                    var name = event.target.parentElement.children[1].textContent; 
                    var price = event.target.parentElement.children[2].textContent; 
                    var quantity = event.target.parentElement.children[3].value; 

                    const product = {
                        id: id, 
                        name: name,
                        price: price,
                        quantity: quantity
                    };

                    var rame = products.find(x=>x.id == id);
                    if(rame == null)
                    {
                        products.push({...product});
                        localStorage.setItem("Products" ,JSON.stringify(products));
                        var qty = parseInt(localStorage.getItem("Quantity"));
                        qty += parseInt(quantity);
                        localStorage.setItem("Quantity", parseInt(qty));

                        var tot = parseInt(localStorage.getItem("Total"));
                        tot += parseInt(price);
                        localStorage.setItem("Total", parseInt(tot));
                        alert("ელემენტი წარმატებით დაემატა");
                        window.location.href = "index.html";
                    }
                    else 
                    {
                        alert("ელემენტი უკვე არსებობს");
                    }
                    
                });
            });
    }

    create();

    //get single element from localstorage
    function single()
    {
        var btnshow = document.querySelector(".btnshow");
        var poutput = document.getElementById("output");
        var id_input_value = document.getElementById("id_num");
        btnshow.addEventListener("click", function(){
            var id_value = id_input_value.value;
            var itemId = localStorage.key(id_value);
            var itemName = localStorage.getItem(itemId);
            poutput.innerHTML = `${itemId} ${itemName}`;
    });
    }

    single();

    // show added elements from localstorage
    function all()
    {
        var btnshowall = document.querySelector(".btnshowall");
        btnshowall.addEventListener("click", function(){
            for(var i = 0; i < localStorage.length; i++) {
            var itemId = localStorage.key(i);
            var itemName = localStorage.getItem(itemId);
            var createDiv = document.createElement("div");
            createDiv.innerHTML = 
                        `
                        <div class="list">
                            <h3 id="id">${itemId}</h3>
                            <h4 id="name">${itemName}</h4>
                            <button type="submit" class="btnremove"  onclick="deleteitem(${itemId})">REMOVE ELEMENT</button>
                        </div>
                        `;
            document.querySelector(".output-div").appendChild(createDiv);
        }
        });
    }

    all();

     // remove element sinle element from localstorage
    function deleteitem(index){
        localStorage.removeItem(index);
    }

    function cartStorage()
    {
        var qty = parseInt(localStorage.getItem("Quantity"));
        document.getElementById("cartstorage").innerHTML = `Quantity : ${qty}`;
    }

    cartStorage();