import React from 'react';

import Shiny from '../ui/shiny';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Shiny', module)
    .add('typical', () => (
      <Shiny />
    ));