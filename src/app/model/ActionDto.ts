import {AbstractAuditingDto} from "./AbstractAuditingDto";

export interface ActionDto extends AbstractAuditingDto {
  id?: string;
  name: string;
  title: string;
  priority: number
}
