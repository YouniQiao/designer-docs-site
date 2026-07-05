# ClientAuthenticationHandler

Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## cancel

```TypeScript
cancel(): void
```

取消证书请求事件。同时，相同host和port服务器的请求，不重复上报该事件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## confirm

```TypeScript
confirm(priKeyFile: string, certChainFile: string): void
```

确认使用指定的私钥和客户端证书链。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKeyFile | string | Yes | The file that store private key. |
| certChainFile | string | Yes | The file that store client certificate chain. |

## confirm

```TypeScript
confirm(authUri: string): void
```

使用指定的凭据(从证书管理模块获得)。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authUri | string | Yes | is the key of credentials.The credentials contain sign info and client certificates info. |

## confirm

```TypeScript
confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void
```

确认使用从证书管理模块获取的指定凭据和凭据类型。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identity | string | Yes | The identify of the credential. |
| credentialTypeOrCertChainFile | CredentialType \| string | Yes | The type of the credential or the file that store  client certificate chain. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## ignore

```TypeScript
ignore(): void
```

Ignore this certificate request temporarily.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

