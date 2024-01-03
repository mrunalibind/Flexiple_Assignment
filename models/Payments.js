module.exports=(sequelize, DataTypes)=>{
    let Payments=sequelize.define("payments",{
        amount:DataTypes.STRING,
    })
    return Payments;
}