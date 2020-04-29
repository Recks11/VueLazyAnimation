import { LazyTransitionConfig } from '@/../lazy-transition'
import { ObserverService } from '@/service/ObserverService'

const defaultObserverConfig: LazyTransitionConfig = {
  options: {
    root: null,
    rootMargin: '0px',
    threshold: [0.5, 0.75, 1]
  },
  intersectionRatio: 0
}

function initConfig (config?: LazyTransitionConfig) {
  if (config) {
    config.options.root = config.options.root || defaultObserverConfig.options.root
    config.options.rootMargin = config.options.rootMargin || defaultObserverConfig.options.rootMargin
    config.options.threshold = config.options.threshold || defaultObserverConfig.options.threshold
    return config
  }
  return defaultObserverConfig
}

export function createObserverService (config?: LazyTransitionConfig | undefined): ObserverService {
  config = initConfig(config)

  return new ObserverService(config)
}
