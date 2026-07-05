# verifyCertChain

## verifyCertChain

```TypeScript
export function verifyCertChain(cert: CertBlob[], caCert?: CertBlob, hostname?: string): Promise<CertBlob[]>
```

Verifies the server certificate chain and returns a sorted chain.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cert | CertBlob[] | 是 | Certificate chain to be verified. |
| caCert | CertBlob | 否 |  |
| hostname | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CertBlob[]> | Returns a promise that resolves to the sorted certificate chain  (ordered from leaf to root) if verification succeeds. |

**错误码：**

| 错误码ID | 错误信息 |
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

