import {FormDto} from "./FormDto";
import {ActionDto} from "./ActionDto";

export interface FormActionDto {
  form: FormDto,
  actions: ActionDto[]
}
