import {Ukl} from '../../../database/models';
import {Op} from "sequelize"


export default async function handler(req, res) {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Ukl.count({
        where:{ 
            [Op.or]: [{nomor:{
                [Op.like]: '%'+search+'%'
            }}, {status:{ 
                [Op.like]: '%'+search+'%'
            }}, {judul:{
                [Op.like]: '%'+search+'%'
            }}, {tanggalPelaksanaan:{
                [Op.like]: '%'+search+'%'
            }}, {pemrakarsa:{
                [Op.like]: '%'+search+'%'
            }}, {konsultas:{
                [Op.like]: '%'+search+'%'
            }}]
        }
    }); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Ukl.findAll({
        where:{
            [Op.or]: [{nomor:{
                [Op.like]: '%'+search+'%'
            }}, {status:{
                [Op.like]: '%'+search+'%'
            }}, {judul:{
                [Op.like]: '%'+search+'%'
            }}, {tanggalPelaksanaan:{
                [Op.like]: '%'+search+'%'
            }}, {pemrakarsa:{
                [Op.like]: '%'+search+'%'
            }}, {konsultas:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['id', 'DESC']
        ]
    });
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
}