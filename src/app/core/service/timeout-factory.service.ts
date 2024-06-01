import { InjectionToken } from "@angular/core";
import { ITimeoutConfig } from "../interface/time-out-config.interface";
import { TimeoutService } from "./time-out.service";

export const TIMEOUT_CONFIG = new InjectionToken<ITimeoutConfig>('TIMEOUT_CONFIG');

export class TimeoutFactory {
  static createTimeoutService: Function;
  createTimeoutService(config: ITimeoutConfig): TimeoutService {
    return new TimeoutService(config);
  }
}
