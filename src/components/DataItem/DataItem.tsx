import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditOutlined from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import { useFormatter } from 'next-intl';

import Box from '@mui/material/Box';

export type BaseDataItemType = {
  prompt: string;
  date: Date | string;
};

type Props<DataType extends BaseDataItemType> = {
  data: DataType;
  onDelete: (dataRow: DataType) => void;
};

export default function DataItem<DataType extends BaseDataItemType>({
  data,
  onDelete,
}: Props<DataType>) {
  const format = useFormatter();

  return (
    <ListItem
      divider
      secondaryAction={
        <Box>
          <IconButton size="small">
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton onClick={() => onDelete(data)} size="small">
            <DeleteOutline fontSize="small" />
          </IconButton>
        </Box>
      }
    >
      <Tooltip title={data.prompt} arrow>
        <ListItemText
          primary={data.prompt}
          primaryTypographyProps={{
            style: {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
          secondary={format.relativeTime(new Date(data.date))}
          sx={{ pr: 4 }}
          aria-multiline="false"
        />
      </Tooltip>
    </ListItem>
  );
}
