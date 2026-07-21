# ProxyConfig

The ProxyConfig used by applyProxyOverride.

**Since:** 15

<!--Device-webview-class ProxyConfig--><!--Device-webview-class ProxyConfig-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="bypasshostnameswithoutperiod"></a>
## bypassHostnamesWithoutPeriod

```TypeScript
bypassHostnamesWithoutPeriod(): void
```

Hostnames without a period in them (and that are not IP literals) will skip the proxy and connect the server directly.Examples: "abc", "local", "some-domain".

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-bypassHostnamesWithoutPeriod(): void--><!--Device-ProxyConfig-bypassHostnamesWithoutPeriod(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="clearimplicitrules"></a>
## clearImplicitRules

```TypeScript
clearImplicitRules(): void
```

By default, certain hostnames implicitly bypass the proxy if they are link-local IPs, or localhost addresses. For instance hostnames matching any of (non-exhaustive list): localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10Call this function to override the default behavior and force localhost and link-local URLs to be sent through the proxy.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-clearImplicitRules(): void--><!--Device-ProxyConfig-clearImplicitRules(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="enablereversebypass"></a>
## enableReverseBypass

```TypeScript
enableReverseBypass(reverse: boolean): void
```

Reverse the bypass rules.

If false all URLs will use proxy settings except URLs match the bypass rules.If true only URLs in the bypass list will use proxy, and all other URLs will be connected to directly.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-enableReverseBypass(reverse: boolean): void--><!--Device-ProxyConfig-enableReverseBypass(reverse: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reverse | boolean | Yes | If reverse the bypass rule. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

<a id="getbypassrules"></a>
## getBypassRules

```TypeScript
getBypassRules(): Array<string>
```

Returns the bypass rules.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-getBypassRules(): Array<string>--><!--Device-ProxyConfig-getBypassRules(): Array<string>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | The bypass rules. |

<a id="getproxyrules"></a>
## getProxyRules

```TypeScript
getProxyRules(): Array<ProxyRule>
```

Returns the proxy rules.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-getProxyRules(): Array<ProxyRule>--><!--Device-ProxyConfig-getProxyRules(): Array<ProxyRule>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ProxyRule&gt; | The proxy rules. |

<a id="insertbypassrule"></a>
## insertBypassRule

```TypeScript
insertBypassRule(bypassRule: string): void
```

Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server directly instead.These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to"https://www.example.com" and "http://test.example.com" will connect the server directly.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-insertBypassRule(bypassRule: string): void--><!--Device-ProxyConfig-insertBypassRule(bypassRule: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bypassRule | string | Yes | The bypass rule. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

<a id="insertdirectrule"></a>
## insertDirectRule

```TypeScript
insertDirectRule(schemeFilter?: ProxySchemeFilter): void
```

Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-insertDirectRule(schemeFilter?: ProxySchemeFilter): void--><!--Device-ProxyConfig-insertDirectRule(schemeFilter?: ProxySchemeFilter): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| schemeFilter | [ProxySchemeFilter](arkts-arkweb-webview-proxyschemefilter-e.md) | No | The scheme filter for this rule. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

<a id="insertproxyrule"></a>
## insertProxyRule

```TypeScript
insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void
```

Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will use the proxy rule if schemeFilter is null.

The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults to 80 for HTTP, 443 for HTTPS and 1080 for SOCKS.

e.g. example.com host: example.com https://example.com scheme: https host: example.com example.com:8888 host: example.com port: 8888https://example.com:8888 scheme:https host: example.com port:8888192.168.1.1 host: 192.168.1.1192.168.1.1:8888 host:192.168.1.1 port: 8888[10:20:30:40:50:60:70:80]

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void--><!--Device-ProxyConfig-insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxyRule | string | Yes | The proxy rule. |
| schemeFilter | [ProxySchemeFilter](arkts-arkweb-webview-proxyschemefilter-e.md) | No | The scheme filter for this rule. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

<a id="isreversebypassenabled"></a>
## isReverseBypassEnabled

```TypeScript
isReverseBypassEnabled(): boolean
```

Returns if reverse bypass rules.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyConfig-isReverseBypassEnabled(): boolean--><!--Device-ProxyConfig-isReverseBypassEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | If reverse bypass enabled. |

