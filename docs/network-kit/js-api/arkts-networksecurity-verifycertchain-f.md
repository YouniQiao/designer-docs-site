# verifyCertChain

## verifyCertChain

```TypeScript
export function verifyCertChain(cert: CertBlob[], caCert?: CertBlob, hostname?: string): Promise<CertBlob[]>
```

Verifies the server certificate chain and returns a sorted chain.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | CertBlob[] | Yes | Certificate chain to be verified. |
| caCert | CertBlob | No |  |
| hostname | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CertBlob[]> | Returns a promise that resolves to the sorted certificate chain  (ordered from leaf to root) if verification succeeds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2305001 | Unspecified error. |
| 2305002 | Unable to get issuer certificate. |
| 2305004 | Unable to decrypt certificate signature. |
| 2305006 | Unable to decode issuer public key. |
| 2305007 | Certificate signature failure. |
| 2305009 | Certificate is not yet valid. |
| 2305010 | Certificate has expired. |
| 2305018 | Self-signed certificate. |
| 2305024 | Invalid certificate authority (CA). |
| 2305027 | Certificate is untrusted. |
| 2305062 | Invalid hostname. |
| 2305069 | Invalid certificate verification context. |

