import { User } from '../../../database/models';
import {Op} from "sequelize"

export default async function handler(req, res) {
  try {

    const totalRows = await User.count({
      where:{ 
          [Op.or]: [{first_name:'john'}]
          }
      }); 
    const users = await User.findAll({
      attributes: ['first_name', 'last_name', 'email'],
      include: 'tasks',
      limit: 100,
      
    });
    
    res.status(200).json({ users });
    console.log(totalRows)
  } catch (e) {
    res.status(400).json({
      error_code: 'get_users',
      message: e.message,
    });
  }
}
