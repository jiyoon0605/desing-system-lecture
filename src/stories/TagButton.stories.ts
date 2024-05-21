import type { Meta, StoryObj } from '@storybook/react';
import TagButton from '../components/TagButton.tsx';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {control: 'text', description: '태그 버튼 텍스트'},
    onClick: {action: 'clicked', description: '태그 버튼 클릭 이벤트'},
    isChecked: {control: 'boolean', description: '태그 버튼 체크 여부'}
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag Button',
    isChecked: false,
  },
};