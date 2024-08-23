const backendDomain = 'http://localhost:8080';
// const backendDomain="https://uprevol-quotation-backend.vercel.app";
// const backendDomain = 'https://7d2a-2401-4900-464d-a0bb-539-224f-e8ed-c9ca.ngrok-free.app';

// ngrok url
const SummaryApi = {
    signup: {
        url: `${backendDomain}/api/signup`,
        method: "post",
    },
    signin: {
        url: `${backendDomain}/api/signin`,
        method: "post",
    },
    currentuser: {
        url: `${backendDomain}/api/userdetails`,
        method: "get",
    },
    logout: {
        url: `${backendDomain}/api/logout`,
        method: "get",
    },
    allusers: {
        url: `${backendDomain}/api/all-users`,
        method: "get",
    },
    updateUser: {
        url: `${backendDomain}/api/updateUser`,
        method: "post",
    },
    product: {
        url: `${backendDomain}/api/upload-product`,
        method: "post",
    },
    allproducts: {
        url: `${backendDomain}/api/get-product`,
        method: "get",
    },
    deleteproduct: {
        url: `${backendDomain}/api/delete-product`,
        method: "post"
    },    
    updateproduct: {
        url: `${backendDomain}/api/update-product`,
        method: "post",
    },
    categoryProduct: {
        url: `${backendDomain}/api/get-productCategory`,
        method: "get",
    },
    productsOfCategory: {
        url: `${backendDomain}/api/get-categoryallproducts`,
        method: "post",
    },
    productdetails: {
        url: `${backendDomain}/api/get-productdetails`,
        method: "post",
    },
    addToCart: {
        url: `${backendDomain}/api/addto-cart`,
        method: "post",
    },
    cartProductCount: {
        url: `${backendDomain}/api/products-added`,
        method: "get",
    },
    viewcart: {
        url: `${backendDomain}/api/view-cart`,
        method: "get",
    },
    updatecart: {
        url: `${backendDomain}/api/update-cartproduct`,
        method: "post",
    },
    deletecartproduct: {
        url: `${backendDomain}/api/deletecart-product`,
        method: "post",
    },
    seacrhProduct: {
        url: `${backendDomain}/api/search-product`,
        method: "get",
    },
    Enquercart: {
        url: `${backendDomain}/api/enquery-cart`,
        method: "post",
    },
    userfeedback: {
        url: `${backendDomain}/api/feedback`,
        method: "post",
    },
    uploadbanner: {
        url: `${backendDomain}/api/upload-banner`,
        method: "post",
    },
    displaybanners: {
        url: `${backendDomain}/api/banners`,
        method: "get",
    },
    deletebanner: {
        url: `${backendDomain}/api/banners`,
        method: 'post',
    },
    addSale: {
        url: `${backendDomain}/api/add-sale`,
        method: 'post',
    },
    displaySale: {
        url: `${backendDomain}/api/show-sale`,
        method: 'GET',
    },
    deleteSale: {
        url: (id) => `${backendDomain}/api/delete-sale/${id}`,
        method: 'DELETE',
    },
    
    editSale: {
        url:(id)=> `${backendDomain}/api/edit-sale/${id}`,
        method: 'post',
    },
   
    addService: {
        url: `${backendDomain}/api/add-service`,
        method: 'POST',
    },
    updateService: {
        url: (id) => `${backendDomain}/api/update-service/${id}`,
        method: 'post',
    },
    deleteService: {
        url: (id) => `${backendDomain}/api/delete-service/${id}`,
        method: 'DELETE',
    },
    displayService:{
        url: `${backendDomain}/api/show-services`,
        method: 'get',
    },
    addTestimonial:{
        url:`${backendDomain}/api/add-testimonial`,
        method:'post',
    },
    deleteTestimonial:{
        url: (id) => `${backendDomain}/api/delete-testimonial/${id}`,
        method: 'DELETE',
    },
    displayTestimonial:{
        url:`${backendDomain}/api/display-testimonial`,
        method:"get",
        },
    addwhychooseus:{
        url:`${backendDomain}/api/add-info`,
        method:"post",
    },
    displaywhychooseus:{
        url:`${backendDomain}/api/display-info`,
        method:"get",
    },
    deletewhychooseus:{
        url: (id) => `${backendDomain}/api/delete-info/${id}`,
        method: 'DELETE',
    },
addcontact:{
    url:`${backendDomain}/api/update-contactInfo`,
    method:"post",
},
showcontact:{
    url:`${backendDomain}/api/display-contactInfo`,
    method:"get",
},
deletecontact:{
    url: (id) => `${backendDomain}/api/delete-contactInfo/${id}`,
    method: 'DELETE',
},
getRandomProducts: {
    url: `${backendDomain}/api/random-products`,
    method: 'get',
},
};

export default SummaryApi;
