import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "cars",
})
export class Car extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  no_police!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price_perday!: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  capacity!: Number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  transmision!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @DeletedAt
  deleted_at!: Date;
}
