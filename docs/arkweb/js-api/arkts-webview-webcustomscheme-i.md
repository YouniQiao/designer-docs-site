# WebCustomScheme

Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## isStandard

```TypeScript
isStandard?: boolean
```

If isStandard is true, the scheme will be handled as a standard scheme. The standard schemes needs to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738, which can be found in the http://www.ietf.org/rfc/rfc1738.txt.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isCodeCacheSupported

```TypeScript
isCodeCacheSupported?: boolean
```

If isCodeCacheSupported is true, then the js of this scheme can generate code cache.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## isSupportCORS

```TypeScript
isSupportCORS: boolean
```

Whether Cross-Origin Resource Sharing is supported.

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isCspBypassing

```TypeScript
isCspBypassing?: boolean
```

If isCspBypassing is true, then this scheme can bypass Content Security Policy (CSP) checks. In most cases, this value should not be true when isStandard is true.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## schemeName

```TypeScript
schemeName: string
```

Name of the custom scheme.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isSecure

```TypeScript
isSecure?: boolean
```

If isSecure is true, the same security rules as those applied to the "https" URL will be used to handle the scheme.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isDisplayIsolated

```TypeScript
isDisplayIsolated?: boolean
```

If isDisplayIsolated is true, then the scheme can only be displayed from other content hosted using the same scheme.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isSupportFetch

```TypeScript
isSupportFetch: boolean
```

Whether fetch request is supported.

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isLocal

```TypeScript
isLocal?: boolean
```

If isLocal is true, the same security rules as those applied to the "file" URL will be used to handle the scheme.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

