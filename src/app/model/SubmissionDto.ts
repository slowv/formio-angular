import {AbstractAuditingDto} from "./AbstractAuditingDto";

export interface SubmissionDto extends AbstractAuditingDto {
  id?: string;
  formId: string;
  formName?: string;
  data: any;
  metadata?: any;
}
