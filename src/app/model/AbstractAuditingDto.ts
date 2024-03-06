export interface AbstractAuditingDto {
  readonly createdBy?: string;
  readonly createdDate?: Date;
  readonly lastModifiedDate?: Date;
  readonly lastModifiedBy?: string;
  readonly deletedDate?: Date;
}
