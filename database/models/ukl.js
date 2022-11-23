import { Model, DataTypes } from 'sequelize';
import connection from '../connection';


const initUkl = (sequelize, DataTypes) => {
  class Ukl extends Model {}
  Ukl.init({
    nomor: DataTypes.STRING,
    status: DataTypes.STRING,
    judul: DataTypes.STRING,
    tanggalPelaksanaan: DataTypes.STRING,
    pemrakarsa: DataTypes.STRING,
    konsultas: DataTypes.STRING,
    dokumentasi: DataTypes.STRING,
    urlDokumentasi: DataTypes.STRING,
    beritaAcara: DataTypes.STRING,
    urlBerita: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ukl',
    tableName: 'ukl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return Ukl;
};

export default initUkl(connection, DataTypes);