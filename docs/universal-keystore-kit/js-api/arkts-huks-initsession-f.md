# initSession

## initSession

```TypeScript
function initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>): void
```

initSession操作密钥接口。使用callback异步回调。 huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | initSession操作密钥的别名。 |
| options | HuksOptions | Yes | initSession操作的参数集合。 |
| callback | AsyncCallback&lt;HuksSessionHandle> | Yes | 回调函数。当密钥操作init成功时，err为undefined，data为获取到的HuksSessionHandle；否  则为错误对象。HuksSessionHandle的handle返回initSession生成的handle。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine or UKey driver |
| 12000010 | the number of sessions has reached limit |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the input parameter is invalid. Possible causes:  1. the aead length is invalid.  2. the group id specified by the access group tag is invalid. [since 22] |
| 12000020 | the provider operation failed [since 22] |
| 12000021 | the UKey PIN is locked [since 22] |
| 12000023 | the UKey PIN not authenticated [since 22] |
| 12000024 | the provider or UKey is busy [since 22] |
| 12000026 | the secure element is not available [since 26.0.0] |

## initSession

```TypeScript
function initSession(keyAlias: string, options: HuksOptions): Promise<HuksSessionHandle>
```

initSession操作密钥接口。使用Promise异步回调。 huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | initSession操作密钥的别名。 |
| options | HuksOptions | Yes | initSession参数集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksSessionHandle> | Promise对象，返回HuksSessionHandle。HuksSessionHandle的handle返回initSession生成的  handle。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine or UKey driver |
| 12000010 | the number of sessions has reached limit |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the input parameter is invalid. Possible causes:  1. the aead length is invalid.  2. the group id specified by the access group tag is invalid. [since 22] |
| 12000020 | the provider operation failed [since 22] |
| 12000021 | the UKey PIN is locked [since 22] |
| 12000023 | the UKey PIN not authenticated [since 22] |
| 12000024 | the provider or UKey is busy [since 22] |
| 12000026 | the secure element is not available [since 26.0.0] |

