import React from 'react';
import { Shell, ConfigProvider } from '@alifd/next';

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider >
      <Shell >
        <Shell.Content>{children}</Shell.Content>
      </Shell>
    </ConfigProvider>
  );
}
