module.exports=(sequelize, DataTypes)=>{
    let Users=sequelize.define("users",{
        username:{
            type:DataTypes.STRING,
            Unique:true
        },
        password:DataTypes.STRING,
        role:DataTypes.STRING,
        restaurant_id:{
            type:DataTypes.INTEGER,
            references:{
                mode:"restaurants",
                key:"id"
            }
        },
        active:{
            type:DataTypes.BOOLEAN,
            default:true
        }
    })
    return Users;
}