import { AccountSimpleDto } from '../account/account-simple-dto';

export class ParcelAllocationAndUsageDto {
    ParcelID: number;
    ParcelNumber: string;
    ParcelStatusID: number;
    ParcelAreaInAcres: number;
    LandOwner: AccountSimpleDto;
    Allocation: number;
    ProjectWater: number;
    Reconciliation: number;
    NativeYield: number;
    StoredWater: number;
    UsageToDate: number;
    Allocations: {[key : number]: number};

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}


