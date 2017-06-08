import 'core-js'; // ES6 + reflect-metadata
// zone.js

import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';
// TestBed initialization
import { TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// load all specs in ./src
const context = (require as any).context('./', true, /\.spec\.ts$/);
const x =context.keys().map(context)
