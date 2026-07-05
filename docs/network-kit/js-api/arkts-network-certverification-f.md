# certVerification

## Modules to Import

```TypeScript
import { networkSecurity } from '@ohos.net.networkSecurity';
```

## certVerification

```TypeScript
export function certVerification(cert: CertBlob, caCert?: CertBlob): Promise<number>
```

Certificate verification to the server.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | CertBlob | Yes | Certificates to be verified. |
| caCert | CertBlob | No | Incoming custom CA cert. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returned by the function.Number equals 0 if verify of certification from server succeed, else verify failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2305001](../errorcode-net-networkSecurity.md#2305001-unspecified-error) | Unspecified error. |
| [2305002](../errorcode-net-networkSecurity.md#2305002-failed-to-obtain-the-issuer-certificate) | Unable to get issuer certificate. |
| [2305003](../errorcode-net-networkSecurity.md#2305003-failed-to-obtain-the-certificate-revocation-list) | Unable to get certificate revocation list (CRL). |
| [2305004](../errorcode-net-networkSecurity.md#2305004-failed-to-decrypt-the-certificate-signature) | Unable to decrypt certificate signature. |
| [2305005](../errorcode-net-networkSecurity.md#2305005-failed-to-decrypt-the-crl-signature) | Unable to decrypt CRL signature. |
| [2305006](../errorcode-net-networkSecurity.md#2305006-failed-to-decode-the-issuer-public-key) | Unable to decode issuer public key. |
| [2305007](../errorcode-net-networkSecurity.md#2305007-failed-to-sign-the-certificate) | Certificate signature failure. |
| [2305008](../errorcode-net-networkSecurity.md#2305008-failed-to-sign-the-crl) | CRL signature failure. |
| [2305009](../errorcode-net-networkSecurity.md#2305009-invalid-certificate) | Certificate is not yet valid. |
| [2305010](../errorcode-net-networkSecurity.md#2305010-certificate-expired) | Certificate has expired. |
| [2305011](../errorcode-net-networkSecurity.md#2305011-invalid-crl) | CRL is not yet valid. |
| [2305012](../errorcode-net-networkSecurity.md#2305012-crl-expired) | CRL has expired. |
| [2305018](../errorcode-net-networkSecurity.md#2305018-selfsigned-certificate) | Self-signed certificate. |
| [2305023](../errorcode-net-networkSecurity.md#2305023-certificate-revoked) | Certificate has been revoked. |
| [2305024](../errorcode-net-networkSecurity.md#2305024-invalid-ca) | Invalid certificate authority (CA). |
| [2305027](../errorcode-net-networkSecurity.md#2305027-untrusted-certificate) | Certificate is untrusted. |
| [2305069](../errorcode-net-networkSecurity.md#2305069-invalid-certificate-verification-context) | Invalid certificate verification context. |

**Example**

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';

// Define certificate blobs
const cert:networkSecurity.CertBlob = {
  type: networkSecurity.CertType.CERT_TYPE_PEM,
  data: '-----BEGIN CERTIFICATE-----\n... (certificate data) ...\n-----END CERTIFICATE-----',
};

const caCert:networkSecurity.CertBlob = {
  type: networkSecurity.CertType.CERT_TYPE_PEM,
  data: '-----BEGIN CERTIFICATE-----\n... (CA certificate data) ...\n-----END CERTIFICATE-----',
};

// Perform asynchronous certificate verification
networkSecurity.certVerification(cert, caCert)
  .then((result) => {
    console.info('Certificate verification result:', result);
  })
  .catch((error: BusinessError) => {
    console.error('Certificate verification failed:', error);
  });

```

