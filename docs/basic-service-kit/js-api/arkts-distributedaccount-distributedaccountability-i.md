# DistributedAccountAbility

提供查询和更新分布式账号登录状态方法（需要先获取分布式账号的单实例对象）。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## getOsAccountDistributedInfo

```TypeScript
getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void
```

获取分布式账号信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or * ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DistributedInfo> | Yes | 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  accountAbility.getOsAccountDistributedInfo(
    (err: BusinessError, data: distributedAccount.DistributedInfo) => {
      if (err) {
        console.error(`getOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('distributed information: ' + JSON.stringify(data));
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountDistributedInfo

```TypeScript
getOsAccountDistributedInfo(): Promise<DistributedInfo>
```

获取分布式账号信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or * ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  accountAbility.getOsAccountDistributedInfo().then((data: distributedAccount.DistributedInfo) => {
    console.info('distributed information: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountDistributedInfoByLocalId

```TypeScript
getOsAccountDistributedInfoByLocalId(localId: int, callback: AsyncCallback<DistributedInfo>): void
```

获取指定系统账号的分布式信息。使用callback异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

- API version20 and later: ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and * ohos.permission.GET_DISTRIBUTED_ACCOUNTS)

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;DistributedInfo> | Yes | 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | System service exception. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  let localId: number = 100; // This is an example. Replace it with an actual OS account ID.
  accountAbility.getOsAccountDistributedInfoByLocalId(localId,
    (err: BusinessError, data: distributedAccount.DistributedInfo) => {
      if (err) {
        console.error(`getOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('distributed information: ' + JSON.stringify(data));
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountDistributedInfoByLocalId

```TypeScript
getOsAccountDistributedInfoByLocalId(localId: int): Promise<DistributedInfo>
```

获取指定系统账号的分布式信息。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

- API version20 and later: ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and * ohos.permission.GET_DISTRIBUTED_ACCOUNTS)

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | System service exception. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  let localId: number = 100; // This is an example. Replace it with an actual OS account ID.
  accountAbility.getOsAccountDistributedInfoByLocalId(localId).then((
    data: distributedAccount.DistributedInfo) => {
    console.info('distributed information: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryOsAccountDistributedInfo

```TypeScript
queryOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void
```

获取分布式账号信息。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountDistributedInfo]distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo(callback:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DistributedInfo> | Yes | 回调函数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
accountAbility.queryOsAccountDistributedInfo(
  (err: BusinessError, data: distributedAccount.DistributedInfo) => {
    if (err) {
      console.error(`queryOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('distributed information: ' + JSON.stringify(data));
    }
  });

```

## queryOsAccountDistributedInfo

```TypeScript
queryOsAccountDistributedInfo(): Promise<DistributedInfo>
```

获取分布式账号信息。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountDistributedInfo]distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo() > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo()

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
accountAbility.queryOsAccountDistributedInfo().then((data: distributedAccount.DistributedInfo) => {
  console.info('distributed information: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`queryOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
});

```

## setOsAccountDistributedInfo

```TypeScript
setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void
```

更新分布式账号信息。使用callback异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | Yes | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid accountInfo. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// This is an example. Replace it with the actual distributed account information obtained using getOsAccountDistributedInfo.
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  accountAbility.setOsAccountDistributedInfo(accountInfo, (err: BusinessError) => {
    if (err) {
      console.error(`setOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOsAccountDistributedInfo successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountDistributedInfo

```TypeScript
setOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>
```

更新分布式账号信息。使用Promise异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | Yes | 分布式账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid accountInfo. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// This is an example. Replace it with the actual distributed account information obtained using getOsAccountDistributedInfo.
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  accountAbility.setOsAccountDistributedInfo(accountInfo).then(() => {
    console.info('setOsAccountDistributedInfo successfully');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountDistributedInfoByLocalId

```TypeScript
setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo, callback: AsyncCallback<void>): void
```

设置指定系统账号的分布式信息。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| distributedInfo | DistributedInfo | Yes | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置指定系统账号的分布式信息成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid distributedInfo. |
| 12300003 | Account identified by localId or by distributedInfo not found. |
| 12300008 | Restricted OS account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  let localId: number = 100; // This is an example. Replace it with an actual OS account ID.
  accountAbility.setOsAccountDistributedInfoByLocalId(localId, accountInfo, (err: BusinessError) => {
    if (err) {
      console.error(`setOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOsAccountDistributedInfoByLocalId successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountDistributedInfoByLocalId

```TypeScript
setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo): Promise<void>
```

设置指定系统账号的分布式信息。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| distributedInfo | DistributedInfo | Yes | 分布式账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid distributedInfo. |
| 12300003 | Account identified by localId or by distributedInfo not found. |
| 12300008 | Restricted OS account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  let localId: number = 100; // This is an example. Replace it with an actual OS account ID.
  accountAbility.setOsAccountDistributedInfoByLocalId(localId, accountInfo).then(() => {
    console.info('setOsAccountDistributedInfoByLocalId successfully');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountDistributedInfoByLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## updateOsAccountDistributedInfo

```TypeScript
updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void
```

更新分布式账号信息。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [setOsAccountDistributedInfo]distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | Yes | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// This is an example. Replace it with the actual distributed account information obtained using getOsAccountDistributedInfo.
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
accountAbility.updateOsAccountDistributedInfo(accountInfo, (err: BusinessError) => {
  if (err) {
    console.error(`updateOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('updateOsAccountDistributedInfo successfully');
  }
});

```

## updateOsAccountDistributedInfo

```TypeScript
updateOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>
```

更新分布式账号信息。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [setOsAccountDistributedInfo]distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | Yes | 分布式账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// This is an example. Replace it with the actual distributed account information obtained using getOsAccountDistributedInfo.
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
accountAbility.updateOsAccountDistributedInfo(accountInfo).then(() => {
  console.info('updateOsAccountDistributedInfo successfully');
}).catch((err: BusinessError) => {
  console.error(`updateOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
});

```

