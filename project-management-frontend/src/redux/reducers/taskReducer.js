const initialState = [];

      export default function (state = initialState, action) {
          const { type, payload } = action;

          switch (type) {
              case 'FETCH_TASKS':
                  return payload;
              case 'CREATE_TASK':
                  return [...state, payload];
              default:
                  return state;
          }
      }