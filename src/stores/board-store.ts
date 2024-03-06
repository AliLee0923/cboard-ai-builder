import { createStore } from 'zustand';
import { BoardRecord } from '@/dashboard/@board/types';

export type BoardStoreRecord = BoardRecord | null;

export type BoardActions = {
  /*
  See how to update deeply nested objects 
  for tile in zustand: https://docs.pmnd.rs/zustand/guides/updating-state#deeply-nested-object
  */
  setBoard: (board: BoardRecord) => void;
  cleanBoard: () => void;
};

export type BoardStore = { board: BoardStoreRecord } & BoardActions;

export const defaultBoardState: { board: BoardRecord } = {
  board: {
    id: '',
    isPublic: false,
    tiles: [],
    isFixed: false,
    author: '',
    email: '',
    lastEdited: '',
    grid: { rows: 5, columns: 5, order: [] },
    cellSize: '',
  },
};

export const createBoardStore = (
  initState: { board: BoardRecord } | { board: null } = { board: null },
) =>
  createStore<BoardStore>()((set) => ({
    ...initState,
    setBoard: (board: BoardRecord) => set(() => ({ board: { ...board } })),
    cleanBoard: () => {
      // Should show a confirmation dialog
      set(() => ({ board: null }));
    },
  }));
