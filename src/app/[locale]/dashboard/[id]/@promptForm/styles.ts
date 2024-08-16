import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { INITIAL_CONTENT_MAX_WIDTH } from '../constants';
import theme from '@/theme';

export default {
  promptForm: {
    borderRadius: 6,
    width: '100%',
    maxWidth: INITIAL_CONTENT_MAX_WIDTH,
  },
  submitIconButton: {
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
} satisfies Record<string, SxProps>;
