const initialState = [];

      export default function (state = initialState, action) {
          const { type, payload } = action;

          switch (type) {
              case 'FETCH_PROJECTS':
                  return payload;
              case 'CREATE_PROJECT':
                  return [...state, payload];
              default:
                  return state;
          }
      }