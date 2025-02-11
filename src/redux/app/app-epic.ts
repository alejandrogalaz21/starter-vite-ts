import type { Epic } from 'redux-observable';

import { of, from } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

import { getStarShips } from 'src/services';

import { start, success, failure } from './app-slice';

export const fetchAppEpic: Epic = (action$) =>
  action$.pipe(
    filter(start.match),
    switchMap(() =>
      from(getStarShips()).pipe(
        map((response: any) => success(response)),
        catchError((error) => of(failure(error.message)))
      )
    )
  );

/**
 * Array of all epics.
 */
export const appEpics = [fetchAppEpic];
