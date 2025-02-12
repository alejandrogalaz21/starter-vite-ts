import type { Epic } from 'redux-observable';

import { of, from } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

import { getStarShips } from 'src/services';

import { requestStart, fetchSuccess, requestFailure } from './app-slice';

export const fetchAppEpic: Epic = (action$) =>
  action$.pipe(
    filter(requestStart.match),
    switchMap(() =>
      from(getStarShips()).pipe(
        map((response: any) => fetchSuccess(response)),
        catchError((error) => of(requestFailure(error.message)))
      )
    )
  );

/**
 * Array of all epics.
 */
export const appEpics = [fetchAppEpic];
