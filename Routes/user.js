const router = require('express').Router()

data= require("../Controller/user");

router.post("/post",data.post_data)

router.get("/get_All_data", data.get_All_data)

router.get("/get_Data_id/:id", data.get_id)

router.delete('/post_delet/:id', data.post_delet);

router.put('/put_data/:id', data.put_data);

module.exports=router