import type { Meta, StoryObj } from '@storybook/react';
import Label from '../components/Label.tsx';

const meta = {
  title: 'Text/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text', description: 'label의 htmlFor 속성' },
    children: { control: 'text', description: 'label의 text' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'username',
    children: '이메일',
  },
};