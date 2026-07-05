# BackForwardCacheSupportedFeatures

This class is used to enable back forward cache supported features.

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

## mediaTakeOver

```TypeScript
mediaTakeOver: boolean
```

是否允许使用视频托管的页面进入前进后退缓存。 如果设置为允许，需要维护为视频元素创建的系统控件的生命周期，避免造成泄漏。 true：允许使用视频托管的页面进入前进后退缓存，false：不允许使用视频托管的页面进入前进后退缓存。 默认值：false。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## nativeEmbed

```TypeScript
nativeEmbed: boolean
```

是否允许使用同层渲染的页面进入前进后退缓存。 如果设置为允许，需要维护为同层渲染元素创建的系统控件的生命周期，避免造成泄漏。 true：允许使用同层渲染的页面进入前进后退缓存，false：不允许使用同层渲染的页面进入前进后退缓存。 默认值：false。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

