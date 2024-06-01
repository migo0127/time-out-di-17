import { ModuleWithProviders, NgModule, Optional } from "@angular/core";
import { ITimeoutConfig } from "./interface/time-out-config.interface";
import { TimeoutService } from "./service/time-out.service";
import { TIMEOUT_CONFIG, TimeoutFactory } from "./service/timeout-factory.service";

@NgModule({
  imports: [],
  exports: [],
})
export class TimeoutModule {
  public static withConfig(
    config?: ITimeoutConfig
  ): ModuleWithProviders<TimeoutModule> {
    return {
      ngModule: TimeoutModule,
      providers: [
        { provide: TIMEOUT_CONFIG, useValue: config },
        { provide: TimeoutService, 
          useFactory: TimeoutFactory.createTimeoutService, 
          deps: [[new Optional(), TIMEOUT_CONFIG]]
        },
      ],
    }
  }
}