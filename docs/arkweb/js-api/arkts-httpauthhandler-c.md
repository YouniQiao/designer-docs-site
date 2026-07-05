# HttpAuthHandler

Defines the http auth request result, related to {@link onHttpAuthRequest} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## cancel

```TypeScript
cancel(): void
```

通知Web组件用户取消HTTP认证操作。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## confirm

```TypeScript
confirm(userName: string, password: string): boolean
```

使用用户名和密码进行HTTP认证操作。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userName | string | Yes | HTTP认证用户名。 |
| password | string | Yes | HTTP认证密码。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true is returned if the authentication is successful; otherwise, false is returned. |

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isHttpAuthInfoSaved

```TypeScript
isHttpAuthInfoSaved(): boolean
```

通知Web组件用户使用服务器缓存的账号密码认证。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true is suitable for use; otherwise, false is not suitable for use. |

