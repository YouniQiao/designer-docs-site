# unwrapKeyItem

## unwrapKeyItem

```TypeScript
function unwrapKeyItem(keyAlias: string, params: HuksOptions, wrappedKey: Uint8Array): Promise<HuksReturnResult>
```

加密导入密钥。使用Promise异步回调。 <!--Del-->该功能暂不支持。<!--DelEnd-->

**Since:** 20

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，指定导入密钥的密钥别名。 |
| params | HuksOptions | Yes | 用于指定导入密钥时的加密类型。 |
| wrappedKey | Uint8Array | Yes | 加密导出密钥的密文。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000015 | Failed to obtain the security information via UserIAM |
| 12000018 | the input parameter is invalid |
| 12000026 | the secure element is not available [since 26.0.0] |

