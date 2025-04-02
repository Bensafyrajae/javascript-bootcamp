let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};



const displayGroceries = () => {
    console.log("Fruits in the groceries list:");
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();



const cloneGroceries = () => {
    let user = client;
    console.log("Initial user value:", user);

    client = "Betty";
    console.log("After changing client to Betty, user value:", user); 
    // why?? >> Strings  passed by value (primtive type), so modifying the variable zill not effect user.

    // Q2.3:
    let shopping = groceries;
    console.log("Initial shopping total price:", shopping.totalPrice);

    // Q2.4:
    shopping.totalPrice = "35$";
    console.log("After changing shopping total price, groceries total price:", groceries.totalPrice); 
    // why?? >> Objects are passed by reference, so modifying 'shopping' also modifies 'groceries'.

    // Q2.5: 
    shopping.other.paid = false;
    console.log("After changing shopping paid status, groceries paid status:", groceries.other.paid); 
    //why?? >> also the same = objects are passed by reference, changing 'shopping' effect 'groceries' .
};

// Q2.6: invoke
cloneGroceries();