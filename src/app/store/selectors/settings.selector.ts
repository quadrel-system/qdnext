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

import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ISettingsState } from '../reducers/settings.reducer';
import { IUserSettings } from 'cd-interfaces';

/**
 *
 */
export const getSettingsState = createFeatureSelector<ISettingsState>('settings');

/**
 *
 */
export const getUserSettings = createSelector(
  getSettingsState,
  (state: ISettingsState) => state.userSettings
);

/**
 *
 */
export const getDebugCanvas = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.debugCanvas
);

export const getPrefersAbsolute = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.prefersAbsolute
);

export const getUserStarredProjects = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.starredProjects
);

/**
 *
 */
export const getDarkTheme = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.darkTheme
);

export const getDebugGlass = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.debugGlass
);

export const getBreakGlass = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.breakGlass
);

export const getShowingBoardIds = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.showingBoardIds
);

export const getDebugStats = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.showStats
);

export const getDebugDragAndDrop = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.debugDragAndDrop
);

export const getIsLocalDatabaseDisabled = createSelector(
  getUserSettings,
  (settings: IUserSettings) => settings.disableIdb
);
