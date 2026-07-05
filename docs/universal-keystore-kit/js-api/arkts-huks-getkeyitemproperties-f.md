# getKeyItemProperties

## getKeyItemProperties

```TypeScript
function getKeyItemProperties(
    keyAlias: string,
    options: HuksOptions,
    callback: AsyncCallback<HuksReturnResult>
  ): void
```

Obtains key properties. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Key alias, which must be the same as the alias used when the key was generated. |
| options | HuksOptions | Yes | Empty object (leave this parameter empty). |
| callback | AsyncCallback&lt;HuksReturnResult> | Yes | Callback used to return the result. If the operation is  successful, err is undefined, and data is the obtained HuksReturnResult. Otherwise, err is  an error object. properties of HuksReturnResult are the parameters required for generating a key. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing [since 9 - 11] |
| 12000003 | algorithm param is invalid [since 9 - 11] |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000026 | the secure element is not available [since 26.0.0] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.getKeyItemProperties(keyAlias, emptyOptions, (error, data) => {
  if (error) {
    console.error(`callback: getKeyItemProperties failed`);
  } else {
    console.info(`callback: getKeyItemProperties success, data = ${JSON.stringify(data)}`);
  }
});

```

## getKeyItemProperties

```TypeScript
function getKeyItemProperties(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>
```

获取密钥属性。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的properties成员为获取的密钥属性信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing [since 9 - 11] |
| 12000003 | algorithm param is invalid [since 9 - 11] |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000026 | the secure element is not available [since 26.0.0] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.getKeyItemProperties(keyAlias, emptyOptions)
  .then((data) => {
    console.info(`promise: getKeyItemProperties success, data = ${JSON.stringify(data)}`);
  });

```

