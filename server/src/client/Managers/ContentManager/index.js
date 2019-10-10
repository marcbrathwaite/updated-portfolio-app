import ContentfulClient from '../../services/ContentfulClient'

class ContentManager {
  constructor({ contentfulType }) {
    this.contentfulManager = ContentfulClient
    this.contentfulType = contentfulType
  }

  async getContentfulContent() {
    const result = await this.contentfulManager.getModels({
      content_type: this.contentfulType
    })
    return result.items[0]
  }
}

export default ContentManager
