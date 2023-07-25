import {createSlice} from '@reduxjs/toolkit'
import {matrix, zeros} from "mathjs";
import {produce} from "immer"
import GameOfLife from "@/lib/GameOfLife";

export const index = createSlice({
  name: 'matrix',
  initialState: {
    // previous matrix previous
    previous: [] as any[],
    // current matrix
    present: matrix(zeros([16, 16])).toArray() as any[],
    // next matrix previous
    next: [] as any[],
  },
  reducers: {
    // set matrix to a clone of another matrix, will clear previous and next
    clone: (state, action) => {
      state.present = action.payload;
      state.previous = [];
      state.next = [];
    },
    // iterate once, will replace present, and add old state to previous, do nothing on next
    once: (state) => {
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      });
      let game = new GameOfLife(state.present);
      // game.once() will return a new matrix, and set it to present
      state.present = game.once();
    },
    // loop many times, will replace present, and add old state to previous, do nothing on next
    loop: (state, action) => {
      const times = action.payload;
      if (times < 0) {
        return
      }
      let game = new GameOfLife(state.present);
      for (let i = 0; i < times; i++) {
        state.previous = produce(state.previous, draft => {
          draft.push(state.present)
        })
        state.present = game.once();
      }
    },
    // fastForward, no intermediate process previous
    fastForward: (state, action) => {
      const times = action.payload;
      if (times < 0) {
        return
      }
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      })
      let game = new GameOfLife(state.present);
      state.present = game.loop(times);
    },
    // rewind present matrix to previous, and make present to next array
    rewind: (state) => {
      if (state.previous.length === 0) {
        return
      }
      state.next = produce(state.next, draft => {
        draft.push(state.present)
      });
      state.present = state.previous.pop() || matrix(zeros([16, 16])).toArray();
      state.previous = produce(state.previous, draft => {
        draft.pop()
      });
    },
    // reset matrix to zeros, and clear all previous and next
    reset: (state) => {
      state.present = matrix(zeros([16, 16])).toArray();
      state.previous = [];
      state.next = [];
    },
    // clear matrix to zeros, clear next, but keep previous
    clear: (state) => {
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      });
      state.present = matrix(zeros([16, 16])).toArray();
      state.next = [];
    },
    // draw a point, and add it to present matrix, clear  next, but keep previous
    draw: (state, action) => {
      const {row, col} = action.payload;
      state.next = [];
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      })
      state.present = produce(state.present, draft => {
        draft = matrix(draft).set([row, col], 1).toArray()
      })
    },
    erase: (state, action) => {
      const {row, col} = action.payload;
      state.next = [];
      state.previous = produce(state.previous, draft => {
        draft.push(state.present)
      })
      state.present = produce(state.present, draft => {
        draft = matrix(draft).set([row, col], 0).toArray()
      })
    }
  }
})

export const {} = index.actions

export default index.reducer