import type { Meta, StoryObj } from '@storybook/react';
import CategoryButton from '../components/CategoryButton.tsx';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {control: 'text', description: '아이콘 대체 텍스트'},
    iconPath: {control: 'text', description: '아이콘 경로'},
    children: {control: 'text', description: '카테고리 텍스트'},
    onClick: {action: 'clicked', description: '버튼 클릭 이벤트'},
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: '아이콘',
    iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-category.svg',
    children: 'category',
  },
};