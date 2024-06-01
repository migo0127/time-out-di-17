import { Optional } from "@angular/core";
import { TimeoutService } from "@core/service/time-out.service";
import { TIMEOUT_CONFIG, TimeoutFactory } from "@core/service/timeout-factory.service";
import { HomeTimeoutConfig } from "@core/interface/timeout-config.enum";

export const HomeProviders = [
  {
    provide: TimeoutService,
    useFactory: TimeoutFactory.createTimeoutService,
    deps: [[new Optional(), TIMEOUT_CONFIG] ]
  },
  {
    provide: TIMEOUT_CONFIG,
    useValue: {
      idleLimit: HomeTimeoutConfig.idleLimit,
      idleWarning: HomeTimeoutConfig.idleWarning
    }
  },
];
