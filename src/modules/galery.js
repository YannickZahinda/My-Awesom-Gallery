const getDataFromApi = async() => {
    const url = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Spaghetti');
    const response = await url.json();
    const mealContainer = document.querySelectorAll('img');
    // console.log(response.meals[0].strMealThumb);
    let mealArray = [];
    mealArray.push(response.meals);
    // console.log(mealArray[0]);
    mealArray.filter((meal) => {
        mealContainer.forEach(element => {
            meal.filter((elt) =>{
                let imgArray = [];
                imgArray.push(elt.strMealThumb)
               element.src = imgArray;
            });
        });
    })

}

export default getDataFromApi;