# createTrustAnchorsWithKeyStore

## createTrustAnchorsWithKeyStore

```TypeScript
function createTrustAnchorsWithKeyStore(keystore: Uint8Array, pwd: string): Promise<Array<X509TrustAnchor>>
```

表示从P12中读取ca证书来构造[TrustAnchor]cert.X509TrustAnchor对象数组。使用Promise方式返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | DER格式的P12文件原始数据。 |
| pwd | string | Yes | 密码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;X509TrustAnchor>> | Promise对象，返回X509TrustAnchor对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |
| 19030002 | 证书签名验证错误。 |
| 19030003 | 证书尚未生效。 |
| 19030004 | 证书过期。 |
| 19030005 | 无法获取证书的颁发者。 |
| 19030006 | 证书的密钥用途不含证书签名。 |
| 19030007 | 证书的密钥用途不含数字签名。 |

