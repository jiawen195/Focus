import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from '../reducers';

// Logger Middleware
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const store = configureStore({reducer: rootReducer});