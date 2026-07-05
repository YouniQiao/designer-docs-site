# decapsulate

## decapsulate

```TypeScript
function decapsulate(keyAlias: string, params: HuksParam[], encapData: Uint8Array,
      sharedKeyAlias?: string, sharedKeyParams?:  HuksParam[]): Promise<HuksReturnResult>
```

Post-Quantum Cryptography密钥解封装操作，支持HUKS密钥管理 或由应用程序本身决定。如果应用程序选择管理密钥， 对称密钥包含在HuksReturnResult的outData字段中。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 后量子加密算法的密钥名称。 |
| params | HuksParam[] | Yes | 表示解封装属性。 |
| encapData | Uint8Array | Yes | 表示封装后的共享密钥。 |
| sharedKeyAlias | string | No |  |
| sharedKeyParams | HuksParam[] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | 返回值 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | API is not supported. |
| 12000001 | Algorithm mode is not supported |
| 12000002 | The algorithm parameter is missing. Check the algorithm parameter. |
| 12000003 | The algorithm parameter is invalid. Check the algorithm parameter. |
| 12000004 | The file operation failed. |
| 12000005 | IPC communication failed. |
| 12000006 | The algorithm engine reports an error. Check the input parameters. |
| 12000011 | The queried key does not exist. Check the key-related parameters. |
| 12000012 | The device environment or input parameter is abnormal. |
| 12000013 | Queried credential does not exist |
| 12000014 | Insufficient memory. |
| 12000015 | Failed to obtain the security information using UserIAM. |
| 12000016 | The lock screen password is not set. |
| 12000017 | A key with the same alias already exists. |
| 12000018 | Invalid input parameter. |

