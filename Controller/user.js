const db = require("../create_database")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Mayuri@123",
        database: "Crud_data",
    },
});


post_data=(req,res)=>{
    const createdPost={
        Title:req.body.Title,
        Discription:req.body.Discription
    }
    knex('Item').insert(createdPost)
    .then((data)=>{
        res.send("Data is posted Sucessfully")
    })
    .catch((err)=>{
        res.status(403).json({
            succes:0,
            message:'Something is wrong,Its Failed'
        })
        
    })    
}

get_All_data = (req, res) => {
    knex.from('Item').select("*")
        .then((rows) => {
            res.send(rows)

        })
}

get_id = (req, res) => {
    knex.select("Item.id", "Item.Title", "Item.Discription").from("Item").where({ id: req.params.id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
};

post_delet = (req, res) => {
    knex.select("*").from("Item").where({ id: req.params.id })
        .del()
        .then(() => {
            res.send("Data is sucessufully deleted");
        })
        .catch((err) => {
            res.send(err);
        });
};

put_data = (req, res) => {
    knex("Item").where({ id: req.params.id }).update({
        Title:req.body.Title,
        Discription:req.body.Discription
        })
        .then(() => {

            knex.select("Item.id", "Item.Title", "Item.Discription").from("Item").where({ id: req.params.id })
                .then((data) => {
                    res.send(data)
                })
        })
        .catch((err) => {
            res.send(err);
        });

};

module.exports={post_data,get_All_data,get_id,post_delet,put_data}