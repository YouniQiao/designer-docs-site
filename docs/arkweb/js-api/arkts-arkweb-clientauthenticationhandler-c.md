# ClientAuthenticationHandler

Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.

**Since:** 9

<!--Device-unnamed-declare class ClientAuthenticationHandler--><!--Device-unnamed-declare class ClientAuthenticationHandler-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="cancel"></a>
## cancel

```TypeScript
cancel(): void
```

Cancel this certificate request.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ClientAuthenticationHandler-cancel(): void--><!--Device-ClientAuthenticationHandler-cancel(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="confirm"></a>
## confirm

```TypeScript
confirm(priKeyFile: string, certChainFile: string): void
```

Confirm to use the specified private key and client certificate chain.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ClientAuthenticationHandler-confirm(priKeyFile: string, certChainFile: string): void--><!--Device-ClientAuthenticationHandler-confirm(priKeyFile: string, certChainFile: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKeyFile | string | Yes | The file that store private key. |
| certChainFile | string | Yes | The file that store client certificate chain. |

<a id="confirm-1"></a>
## confirm

```TypeScript
confirm(authUri: string): void
```

Confirm to use the authUri.The authUri can be obtained from certificate management.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ClientAuthenticationHandler-confirm(authUri: string): void--><!--Device-ClientAuthenticationHandler-confirm(authUri: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authUri | string | Yes | is the key of credentials.The credentials contain sign info and client certificates info. |

<a id="confirm-2"></a>
## confirm

```TypeScript
confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void
```

Confirm to use the identify of the certificate. The identify can be obtained from certificate management.

**Since:** 22

<!--Device-ClientAuthenticationHandler-confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void--><!--Device-ClientAuthenticationHandler-confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identity | string | Yes | The identify of the credential. |
| credentialTypeOrCertChainFile | [CredentialType](arkts-arkweb-credentialtype-e.md) \| string | Yes | The type of the credential or the file that store client certificate chain. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ClientAuthenticationHandler-constructor()--><!--Device-ClientAuthenticationHandler-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="ignore"></a>
## ignore

```TypeScript
ignore(): void
```

Ignore this certificate request temporarily.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ClientAuthenticationHandler-ignore(): void--><!--Device-ClientAuthenticationHandler-ignore(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

