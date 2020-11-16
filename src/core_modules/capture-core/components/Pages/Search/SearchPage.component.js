// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import type { ComponentType } from 'react';
import i18n from '@dhis2/d2-i18n';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper/Paper';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button,
} from '@dhis2/ui';
import { LockedSelector } from '../../LockedSelector';
import type { ContainerProps, Props } from './SearchPage.types';
import { searchPageStatus } from '../../../reducers/descriptions/searchPage.reducerDescription';
import { SearchForm } from './SearchForm';
import { LoadingMask } from '../../LoadingMasks';
import { SearchResults } from './SearchResults/SearchResults.container';
import { TrackedEntityTypeSelector } from '../../TrackedEntityTypeSelector';
import { withErrorMessageHandler, withLoadingIndicator } from '../../../HOC';
import { InefficientSelectionsMessage } from '../../InefficientSelectionsMessage';
import { searchScopes } from './SearchPage.constants';
import { ResultsPageSizeContext } from '../shared-contexts';
import { useTitleText } from '../../../hooks/useTitleText';
import { cleanFallbackRelatedData } from './SearchPage.actions';

const getStyles = (theme: Theme) => ({
    maxWidth: {
        maxWidth: theme.typography.pxToRem(950),
    },
    title: {
        padding: '10px 0 0px 10px',
        fontWeight: 500,
        marginBottom: theme.typography.pxToRem(16),
    },
    container: {
        padding: '10px 24px 24px 24px' },
    paper: {
        padding: theme.typography.pxToRem(10),
    },
    emptySelectionPaperContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    backButton: {
        marginBottom: 10,
    },
    errorTitle: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 500,
        padding: '12px 0',
    },
    generalPurposeErrorMessage: {
        marginLeft: theme.typography.pxToRem(12),
        marginTop: theme.typography.pxToRem(10),
        marginBottom: theme.typography.pxToRem(20),
        color: theme.palette.error.main,
    },
    loadingMask: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const Index = ({
    showInitialSearchPage,
    navigateToMainPage,
    cleanSearchRelatedInfo,
    classes,
    trackedEntityTypesWithCorrelatedPrograms,
    availableSearchOptions,
    preselectedProgramId,
    searchStatus,
    trackedEntityTypeId,
    fallbackTriggered,
}: Props) => {
    const [selectedSearchScopeId, setSearchScopeId] = useState(preselectedProgramId);
    const [selectedSearchScopeType, setSearchScopeType] = useState(preselectedProgramId ? searchScopes.PROGRAM : null);
    const titleText = useTitleText(selectedSearchScopeId);

    useEffect(() => {
        const scopeId = preselectedProgramId || trackedEntityTypeId;
        setSearchScopeId(scopeId);

        const type = preselectedProgramId ? searchScopes.PROGRAM : null;
        setSearchScopeType(type);
    },
    [
        trackedEntityTypeId,
        preselectedProgramId,
    ]);

    useEffect(() => {
        // This statement is here because when we trigger the fallback search,
        // we rerender the page without a preselectedProgramId.
        // This is triggering this hook. However the fallback search view needs
        // to start with a loading spinner and not with the initial view.
        if (!fallbackTriggered) {
            showInitialSearchPage();
        }
        return () => {
            if (fallbackTriggered) {
                return cleanSearchRelatedInfo();
            }
            return undefined;
        };
    },
    [
        cleanSearchRelatedInfo,
        fallbackTriggered,
        preselectedProgramId,
        showInitialSearchPage,
    ]);

    const searchGroupsForSelectedScope =
      (selectedSearchScopeId ? availableSearchOptions[selectedSearchScopeId].searchGroups : []);


    const handleSearchScopeSelection = (searchScopeId, searchType) => {
        showInitialSearchPage();
        cleanSearchRelatedInfo();
        setSearchScopeId(searchScopeId);
        setSearchScopeType(searchType);
    };
    return (<>
        <ResultsPageSizeContext.Provider value={{ resultsPageSize: 5 }}>
            <LockedSelector
                customActionsOnProgramIdSet={[cleanFallbackRelatedData()]}
            />
            <div data-test="dhis2-capture-search-page-content" className={classes.container} >
                <Button
                    dataTest="dhis2-capture-back-button"
                    className={classes.backButton}
                    onClick={navigateToMainPage}
                >
                    <ChevronLeft />
                    {i18n.t('Back')}
                </Button>

                <Paper className={classes.paper}>
                    <div className={classes.maxWidth}>
                        <div className={classes.title} >
                            Find {titleText}
                        </div>
                        {
                            (selectedSearchScopeType !== searchScopes.PROGRAM) &&
                            <TrackedEntityTypeSelector
                                trackedEntityTypesWithCorrelatedPrograms={trackedEntityTypesWithCorrelatedPrograms}
                                onSelect={handleSearchScopeSelection}
                                selectedSearchScopeId={selectedSearchScopeId}
                            />
                        }

                        <SearchForm
                            fallbackTriggered={fallbackTriggered}
                            selectedSearchScopeId={selectedSearchScopeId}
                            searchGroupsForSelectedScope={searchGroupsForSelectedScope}
                        />

                        {
                            searchStatus === searchPageStatus.SHOW_RESULTS &&
                            <SearchResults
                                availableSearchOptions={availableSearchOptions}
                                fallbackTriggered={fallbackTriggered}
                            />
                        }

                        {
                            searchStatus === searchPageStatus.NO_RESULTS &&
                            <Modal position="middle">
                                <ModalTitle>{i18n.t('No results found')}</ModalTitle>
                                <ModalContent>
                                    {i18n.t('You can change your search terms and search again to find what you are looking for.')}
                                </ModalContent>
                                <ModalActions>
                                    <ButtonStrip end>
                                        <Button
                                            disabled={searchStatus === searchPageStatus.LOADING}
                                            onClick={showInitialSearchPage}
                                            type="button"
                                        >
                                            {i18n.t('Back to search')}
                                        </Button>
                                    </ButtonStrip>
                                </ModalActions>
                            </Modal>
                        }

                        {
                            searchStatus === searchPageStatus.LOADING &&
                            <div className={classes.loadingMask}>
                                <LoadingMask />
                            </div>
                        }

                        {
                            searchStatus === searchPageStatus.ERROR &&
                            <div
                                data-test="dhis2-capture-general-purpose-error-mesage"
                                className={classes.generalPurposeErrorMessage}
                            >
                                <div className={classes.errorTitle}>
                                    {i18n.t('An error has occurred')}
                                </div>
                                {i18n.t('There is a problem with this search, please change the search terms or try again later. For more details open the Console tab of the Developer tools')}
                            </div>
                        }
                    </div>
                </Paper>

            </div>
            {
                searchStatus === searchPageStatus.INITIAL && !selectedSearchScopeId &&
                    <InefficientSelectionsMessage
                        message={i18n.t('Choose a type to start searching')}
                    />
            }
        </ResultsPageSizeContext.Provider>
    </>);
};

export const SearchPageComponent: ComponentType<ContainerProps> =
  compose(
      withLoadingIndicator(),
      withErrorMessageHandler(),
      withStyles(getStyles),
  )(Index);
