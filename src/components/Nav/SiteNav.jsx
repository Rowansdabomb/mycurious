import React from 'react';
import useDesktopBreakpoint from '../useDesktopBreakpoint';
import AppBar from './AppBar';
import Drawer from './Drawer';

export default function SiteNav({ onChange, currentId }) {
  const desktopSized = useDesktopBreakpoint();

  if (desktopSized) {
    return <Drawer onClick={onChange} currentId={currentId} />;
  }
  return <AppBar onChange={onChange} currentId={currentId} />;
}
