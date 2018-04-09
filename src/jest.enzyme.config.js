// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// for jasmine-reporter
var jasmineReporters = require('jasmine-reporters');
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
    new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'test-results'
    })
);
