import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DefaultTextInput from '../components/DefaultTextField.tsx';

const meta = {
  title: 'Input/DefaultTextInput',
  component: DefaultTextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    errorMessage: {control: 'text', description: '에러 메시지'},
    iconPath: {control: 'text', description: '아이콘 경로'},
    onIconClick: {action: 'clicked', description: '아이콘 클릭 이벤트'},
    placeholder: {control: 'text', description: '플레이스홀더'},
    onChange: {action: 'changed', description: '텍스트 변경 이벤트'},
    value: {control: 'text', description: '텍스트 값'},
    iconAlt: {control: 'text', description: '아이콘 대체 텍스트'},
  },
  args: {onIconClick: fn(), onChange: fn()}
} satisfies Meta<typeof DefaultTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id:'email',
    errorMessage: '에러 메세지',
    iconAlt: 'delete icon',
    iconPath: '/icons/ic-delete-dark.svg',
    placeholder: '텍스트를 입력해 주세요',
    value: '',
    isError: false
  },
};
