export const ActionTypes = {
  INCREMENT_TOGGLE: "INCREMENT_TOGGLE",
  UPDATE_INPUT: "UPDATE_INPUT"
};

const initialState = {
  toggles: [0, 1, 2, 3],
  userInput: ''
};

export const reducer = (state = initialState, action) => {
  const { toggles } = state;
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.INCREMENT_TOGGLE:
      return {
        ...state,
        toggles: Object.assign(toggles, {
          [payload]: (toggles[payload] || 0) + 1
        })
      };
    case ActionTypes.UPDATE_INPUT:
      return {
        ...state,
        userInput: payload
      };
  }

  return state;
};
