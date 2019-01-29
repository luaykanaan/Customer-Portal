import { ContractStatus } from './../_helpers/enums';
import { Span } from './span';
export interface Contract {
    id?: string;
    contractNumber?: string;
    contractStatus?: ContractStatus;
    spans?: Span[];
}
