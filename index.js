const YAML = require('json2yaml')
const fs = require('fs')
const axios = require('axios')
const config = require('config')
const slackToken = config.get('slackToken')
const emojiListName = config.get('emojisName')

console.log('Getting emojis...')
axios.get(`https://slack.com/api/emoji.list?token=${slackToken}`).then(function (res) {
  const emojis = res.data.emoji
  const convertedEmojis = {
    title: emojiListName,
    emojis: Object.keys(emojis).map(function (key) {
      return {
        name: key,
        src: emojis[key]
      }
    }).filter(function ({ src }) {
      return !~src.indexOf('alias')
    })
  }
  fs.writeFileSync('output.yaml', YAML.stringify(convertedEmojis))
  console.log('Emojis converted successfully!')
  console.log('Now type in emojipacks to start the upload')
  console.log(`${__dirname}/output.yaml is the path to your yaml file.`)
})
