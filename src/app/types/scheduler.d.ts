export interface Course {
    section: string;
    title: string;
    callNumber: string;
    credits: string;
    maxEnrollment: string;
    currentEnrollment: string;
    status: 'O' | 'C';
    instructor: string;
    daysTimeLocation: DayTimeLocation[];
}

export interface DayTimeLocation {
    day: string;
    startTime: string;
    endTime: string;
    site: string;
    building: string;
    room: string;
}