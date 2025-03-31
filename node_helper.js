const Log = require('logger')
const NodeHelper = require('node_helper')
const fs = require('node:fs')
const path = require('node:path')

module.exports = NodeHelper.create({
  start() {
    Log.log('MMM-MyStandings helper started ...')

    this.localLogos = {}
    const fsTree = this.getDirectoryTree('./modules/MMM-MyStandings/logos')
    fsTree.forEach((league) => {
      if (league.children) {
        this.localLogos[league.name] = league.children
      }
    })
  },

  getDirectoryTree(dirPath) {
    const result = []
    const files = fs.readdirSync(dirPath, { withFileTypes: true })

    files.forEach((file) => {
      const filePath = path.join(dirPath, file.name)
      if (file.name.endsWith('.svg') || file.name.endsWith('.png')) {
        result.push({ name: file.name })
      }
      else if (file.isDirectory()) {
        const children = this.getDirectoryTree(filePath)
        if (children.length > 0) {
          result.push({ name: file.name, children })
        }
      }
    })

    return result
  },

  async getData(notification, payload) {
    try {
      const response = await fetch(payload.url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      this.sendSocketNotification(notification, {
        result: data,
        uniqueID: payload.uniqueID,
      })
    }
    catch (error) {
      Log.error('[MMM-MyStandings] Could not load data.', error)
    }
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived(notification, payload) {
    if (notification.startsWith('STANDINGS_RESULT')) {
      this.getData(notification, payload)
    }
    else if (notification == 'MMM-MYSTANDINGS-GET-LOCAL-LOGOS') {
      this.sendSocketNotification('MMM-MYSTANDINGS-LOCAL-LOGO-LIST', { instanceId: payload.instanceId, index: payload.index, logos: this.localLogos })
    }
  },
})
