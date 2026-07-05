# encapsulate

## encapsulate

```TypeScript
function encapsulate(keyAlias: string, params: HuksParam[],
      sharedKeyAlias?: string, sharedKeyParams?: HuksParam[]): Promise<HuksReturnResult>
```

后量子加密密钥封装操作，支持HUKS密钥管理 或由应用程序本身决定。如果应用程序选择管理密钥， 对称密钥携带在HuksReturnResult的outData字段中。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 后量子加密算法的密钥名称 |
| params | HuksParam[] | Yes | 表示封装属性 |
| sharedKeyAlias | string | No |  |
| sharedKeyParams | HuksParam[] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | 函数返回的promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | API is not supported. |
| 12000001 | Algorithm mode is not supported |
| 12000002 | Algorithm parameters are missing, please check the algorithm parameters. |
| 12000003 | The algorithm parameters are invalid, please check the algorithm parameters. |
| 12000004 | File operation failed. |
| 12000005 | IPC communication failed. |
| 12000006 | The algorithm engine reported an error, please check the input parameters. |
| 12000011 | The queried key does not exist, please check the key-related parameters. |
| 12000012 | Device environment or input parameters are abnormal. |
| 12000013 | Queried credential does not exist |
| 12000014 | Memory is insufficient. |
| 12000015 | Failed to obtain the security information via UserIAM. |
| 12000016 | The screen lock password is not set. |
| 12000017 | The key with the same alias already exists. |
| 12000018 | The input parameter is invalid. |

