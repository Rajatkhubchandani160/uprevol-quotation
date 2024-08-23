const saleModel=require('../models/Sale')
const deletesale=async(req,res)=>{
    try {
        const sale = await saleModel.findByIdAndDelete(req.params.id);
        if (!sale) return res.status(404).json({ success: false, message: 'Sale not found' });
        res.status(200).json({ success: true, message: 'Sale deleted' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }

}
module.exports=deletesale