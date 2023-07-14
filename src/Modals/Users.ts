import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnection";

export class User extends Model {
    id: number;
    name: string;
    address: string;
    mobile_no: number;
}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile_no: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users', // We need to choose the model name,
  timestamps: false
});