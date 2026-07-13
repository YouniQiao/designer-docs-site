# buildX509CertChain

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## buildX509CertChain

```TypeScript
function buildX509CertChain(param: CertChainBuildParameters): Promise<CertChainBuildResult>
```

Builds an X.509 certificate chain with a CertChainBuildParameters object. This API uses a promise to return the
result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | CertChainBuildParameters | Yes | Object used to build the certificate chain.<br> The value of**maxLength** in [CertChainBuildParameters](arkts-devicecertificate-certchainbuildparameters-i.md) must be less than the numberof certificates in the certificate set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CertChainBuildResult&gt; | Promise used to return the **CertChainBuildResult** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |
| [19030002](../errorcode-cert.md#19030002-certificate-signature-verification-failed) | the certificate signature verification failed. |
| [19030003](../errorcode-cert.md#19030003-certificate-has-not-taken-effect) | the certificate has not taken effect. |
| [19030004](../errorcode-cert.md#19030004-certificate-expired) | the certificate has expired. |
| [19030005](../errorcode-cert.md#19030005-failed-to-obtain-the-certificate-issuer) | failed to obtain the certificate issuer. |
| [19030006](../errorcode-cert.md#19030006-key-cannot-be-used-for-signing-a-certificate) | the key cannot be used for signing a certificate. |
| [19030007](../errorcode-cert.md#19030007-key-cannot-be-used-for-digital-signature) | the key cannot be used for a digital signature. |

