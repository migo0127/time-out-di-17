import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeoutModule } from '@core/timeout.module';
import { GlobalTimeoutConfig } from '@core/interface/timeout-config.enum';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      BrowserAnimationsModule,
      TimeoutModule.withConfig(
        // 配置全域 app.component ＆ header.component 使用
        { idleLimit: GlobalTimeoutConfig.idleLimit, idleWarning: GlobalTimeoutConfig.idleWarning }
      )
    ),
    provideClientHydration(),
  ]
};
