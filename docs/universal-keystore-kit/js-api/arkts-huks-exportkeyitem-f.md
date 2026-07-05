# exportKeyItem

## exportKeyItem

```TypeScript
function exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void
```

导出密钥。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 用于导出密钥时指定密钥的属性，如使用[HuksAuthStorageLevel]huks.HuksAuthStorageLevel指定需导出密钥的安  全级别， 可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |
| callback | AsyncCallback&lt;HuksReturnResult> | Yes | 回调函数。当导出密钥成功时，err为undefined，data为获取到的HuksReturnResult；否则为错误对象  。HuksReturnResult中的outData返回从HUKS中导出的公钥。 |

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
| 12000020 | the provider operation failed [since 26.0.0] |
| 12000024 | the provider or UKey is busy [since 26.0.0] |
| 12000026 | the secure element is not available [since 26.0.0] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.exportKeyItem(keyAlias, emptyOptions, (error, data) => {
  if (error) {
    console.error(`callback: exportKeyItem failed`);
  } else {
    console.info(`callback: exportKeyItem success, data = ${JSON.stringify(data)}`);
  }
});

```

## exportKeyItem

```TypeScript
function exportKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>
```

导出密钥。使用Promise异步回调。

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
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为从密钥中导出的公钥。 |

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
| 12000020 | the provider operation failed [since 26.0.0] |
| 12000024 | the provider or UKey is busy [since 26.0.0] |
| 12000026 | the secure element is not available [since 26.0.0] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.exportKeyItem(keyAlias, emptyOptions)
  .then((data) => {
    console.info(`promise: exportKeyItem success, data = ${JSON.stringify(data)}`);
  });

```

