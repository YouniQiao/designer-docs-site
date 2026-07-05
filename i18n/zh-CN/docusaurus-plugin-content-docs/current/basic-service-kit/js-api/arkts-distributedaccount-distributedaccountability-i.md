# DistributedAccountAbility

提供查询和更新分布式账号登录状态方法（需要先获取分布式账号的单实例对象）。

**起始版本：** 7

**系统能力：** SystemCapability.Account.OsAccount

## 导入模块

```TypeScript
import { distributedAccount } from '@kit.BasicServicesKit';
```

## getOsAccountDistributedInfo

```TypeScript
getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void
```

获取分布式账号信息。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or * ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DistributedInfo> | 是 | 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or * ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.Account.OsAccount

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | System service exception. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
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

**起始版本：** 10

**需要权限：** 

- API版本10 - 19： ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

- API版本20+： ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and * ohos.permission.GET_DISTRIBUTED_ACCOUNTS)

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localId | int | 是 | 系统账号ID。 |
| callback | AsyncCallback&lt;DistributedInfo> | 是 | 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | System service exception. |
| 12300003 | Account not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  let localId: number = 100; // 示例值，实际使用时请获取真实的系统账号ID
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

**起始版本：** 10

**需要权限：** 

- API版本10 - 19： ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

- API版本20+： ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and * ohos.permission.GET_DISTRIBUTED_ACCOUNTS)

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localId | int | 是 | 系统账号ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | System service exception. |
| 12300003 | Account not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
try {
  let localId: number = 100; // 示例值，实际使用时请获取真实的系统账号ID
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo(callback:

**需要权限：** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DistributedInfo> | 是 | 回调函数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo()

**需要权限：** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.Account.OsAccount

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DistributedInfo> | Promise对象，返回分布式账号信息对象。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | 是 | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid accountInfo. |
| 12300003 | Account not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// 示例值，实际使用时请通过getOsAccountDistributedInfo获取真实分布式账号信息
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | 是 | 分布式账号信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid accountInfo. |
| 12300003 | Account not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// 示例值，实际使用时请通过getOsAccountDistributedInfo获取真实分布式账号信息
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localId | int | 是 | 系统账号ID。 |
| distributedInfo | DistributedInfo | 是 | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当设置指定系统账号的分布式信息成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid distributedInfo. |
| 12300003 | Account identified by localId or by distributedInfo not found. |
| 12300008 | Restricted OS account. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  let localId: number = 100; // 示例值，实际使用时请获取真实的系统账号ID
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localId | int | 是 | 系统账号ID。 |
| distributedInfo | DistributedInfo | 是 | 分布式账号信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | System service exception. |
| 12300002 | Invalid distributedInfo. |
| 12300003 | Account identified by localId or by distributedInfo not found. |
| 12300008 | Restricted OS account. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
try {
  let localId: number = 100; // 示例值，实际使用时请获取真实的系统账号ID
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo:

**需要权限：** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | 是 | 分布式账号信息。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// 示例值，实际使用时请通过getOsAccountDistributedInfo获取真实分布式账号信息
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo:

**需要权限：** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**系统能力：** SystemCapability.Account.OsAccount

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accountInfo | DistributedInfo | 是 | 分布式账号信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取分布式账号的单实例对象
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();
// 示例值，实际使用时请通过getOsAccountDistributedInfo获取真实分布式账号信息
let accountInfo: distributedAccount.DistributedInfo =
  { id: '12345', name: 'ZhangSan', event: 'Ohos.account.event.LOGIN' };
accountAbility.updateOsAccountDistributedInfo(accountInfo).then(() => {
  console.info('updateOsAccountDistributedInfo successfully');
}).catch((err: BusinessError) => {
  console.error(`updateOsAccountDistributedInfo exception: code is ${err.code}, message is ${err.message}`);
});

```

