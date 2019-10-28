export interface RawSection {
    section: string;
    title: string;
    callNumber: string;
    credits: number;
    maxEnrollment: string;
    currentEnrollment: string;
    status: string;
    instructor: string;
    daysTimeLocation: Array<DayTimeLocation>;
    prereqs: string;
    coreqs: string;
}

export interface DayTimeLocation {
    day: string;
    site: string;
    building: string;
    room: string;
    startTime?: string;
    endTime?: string;
}