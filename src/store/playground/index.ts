import {createSlice} from '@reduxjs/toolkit'
import {matrix, zeros} from "mathjs";
import {produce} from "immer"
import GameOfLife from "@/lib/GameOfLife";

export const index = createSlice({
  name: 'matrix',
  initialState: {
    // previous matrix history
    previous: [],
    // current matrix
    present: matrix(zeros([16, 16])),
    // next matrix history
    next: [],
  },
  reducers: {
    // set matrix to a clone of another matrix,  will clear previous and next
    clone: (state, action) => {
      state.current = matrix(action.payload);
      state.previous = [];
      state.next = [];
    },
    // iterate once, will replace present, and add old state to previous, do nothing on next
    once: (state) => {
      state.history = produce(state.history, draft => draft.push(state.present));
      let game = new GameOfLife(matrix(state.current));
      // game.once() will return a new matrix, and set it to present
      state.current = game.once();
      game = null;
    },
    // loop many times, will replace present, and add old state to previous, do nothing on next
    loop: (state, action) => {
      const times = action.times;
      if (times < 0) {
        return
      }
      let game = new GameOfLife(state.current);
      for (let i = 0; i < times; i++) {
        state.previous = produce(state.previous, draft => draft.push(state.present))
        state.present = game.once();
      }
      game = null;
    },
    // fastForward, no intermediate process history
    fastForward: (state, action) => {
      const times = action.times;
      if (times < 0) {
        return
      }
      state.previous = produce(state.history, draft => draft.push(state.present))
      let game = new GameOfLife(state.current);
      state.current = game.loop(times);
      game = null;
    },
    // rewind current matrix to previous, and make present to next array
    rewind: (state) => {
      state.next = produce(state.next, draft => draft.push(state.present));
      state.present = state.previous.pop();
      state.previous = produce(state.previous, draft => draft.pop());
    },
    // reset matrix to zeros, and clear all previous and next
    reset: (state) => {
      state.present = matrix(zeros([16, 16]));
      state.previous = [];
      state.next = [];
    },
    // clear matrix to zeros, clear next, but keep previous
    clear: (state) => {
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      });
      state.present = matrix(zeros([16, 16]));
      state.next = [];
    },
    // draw a point, and add it to current matrix, clear  next, but keep previous
    draw: (state, action) => {
      const {row, col} = action.payload;
      state.next = [];
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      })
      state.present = produce(state.present, draft => {
        draft.set([row, col], 1)
      })
    },
    erase: (state, action) => {
      const {row, col} = action.payload;
      state.next = [];
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      })
      state.present = produce(state.present, draft => {
        draft.set([row, col], 0)
      })
    }
  }
})

export const {} = index.actions

export default index.reducer