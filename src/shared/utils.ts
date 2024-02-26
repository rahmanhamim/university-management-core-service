import { WeekDays } from '@prisma/client';

export const asyncForEach = async (array: any[], callback: any) => {
    if (!Array.isArray(array)) {
        throw new Error('Expected an array');
    }
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

// export const hasTimeConflict = (
//     existingSlots: {
//         startTime: string;
//         endTime: string;
//         dayOfWeek: WeekDays;
//     }[],
//     newSlot: {
//         startTime: string;
//         endTime: string;
//         dayOfWeek: WeekDays;
//     }
// ) => {
//     for (const slot of existingSlots) {
//         const existingStart = new Date(`1970-01-01T${slot.startTime}:00`);
//         const existingEnd = new Date(`1970-01-01T${slot.endTime}:00`);
//         const newStart = new Date(`1970-01-01T${newSlot.startTime}:00`);
//         const newEnd = new Date(`1970-01-01T${newSlot.startTime}:00`);

//         if (newStart < existingEnd && newEnd > existingStart) {
//             return true;
//         }
//     }
//     return false;
// };

export function hasTimeConflict(
    existingSlots: {
        startTime: string;
        endTime: string;
        dayOfWeek: WeekDays;
    }[],
    newSlot: {
        startTime: string;
        endTime: string;
        dayOfWeek: WeekDays;
    }
) {
    for (const slot of existingSlots) {
        if (
            slot.dayOfWeek === newSlot.dayOfWeek &&
            ((newSlot.startTime >= slot.startTime &&
                newSlot.startTime < slot.endTime) ||
                (newSlot.endTime > slot.startTime &&
                    newSlot.endTime <= slot.endTime) ||
                (newSlot.startTime <= slot.startTime &&
                    newSlot.endTime >= slot.endTime))
        ) {
            return true; // Conflict found
        }
    }
    return false; // No conflict
}
