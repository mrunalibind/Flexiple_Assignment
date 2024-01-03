module.exports=(sequelize, DataTypes)=>{
    let Tables=sequelize.define("tables",{
        restaurant_id:{
            type:DataTypes.INTEGER,
            references:{
                mode:"restaurants",
                key:"id"
            }
        },
        table_number:DataTypes.INTEGER,
        status:{
            type:DataTypes.STRING,
            enum:["free","occupied"],
            default:"free"
        },
        
    })
    return Tables;
}