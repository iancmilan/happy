import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602607973558 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
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
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        },
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
