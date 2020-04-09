import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { desktopBreakpoint } from '../theme';

export default function useDesktopBreakpoint() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(desktopBreakpoint));
}
