# CacheOptions

Web组件预编译JavaScript生成字节码缓存的配置对象，用于控制字节码缓存更新。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## responseHeaders

```TypeScript
responseHeaders: Array<WebHeader>
```

请求此JavaScript文件时服务器返回的响应头，使用E-Tag或Last-Modified标识文件版本，判断是否需要更新。

**Type:** Array<WebHeader>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

