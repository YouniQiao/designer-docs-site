# SslError

```TypeScript
declare enum SslError
```

Enum type supplied to {@link error} when onSslErrorEventReceive being called.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Invalid

```TypeScript
Invalid = 0
```

一般错误。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## HostMismatch

```TypeScript
HostMismatch = 1
```

主机名不匹配。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## DateInvalid

```TypeScript
DateInvalid = 2
```

证书日期无效。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## Untrusted

```TypeScript
Untrusted = 3
```

证书颁发机构不受信任。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

