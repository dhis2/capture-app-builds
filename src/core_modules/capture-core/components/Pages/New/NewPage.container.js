// @flow
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';
import type { ComponentType } from 'react';
import { NewPageComponent } from './NewPage.component';
import { showMessageToSelectOrgUnitOnNewPage, showDefaultViewOnNewPage } from './NewPage.actions';
import { typeof newPageStatuses } from './NewPage.constants';
import { useTrackedEntityTypesWithCorrelatedPrograms } from '../Search/SearchPage.container';

export const NewPage: ComponentType<{||}> = () => {
    const dispatch = useDispatch();

    const dispatchShowMessageToSelectOrgUnitOnNewPage = useCallback(
        () => { dispatch(showMessageToSelectOrgUnitOnNewPage()); },
        [dispatch]);

    const dispatchShowDefaultViewOnNewPage = useCallback(
        () => { dispatch(showDefaultViewOnNewPage()); },
        [dispatch]);


    const error: boolean =
        useSelector(({ activePage }) => activePage.selectionsError && activePage.selectionsError.error);

    const ready: boolean =
        useSelector(({ activePage }) => !activePage.isLoading);

    const currentProgramId: string =
        useSelector(({ currentSelections }) => currentSelections.programId);

    const currentOrgUnitId: string =
        useSelector(({ currentSelections }) => currentSelections.orgUnitId);

    const newPageStatus: $Keys<newPageStatuses> =
        useSelector(({ newPage }) => newPage.newPageStatus);

    const trackedEntityTypesWithCorrelatedPrograms = useTrackedEntityTypesWithCorrelatedPrograms();


    return (
        <NewPageComponent
            trackedEntityTypesWithCorrelatedPrograms={trackedEntityTypesWithCorrelatedPrograms}
            showMessageToSelectOrgUnitOnNewPage={dispatchShowMessageToSelectOrgUnitOnNewPage}
            showDefaultViewOnNewPage={dispatchShowDefaultViewOnNewPage}
            currentProgramId={currentProgramId}
            currentOrgUnitId={currentOrgUnitId}
            newPageStatus={newPageStatus}
            error={error}
            ready={ready}
        />);
};
