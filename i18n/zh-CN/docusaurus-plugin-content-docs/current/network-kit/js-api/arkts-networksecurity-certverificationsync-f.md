# certVerificationSync

## certVerificationSync

```TypeScript
export function certVerificationSync(cert: CertBlob, caCert?: CertBlob): int
```

Certificate verification to the server.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cert | CertBlob | 是 | Certificates to be verified. |
| caCert | CertBlob | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns 0 if verify of certification from server succeed, else verify failed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2305001 | Unspecified error. |
| 2305002 | Unable to get issuer certificate. |
| 2305003 | Unable to get certificate revocation list (CRL). |
| 2305004 | Unable to decrypt certificate signature. |
| 2305005 | Unable to decrypt CRL signature. |
| 2305006 | Unable to decode issuer public key. |
| 2305007 | Certificate signature failure. |
| 2305008 | CRL signature failure. |
| 2305009 | Certificate is not yet valid. |
| 2305010 | Certificate has expired. |
| 2305011 | CRL is not yet valid. |
| 2305012 | CRL has expired. |
| 2305018 | Self-signed certificate. |
| 2305023 | Certificate has been revoked. |
| 2305024 | Invalid certificate authority (CA). |
| 2305027 | Certificate is untrusted. |
| 2305069 | Invalid certificate verification context. |

