import { SpanStatus } from '../_helpers/enums';

export interface Span {
    id?: string;
    startDate?: Date;
    endDate?: Date;
    autoRenew?: boolean;
    kwhRate?: number;
    estimatedConsumption?: number;
    readingAtStart?: number;
    readingAtEnd?: number;
    actualConsumption?: number;
    spanStatus?: SpanStatus;
}
