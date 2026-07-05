# SecureDnsMode

```TypeScript
enum SecureDnsMode
```

Web组件使用HTTPDNS的模式。

**Since:** 10

**System capability:** SystemCapability.Web.Webview.Core

## OFF

```TypeScript
OFF = 0
```

不使用HTTPDNS， 可以用于撤销之前使用的HTTPDNS配置。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## AUTO

```TypeScript
AUTO = 1
```

自动模式，HttpDns的用户设置用于DNS解析，若解析失败，则使用系统DNS进行解析。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## SECURE_ONLY

```TypeScript
SECURE_ONLY = 2
```

强制使用设定的HTTPDNS服务器进行域名解析。如果解析失败，将不会回退到系统 DNS，这将直接导致页面加载失败。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

