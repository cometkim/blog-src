import React, { Reducer } from 'react';
import debounce from 'lodash/debounce';

type ScrollState = {
  pageYOffset: number,
  deltaY: number,
  accDeltaY: number,
  movingUp: boolean,
  movingDown: boolean,
};

type ScrollAction =
    | { type: 'UPDATE', payload: number };

const ScrollReducer: Reducer<ScrollState, ScrollAction> = (state, action) => {
  const pageYOffset = action.payload | 0;
  const deltaY = pageYOffset - state.pageYOffset;

  // 방향이 변경되었으면 누적값을 초기화 합니다.
  const turnDirection = deltaY * state.deltaY <= 0;
  const accDeltaY = turnDirection ? 0 : deltaY + state.deltaY;

  return {
    pageYOffset,
    deltaY,
    accDeltaY,
    movingUp: deltaY < 0,
    movingDown: deltaY > 0,
  };
};

const initialScrollState: ScrollState = {
  pageYOffset: 0,
  deltaY: 0,
  accDeltaY: 0,
  movingUp: false,
  movingDown: false,
};

const ScrollContext = React.createContext<ScrollState>(initialScrollState);

export const ScrollStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(ScrollReducer, initialScrollState);

  React.useEffect(() => {
    const handleScroll = debounce(
      () => dispatch({ type: 'UPDATE', payload: window.pageYOffset }),
      30,
      { leading: false, trailing: true }
    );
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <ScrollContext.Provider value={state}>
      {children}
    </ScrollContext.Provider>
  );
};

export function useScrollState() {
  const state = React.useContext(ScrollContext);
  return state;
}
