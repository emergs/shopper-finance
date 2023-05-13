import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryColumn("bigint", { nullable: false })
  code: bigint;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "decimal" })
  cost_price: number;

  @Column({ type: "decimal" })
  sales_price: number;
}
