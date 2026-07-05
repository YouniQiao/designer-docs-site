# BackForwardCacheOptions

前进后退缓存相关设置对象，用来控制Web组件前进后退缓存相关选项。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## constructor

```TypeScript
constructor()
```

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## timeToLive

```TypeScript
timeToLive: number
```

设置每个Web组件允许页面在前进后退缓存中停留的时间。 设置为0或负数时，前进后退缓存功能不生效。 单位：秒。默认值：600。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## size

```TypeScript
size: number
```

设置每个Web组件允许缓存的最大页面个数。 默认为1，最大可设置为50。 设置为0或负数时，前进后退缓存功能不生效。 Web会根据内存压力对缓存进行回收。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

