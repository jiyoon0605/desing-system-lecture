import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  NavigationBar from '../components/NavigationBar.tsx';

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{width: '360px', border: '1px solid red'}}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    showBackButton: { control: 'boolean', description: 'back button 표시 여부'},
    showCloseButton: { control: 'boolean', description: 'close button 표시 여부'},
    onBackButtonClick: { action: 'clicked', description: 'back button 클릭 이벤트'},
    onCloseButtonClick: { action: 'clicked', description: 'close button 클릭 이벤트'},
    pageTitle: { control: 'text', description: '페이지 타이틀'},
    isDark: { control: 'boolean', description: '다크모드 여부'},
  },
  args: {
    showBackButton: true,
    showCloseButton: true,
    pageTitle: 'Page Title',
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
    isDark: false,
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};