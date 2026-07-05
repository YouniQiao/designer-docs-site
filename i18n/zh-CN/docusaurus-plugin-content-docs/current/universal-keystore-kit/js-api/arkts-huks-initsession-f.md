# initSession

## initSession

```TypeScript
function initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>): void
```

initSession操作密钥接口。使用callback异步回调。 huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | initSession操作密钥的别名。 |
| options | HuksOptions | 是 | initSession操作的参数集合。 |
| callback | AsyncCallback&lt;HuksSessionHandle> | 是 | 回调函数。当密钥操作init成功时，err为undefined，data为获取到的HuksSessionHandle；否  则为错误对象。HuksSessionHandle的handle返回initSession生成的handle。 |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | initSession操作密钥的别名。 |
| options | HuksOptions | 是 | initSession参数集合。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksSessionHandle> | Promise对象，返回HuksSessionHandle。HuksSessionHandle的handle返回initSession生成的  handle。 |

**错误码：**

| 错误码ID | 错误信息 |
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

