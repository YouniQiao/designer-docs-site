# hasKeyItem

## hasKeyItem

```TypeScript
function hasKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void
```

判断密钥是否存在。使用callback异步回调。 若密钥不存在，则通过callback返回false。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 所需查找的密钥的别名。 |
| options | HuksOptions | Yes | 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]huks.HuksAuthStorageLevel指定需查询密钥的  安全级别， 可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。若密钥存在，data为true，若密钥不存在，data为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.hasKeyItem(keyAlias, emptyOptions, (error, data) => {
  if (error) {
    console.error(`callback: hasKeyItem failed`);
  } else {
    if (data) {
      console.info(`keyAlias:${keyAlias} is existed!`);
    } else {
      console.error(`find key failed`);
    }
  }
});

```

## hasKeyItem

```TypeScript
function hasKeyItem(keyAlias: string, options: HuksOptions): Promise<boolean>
```

判断密钥是否存在。使用Promise异步回调。 若密钥不存在，则通过Promise返回false。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 所需查找的密钥的别名。 |
| options | HuksOptions | Yes | 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]huks.HuksAuthStorageLevel指定需查询密钥的  安全级别， 可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。若密钥存在，返回值为true，若密钥不存在，返回值为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.hasKeyItem(keyAlias, emptyOptions).then((data) => {
  if (data) {
    console.info(`keyAlias:${keyAlias} is existed!`);
  } else {
    console.info(`find key failed!`);
  }
});

```

