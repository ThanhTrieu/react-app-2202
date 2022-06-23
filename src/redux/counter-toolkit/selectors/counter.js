import { createDraftSafeSelector } from '@reduxjs/toolkit';

const stateCounter = state => state.counter; // lay ra state cua ung dung

export const getStateCounter = createDraftSafeSelector(
    stateCounter,
    count => count.value
);