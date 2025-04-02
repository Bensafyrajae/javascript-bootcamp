let allBoldItems;

const getBoldItems=()=> {
    allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();

const highlight=()=>{
    for (const item of allBoldItems) {
        item.style.color = "blue";
    }

}

const returnItemsToDefault = () => {
    for (const item of allBoldItems) {
        item.style.color = "black";
    }
};

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);


