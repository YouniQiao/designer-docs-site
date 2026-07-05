# PermissionRequest

权限请求。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

PermissionRequest的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## deny

```TypeScript
deny(): void
```

Reject the request.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## getAccessibleResource

```TypeScript
getAccessibleResource(): Array<string>
```

Gets the resource that the webpage is trying to access.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> |  |

## getOrigin

```TypeScript
getOrigin(): string
```

Gets the source if the webpage that attempted to access the restricted resource.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## grant

```TypeScript
grant(resources: Array<string>): void
```

Grant origin access to a given resource.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resources | Array&lt;string> | Yes | List of resources that can be requested by the web page with the permission to  grant. |

