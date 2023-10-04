/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig;
// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//         config.resolve.fallback = {
//           fs: false,
//         };
//       }
  
//       return config;
//     },
//   };

// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     },
//   }
// }

