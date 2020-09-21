Forked from: https://github.com/siddharthkp/bundlesize

The only differences are 
1. this does not call `process.exit(1)` when a glob pattern does not match any files. (https://github.com/jackyef/bundlesize/commit/808611f9f0e91d34358ff66a655079be0e6ebb77)
2. this does not match the same file twice even if multiple glob patterns match a same file. It only uses the first match (https://github.com/jackyef/bundlesize/commit/13b04e0640e453d3a0f904153cecfb6db480b72a)
