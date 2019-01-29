import { Contract } from './contract';
import { UserType } from './../_helpers/enums';
import { Bank } from './bank';
import { Address } from './address';
import { Meter } from './meter';

export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    DateCreated?: Date;
    lastActive?: Date;
    referenceNumber?: string;
    knownAs?: string;
    userType?: UserType;
    roles?: string[];
    address?: Address;
    bank?: Bank;
    meter?: Meter;
    contract?: Contract;
}
