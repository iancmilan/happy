import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602597486789 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, //sempre vai ser um número positivo
          isPrimary: true, //primary key
          isGenerated: true, //coluna vai ser gerada automaticamente
          generationStrategy: 'increment', //auto-increment no id
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, //números depois da vírgula
          precision: 2, //números antes da vírgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10, //números depois da vírgula
          precision: 2, //números antes da vírgula
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
