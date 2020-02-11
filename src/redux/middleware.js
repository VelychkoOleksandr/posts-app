export const logger = (store) => (next) => (action) => {

  console.log('ACTION:', action.type);
  console.log('PAYLOAD:', action.payload);
  console.log('STORE:', store.getState());
  console.log('---------------------------');

  return next(action);
}
