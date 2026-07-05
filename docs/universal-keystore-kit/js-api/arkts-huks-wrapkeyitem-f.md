# wrapKeyItem

## wrapKeyItem

```TypeScript
function wrapKeyItem(keyAlias: string, params: HuksOptions): Promise<HuksReturnResult>
```

加密导出密钥。使用Promise异步回调。 <!--Del-->该功能暂不支持。<!--DelEnd-->

**Since:** 20

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| params | HuksOptions | Yes | 用于指定导出密钥时的加密类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为导出的密钥密文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the input parameter is invalid |
| 12000026 | the secure element is not available [since 26.0.0] |

