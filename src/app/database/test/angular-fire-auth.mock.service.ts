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

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type firebase from 'firebase/app';

const FAKE_UID = '1';

@Injectable({
  providedIn: 'root',
})
export class AngularFireAuthMock {
  get user(): Observable<Partial<firebase.User>> {
    return of({
      displayName: 'Unnamed Tester',
      photoURL:
        'https://lh4.googleusercontent.com/-kMB-c5xRzvc/AAAAAAAAAAI/AAAAAAAAAmk/ub0AGOoc-vE/s40-c/photo.jpg',
      uid: FAKE_UID,
      email: 'test@example.com',
    });
  }
}
