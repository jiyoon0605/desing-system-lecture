import type { Meta, StoryObj } from '@storybook/react';
import TagList from '../components/TagList.tsx';
import { fn } from '@storybook/test';

const meta = {
  title: 'List/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagList: {control: 'multi-select', description: '태그 리스트', options: ['태그1', '태그2', '태그3']},
    onTagClick: {action: '태그 클릭 이벤트'}
  },
  args: {
    onTagClick: fn()
  }
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['태그1', '태그2', '태그3']
  },
};