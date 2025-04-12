'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const mass = [];
  let newState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      const { extraData } = action;

      newState = { ...newState, ...extraData };
    } else if (action.type === 'removeProperties') {
      const { keysToRemove } = action;

      newState = { ...newState };

      for (const key of keysToRemove) {
        delete newState[key];
      }
    } else if (action.type === 'clear') {
      newState = {};
    }

    mass.push(newState);
  }

  return mass;
}

module.exports = transformStateWithClones;
