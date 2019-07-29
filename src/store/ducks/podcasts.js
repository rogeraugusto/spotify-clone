import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// reduxsauce - Lib usada para facilitar a criação de Ducks (reducers e actions)

/**
 * Action Types & Creators (same file)
 */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

// O código acima automatiza o procedimento de criar types no formato padrão
// bem como os creators

// Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
// Creators:

/**
 * loadRequest: () => ({ type: 'LOAD_REQUEST' })
 * loadSuccess: (data) => ({ type: 'LOAD_SUCCESS', data })
 * loadFailure: () => ({ type: 'LOAD_FAILURE' })
 */

export const PodcastsTypes = Types;
export default Creators;

/**
 * Itinial state
 */

// Utiliza-se o Immutable para manter a imutabilidade, não podendo alterar
// o valor
// Essa lib facilita também o retorno de um objeto padrão, mergindo com a nova
// informação | state.merge({ data: action.data })
export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  // Informar os reducers que recebem dados para tratamento
  // Não precisa passar os null
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
