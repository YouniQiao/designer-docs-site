# ClientAuthenticationHandler

Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## cancel

```TypeScript
cancel(): void
```

Cancel this certificate request.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## confirm

```TypeScript
confirm(priKeyFile: string, certChainFile: string): void
```

Confirm to use the specified private key and client certificate chain.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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

Confirm to use the authUri.The authUri can be obtained from certificate management.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authUri | string | Yes | is the key of credentials.The credentials contain sign info and client certificates info. |

## confirm

```TypeScript
confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void
```

Confirm to use the identify of the certificate. The identify can be obtained from certificate management.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identity | string | Yes | The identify of the credential. |
| credentialTypeOrCertChainFile | CredentialType \| string | Yes | The type of the credential or the file that storeclient certificate chain. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## ignore

```TypeScript
ignore(): void
```

Ignore this certificate request temporarily.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

