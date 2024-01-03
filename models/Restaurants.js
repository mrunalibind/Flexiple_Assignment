module.exports=(sequelize, DataTypes)=>{
    let Restaurants=sequelize.define("restaurants",{
        name:DataTypes.STRING,
        location:DataTypes.STRING,
        manager_user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:"users",
                key:"id",
            }
        }
        
    })
    return Restaurants;
}