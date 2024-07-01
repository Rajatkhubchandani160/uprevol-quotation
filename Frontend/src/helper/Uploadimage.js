import { toast } from "react-toastify";

const url = `https://api.cloudinary.com/v1_1/dvvttacq5/image/upload`
const uploadImage = async (image) => {
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset","mern_cotation");

    try {
        const dataResponse = await fetch(url, {
            method: "post",
            body: formdata,
        });
        const jsonResponse = await dataResponse.json();
        return jsonResponse;
        
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

export default uploadImage;
