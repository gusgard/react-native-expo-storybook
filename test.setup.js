import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.window = global;

configure({ adapter: new Adapter() });

// Can't use mount with react-native as it depends on "browser-like environment"
// https://github.com/airbnb/enzyme/issues/341
