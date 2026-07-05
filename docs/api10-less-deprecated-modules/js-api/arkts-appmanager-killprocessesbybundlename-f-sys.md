# killProcessesByBundleName

## killProcessesByBundleName

```TypeScript
function killProcessesByBundleName(bundleName: string): Promise<void>
```

通过Bundle名称终止进程。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#killProcessesByBundleName

**Required permissions:** 

 ohos.permission.CLEAN_BACKGROUND_PROCESSES

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let bundleName = 'com.example.myapplication';
appManager.killProcessesByBundleName(bundleName)
  .then((data) => {
    console.info(`KillProcessesByBundleName success, data: ${JSON.stringify(data)}.`);
  })
  .catch((err: BusinessError) => {
    console.error(`KillProcessesByBundleName failed, error code: ${err.code}, error msg: ${err.message}.`);
  });

```

## killProcessesByBundleName

```TypeScript
function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>)
```

通过Bundle名称终止进程。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#killProcessesByBundleName

**Required permissions:** 

 ohos.permission.CLEAN_BACKGROUND_PROCESSES

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示Bundle名称。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当通过Bundle名称终止进程成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let bundleName = 'bundleName';

function killProcessesByBundleNameCallback(err: BusinessError, data: void) {
  if (err) {
    console.error(`KillProcessesByBundleNameCallback failed, error code: ${err.code}, error msg: ${err.message}.`);
  } else {
    console.info(`KillProcessesByBundleNameCallback success, data: ${JSON.stringify(data)}.`);
  }
}

appManager.killProcessesByBundleName(bundleName, killProcessesByBundleNameCallback);

```

