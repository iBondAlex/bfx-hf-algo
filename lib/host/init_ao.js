'use strict'

const initAOState = require('./init_ao_state')
const genHelpers = require('./gen_helpers')

/**
 * Creates a new algo order instance from the provided definition object &
 * arguments.
 *
 * @param {Object} aoDef - algo order definition
 * @param {Object} args - instance arguments
 * @return {Object} instance
 */
module.exports = (aoDef = {}, args = {}) => {
  const state = initAOState(aoDef, args)
  const h = genHelpers(state)

  return { state, h }
}
