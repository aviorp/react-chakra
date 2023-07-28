import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';


const customTheme = extendTheme({
  colors,
  config,
  components,
});

export default customTheme;
