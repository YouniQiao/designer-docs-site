# AccountManager

系统账号管理类。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## activateOsAccount

```TypeScript
activateOsAccount(localId: int, callback: AsyncCallback<void>): void
```

激活指定系统账号。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当账号激活成功时，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300009 | Account has been activated. [since 7 - 11] |
| 12300010 | Service busy. Possible causes: The target account is being  operated. [since 12] |
| 12300016 | The number of logged in accounts reaches the upper limit. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.activateOsAccount(localId, (err: BusinessError)=>{
    if (err) {
      console.error(`activateOsAccount failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('activateOsAccount successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`activateOsAccount failed, code is ${err.code}, message is ${err.message}`);
}

```

## activateOsAccount

```TypeScript
activateOsAccount(localId: int): Promise<void>
```

激活指定系统账号。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300009 | Account has been activated. [since 7 - 11] |
| 12300010 | Service busy. Possible causes: The target account is being  operated. [since 12] |
| 12300016 | The number of logged in accounts reaches the upper limit. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.activateOsAccount(localId).then(() => {
    console.info('activateOsAccount successfully');
  }).catch((err: BusinessError) => {
    console.error(`activateOsAccount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`activateOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## activateOsAccount

```TypeScript
activateOsAccount(localId: int, displayId: long): Promise<void>
```

在指定逻辑屏激活（前台启动或切换）目标系统账号。使用Promise异步回调。 当前不支持跨逻辑屏激活，即在指定逻辑屏上激活另一个已在逻辑屏前台运行的系统账号。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| displayId | long | Yes | 逻辑屏ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300010 | Service busy. Possible causes: The target account is being operated. |
| 12300016 | The number of logged in accounts reaches the upper limit. |
| 12300018 | Display not found. |
| 12300019 | Cross-display activation not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let displayId: number = 0;
try {
  accountManager.activateOsAccount(localId, displayId).then(() => {
    console.info('activateOsAccount with displayId successfully');
  }).catch((err: BusinessError) => {
    console.error(`activateOsAccount with displayId failed, err: ${err.code} ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`activateOsAccount with displayId exception: ${err.code} ${err.message}`);
}

```

## bindDomainAccount

```TypeScript
bindDomainAccount(localId: int, domainAccountInfo: DomainAccountInfo): Promise<void>
```

在指定系统账号上绑定指定域账号。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号ID。 |
| domainAccountInfo | DomainAccountInfo | Yes | 域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domain account information. |
| 12300003 | The OS account not found. |
| 12300008 | Restricted OS account. Possible causes: The OS account cannot be bound. |
| 12300010 | Service busy. Possible causes: The target OS account or  domain account is being operated. |
| 12300021 | The OS account is already bound. |
| 12300022 | The domain account is already bound. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  let localId: number = 100;
  let domainInfo: osAccount.DomainAccountInfo =
    { domain: 'testDomain', accountName: 'testAccountName' };
  accountManager.bindDomainAccount(localId, domainInfo).then(() => {
    console.info('bindDomainAccount success.');
  }).catch((error: BusinessError) => {
    console.error(`bindDomainAccount failed, errCode=${error.code}, errMsg=${error.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`bindDomainAccount error, errCode=${err.code}, errMsg=${err.message}`);
}

```

## checkMultiOsAccountEnabled

```TypeScript
checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>): void
```

判断是否支持多系统账号。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示支持多系统账号；返回false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.checkMultiOsAccountEnabled((err: BusinessError, isEnabled: boolean) => {
    if (err) {
      console.error(`checkMultiOsAccountEnabled failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkMultiOsAccountEnabled successfully, isEnabled: ' + isEnabled);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkMultiOsAccountEnabled failed, code is ${err.code}, message is ${err.message}`);
}

```

## checkMultiOsAccountEnabled

```TypeScript
checkMultiOsAccountEnabled(): Promise<boolean>
```

判断是否支持多系统账号。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持多系统账号；返回false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
  accountManager.checkMultiOsAccountEnabled().then((isEnabled: boolean) => {
    console.info('checkMultiOsAccountEnabled successfully, isEnabled: ' + isEnabled);
  }).catch((err: BusinessError) => {
    console.error(`checkMultiOsAccountEnabled failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkMultiOsAccountEnabled failed, code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountActivated

```TypeScript
checkOsAccountActivated(localId: number, callback: AsyncCallback<boolean>): void
```

判断指定系统账号是否处于激活状态。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示账号已激活；返回false表示账号未激活。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.checkOsAccountActivated(localId, (err: BusinessError, isActivated: boolean) => {
    if (err) {
      console.error(`checkOsAccountActivated failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOsAccountActivated successfully, isActivated:' + isActivated);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountActivated exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountActivated

```TypeScript
checkOsAccountActivated(localId: number): Promise<boolean>
```

判断指定系统账号是否处于激活状态。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示账号已激活；返回false表示账号未激活。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.checkOsAccountActivated(localId).then((isActivated: boolean) => {
    console.info('checkOsAccountActivated successfully, isActivated: ' + isActivated);
  }).catch((err: BusinessError) => {
    console.error(`checkOsAccountActivated failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountActivated exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountConstraintEnabled

```TypeScript
checkOsAccountConstraintEnabled(localId: number, constraint: string, callback: AsyncCallback<boolean>): void
```

判断指定系统账号是否具有指定约束。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or constraint. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
let constraint: string = 'constraint.wifi';
try {
  accountManager.checkOsAccountConstraintEnabled(localId, constraint, (err: BusinessError, isEnabled: boolean)=>{
    if (err) {
      console.error(`checkOsAccountConstraintEnabled failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOsAccountConstraintEnabled successfully, isEnabled: ' + isEnabled);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountConstraintEnabled exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountConstraintEnabled

```TypeScript
checkOsAccountConstraintEnabled(localId: number, constraint: string): Promise<boolean>
```

判断指定系统账号是否具有指定约束。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or constraint. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
let constraint: string = 'constraint.wifi';
try {
  accountManager.checkOsAccountConstraintEnabled(localId, constraint).then((isEnabled: boolean) => {
    console.info('checkOsAccountConstraintEnabled successfully, isEnabled: ' + isEnabled);
  }).catch((err: BusinessError) => {
    console.error(`checkOsAccountConstraintEnabled failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountConstraintEnabled exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountTestable

```TypeScript
checkOsAccountTestable(callback: AsyncCallback<boolean>): void
```

检查当前系统账号是否为测试账号。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号；默认为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.checkOsAccountTestable((err: BusinessError, isTestable: boolean) => {
    if (err) {
      console.error(`checkOsAccountTestable failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOsAccountTestable successfully, isTestable: ' + isTestable);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountTestable code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountTestable

```TypeScript
checkOsAccountTestable(): Promise<boolean>
```

检查当前系统账号是否为测试账号。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号；默认为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.checkOsAccountTestable().then((isTestable: boolean) => {
    console.info('checkOsAccountTestable successfully, isTestable: ' + isTestable);
  }).catch((err: BusinessError) => {
    console.error(`checkOsAccountTestable failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountTestable exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountVerified

```TypeScript
checkOsAccountVerified(callback: AsyncCallback<boolean>): void
```

检查当前系统账号是否已认证解锁。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。建议使用 > [isOsAccountUnlocked]osAccount.AccountManager.isOsAccountUnlocked()替代。

**Since:** 9

**Deprecated since:** 11

**Substitute:** osAccount.AccountManager.isOsAccountUnlocked()

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.checkOsAccountVerified((err: BusinessError, isVerified: boolean) => {
    if (err) {
      console.error(`checkOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOsAccountVerified successfully, isVerified: ' + isVerified);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountVerified exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountVerified

```TypeScript
checkOsAccountVerified(): Promise<boolean>
```

检查当前系统账号是否已认证解锁。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。建议使用 > [isOsAccountUnlocked]osAccount.AccountManager.isOsAccountUnlocked()替代。

**Since:** 9

**Deprecated since:** 11

**Substitute:** osAccount.AccountManager.isOsAccountUnlocked()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.checkOsAccountVerified().then((isVerified: boolean) => {
    console.info('checkOsAccountVerified successfully, isVerified: ' + isVerified);
  }).catch((err: BusinessError) => {
    console.error(`checkOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountVerified exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountVerified

```TypeScript
checkOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void
```

检查指定系统账号是否已验证。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.checkOsAccountVerified(localId, (err: BusinessError, isVerified: boolean) => {
    if (err) {
      console.error(`checkOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOsAccountVerified successfully, isVerified: ' + isVerified);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountVerified exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkOsAccountVerified

```TypeScript
checkOsAccountVerified(localId: number): Promise<boolean>
```

检查指定系统账号是否已验证。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。不填则检查当前系统账号是否已验证。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.checkOsAccountVerified(localId).then((isVerified: boolean) => {
    console.info('checkOsAccountVerified successfully, isVerified: ' + isVerified);
  }).catch((err: BusinessError) => {
    console.error(`checkOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkOsAccountVerified exception: code is ${err.code}, message is ${err.message}`);
}

```

## createOsAccount

```TypeScript
createOsAccount(localName: string, type: OsAccountType, callback: AsyncCallback<OsAccountInfo>): void
```

创建一个系统账号。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localName | string | Yes | 创建的系统账号的名称。 |
| type | OsAccountType | Yes | 创建的系统账号的类型。 |
| callback | AsyncCallback&lt;OsAccountInfo> | Yes | 回调函数。如果创建成功，err为null，data为新创建的系统账号的信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localName or type. |
| 12300004 | Local name already exists. [since 12] |
| 12300005 | Multi-user not supported. |
| 12300006 | Unsupported account type. |
| 12300007 | The number of accounts has reached the upper limit. |
| 12300023 | The number of accounts of the specified type has reached the upper  limit. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.createOsAccount('testName', osAccount.OsAccountType.NORMAL,
    (err: BusinessError, osAccountInfo: osAccount.OsAccountInfo)=>{
    if (err) {
      console.error(`createOsAccount exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('createOsAccount osAccountInfo:' + JSON.stringify(osAccountInfo));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## createOsAccount

```TypeScript
createOsAccount(localName: string, type: OsAccountType, options?: CreateOsAccountOptions): Promise<OsAccountInfo>
```

创建一个系统账号。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localName | string | Yes | 创建的系统账号的名称。 |
| type | OsAccountType | Yes | 创建的系统账号的类型。 |
| options | CreateOsAccountOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回新创建的系统账号的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localName, type or options. |
| 12300004 | Local name already exists. [since 12] |
| 12300005 | Multi-user not supported. |
| 12300006 | Unsupported account type. |
| 12300007 | The number of accounts has reached the upper limit. |
| 12300015 | The short name already exists. [since 12] |
| 12300023 | The number of accounts of the specified type has reached the upper  limit. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let options: osAccount.CreateOsAccountOptions = {
  shortName: 'myShortName',
  disallowedPreinstalledBundles: [],
  allowedPreinstalledBundles: [],
}
try {
  accountManager.createOsAccount('testAccountName', osAccount.OsAccountType.NORMAL, options).then(
    (accountInfo: osAccount.OsAccountInfo) => {
    console.info('createOsAccount, accountInfo: ' + JSON.stringify(accountInfo));
  }).catch((err: BusinessError) => {
    console.error(`createOsAccount err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## createOsAccountForDomain

```TypeScript
createOsAccountForDomain(
      type: OsAccountType,
      domainInfo: DomainAccountInfo,
      callback: AsyncCallback<OsAccountInfo>
    ): void
```

根据域账号信息，创建一个系统账号并将其与域账号关联。使用callback异步回调。

**Since:** 8

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | OsAccountType | Yes | 创建的系统账号的类型。 |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |
| callback | AsyncCallback&lt;OsAccountInfo> | Yes | 回调函数。如果创建成功，err为null，data为新创建的系统账号的信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 801 | Capability not supported. [since 12] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or domainInfo. |
| 12300004 | Account already exists. |
| 12300005 | Multi-user not supported. |
| 12300006 | Unsupported account type. |
| 12300007 | The number of accounts has reached the upper limit. |
| 12300023 | The number of accounts of the specified type has reached the upper  limit. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let domainInfo: osAccount.DomainAccountInfo =
  {domain: 'testDomain', accountName: 'testAccountName'};
try {
  accountManager.createOsAccountForDomain(osAccount.OsAccountType.NORMAL, domainInfo,
    (err: BusinessError, osAccountInfo: osAccount.OsAccountInfo)=>{
    if (err) {
      console.error(`createOsAccountForDomain exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('createOsAccountForDomain osAccountInfo:' + JSON.stringify(osAccountInfo));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createOsAccountForDomain exception: code is ${err.code}, message is ${err.message}`);
}

```

## createOsAccountForDomain

```TypeScript
createOsAccountForDomain(type: OsAccountType, domainInfo: DomainAccountInfo, options?: CreateOsAccountForDomainOptions): Promise<OsAccountInfo>
```

根据传入的域账号信息，创建与其关联的系统账号。使用Promise异步回调。

**Since:** 8

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | OsAccountType | Yes | 创建的系统账号的类型。 |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |
| options | CreateOsAccountForDomainOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回新创建的系统账号的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 801 | Capability not supported. [since 12] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type, domainInfo or options. |
| 12300004 | Account already exists. |
| 12300005 | Multi-user not supported. |
| 12300006 | Unsupported account type. |
| 12300007 | The number of accounts has reached the upper limit. |
| 12300015 | The short name already exists. [since 12] |
| 12300023 | The number of accounts of the specified type has reached the upper  limit. [since 24] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let domainInfo: osAccount.DomainAccountInfo =
  {domain: 'testDomain', accountName: 'testAccountName'};
let options: osAccount.CreateOsAccountForDomainOptions = {
  shortName: 'myShortName'
}
try {
  accountManager.createOsAccountForDomain(osAccount.OsAccountType.NORMAL, domainInfo, options).then(
    (accountInfo: osAccount.OsAccountInfo) => {
    console.info('createOsAccountForDomain, account info: ' + JSON.stringify(accountInfo));
  }).catch((err: BusinessError) => {
    console.error(`createOsAccountForDomain err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createOsAccountForDomain exception: code is ${err.code}, message is ${err.message}`);
}

```

## deactivateOsAccount

```TypeScript
deactivateOsAccount(localId: int): Promise<void>
```

注销（退出登录）指定系统账号。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

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
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300010 | Service busy. Possible causes: The target account is being operated. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.deactivateOsAccount(localId).then(() => {
    console.info('deactivateOsAccount successfully');
  }).catch((err: BusinessError) => {
    console.error(`deactivateOsAccount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deactivateOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## getActivatedOsAccountLocalIds

```TypeScript
getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>): void
```

查询当前处于激活状态的系统账号的ID列表。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;int>> | Yes | 回调函数。如果查询成功，err为null，data为当前处于激活状态的系统账号的ID列表；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getActivatedOsAccountLocalIds((err: BusinessError, idArray: number[])=>{
    if (err) {
      console.error(`getActivatedOsAccountLocalIds code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getActivatedOsAccountLocalIds idArray length:' + idArray.length);
      for(let i=0;i<idArray.length;i++) {
        console.info('activated os account id: ' + idArray[i]);
      }
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getActivatedOsAccountLocalIds exception: code is ${err.code}, message is ${err.message}`);
}

```

## getActivatedOsAccountLocalIds

```TypeScript
getActivatedOsAccountLocalIds(): Promise<Array<int>>
```

查询当前处于激活状态的系统账号的ID列表。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | Promise对象，返回当前处于激活状态的系统账号的ID列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getActivatedOsAccountLocalIds().then((idArray: number[]) => {
    console.info('getActivatedOsAccountLocalIds, idArray: ' + idArray);
  }).catch((err: BusinessError) => {
    console.error(`getActivatedOsAccountLocalIds err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getActivatedOsAccountLocalIds exception: code is ${err.code}, message is ${err.message}`);
}

```

## getBundleIdForUid

```TypeScript
getBundleIdForUid(uid: int, callback: AsyncCallback<int>): void
```

通过uid查询对应的bundleId。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果查询成功，err为null，data为与uid对应的bundleId；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// uid indicates the application process UID, which can be obtained from the application information.
let testUid: number = 1000000;
try {
  accountManager.getBundleIdForUid(testUid, (err: BusinessError, bundleId: number) => {
    if (err) {
      console.error(`getBundleIdForUid errInfo:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getBundleIdForUid bundleId:' + JSON.stringify(bundleId));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getBundleIdForUid exception: code is ${err.code}, message is ${err.message}`);
}

```

## getBundleIdForUid

```TypeScript
getBundleIdForUid(uid: int): Promise<int>
```

通过uid查询对应的bundleId。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回与uid对应的bundleId。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let testUid: number = 1000000;
try {
  accountManager.getBundleIdForUid(testUid).then((result: number) => {
    console.info('getBundleIdForUid bundleId:' + JSON.stringify(result));
  }).catch((err: BusinessError) => {
    console.error(`getBundleIdForUid errInfo:code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getBundleIdForUid exception: code is ${err.code}, message is ${err.message}`);
}

```

## getBundleIdForUidSync

```TypeScript
getBundleIdForUidSync(uid: int): int
```

通过uid查询对应的bundleId。使用同步方式返回结果。

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 表示与进程uid对应的bundleId。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let testUid: number = 1000000;
try {
  let bundleId : number = accountManager.getBundleIdForUidSync(testUid);
  console.info('getBundleIdForUidSync bundleId:' + bundleId);
} catch (e) {
  const err = e as BusinessError;
  console.error(`getBundleIdForUidSync exception: code is ${err.code}, message is ${err.message}`);
}

```

## getCreatedOsAccountsCount

```TypeScript
getCreatedOsAccountsCount(callback: AsyncCallback<number>): void
```

获取已创建的系统账号数量。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountCount]osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountCount(callback:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。如果获取成功，err为null，data为已创建的系统账号的数量；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getCreatedOsAccountsCount((err: BusinessError, count: number)=>{
  if (err) {
    console.error(`getCreatedOsAccountsCount failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getCreatedOsAccountsCount successfully, count: ' + count);
  }
});

```

## getCreatedOsAccountsCount

```TypeScript
getCreatedOsAccountsCount(): Promise<number>
```

获取已创建的系统账号数量。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountCount]osAccount.AccountManager.getOsAccountCount()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountCount()

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回已创建的系统账号的数量。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getCreatedOsAccountsCount().then((count: number) => {
  console.info('getCreatedOsAccountsCount successfully, count: ' + count);
}).catch((err: BusinessError) => {
  console.error(`getCreatedOsAccountsCount failed, code is ${err.code}, message is ${err.message}`);
});

```

## getCurrentOsAccount

```TypeScript
getCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void
```

查询当前进程所属的系统账号的信息。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

- API version9  to  9: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version10 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OsAccountInfo> | Yes | 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getCurrentOsAccount((err: BusinessError, curAccountInfo: osAccount.OsAccountInfo)=>{
    if (err) {
      console.error(`getCurrentOsAccount code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getCurrentOsAccount curAccountInfo:' + JSON.stringify(curAccountInfo));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCurrentOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## getCurrentOsAccount

```TypeScript
getCurrentOsAccount(): Promise<OsAccountInfo>
```

查询当前进程所属的系统账号的信息。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

- API version9  to  9: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version10 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回当前进程所属的系统账号信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getCurrentOsAccount().then((accountInfo: osAccount.OsAccountInfo) => {
    console.info('getCurrentOsAccount, accountInfo: ' + JSON.stringify(accountInfo));
  }).catch((err: BusinessError) => {
    console.error(`getCurrentOsAccount err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCurrentOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## getDistributedVirtualDeviceId

```TypeScript
getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void
```

获取分布式虚拟设备ID。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [queryDistributedVirtualDeviceId]osAccount.AccountManager.queryDistributedVirtualDeviceId(callback: AsyncCallback<string>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.queryDistributedVirtualDeviceId(callback:

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。如果获取成功，err为null，data为分布式虚拟设备ID；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getDistributedVirtualDeviceId((err: BusinessError, virtualID: string) => {
  if (err) {
    console.error(`getDistributedVirtualDeviceId err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getDistributedVirtualDeviceId virtualID: ' + virtualID);
  }
});

```

## getDistributedVirtualDeviceId

```TypeScript
getDistributedVirtualDeviceId(): Promise<string>
```

获取分布式虚拟设备ID。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [queryDistributedVirtualDeviceId]osAccount.AccountManager.queryDistributedVirtualDeviceId()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.queryDistributedVirtualDeviceId()

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回分布式虚拟设备ID。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getDistributedVirtualDeviceId().then((virtualID: string) => {
  console.info('getDistributedVirtualDeviceId, virtualID: ' + virtualID);
}).catch((err: BusinessError) => {
  console.error(`getDistributedVirtualDeviceId err: code is ${err.code}, message is ${err.message}`);
});

```

## getEnabledOsAccountConstraints

```TypeScript
getEnabledOsAccountConstraints(localId: int): Promise<Array<string>>
```

获取指定系统账号已使能的全部约束。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回指定系统账号已使能的全部  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.getEnabledOsAccountConstraints(localId).then((constraints: string[]) => {
    console.info('getEnabledOsAccountConstraints, constraints: ' + constraints);
  }).catch((err: BusinessError) => {
    console.error(`getEnabledOsAccountConstraints err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getEnabledOsAccountConstraints exception: code is ${err.code}, message is ${err.message}`);
}

```

## getForegroundOsAccountDisplayId

```TypeScript
getForegroundOsAccountDisplayId(localId: int): Promise<long>
```

获取指定前台系统账号所运行的逻辑屏ID。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回逻辑屏ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300017 | The foreground OS account is not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.getForegroundOsAccountDisplayId(localId).then((displayId: number) => {
    console.info('account ' + localId + ' foreground displayId: ' + displayId);
  }).catch((err: BusinessError) => {
    console.error(`getForegroundOsAccountDisplayId failed: ${err.code} ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getForegroundOsAccountDisplayId exception: ${err.code} ${err.message}`);
}

```

## getForegroundOsAccountLocalId

```TypeScript
getForegroundOsAccountLocalId(): Promise<int>
```

获取前台系统账号的ID。使用Promise异步回调。

**Since:** 15

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象。返回前台系统账号的ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getForegroundOsAccountLocalId().then((localId: number) => {
    console.info('getForegroundOsAccountLocalId, localId: ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getForegroundOsAccountLocalId err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getForegroundOsAccountLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getForegroundOsAccountLocalId

```TypeScript
getForegroundOsAccountLocalId(displayId: long): Promise<int>
```

获取指定逻辑屏上运行的前台系统账号ID。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 逻辑屏ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300017 | The foreground OS account is not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let displayId: number = 0;
try {
  accountManager.getForegroundOsAccountLocalId(displayId).then((localId: number) => {
    console.info('foreground account on display ' + displayId + ' is ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getForegroundOsAccountLocalId failed: ${err.code} ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getForegroundOsAccountLocalId exception: ${err.code} ${err.message}`);
}

```

## getOsAccountAllConstraints

```TypeScript
getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void
```

获取指定系统账号的全部约束。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountConstraints(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数。如果获取成功，err为null，data为指定系统账号的全部  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.getOsAccountAllConstraints(localId, (err: BusinessError, constraints: string[])=>{
  if (err) {
    console.error(`getOsAccountAllConstraints code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOsAccountAllConstraints:' + JSON.stringify(constraints));
  }
});

```

## getOsAccountAllConstraints

```TypeScript
getOsAccountAllConstraints(localId: number): Promise<Array<string>>
```

获取指定系统账号的全部约束。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountConstraints(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回指定系统账号的全部  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.getOsAccountAllConstraints(localId).then((constraints: string[]) => {
  console.info('getOsAccountAllConstraints, constraints: ' + constraints);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountAllConstraints err: code is ${err.code}, message is ${err.message}`);
});

```

## getOsAccountConstraints

```TypeScript
getOsAccountConstraints(localId: number, callback: AsyncCallback<Array<string>>): void
```

获取指定系统账号的全部约束。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，如果获取成功，err为null，data为该系统账号的全部  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.getOsAccountConstraints(localId, (err: BusinessError, constraints: string[]) => {
    if (err) {
      console.error(`getOsAccountConstraints failed, err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountConstraints successfully, constraints: ' + JSON.stringify(constraints));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountConstraints exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountConstraints

```TypeScript
getOsAccountConstraints(localId: number): Promise<Array<string>>
```

获取指定系统账号的全部约束。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回指定系统账号的全部  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.getOsAccountConstraints(localId).then((constraints: string[]) => {
    console.info('getOsAccountConstraints, constraints: ' + constraints);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountConstraints err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountConstraints exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountConstraintSourceTypes

```TypeScript
getOsAccountConstraintSourceTypes(localId: int, constraint: string, callback: AsyncCallback<Array<ConstraintSourceTypeInfo>>): void
```

查询指定系统账号的指定约束来源信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号ID。 |
| constraint | string | Yes | 要查询的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |
| callback | AsyncCallback&lt;Array&lt;ConstraintSourceTypeInfo>> | Yes | 回调函数。如果成功，err为null，data为指定系统账号的指定  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)来源信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name or constraint. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountConstraintSourceTypes(100, 'constraint.wifi',
    (err: BusinessError,sourceTypeInfos: osAccount.ConstraintSourceTypeInfo[])=>{
    if (err) {
      console.error(`getOsAccountConstraintSourceTypes errInfo:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountConstraintSourceTypes sourceTypeInfos:' + JSON.stringify(sourceTypeInfos));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountConstraintSourceTypes exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountConstraintSourceTypes

```TypeScript
getOsAccountConstraintSourceTypes(localId: int, constraint: string): Promise<Array<ConstraintSourceTypeInfo>>
```

查询指定系统账号的指定约束来源信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号ID。 |
| constraint | string | Yes | 要查询的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ConstraintSourceTypeInfo>> | Promise对象，返回指定系统账号的指定  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)来源信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name or constraint. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountConstraintSourceTypes(100, 'constraint.wifi').then(
    (result: osAccount.ConstraintSourceTypeInfo[]) => {
    console.info('getOsAccountConstraintSourceTypes sourceTypeInfos:' + JSON.stringify(result));
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountConstraintSourceTypes errInfo:code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountConstraintSourceTypes exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountCount

```TypeScript
getOsAccountCount(callback: AsyncCallback<int>): void
```

获取已创建的系统账号数量。使用callback异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果获取成功，err为null，data为已创建的系统账号的数量；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountCount((err: BusinessError, count: number) => {
    if (err) {
      console.error(`getOsAccountCount failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountCount successfully, count: ' + count);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountCount exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountCount

```TypeScript
getOsAccountCount(): Promise<int>
```

获取已创建的系统账号数量。使用Promise异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回已创建的系统账号的数量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountCount().then((count: number) => {
    console.info('getOsAccountCount successfully, count: ' + count);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountCount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountCount exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountDomainInfo

```TypeScript
getOsAccountDomainInfo(localId: number): Promise<DomainAccountInfo>
```

获取指定系统账号关联的域账号信息。使用Promise异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainAccountInfo> | Promise对象。返回与指定系统账号关联的域账号信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | OS account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.getOsAccountDomainInfo(localId).then((domainAccountInfo: osAccount.DomainAccountInfo) => {
  if (domainAccountInfo === null) {
    console.info('The target OS account is not a domain account.')
  } else {
    console.info('getOsAccountDomainInfo domain: ' + domainAccountInfo.domain);
    console.info('getOsAccountDomainInfo accountName: ' + domainAccountInfo.accountName);
  }
}).catch((err: BusinessError) => {
  console.error(`getOsAccountDomainInfo err: code is ${err.code}, message is ${err.message}`);
})

```

## getOsAccountDomainInfo

```TypeScript
getOsAccountDomainInfo(localId: int): Promise<DomainAccountInfo | null>
```

获取指定系统账号关联的域账号信息。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainAccountInfo \| null> | Promise对象。返回与指定系统账号关联的域账号信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |
| 12300003 | OS account not found. |

## getOsAccountLocalId

```TypeScript
getOsAccountLocalId(callback: AsyncCallback<int>): void
```

获取当前进程所属的系统账号ID。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果获取成功，err为null，data为当前进程所属的系统账号ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountLocalId((err: BusinessError, localId: number) => {
    if (err) {
      console.error(`getOsAccountLocalId failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountLocalId successfully, localId: ' + localId);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalId

```TypeScript
getOsAccountLocalId(): Promise<int>
```

获取当前进程所属的系统账号ID。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回当前进程所属的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountLocalId().then((localId: number) => {
    console.info('getOsAccountLocalId successfully, localId: ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalId failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdBySerialNumber

```TypeScript
getOsAccountLocalIdBySerialNumber(serialNumber: number, callback: AsyncCallback<number>): void
```

通过SN码查询与其关联的系统账号的账号ID。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForSerialNumber]osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | number | Yes | 账号SN码。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。如果查询成功，err为null，data为与SN码关联的系统账号的账号ID；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let serialNumber: number = 12345;
accountManager.getOsAccountLocalIdBySerialNumber(serialNumber, (err: BusinessError, localId: number)=>{
  if (err) {
    console.error(`get localId code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('get localId:' + localId + ' by serialNumber: ' + serialNumber);
  }
});

```

## getOsAccountLocalIdBySerialNumber

```TypeScript
getOsAccountLocalIdBySerialNumber(serialNumber: number): Promise<number>
```

通过SN码查询与其关联的系统账号的账号ID。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForSerialNumber]osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | number | Yes | 账号SN码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回与SN码关联的系统账号的账号ID。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let serialNumber: number = 12345;
accountManager.getOsAccountLocalIdBySerialNumber(serialNumber).then((localId: number) => {
  console.info('getOsAccountLocalIdBySerialNumber localId: ' + localId);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountLocalIdBySerialNumber err: code is ${err.code}, message is ${err.message}`);
});

```

## getOsAccountLocalIdForDomain

```TypeScript
getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>): void
```

根据域账号信息，获取与其关联的系统账号ID。使用callback异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果查询成功，err为null，data为域账号关联的系统账号ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainInfo. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainInfo: osAccount.DomainAccountInfo = {domain: 'testDomain', accountName: 'testAccountName'};
let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountLocalIdForDomain(domainInfo, (err: BusinessError, localId: number) => {
    if (err) {
      console.error(`getOsAccountLocalIdForDomain failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountLocalIdForDomain successfully, localId: ' + localId);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForDomain exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForDomain

```TypeScript
getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo): Promise<int>
```

根据域账号信息，获取与其关联的系统账号的账号ID。使用Promise异步回调。 该接口仅限系统应用调用。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回域账号关联的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainInfo. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let domainInfo: osAccount.DomainAccountInfo = {domain: 'testDomain', accountName: 'testAccountName'};
try {
  accountManager.getOsAccountLocalIdForDomain(domainInfo).then((localId: number) => {
    console.info('getOsAccountLocalIdForDomain successfully, localId: ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalIdForDomain failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForDomain exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForSerialNumber

```TypeScript
getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>): void
```

通过SN码查询与其关联的系统账号的账号ID。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | long | Yes | 账号SN码。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果成功，err为null，data为与SN码关联的系统账号的账号ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid serialNumber. |
| 12300003 | The account indicated by serialNumber does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// serialNumber indicates the account serial number, which can be obtained by calling getSerialNumberForOsAccountLocalId.
let serialNumber: number = 12345;
try {
  accountManager.getOsAccountLocalIdForSerialNumber(serialNumber, (err: BusinessError, localId: number)=>{
    if (err) {
      console.error(`get localId code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('get localId:' + localId + ' by serialNumber: ' + serialNumber);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`get localId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForSerialNumber

```TypeScript
getOsAccountLocalIdForSerialNumber(serialNumber: long): Promise<int>
```

通过SN码查询与其关联的系统账号的账号ID。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | long | Yes | 账号SN码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回与SN码关联的系统账号的账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid serialNumber. |
| 12300003 | The account indicated by serialNumber does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// serialNumber indicates the account serial number, which can be obtained by calling getSerialNumberForOsAccountLocalId.
let serialNumber: number = 12345;
try {
  accountManager.getOsAccountLocalIdForSerialNumber(serialNumber).then((localId: number) => {
    console.info('getOsAccountLocalIdForSerialNumber localId: ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalIdForSerialNumber err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForSerialNumber exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForUid

```TypeScript
getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>): void
```

根据uid查询对应的系统账号ID。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。如果查询成功，err为null，data为对应的系统账号ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// uid indicates the application process UID, which can be obtained from the application information.
let uid: number = 12345678;
try {
  accountManager.getOsAccountLocalIdForUid(uid, (err: BusinessError, localId: number) => {
    if (err) {
      console.error(`getOsAccountLocalIdForUid failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountLocalIdForUid successfully, localId: ' + localId);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForUid exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForUid

```TypeScript
getOsAccountLocalIdForUid(uid: int): Promise<int>
```

根据uid查询对应的系统账号ID。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回指定uid对应的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// uid indicates the application process UID, which can be obtained from the application information.
let uid: number = 12345678;
try {
  accountManager.getOsAccountLocalIdForUid(uid).then((localId: number) => {
    console.info('getOsAccountLocalIdForUid successfully, localId: ' + localId);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalIdForUid failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForUid exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdForUidSync

```TypeScript
getOsAccountLocalIdForUidSync(uid: int): int
```

根据uid查询对应的系统账号ID。使用同步方式返回结果。

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 进程uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回指定uid对应的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300002 | Invalid uid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// uid indicates the application process UID, which can be obtained from the application information.
let uid: number = 12345678;
try {
  let localId : number = accountManager.getOsAccountLocalIdForUidSync(uid);
  console.info('getOsAccountLocalIdForUidSync successfully, localId: ' + localId);
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIdForUidSync exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountLocalIdFromDomain

```TypeScript
getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<number>): void
```

根据域账号信息，获取与其关联的系统账号的账号ID。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForDomain]osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数，如果获取成功，err为null，data为域账号关联的系统账号ID；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainInfo: osAccount.DomainAccountInfo = {domain: 'testDomain', accountName: 'testAccountName'};
let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getOsAccountLocalIdFromDomain(domainInfo, (err: BusinessError, localId: number) => {
  if (err) {
    console.error(`getOsAccountLocalIdFromDomain failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOsAccountLocalIdFromDomain successfully, localId: ' + localId);
  }
});

```

## getOsAccountLocalIdFromDomain

```TypeScript
getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo): Promise<number>
```

根据域账号信息，获取与其关联的系统账号的账号ID。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForDomain]osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainInfo | DomainAccountInfo | Yes | 域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回域账号关联的系统账号ID。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let domainInfo: osAccount.DomainAccountInfo = {domain: 'testDomain', accountName: 'testAccountName'};
accountManager.getOsAccountLocalIdFromDomain(domainInfo).then((localId: number) => {
  console.info('getOsAccountLocalIdFromDomain successfully, localId: ' + localId);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountLocalIdFromDomain failed, code is ${err.code}, message is ${err.message}`);
});

```

## getOsAccountLocalIdFromProcess

```TypeScript
getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void
```

获取当前进程所属的系统账号ID。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalId]osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalId(callback:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。如果获取成功，err为null，data为当前进程所属的系统账号ID；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getOsAccountLocalIdFromProcess((err: BusinessError, localId: number) => {
  if (err) {
    console.error(`getOsAccountLocalIdFromProcess failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOsAccountLocalIdFromProcess id:: ' + localId);
  }
});

```

## getOsAccountLocalIdFromProcess

```TypeScript
getOsAccountLocalIdFromProcess(): Promise<number>
```

获取当前进程所属的系统账号ID。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalId]osAccount.AccountManager.getOsAccountLocalId()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalId()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回当前进程所属的系统账号ID。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getOsAccountLocalIdFromProcess().then((localId: number) => {
  console.info('getOsAccountLocalIdFromProcess successfully, localId: ' + localId);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountLocalIdFromProcess failed, code is ${err.code}, message is ${err.message}`);
});

```

## getOsAccountLocalIdFromUid

```TypeScript
getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void
```

根据uid查询对应的系统账号ID。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForUid]osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForUid(uid:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | 进程uid。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。如果查询成功，err为null，data为对应的系统账号ID；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let uid: number = 12345678;
accountManager.getOsAccountLocalIdFromUid(uid, (err: BusinessError, localId: number) => {
  if (err) {
    console.error(`getOsAccountLocalIdFromUid failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOsAccountLocalIdFromUid successfully, localId: ' + localId);
  }
});

```

## getOsAccountLocalIdFromUid

```TypeScript
getOsAccountLocalIdFromUid(uid: number): Promise<number>
```

根据uid查询对应的系统账号ID。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountLocalIdForUid]osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountLocalIdForUid(uid:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | 进程uid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回uid对应的系统账号ID。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let uid: number = 12345678;
accountManager.getOsAccountLocalIdFromUid(uid).then((localId: number) => {
  console.info('getOsAccountLocalIdFromUid successfully, localId: ' + localId);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountLocalIdFromUid failed, code is ${err.code}, message is ${err.message}`);
});

```

## getOsAccountLocalIds

```TypeScript
getOsAccountLocalIds(): Promise<int[]>
```

获取所有非系统级的操作系统账号的本地ID。非系统级的操作系统账号对用户可见，通常用于登录等操作。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int[]> | Promise对象，返回所有非系统级的操作系统账号的本地ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountLocalIds().then((localIds: number[]) => {
    console.info('getOsAccountLocalIds localIds: ' + localIds);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountLocalIds failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountLocalIds exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountName

```TypeScript
getOsAccountName(): Promise<string>
```

查询调用方所属系统账号的名称。使用Promise异步回调。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回调用方所属系统账号的名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountName().then((name: string) => {
    console.info('getOsAccountName, name: ' + name);
  }).catch((err: BusinessError) => {
    console.error('getOsAccountName err: ' + err);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountName exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountNameByLocalId

```TypeScript
getOsAccountNameByLocalId(localId: int): Promise<string>
```

根据系统账号的本地ID获取系统账号的名称。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 目标系统账号的本地ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回目标系统账号的名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountNameByLocalId(100).then((name: string) => {
    console.info('getOsAccountNameByLocalId, name: ' + name);
  }).catch((err: BusinessError) => {
    console.error('getOsAccountNameByLocalId err: ' + err);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountNameByLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountProfilePhoto

```TypeScript
getOsAccountProfilePhoto(localId: int, callback: AsyncCallback<string>): void
```

获取指定系统账号的头像信息。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。如果获取成功，err为null，data为指定系统账号的头像信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.getOsAccountProfilePhoto(localId, (err: BusinessError, photo: string)=>{
    if (err) {
      console.error(`getOsAccountProfilePhoto exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('get photo:' + photo + ' by localId: ' + localId);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountProfilePhoto exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountProfilePhoto

```TypeScript
getOsAccountProfilePhoto(localId: int): Promise<string>
```

获取指定系统账号的头像信息。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回指定系统账号的头像信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.getOsAccountProfilePhoto(localId).then((photo: string) => {
    console.info('getOsAccountProfilePhoto: ' + photo);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountProfilePhoto err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountProfilePhoto exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountType

```TypeScript
getOsAccountType(callback: AsyncCallback<OsAccountType>): void
```

查询当前进程所属的系统账号的账号类型。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OsAccountType> | Yes | 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号的账号类型；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountType((err: BusinessError, accountType: osAccount.OsAccountType) => {
    if (err) {
      console.error(`getOsAccountType err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOsAccountType accountType: ' + accountType);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountType exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountType

```TypeScript
getOsAccountType(): Promise<OsAccountType>
```

查询当前进程所属的系统账号的账号类型。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountType> | Promise对象，返回当前进程所属的系统账号的账号类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.getOsAccountType().then((accountType: osAccount.OsAccountType) => {
    console.info('getOsAccountType, accountType: ' + accountType);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountType err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountType exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountType

```TypeScript
getOsAccountType(localId: int): Promise<OsAccountType>
```

查询指定系统账号的类型。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountType> | Promise对象，返回指定系统账号的类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  let localId: number = 100;
  accountManager.getOsAccountType(localId).then((type: osAccount.OsAccountType) => {
    console.info('getOsAccountType Type:' + type);
  }).catch((err: BusinessError) => {
    console.error(`getOsAccountType errInfo:code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getOsAccountType exception: code is ${err.code}, message is ${err.message}`);
}

```

## getOsAccountTypeFromProcess

```TypeScript
getOsAccountTypeFromProcess(callback: AsyncCallback<OsAccountType>): void
```

查询当前进程所属的系统账号的账号类型。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [getOsAccountType]osAccount.AccountManager.getOsAccountType(callback: AsyncCallback<OsAccountType>)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountType(callback:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OsAccountType> | Yes | 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号的账号类型；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getOsAccountTypeFromProcess((err: BusinessError, accountType: osAccount.OsAccountType) => {
  if (err) {
    console.error(`getOsAccountTypeFromProcess err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOsAccountTypeFromProcess accountType: ' + accountType);
  }
});

```

## getOsAccountTypeFromProcess

```TypeScript
getOsAccountTypeFromProcess(): Promise<OsAccountType>
```

查询当前进程所属的系统账号的账号类型。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用[getOsAccountType]osAccount.AccountManager.getOsAccountType() > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getOsAccountType()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountType> | Promise对象，返回当前进程所属的系统账号的账号类型。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.getOsAccountTypeFromProcess().then((accountType: osAccount.OsAccountType) => {
  console.info('getOsAccountTypeFromProcess, accountType: ' + accountType);
}).catch((err: BusinessError) => {
  console.error(`getOsAccountTypeFromProcess err: code is ${err.code}, message is ${err.message}`);
});

```

## getSerialNumberByOsAccountLocalId

```TypeScript
getSerialNumberByOsAccountLocalId(localId: number, callback: AsyncCallback<number>): void
```

通过系统账号ID获取与该系统账号关联的SN码。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getSerialNumberForOsAccountLocalId]osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。如果获取成功，err为null，data为与该系统账号关联的SN码；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.getSerialNumberByOsAccountLocalId(localId, (err: BusinessError, serialNumber: number)=>{
  if (err) {
    console.error(`get serialNumber code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('get serialNumber:' + serialNumber + ' by localId: ' + localId);
  }
});

```

## getSerialNumberByOsAccountLocalId

```TypeScript
getSerialNumberByOsAccountLocalId(localId: number): Promise<number>
```

通过系统账号ID获取与该系统账号关联的SN码。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getSerialNumberForOsAccountLocalId]osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回与该系统账号关联的SN码。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.getSerialNumberByOsAccountLocalId(localId).then((serialNumber: number) => {
  console.info('getSerialNumberByOsAccountLocalId serialNumber: ' + serialNumber);
}).catch((err: BusinessError) => {
  console.error(`getSerialNumberByOsAccountLocalId err: code is ${err.code}, message is ${err.message}`);
});

```

## getSerialNumberForOsAccountLocalId

```TypeScript
getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>): void
```

通过系统账号ID获取与该系统账号关联的SN码。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;long> | Yes | 回调函数。如果获取成功，err为null，data为与该系统账号关联的SN码；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.getSerialNumberForOsAccountLocalId(localId, (err: BusinessError, serialNumber: number)=>{
    if (err) {
      console.error(`get serialNumber code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('get serialNumber:' + serialNumber + ' by localId: ' + localId);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`get serialNumber exception: code is ${err.code}, message is ${err.message}`);
}

```

## getSerialNumberForOsAccountLocalId

```TypeScript
getSerialNumberForOsAccountLocalId(localId: int): Promise<long>
```

通过系统账号ID获取与该系统账号关联的SN码。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回与该系统账号关联的SN码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
try {
  accountManager.getSerialNumberForOsAccountLocalId(localId).then((serialNumber: number) => {
    console.info('getSerialNumberForOsAccountLocalId serialNumber: ' + serialNumber);
  }).catch((err: BusinessError) => {
    console.error(`getSerialNumberForOsAccountLocalId err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getSerialNumberForOsAccountLocalId exception: code is ${err.code}, message is ${err.message}`);
}

```

## isMainOsAccount

```TypeScript
isMainOsAccount(callback: AsyncCallback<boolean>): void
```

查询当前进程是否处于主用户。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数，返回true表示当前账号为主账号，返回false表示当前账号非主账号。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.isMainOsAccount((err: BusinessError,result: boolean)=>{
    if (err) {
      console.error(`isMainOsAccount errInfo:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('isMainOsAccount result:' + JSON.stringify(result));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isMainOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## isMainOsAccount

```TypeScript
isMainOsAccount(): Promise<boolean>
```

查询当前进程是否处于主用户。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回true表示当前账号为主账号，返回false表示当前账号非主账号。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.isMainOsAccount().then((result: boolean) => {
    console.info('isMainOsAccount result:' + JSON.stringify(result));
  }).catch((err: BusinessError) => {
    console.error(`isMainOsAccount errInfo:code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isMainOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## isMultiOsAccountEnable

```TypeScript
isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void
```

判断是否支持多系统账号。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [checkMultiOsAccountEnabled]osAccount.AccountManager.checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkMultiOsAccountEnabled(callback:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示支持多系统账号；返回false表示不支持。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.isMultiOsAccountEnable((err: BusinessError, isEnabled: boolean) => {
  if (err) {
    console.error(`isMultiOsAccountEnable failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isMultiOsAccountEnable successfully, isEnabled: ' + isEnabled);
  }
});

```

## isMultiOsAccountEnable

```TypeScript
isMultiOsAccountEnable(): Promise<boolean>
```

判断是否支持多系统账号。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [checkMultiOsAccountEnabled]osAccount.AccountManager.checkMultiOsAccountEnabled()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkMultiOsAccountEnabled()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持多系统账号；返回false表示不支持。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.isMultiOsAccountEnable().then((isEnabled: boolean) => {
  console.info('isMultiOsAccountEnable successfully, isEnabled: ' + isEnabled);
}).catch((err: BusinessError) => {
  console.error(`isMultiOsAccountEnable failed, code is ${err.code}, message is ${err.message}`);
});

```

## isOsAccountActivated

```TypeScript
isOsAccountActivated(localId: int): Promise<boolean>
```

判断指定系统账号是否处于激活状态。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示账号已激活；返回false表示账号未激活。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.isOsAccountActivated(localId).then((isActivated: boolean) => {
    console.info('isOsAccountActivated successfully, isActivated: ' + isActivated);
  }).catch((err: BusinessError) => {
    console.error(`isOsAccountActivated failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isOsAccountActivated exception: code is ${err.code}, message is ${err.message}`);
}

```

## isOsAccountActived

```TypeScript
isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void
```

判断指定系统账号是否处于激活状态。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountActivated(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示账号已激活；返回false表示账号未激活。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.isOsAccountActived(localId, (err: BusinessError, isActived: boolean) => {
  if (err) {
    console.error(`isOsAccountActived failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isOsAccountActived successfully, isActived:' + isActived);
  }
});

```

## isOsAccountActived

```TypeScript
isOsAccountActived(localId: number): Promise<boolean>
```

判断指定系统账号是否处于激活状态。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountActivated(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示账号已激活；返回false表示账号未激活。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.isOsAccountActived(localId).then((isActived: boolean) => {
  console.info('isOsAccountActived successfully, isActived: ' + isActived);
}).catch((err: BusinessError) => {
  console.error(`isOsAccountActived failed, code is ${err.code}, message is ${err.message}`);
});

```

## isOsAccountConstraintEnable

```TypeScript
isOsAccountConstraintEnable(localId: number, constraint: string, callback: AsyncCallback<boolean>): void
```

判断指定系统账号是否具有指定约束。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountConstraintEnabled(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
let constraint: string = 'constraint.wifi';
accountManager.isOsAccountConstraintEnable(localId, constraint, (err: BusinessError, isEnabled: boolean) => {
  if (err) {
    console.error(`isOsAccountConstraintEnable failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isOsAccountConstraintEnable successfully, isEnabled: ' + isEnabled);
  }
});

```

## isOsAccountConstraintEnable

```TypeScript
isOsAccountConstraintEnable(localId: number, constraint: string): Promise<boolean>
```

判断指定系统账号是否具有指定约束。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountConstraintEnabled(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
let constraint: string = 'constraint.wifi';
accountManager.isOsAccountConstraintEnable(localId, constraint).then((isEnabled: boolean) => {
  console.info('isOsAccountConstraintEnable successfully, isEnabled: ' + isEnabled);
}).catch((err: BusinessError) => {
  console.error(`isOsAccountConstraintEnable err: code is ${err.code}, message is ${err.message}`);
});

```

## isOsAccountConstraintEnabled

```TypeScript
isOsAccountConstraintEnabled(constraint: string): Promise<boolean>
```

判断当前系统账号是否使能指定约束。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let constraint: string = 'constraint.wifi';
try {
  accountManager.isOsAccountConstraintEnabled(constraint).then((isEnabled: boolean) => {
    console.info('isOsAccountConstraintEnabled successfully, isEnabled: ' + isEnabled);
  }).catch((err: BusinessError) => {
    console.error(`isOsAccountConstraintEnabled failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isOsAccountConstraintEnabled exception: code is ${err.code}, message is ${err.message}`);
}

```

## isOsAccountConstraintEnabled

```TypeScript
isOsAccountConstraintEnabled(localId: int, constraint: string): Promise<boolean>
```

判断指定系统账号是否使能指定约束。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| constraint | string | Yes | 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let constraint: string = 'constraint.wifi';
try {
  accountManager.isOsAccountConstraintEnabled(localId, constraint).then((isEnabled: boolean) => {
    console.info('isOsAccountConstraintEnabled successfully, isEnabled: ' + isEnabled);
  }).catch((err: BusinessError) => {
    console.error(`isOsAccountConstraintEnabled failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isOsAccountConstraintEnabled exception: code is ${err.code}, message is ${err.message}`);
}

```

## isOsAccountUnlocked

```TypeScript
isOsAccountUnlocked(): Promise<boolean>
```

检查当前系统账号是否已认证解锁。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.isOsAccountUnlocked().then((isVerified: boolean) => {
    console.info('isOsAccountUnlocked successfully, isVerified: ' + isVerified);
  }).catch((err: BusinessError) => {
    console.error(`isOsAccountUnlocked failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isOsAccountUnlocked exception: code is ${err.code}, message is ${err.message}`);
}

```

## isOsAccountUnlocked

```TypeScript
isOsAccountUnlocked(localId: int): Promise<boolean>
```

检查指定系统账号是否已验证。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。不填则检查当前系统账号是否已验证。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.isOsAccountUnlocked(localId).then((isVerified: boolean) => {
    console.info('isOsAccountUnlocked successfully, isVerified: ' + isVerified);
  }).catch((err: BusinessError) => {
    console.error(`isOsAccountUnlocked failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isOsAccountUnlocked exception: code is ${err.code}, message is ${err.message}`);
}

```

## isOsAccountVerified

```TypeScript
isOsAccountVerified(callback: AsyncCallback<boolean>): void
```

检查当前系统账号是否已验证。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [checkOsAccountVerified]osAccount.AccountManager.checkOsAccountVerified(callback: AsyncCallback<boolean>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountVerified(callback:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示指定账号已验证；返回false表示指定账号未验证。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.isOsAccountVerified((err: BusinessError, isVerified: boolean) => {
  if (err) {
    console.error(`isOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isOsAccountVerified successfully, isVerified: ' + isVerified);
  }
});

```

## isOsAccountVerified

```TypeScript
isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void
```

检查指定系统账号是否已验证。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountVerified(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示指定账号已验证；返回false表示指定账号未验证。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
// localId indicates the OS account ID, which can be obtained by calling getOsAccountLocalId.
let localId: number = 100;
accountManager.isOsAccountVerified(localId, (err: BusinessError, isVerified: boolean) => {
  if (err) {
    console.error(`isOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isOsAccountVerified successfully, isVerified: ' + isVerified);
  }
});

```

## isOsAccountVerified

```TypeScript
isOsAccountVerified(localId?: number): Promise<boolean>
```

检查指定系统账号是否已验证。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountVerified(localId:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | number | No | 系统账号ID。不填则检查当前系统账号是否已验证，默认为-1。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示指定账号已验证；返回false表示指定账号未验证。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.isOsAccountVerified().then((isVerified: boolean) => {
  console.info('isOsAccountVerified successfully, isVerified: ' + isVerified);
}).catch((err: BusinessError) => {
  console.error(`isOsAccountVerified failed, code is ${err.code}, message is ${err.message}`);
});

```

## isTestOsAccount

```TypeScript
isTestOsAccount(callback: AsyncCallback<boolean>): void
```

检查当前系统账号是否为测试账号。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [checkOsAccountTestable]osAccount.AccountManager.checkOsAccountTestable(callback: AsyncCallback<boolean>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountTestable(callback:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.isTestOsAccount((err: BusinessError, isTestable: boolean) => {
  if (err) {
    console.error(`isTestOsAccount failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('isTestOsAccount successfully, isTestable: ' + isTestable);
  }
});

```

## isTestOsAccount

```TypeScript
isTestOsAccount(): Promise<boolean>
```

检查当前系统账号是否为测试账号。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [checkOsAccountTestable]osAccount.AccountManager.checkOsAccountTestable()替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.checkOsAccountTestable()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
  accountManager.isTestOsAccount().then((isTestable: boolean) => {
    console.info('isTestOsAccount successfully, isTestable: ' + isTestable);
  }).catch((err: BusinessError) => {
    console.error(`isTestOsAccount failed, code is ${err.code}, message is ${err.message}`);
});

```

## off('activate' | 'activating')

```TypeScript
off(type: 'activate' | 'activating', name: string, callback?: Callback<int>): void
```

取消订阅系统账号的激活完成与激活中的事件。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activate' \| 'activating' | Yes | 取消订阅类型，activate表示取消订阅账号已激活完成的事件，activating取消订阅账号正在激活的事件。 |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。 |
| callback | Callback&lt;int> | No | 取消订阅系统账号激活完成与激活中的事件回调，默认为空，表示取消该类型事件的所有回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function offCallback(){
  console.info('off enter')
}

try {
  accountManager.off('activating', 'osAccountOnOffNameA', offCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`off exception: code is ${err.code}, message is ${err.message}`);
}

```

## off('activate' | 'activating')

```TypeScript
off(type: 'activate' | 'activating', name: string, callback?: Callback<int>): void
```

取消订阅系统账号的激活完成与激活中的事件。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activate' \| 'activating' | Yes | 取消订阅类型，activate表示取消订阅账号已激活完成的事件，activating取消订阅账号正在激活的事件。 |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。 |
| callback | Callback&lt;int> | No | 取消订阅系统账号激活完成与激活中的事件回调，默认为空，表示取消该类型事件的所有回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function offCallback(){
  console.info('off enter')
}

try {
  accountManager.off('activating', 'osAccountOnOffNameA', offCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`off exception: code is ${err.code}, message is ${err.message}`);
}

```

## off('switching')

```TypeScript
off(type: 'switching', callback?: Callback<OsAccountSwitchEventData>): void
```

取消订阅系统账号的前后台正在切换事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

- API version12  to  22: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version23 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'switching' | Yes | 取消订阅类型，switching表示取消订阅的是系统账号的前后台正在切换事件。 |
| callback | Callback&lt;OsAccountSwitchEventData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.off('switching');
} catch (e) {
  const err = e as BusinessError;
  console.error(`off exception: code is ${err.code}, message is ${err.message}`);
}

```

## off('switched')

```TypeScript
off(type: 'switched', callback?: Callback<OsAccountSwitchEventData>): void
```

取消订阅系统账号的前后台切换结束事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

- API version12  to  22: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version23 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'switched' | Yes | 取消订阅类型，switched表示取消订阅的是系统账号的前后台切换结束事件。 |
| callback | Callback&lt;OsAccountSwitchEventData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.off('switched');
} catch (e) {
  const err = e as BusinessError;
  console.error(`off exception: code is ${err.code}, message is ${err.message}`);
}

```

## offActivate

```TypeScript
offActivate(name: string, callback?: Callback<int>): void
```

取消订阅系统账号的激活完成的事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。 |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name. |

## offActivating

```TypeScript
offActivating(name: string, callback?: Callback<int>): void
```

取消订阅系统账号的激活中的事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。 |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name. |

## offConstraintChanged

```TypeScript
offConstraintChanged(callback?: Callback<ConstraintChangeInfo>): void
```

取消与指定回调关联的约束变更订阅记录。若未指定回调，则取消所有订阅记录。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConstraintChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let constraint: string = 'constraint.wifi';
const callback:Callback<osAccount.ConstraintChangeInfo> = (data: osAccount.ConstraintChangeInfo): void => {
  console.info(`ConstraintChangeInfo received, constraint: ${data.constraint} isEnabled: ${data.isEnabled}`);
};

try {
  accountManager.onConstraintChanged([constraint], callback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`onConstraintChanged exception: code is ${err.code}, message is ${err.message}`);
}

try {
  accountManager.offConstraintChanged(callback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`offConstraintChanged exception: code is ${err.code}, message is ${err.message}`);
}

```

## offSwitched

```TypeScript
offSwitched(callback?: Callback<OsAccountSwitchEventData>): void
```

取消订阅系统账号的前后台切换结束事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OsAccountSwitchEventData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

## offSwitching

```TypeScript
offSwitching(callback?: Callback<OsAccountSwitchEventData>): void
```

取消订阅系统账号的前后台正在切换事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OsAccountSwitchEventData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

## on('activate' | 'activating')

```TypeScript
on(type: 'activate' | 'activating', name: string, callback: Callback<int>): void
```

订阅系统账号的激活完成与激活中的事件。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activate' \| 'activating' | Yes | 订阅类型，activate表示订阅的是账号已激活完成的事件，activating表示订阅的是账号正在激活的事件。 |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节。 |
| callback | Callback&lt;int> | Yes | 订阅系统账号激活完成与激活中的事件回调，表示激活完成后或正在激活中的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function onCallback(receiveLocalId: number){
  console.info('receive localId:' + receiveLocalId);
}

try {
  accountManager.on('activating', 'osAccountOnOffNameA', onCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`receive localId exception: code is ${err.code}, message is ${err.message}`);
}

```

## on('activate' | 'activating')

```TypeScript
on(type: 'activate' | 'activating', name: string, callback: Callback<int>): void
```

订阅系统账号的激活完成与激活中的事件。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activate' \| 'activating' | Yes | 订阅类型，activate表示订阅的是账号已激活完成的事件，activating表示订阅的是账号正在激活的事件。 |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节。 |
| callback | Callback&lt;int> | Yes | 订阅系统账号激活完成与激活中的事件回调，表示激活完成后或正在激活中的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or name. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function onCallback(receiveLocalId: number){
  console.info('receive localId:' + receiveLocalId);
}

try {
  accountManager.on('activating', 'osAccountOnOffNameA', onCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`receive localId exception: code is ${err.code}, message is ${err.message}`);
}

```

## on('switching')

```TypeScript
on(type: 'switching', callback: Callback<OsAccountSwitchEventData>): void
```

订阅系统账号的前后台正在切换事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

- API version12  to  22: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version23 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'switching' | Yes | 订阅类型，switching表示订阅的是系统账号的前后台正在切换事件。 |
| callback | Callback&lt;OsAccountSwitchEventData> | Yes | 订阅系统账号的前后台正在切换事件回调，包含切换来源和切换目标的系统账号ID。 说明： 从API version  23开始，事件数据中新增可选字段displayId，表示发生切换事件的逻辑屏ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function onSwitchingCallback(eventData: osAccount.OsAccountSwitchEventData){
  console.info('receive eventData:' + JSON.stringify(eventData));
}

try {
  accountManager.on('switching', onSwitchingCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`receive eventData exception: code is ${err.code}, message is ${err.message}`);
}

```

## on('switched')

```TypeScript
on(type: 'switched', callback: Callback<OsAccountSwitchEventData>): void
```

订阅系统账号的前后台切换结束事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

- API version12  to  22: ohos.permission.MANAGE_LOCAL_ACCOUNTS

- API version23 and later: ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'switched' | Yes | 订阅类型，switched表示订阅的是系统账号的前后台切换结束事件。 |
| callback | Callback&lt;OsAccountSwitchEventData> | Yes | 订阅系统账号的前后台切换结束事件回调，包含切换来源和切换目标的系统账号ID。 说明： 从API version  23开始，事件数据中新增可选字段displayId，表示发生切换事件的逻辑屏ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

function onSwitchedCallback(eventData: osAccount.OsAccountSwitchEventData){
  console.info('receive eventData:' + JSON.stringify(eventData));
}

try {
  accountManager.on('switched', onSwitchedCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`receive eventData exception: code is ${err.code}, message is ${err.message}`);
}

```

## onActivate

```TypeScript
onActivate(name: string, callback: Callback<int>): void
```

订阅系统账号的激活完成的事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节。 |
| callback | Callback&lt;int> | Yes | 订阅系统账号激活完成的事件回调。表示激活完成后的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name. |

## onActivating

```TypeScript
onActivating(name: string, callback: Callback<int>): void
```

订阅系统账号的激活中的事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 订阅名称，可自定义，要求非空且长度不超过1024字节。 |
| callback | Callback&lt;int> | Yes | 订阅系统账号激活中的事件回调，表示正在激活中的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid name. |

## onConstraintChanged

```TypeScript
onConstraintChanged(constraints: string[], callback: Callback<ConstraintChangeInfo>): void
```

订阅调用方所属系统账号的一种或多种约束变更事件。使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| constraints | string[] | Yes | 表示待订阅的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列  表。 |
| callback | Callback&lt;ConstraintChangeInfo> | Yes | 表示用于接收约束变更事件的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |
| 12300002 | One or more constraints are invalid. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let constraint: string = 'constraint.wifi';
const callback:Callback<osAccount.ConstraintChangeInfo> = (data: osAccount.ConstraintChangeInfo): void => {
  console.info(`ConstraintChangeInfo received, constraint: ${data.constraint} isEnabled: ${data.isEnabled}`);
};

try {
  accountManager.onConstraintChanged([constraint], callback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`onConstraintChanged exception: code is ${err.code}, message is ${err.message}`);
}

```

## onSwitched

```TypeScript
onSwitched(callback: Callback<OsAccountSwitchEventData>): void
```

订阅系统账号的前后台切换结束事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OsAccountSwitchEventData> | Yes | 订阅系统账号的前后台切换结束事件回调，包含切换来源和切换目标的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

## onSwitching

```TypeScript
onSwitching(callback: Callback<OsAccountSwitchEventData>): void
```

订阅系统账号的前后台正在切换事件。使用callback异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OsAccountSwitchEventData> | Yes | 订阅系统账号的前后台正在切换事件回调，包含切换来源和切换目标的系统账号ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

## queryActivatedOsAccountIds

```TypeScript
queryActivatedOsAccountIds(callback: AsyncCallback<Array<number>>): void
```

查询当前处于激活状态的系统账号的ID列表。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getActivatedOsAccountLocalIds]osAccount.AccountManager.getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getActivatedOsAccountLocalIds(callback:

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;number>> | Yes | 回调函数。如果查询成功，err为null，data为当前处于激活状态的系统账号的ID列表；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.queryActivatedOsAccountIds((err: BusinessError, idArray: number[]) => {
  if (err) {
    console.error(`queryActivatedOsAccountIds code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('queryActivatedOsAccountIds idArray length:' + idArray.length);
    for (let i = 0; i < idArray.length; i++) {
      console.info('activated os account id: ' + idArray[i]);
    }
  }
});

```

## queryActivatedOsAccountIds

```TypeScript
queryActivatedOsAccountIds(): Promise<Array<number>>
```

查询当前处于激活状态的系统账号的ID列表。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用 > [getActivatedOsAccountLocalIds]osAccount.AccountManager.getActivatedOsAccountLocalIds()替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getActivatedOsAccountLocalIds()

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number>> | Promise对象，返回当前处于激活状态的系统账号的ID列表。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.queryActivatedOsAccountIds().then((idArray: number[]) => {
  console.info('queryActivatedOsAccountIds, idArray: ' + idArray);
}).catch((err: BusinessError) => {
  console.error(`queryActivatedOsAccountIds err: code is ${err.code}, message is ${err.message}`);
});

```

## queryAllCreatedOsAccounts

```TypeScript
queryAllCreatedOsAccounts(callback: AsyncCallback<Array<OsAccountInfo>>): void
```

查询已创建的所有系统账号的信息列表。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;OsAccountInfo>> | Yes | 回调函数。如果查询成功，err为null，data为已创建的所有系统账号的信息列表；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryAllCreatedOsAccounts((err: BusinessError, accountArr: osAccount.OsAccountInfo[])=>{
    if (err) {
      console.error(`queryAllCreatedOsAccounts exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('queryAllCreatedOsAccounts accountArr:' + JSON.stringify(accountArr));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryAllCreatedOsAccounts exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryAllCreatedOsAccounts

```TypeScript
queryAllCreatedOsAccounts(): Promise<Array<OsAccountInfo>>
```

查询已创建的所有系统账号的信息列表。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;OsAccountInfo>> | Promise对象，返回已创建的所有系统账号的信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryAllCreatedOsAccounts().then((accountArr: osAccount.OsAccountInfo[]) => {
    console.info('queryAllCreatedOsAccounts, accountArr: ' + JSON.stringify(accountArr));
  }).catch((err: BusinessError) => {
    console.error(`queryAllCreatedOsAccounts err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryAllCreatedOsAccounts exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryCurrentOsAccount

```TypeScript
queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void
```

查询当前进程所属的系统账号的信息。使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getCurrentOsAccount(callback:

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OsAccountInfo> | Yes | 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号信息；否则为错误对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.queryCurrentOsAccount((err: BusinessError, curAccountInfo: osAccount.OsAccountInfo)=>{
  if (err) {
    console.error(`queryCurrentOsAccount code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('queryCurrentOsAccount curAccountInfo:' + JSON.stringify(curAccountInfo));
  }
});

```

## queryCurrentOsAccount

```TypeScript
queryCurrentOsAccount(): Promise<OsAccountInfo>
```

查询当前进程所属的系统账号的信息。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。

**Since:** 7

**Deprecated since:** 9

**Substitute:** osAccount.AccountManager.getCurrentOsAccount()

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回当前进程所属的系统账号信息。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
accountManager.queryCurrentOsAccount().then((accountInfo: osAccount.OsAccountInfo) => {
  console.info('queryCurrentOsAccount, accountInfo: ' + JSON.stringify(accountInfo));
}).catch((err: BusinessError) => {
  console.error(`queryCurrentOsAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## queryDistributedVirtualDeviceId

```TypeScript
queryDistributedVirtualDeviceId(callback: AsyncCallback<string>): void
```

获取分布式虚拟设备ID。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。如果获取成功，err为null，data为分布式虚拟设备ID；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryDistributedVirtualDeviceId((err: BusinessError, virtualID: string) => {
    if (err) {
      console.error(`queryDistributedVirtualDeviceId err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('queryDistributedVirtualDeviceId virtualID: ' + virtualID);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryDistributedVirtualDeviceId exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryDistributedVirtualDeviceId

```TypeScript
queryDistributedVirtualDeviceId(): Promise<string>
```

获取分布式虚拟设备ID。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回分布式虚拟设备ID。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryDistributedVirtualDeviceId().then((virtualID: string) => {
    console.info('queryDistributedVirtualDeviceId, virtualID: ' + virtualID);
  }).catch((err: BusinessError) => {
    console.error(`queryDistributedVirtualDeviceId err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryDistributedVirtualDeviceId exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryMaxLoggedInOsAccountNumber

```TypeScript
queryMaxLoggedInOsAccountNumber(): Promise<int>
```

查询允许同时登录的系统账号的最大数量。使用Promise异步回调。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回允许登录的系统账号的最大数量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryMaxLoggedInOsAccountNumber().then((maxNum: number) => {
    console.info('queryMaxLoggedInOsAccountNumber successfully, maxNum: ' + maxNum);
  }).catch((err: BusinessError) => {
    console.error(`queryMaxLoggedInOsAccountNumber failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryMaxLoggedInOsAccountNumber exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryMaxOsAccountNumber

```TypeScript
queryMaxOsAccountNumber(callback: AsyncCallback<int>): void
```

查询允许创建的系统账号的最大数量。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | 回调函数，如果查询成功，err为null，data为允许创建的系统账号的最大数量；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryMaxOsAccountNumber((err: BusinessError, maxCnt: number) => {
    if (err) {
      console.error(`queryMaxOsAccountNumber failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('queryMaxOsAccountNumber successfully, maxCnt:' + maxCnt);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryMaxOsAccountNumber exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryMaxOsAccountNumber

```TypeScript
queryMaxOsAccountNumber(): Promise<int>
```

查询允许创建的系统账号的最大数量。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回允许创建的系统账号的最大数量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryMaxOsAccountNumber().then((maxCnt: number) => {
    console.info('queryMaxOsAccountNumber successfully, maxCnt: ' + maxCnt);
  }).catch((err: BusinessError) => {
    console.error(`queryMaxOsAccountNumber failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryMaxOsAccountNumber exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryOsAccount

```TypeScript
queryOsAccount(): Promise<OsAccountInfo>
```

查询当前进程所属的系统账号的信息。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回当前进程所属的系统账号信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
try {
  accountManager.queryOsAccount().then((accountInfo: osAccount.OsAccountInfo) => {
    console.info('queryOsAccount, accountInfo: ' + JSON.stringify(accountInfo));
  }).catch((err: BusinessError) => {
    console.error(`queryOsAccount err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryOsAccountById

```TypeScript
queryOsAccountById(localId: int, callback: AsyncCallback<OsAccountInfo>): void
```

查询指定系统账号的信息。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号的ID。 |
| callback | AsyncCallback&lt;OsAccountInfo> | Yes | 回调函数。如果查询成功，err为null，data为查到的系统账号的信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.queryOsAccountById(localId, (err: BusinessError, accountInfo: osAccount.OsAccountInfo)=>{
    if (err) {
      console.error(`queryOsAccountById exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('queryOsAccountById accountInfo:' + JSON.stringify(accountInfo));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryOsAccountById exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryOsAccountById

```TypeScript
queryOsAccountById(localId: int): Promise<OsAccountInfo>
```

查询指定系统账号的信息。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 要查询的系统账号的ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OsAccountInfo> | Promise对象，返回查到的系统账号的信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.queryOsAccountById(localId).then((accountInfo: osAccount.OsAccountInfo) => {
    console.info('queryOsAccountById, accountInfo: ' + JSON.stringify(accountInfo));
  }).catch((err: BusinessError) => {
    console.error(`queryOsAccountById err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryOsAccountById exception: code is ${err.code}, message is ${err.message}`);
}

```

## removeOsAccount

```TypeScript
removeOsAccount(localId: int, callback: AsyncCallback<void>): void
```

删除指定系统账号。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。如果删除账号成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300010 | Service busy. Possible causes: The target account is being operated on. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let accountName: string = 'testAccountName';
try {
  accountManager.createOsAccount(accountName, osAccount.OsAccountType.NORMAL,
    (err: BusinessError, osAccountInfo: osAccount.OsAccountInfo) => {
      accountManager.removeOsAccount(osAccountInfo.localId, (err: BusinessError)=>{
        if (err) {
          console.error(`removeOsAccount failed, code is ${err.code}, message is ${err.message}`);
        } else {
          console.info('removeOsAccount successfully');
        }
    });
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`removeOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## removeOsAccount

```TypeScript
removeOsAccount(localId: int): Promise<void>
```

删除指定系统账号。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. [since 24] |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300010 | Service busy. Possible causes: The target account is being operated. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let accountName: string = 'testAccountName';
try {
  accountManager.createOsAccount(accountName, osAccount.OsAccountType.NORMAL,
    (err: BusinessError, osAccountInfo: osAccount.OsAccountInfo)=>{
      accountManager.removeOsAccount(osAccountInfo.localId).then(() => {
        console.info('removeOsAccount successfully');
      }).catch((err: BusinessError) => {
        console.error(`removeOsAccount failed, code is ${err.code}, message is ${err.message}`);
      });
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`removeOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## removeOsAccount

```TypeScript
removeOsAccount(localId: int, options: RemoveOsAccountOptions): Promise<void>
```

根据删除选项，删除指定系统账号。使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| options | RemoveOsAccountOptions | Yes | 删除系统账号的选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or options. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |
| 12300010 | Service busy. Possible causes: The target account is being operated on. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let accountName: string = 'testAccountName';
let token: Uint8Array = new Uint8Array([0]);
let options: osAccount.RemoveOsAccountOptions = {
  token: token,
}
try {
  accountManager.createOsAccount(accountName, osAccount.OsAccountType.NORMAL,
    (err: BusinessError, osAccountInfo: osAccount.OsAccountInfo)=>{
      accountManager.removeOsAccount(osAccountInfo.localId, options).then(() => {
        console.info('removeOsAccount successfully');
      }).catch((err: BusinessError) => {
        console.error(`removeOsAccount failed, code is ${err.code}, message is ${err.message}`);
      });
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`removeOsAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountConstraints

```TypeScript
setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean, callback: AsyncCallback<void>): void
```

为指定系统账号设置/删除约束。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| constraints | Array&lt;string> | Yes | 待设置/删除的  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列表。 |
| enable | boolean | Yes | 设置(true)/删除(false) 。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。如果设置成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or constraints. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let constraint: string = 'constraint.wifi';
try {
  accountManager.setOsAccountConstraints(localId, [constraint], true, (err: BusinessError) => {
    if (err) {
      console.error(`setOsAccountConstraints failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOsAccountConstraints successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountConstraints exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountConstraints

```TypeScript
setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean): Promise<void>
```

为指定系统账号设置/删除约束。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| constraints | Array&lt;string> | Yes | 待设置/删除的  [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列表。 |
| enable | boolean | Yes | 设置(true)/删除(false)。 |

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
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or constraints. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
try {
  accountManager.setOsAccountConstraints(localId, ['constraint.location.set'], false).then(() => {
    console.info('setOsAccountConstraints successfully');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountConstraints failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountConstraints exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountName

```TypeScript
setOsAccountName(localId: int, localName: string, callback: AsyncCallback<void>): void
```

设置指定系统账号的账号名。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| localName | string | Yes | 账号名，最大长度为1024个字符。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。如果设置成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or localName. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let name: string = 'demoName';
try {
  accountManager.setOsAccountName(localId, name, (err: BusinessError) => {
    if (err) {
      console.error(`setOsAccountName failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOsAccountName successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountName exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountName

```TypeScript
setOsAccountName(localId: int, localName: string): Promise<void>
```

设置指定系统账号的账号名。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| localName | string | Yes | 账号名，最大长度为1024个字符。 |

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
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or localName. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let name: string = 'testName';
try {
  accountManager.setOsAccountName(localId, name).then(() => {
    console.info('setOsAccountName successfully');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountName failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountName exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountProfilePhoto

```TypeScript
setOsAccountProfilePhoto(localId: int, photo: string, callback: AsyncCallback<void>): void
```

为指定系统账号设置头像信息。使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| photo | string | Yes | 头像信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。如果设置成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or photo. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let photo: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAAXNSR0IArs4c6QAAAARnQU1BAA'+
'Cxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVDhPvZLBDYMwDEV/ugsXRjAT0EHCOuFIBwkbdIRewi6unbiAyoGgSn1SFH85+Y'+
'q/4ljARW62X+LHS8uIzjm4dXUYF+utzBikB52Jo5e5iEPKqpACk7R9NM2RvWm5tIkD2czLCUFNKLD6IjdMHFHDzws285MgGrT0xCtp3WOKHo'+
'+7q0mP0DZW9pNmoEFUzrQjp5cCnaen2kSJXLFD8ghbXyZCMQf/8e8Ns1XVAG/XAgqKzVnJFAAAAABJRU5ErkJggg=='
try {
  accountManager.setOsAccountProfilePhoto(localId, photo, (err: BusinessError)=>{
    if (err) {
      console.error(`setOsAccountProfilePhoto exception:code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOsAccountProfilePhoto successful.');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountProfilePhoto exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountProfilePhoto

```TypeScript
setOsAccountProfilePhoto(localId: int, photo: string): Promise<void>
```

为指定系统账号设置头像信息。使用Promise异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| photo | string | Yes | 头像信息。 |

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
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId or photo. |
| 12300003 | Account not found. |
| 12300008 | Restricted Account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let photo: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAAAXNSR0IArs4c6QAAAARnQU1BAA'+
'Cxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVDhPvZLBDYMwDEV/ugsXRjAT0EHCOuFIBwkbdIRewi6unbiAyoGgSn1SFH85+Y'+
'q/4ljARW62X+LHS8uIzjm4dXUYF+utzBikB52Jo5e5iEPKqpACk7R9NM2RvWm5tIkD2czLCUFNKLD6IjdMHFHDzws285MgGrT0xCtp3WOKHo'+
'+7q0mP0DZW9pNmoEFUzrQjp5cCnaen2kSJXLFD8ghbXyZCMQf/8e8Ns1XVAG/XAgqKzVnJFAAAAABJRU5ErkJggg=='
try {
  accountManager.setOsAccountProfilePhoto(localId, photo).then(() => {
    console.info('setOsAccountProfilePhoto success');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountProfilePhoto err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountProfilePhoto exception: code is ${err.code}, message is ${err.message}`);
}

```

## setOsAccountType

```TypeScript
setOsAccountType(localId: int, type: OsAccountType, options?: SetOsAccountTypeOptions): Promise<void>
```

设置指定系统账号的账号类型。使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 系统账号ID。 |
| type | OsAccountType | Yes | 系统账号类型。 |
| options | SetOsAccountTypeOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid type or options. |
| 12300003 | Account not found. |
| 12300008 | Restricted OS account. |
| 12300010 | Service busy. Possible causes: The target account is being operated. |
| 12300023 | The number of accounts of the specified type has reached the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
let localId: number = 100;
let type: osAccount.OsAccountType = osAccount.OsAccountType.ADMIN;
let options: osAccount.SetOsAccountTypeOptions = {
  token: new Uint8Array([0, 1, 2, 3])
};
try {
  accountManager.setOsAccountType(localId, type, options).then(() => {
    console.info('setOsAccountType successfully');
  }).catch((err: BusinessError) => {
    console.error(`setOsAccountType failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setOsAccountType exception: code is ${err.code}, message is ${err.message}`);
}

```

