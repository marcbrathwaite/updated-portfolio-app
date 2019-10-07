import { ContentfulClient, Contentfully } from 'contentfully'
import { spaceID, accessToken } from './constants'

// create the contentful client (we can use this later)
const contentfulClient = new ContentfulClient({
  accessToken: accessToken,
  spaceId: spaceID
})

// create a Contentfully instance
const contentfully = new Contentfully(contentfulClient)

export default contentfully
