import { combineReducers } from 'redux';
import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from './action';
import { defaultCategories } from '../Data/initialData';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('userWidgets');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

const saveState = (state) => {
  try {
    const userWidgets = state.categories.reduce((acc, category) => {
      acc[category.id] = category.widgets.filter(widget => !widget.isDefault);
      return acc;
    }, {});
    const serializedState = JSON.stringify(userWidgets);
    localStorage.setItem('userWidgets', serializedState);
  } catch {
    // Ignore write errors
  }
};

const mergeWithUserWidgets = (defaultCats, userWidgets) => {
  return defaultCats.map(category => ({
    ...category,
    widgets: [...category.widgets, ...(userWidgets[category.id] || [])]
  }));
};

const userWidgets = loadState();
const initialState = {
  categories: mergeWithUserWidgets(defaultCategories, userWidgets),
  filteredCategories: mergeWithUserWidgets(defaultCategories, userWidgets),
  searchTerm: ''
};

const dashboardReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_WIDGET:
      newState = {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        ),
        filteredCategories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };
      saveState(newState);
      return newState;
    case REMOVE_WIDGET:
      newState = {
        ...state,
        categories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        ),
        filteredCategories: state.categories.map(category => 
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };
      saveState(newState);
      return newState;
    case SEARCH_WIDGETS:
      const term = action.payload.toLowerCase();
      return {
        ...state,
        searchTerm: term,
        filteredCategories: term === ''
          ? state.categories
          : state.categories.map(category => ({
              ...category,
              widgets: category.widgets.filter(widget =>
                widget.name.toLowerCase().includes(term) ||
                widget.text.toLowerCase().includes(term)
              )
            }))
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;