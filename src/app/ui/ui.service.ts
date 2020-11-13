import { Injectable } from '@angular/core'
import { Meta, MetaDefinition, Title } from '@angular/platform-browser'

interface MetaDataConfig {
  description?: string
  image?: string
  title?: string
}

@Injectable()
export class UiService {
  private appColor = '#343a40'
  private appImage = '/assets/logo.png'
  private appTitle = 'BeeSoft Labs'
  private appDescription = 'Changing lives through code!'

  constructor(public readonly meta: Meta, private readonly title: Title) {}

  public setMetaData(config: MetaDataConfig): void {
    const description = config.description || this.appDescription
    const image = config.image || this.appImage
    const title = config.title ? `${config.title} - ${this.appTitle}` : this.appTitle

    this.title.setTitle(title)

    const tags: MetaDefinition[] = [
      { name: 'description', content: description },
      { name: 'theme-color', content: this.appColor },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
    ]

    tags.forEach((tag) => this.meta.updateTag(tag))
  }
}
