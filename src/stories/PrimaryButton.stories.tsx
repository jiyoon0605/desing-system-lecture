import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryButton from '../components/PrimaryButton.tsx';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{width: '360px'}}><Story /></div>],
  argTypes: {
    children: { control: 'text', description: '버튼 텍스트' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    isDisabled: { control: 'boolean', description: '버튼 비활성화 여부' },
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text'],
      },
      description: '버튼 테마',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    isDisabled: false,
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    children: 'Light Button',
    isDisabled: false,
    theme: 'light',
  },
};

export const Social: Story = {
  args: {
    children: 'Social Button',
    isDisabled: false,
    theme: 'social',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    isDisabled: false,
    theme: 'text',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
    theme: 'dark',
  },
};