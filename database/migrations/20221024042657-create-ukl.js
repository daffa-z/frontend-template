module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ukls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomor: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
      },
      tanggalPelaksanaan: {
        type: Sequelize.STRING
      },
      pemrakarsa: {
        type: Sequelize.STRING
      },
      konsultas: {
        type: Sequelize.STRING
      },
      dokumentasi: {
        type: Sequelize.STRING
      },
      urlDokumentasi: {
        type: Sequelize.STRING
      },
      beritaAcara: {
        type: Sequelize.STRING
      },
      urlBerita: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ukls');
  }
};