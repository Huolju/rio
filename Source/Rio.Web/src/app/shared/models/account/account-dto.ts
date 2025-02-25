import { UserSimpleDto } from '../user/user-simple-dto';
import { AccountStatusDto } from './account-status-dto';
export class AccountDto {
    AccountID: number;
    AccountName: string;
    AccountNumber: number;
    CreateDate: Date;
    InactivateDate: Date;
    Notes: string;
    AccountVerificationKey: string;
    AccountVerificationKeyLastUseDate: Date;
    AccountStatus: AccountStatusDto;
    Users: Array<UserSimpleDto>;
    AccountDisplayName: string;
    NumberOfParcels: number;
    NumberOfUsers: number;
    ShortAccountDisplayName: string;
    
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

