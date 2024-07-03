import _ from 'lodash';


const backendDomain="http://localhost:8080"

const SummaryApi={
    signup:{
        url:`${backendDomain}/api/signup`,method:"post"
    },
    signin:{
        url:`${backendDomain}/api/signin`,method:"post"
    },
    currentuser:{
        url:`${backendDomain}/api/userdetails`,method:"get"
    },
    logout:{
        url:`${backendDomain}/api/logout`,method:"get"
    },
    allusers:{
        url:`${backendDomain}/api/all-users`,method:"get"
    },
    updateUser:{
        url:`${backendDomain}/api/updateUser`,method:"post"
    },
    product:{
        url:`${backendDomain}/api/upload-product`,method:"post"
    },
    allproducts:{
         url:`${backendDomain}/api/get-product`,method:"get"
    },
    updateproduct:{
        url:`${backendDomain}/api/update-product`,
        method:"post"
    },
    categoryProduct :{
        url:`${backendDomain}/api/get-productCategory`,
        method:"get"
    },
    productsOfCategory:{
        url:`${backendDomain}/api/get-categoryallproducts`,
        method:"post"
    },
    productdetails:{
        url:`${backendDomain}/api/get-productdetails`,
        method:"post"
    },
    addToCart:{
        url:`${backendDomain}/api/addto-cart`,
        method:"post"
    },
    cartProductCount:{
        url:`${backendDomain}/api/products-added`,
        method:"get"
    },
    viewcart:{
        url:`${backendDomain}/api/view-cart`,
        method:"get"
    },
    updatecart:{
        url:`${backendDomain}/api/update-cartproduct`,
        method:"post"
    },
    deletecartproduct:{
        url:`${backendDomain}/api/deletecart-product`,
        method:"post"
    },
    seacrhProduct:{
        url:`${backendDomain}/api/search-product`,
        method:"get"
    },
    Enquercart:{
        url:`${backendDomain}/api/enquery-cart`,
        method:"post"
    },
    userfeedback:{
        url:`${backendDomain}/api/feedback`,
        method:"post"
    }
}

export default SummaryApi
