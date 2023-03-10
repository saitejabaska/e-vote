"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Ques", "elecID", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.sequelize.query(
      'ALTER TABLE "Ques" ADD CONSTRAINT "Ques_elecId_Elections_fk" FOREIGN KEY ("elecId") REFERENCES "Elections" (id) MATCH SIMPLE ON DELETE CASCADE'
    );

    // await queryInterface.addConstraint("Questions", {
    //   fields: ["electionId"],
    //   type: "foreign key",
    //   references: {
    //     table: "Elections",
    //     field: "id",
    //   },
    // });
  },

  async down(queryInterface, Sequelize) {
    // console.log("hi");
    await queryInterface.removeColumn("Ques", "elecId");
  },
};
