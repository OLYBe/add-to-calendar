import React from "react";
import { CalendarEvent } from "./makeUrls";
declare type AddToCalendarProps = {
    event: CalendarEvent;
    open?: boolean;
    filename?: string;
};
declare const AddToCalendar: React.FC<React.PropsWithChildren<AddToCalendarProps>>;
export default AddToCalendar;
