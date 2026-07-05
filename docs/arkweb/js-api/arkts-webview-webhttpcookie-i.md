# WebHttpCookie

Defines the Web's HTTPCookie. <p><strong>API Note</strong>:<br> The maximum length allowed for each attribute value in a cookie string is 1024. </p>

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## path

```TypeScript
path: string
```

获取cookie的path

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## isSessionCookie

```TypeScript
isSessionCookie: boolean
```

获取是否是session cookie

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## domain

```TypeScript
domain: string
```

获取cookie的域名

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## isHttpOnly

```TypeScript
isHttpOnly: boolean
```

获取当前cookie是否被标记了HttpOnly

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## name

```TypeScript
name: string
```

获取cookie的name

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## isSecure

```TypeScript
isSecure: boolean
```

获取当前cookie是否是secure cookie

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## expiresDate

```TypeScript
expiresDate: string
```

获取cookie的失效日期

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## samesitePolicy

```TypeScript
samesitePolicy: WebHttpCookieSameSitePolicy
```

获取当前cookie的samesite策略

**Type:** WebHttpCookieSameSitePolicy

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## value

```TypeScript
value: string
```

获取cookie的value

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

