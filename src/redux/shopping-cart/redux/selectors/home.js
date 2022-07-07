import { createSelector } from 'reselect';

const stateHome = state => state.home;

export const getLoadingHome = createSelector(
    stateHome,
    state => state.loading
)

export const getAllDataProductFromState = createSelector(
    stateHome,
    state => state.dataProducts
)