/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AnalyticsEventType, IAnalyticsEventParams, IAnalyticsService } from 'cd-common/analytics';
import 'firebase/analytics';
import { environment } from 'src/environments/environment';
import { IExceptionEvent } from 'cd-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService implements IAnalyticsService {
  constructor() {}

  get analyticsDisabled(): boolean {
    return !environment.analyticsEnabled;
  }

  sendError(_err: string | Error, _stack?: string) {}

  sendFirebaseExceptionEvent(_analyticsEntry: IExceptionEvent) {}

  logEvent(_event: AnalyticsEventType, _eventParams: IAnalyticsEventParams = {}) {}
}
