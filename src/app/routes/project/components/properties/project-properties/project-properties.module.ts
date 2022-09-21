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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectEditorsComponent } from './project-editors/project-editors.component';
import { ProjectPropertiesComponent } from './project-properties.component';
import { PublishPanelModule } from '../../publish-panel/publish-panel.module';
import { CdCommonModule, CdPropertiesModule } from 'cd-common';
import { CdCommonPipeModule } from 'cd-common/pipes';
import { OwnerDetailsModule } from '../../owner-details/owner-details.module';
import { UserListModule } from '../../user-list/user-list.module';

@NgModule({
  declarations: [ProjectEditorsComponent, ProjectPropertiesComponent],
  imports: [
    CommonModule,
    UserListModule,
    OwnerDetailsModule,
    PublishPanelModule,
    CdPropertiesModule,
    CdCommonPipeModule,
    CdCommonModule,
  ],
  exports: [ProjectPropertiesComponent],
})
export class ProjectPropertiesModule {}
