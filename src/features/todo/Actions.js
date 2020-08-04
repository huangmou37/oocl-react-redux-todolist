import { createAction } from '@reduxjs/toolkit';

export const addTodoAction = createAction('ADD', (itemContent) => ({
    payload: {
        itemContent: itemContent
    }
}));

export const checkTodoAction = createAction('CHECK', (checkedItem) => ({
    payload: {
        checkedItem: checkedItem
    }
}));