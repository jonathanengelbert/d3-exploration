import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  data: number[];
}

const initialState: DataState = {
  data: [12, 31, 22, 17, 25, 18, 29, 14, 9, 60],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = [
          ...state.data,
          action.payload

      ]
    },
  //   decrement: state => {
  //     state.value -= 1;
  //   },
  //   // Use the PayloadAction type to declare the contents of `action.payload`
  //   incrementByAmount: (state, action: PayloadAction<number>) => {
  //     state.value += action.payload;
  //   },
  },
});

export const {addData} = dataSlice.actions;
// export const { increment, decrement, incrementByAmount } = dataSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default dataSlice.reducer;
