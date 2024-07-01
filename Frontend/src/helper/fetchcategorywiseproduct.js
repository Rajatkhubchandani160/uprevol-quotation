import SummaryApi from "../common"

const fetchcategorywiseproduct = async(category)=>{
    const response = await fetch(SummaryApi.productsOfCategory.url,{
        method : SummaryApi.productsOfCategory.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}


export default fetchcategorywiseproduct