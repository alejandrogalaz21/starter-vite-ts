import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { start } from 'src/redux/app/app-slice';
import { DashboardContent } from 'src/layouts/dashboard';

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(start());
  });

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 'auto',
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      >
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </DashboardContent>
  );
}
