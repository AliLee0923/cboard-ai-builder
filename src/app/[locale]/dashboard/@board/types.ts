import { Grid } from './Grid/types';
import { TileRecord } from '@/components/Tile/types';

export type BoardRecord = {
  id: string;
  isPublic: boolean;
  tiles: TileRecord[];
  isFixed: boolean;
  author: string;
  email: string;
  lastEdited: string;
  grid: Grid;
  cellSize?: string;
  locale?: string;
  format?: string;
  description?: string;
  nameKey?: string;
  caption?: string;
  hidden?: boolean;
  name?: string;
  prevId?: string;
  focusedTileId?: string;
  promptId?: string;
};
