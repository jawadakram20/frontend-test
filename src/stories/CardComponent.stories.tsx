import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardComponent from '../components/CardComponent';

export default {
    title: 'CardComponent',
    component: CardComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        handleOnChange: { action: 'handleOnChange' },
    },
  } as ComponentMeta<typeof CardComponent>;

  const Template: ComponentStory<typeof CardComponent> = (args : any) => <CardComponent {...args} />;

export const Cards = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cards.args = {
  label: 'Flood zone 3',
  isChecked: true,
};