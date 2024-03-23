document.addEventListener('DOMContentLoaded', function () {
    // Add student information
    var studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = "Student ID: 200556289, Name: Jeel Kumar Limbachiya";

    // Form submission event listener
    var pizzaForm = document.getElementById('pizzaForm');
    pizzaForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate form
        if (validateForm()) {
            // Capture form input values
            var size = document.getElementById('size').value;
            var crust = document.getElementById('crust').value;
            var toppings = [];
            var checkboxes = document.getElementsByName('topping');
            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    toppings.push(checkbox.value);
                }
            });

            // Create Pizza object
            var pizza = new Pizza(size, crust, toppings);

            // Display pizza description
            displayPizza(pizza);
        }
    });
});

// Validate form function
function validateForm() {
    var size = document.getElementById('size').value;
    var crust = document.getElementById('crust').value;
    var checkboxes = document.getElementsByName('topping');
    var checkedToppings = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
    });

    if (size === "" || crust === "" || checkedToppings.length === 0) {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}

// Function to display pizza description
function displayPizza(pizza) {
    var pizzaDescription = "You ordered a " + pizza.size + " pizza with " + pizza.crust + " crust and the following toppings: ";
    if (pizza.toppings.length > 0) {
        pizzaDescription += pizza.toppings.join(', ');
    } else {
        pizzaDescription += "no toppings.";
    }
    // Output pizza description to the page
    var main = document.querySelector('main');
    var descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = pizzaDescription;
    main.appendChild(descriptionParagraph);
}
