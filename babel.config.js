module.exports = (api) => {
  const presets = [
    [
      '@babel/env', {
        targets: {
          chrome: 34
        },
        useBuiltIns: 'usage'
      }
    ],
    [
      '@babel/preset-react'
    ]
  ]

  const plugins = [
    ['import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }],
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]

  api.cache(false)
  return { presets, plugins }
}
