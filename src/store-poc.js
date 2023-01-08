// TODO LO ANTERIOR SE HACE POR DETRÁS ESTO
export default function createStore(reducer, preloadedState) {
  let state = preloadedState;
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return function unsubscribe() {
      listener = listeners.filter((l) => l !== listener);
    };
  };
  dispatch({ type: "init" });
  return {
    getState,
    dispatch,
    subscribe,
  };
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENTE";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const increment = (step) => ({
  type: INCREMENT,
  payload: step,
  meta: {
    timestamp: new Date(),
  },
  error: true,
});
const store = createStore(reducer);
console.log({ store });
const showState = () => console.log(store.getState());
const unsubscribe = store.subscribe(showState);
showState();
store.dispatch(increment(5));
store.dispatch(increment(1));
unsubscribe();
store.dispatch({ type: "NOT_KNOWN" });
