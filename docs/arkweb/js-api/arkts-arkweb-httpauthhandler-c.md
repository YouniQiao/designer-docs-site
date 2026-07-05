# HttpAuthHandler

Defines the http auth request result, related to {@link onHttpAuthRequest} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## cancel

```TypeScript
cancel(): void
```

Cancels HTTP authentication as requested by the user.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## confirm

```TypeScript
confirm(userName: string, password: string): boolean
```

Performs HTTP authentication with the user name and password provided by the user.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userName | string | Yes | HTTP authentication user name. |
| password | string | Yes | HTTP authentication password. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** is returned if the authentication is successful; otherwise, **false** is returned. |

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## isHttpAuthInfoSaved

```TypeScript
isHttpAuthInfoSaved(): boolean
```

Determine whether the credentials stored for the current host are suitable for use. If the credentials have previously been rejected by the server for the current request, they are not suitable for use.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** is suitable for use; otherwise, **false** is not suitable for use. |

