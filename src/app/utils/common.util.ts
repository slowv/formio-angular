import {Injectable} from "@angular/core";

@Injectable()
export class CommonUtils {

  static getMillisecondStartToDay(): number {
    const current = new Date();
    return new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0, 0, 0).getTime();
  }

  static getMillisecondEndToDay(): number {
    const current = new Date();
    return new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59, 999).getTime();
  }

  static getMillisecondStart7Day(): number {
    const current = new Date();
    return new Date(current.getFullYear(), current.getMonth(), current.getDate() - 7, 0, 0, 0, 0).getTime();
  }

  static getMillisecondStartDay(time: any): number {
    const current = new Date(time);
    return new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0, 0, 0).getTime();
  }

  static getMillisecondEndDay(time: any): number {
    const current = new Date(time);
    return new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59, 999).getTime();
  }

  static toUtcTime(localTime: number): number {
    const time = new Date(localTime);
    return Date.UTC(time.getUTCFullYear(), time.getUTCMonth(), time.getUTCDate(),
      time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds(), time.getUTCMilliseconds());
  }

  static getDateByMillisecond(time: any): Date {
    return new Date(time);
  }

  static getMillisecondByDate(time: Date): number {
    return new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0, 0, 0).getTime();
  }
}
