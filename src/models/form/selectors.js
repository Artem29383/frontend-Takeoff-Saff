import { createSelector } from '@reduxjs/toolkit';

const getEntities = state => state.forms.conditionals.entities;

const getIds = state => state.forms.conditionals.ids;

export const getEntitiesSel = createSelector(getEntities, entities => entities);

export const getIdsSel = createSelector(getIds, ids => ids);