import { MeterReading } from './meter-reading';

export interface Meter {
    id?: string;
    meterNumber?: string;
    meterReadings?: MeterReading[];
}
