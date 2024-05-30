import { Meta, StoryObj } from '@storybook/react';
import LoginForm from '../components/LoginForm.tsx';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.findByLabelText('이메일');
    await expect(emailInput).toBeInTheDocument();
    
    const passwordInput = await canvas.findByLabelText('비밀번호');
    await expect(passwordInput).toBeInTheDocument();
    
    const loginButton = canvas.getByRole('button', {name: '로그인'});
    
    await expect(loginButton).toBeDisabled();
  }
};
export const FilledForm: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.findByLabelText('이메일');
    await userEvent.type(emailInput, 'test@email.com');
    
    const passwordInput = await canvas.findByLabelText('비밀번호');
    await userEvent.type(passwordInput, 'a-random-password');
    
    const loginButton = canvas.getByRole('button', {name: '로그인'});
    
    await expect(loginButton).toBeEnabled();
  }
  
};
