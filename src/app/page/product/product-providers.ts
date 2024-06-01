import { Optional } from "@angular/core";
import { TimeoutService } from "@core/service/time-out.service";
import { TIMEOUT_CONFIG, TimeoutFactory } from "@core/service/timeout-factory.service";

export const ProductProviders = [
  { 
    provide: TimeoutService, 
    useFactory: TimeoutFactory.createTimeoutService, 
    deps: [[new Optional(), TIMEOUT_CONFIG] ]
  },
]