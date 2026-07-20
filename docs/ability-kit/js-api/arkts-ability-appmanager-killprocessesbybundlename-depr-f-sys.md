# killProcessesByBundleName (System API)

## killProcessesByBundleName

```TypeScript
function killProcessesByBundleName(bundleName: string): Promise<void>
```

Kill processes by bundle name

**Since:** 8

**Deprecated since:** 9

**Substitutes:** killProcessesByBundleName

**Required permissions:** ohos.permission.CLEAN_BACKGROUND_PROCESSES

<!--Device-appManager-function killProcessesByBundleName(bundleName: string): Promise<void>--><!--Device-appManager-function killProcessesByBundleName(bundleName: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

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

Kill processes by bundle name

**Since:** 8

**Deprecated since:** 9

**Substitutes:** killProcessesByBundleName

**Required permissions:** ohos.permission.CLEAN_BACKGROUND_PROCESSES

<!--Device-appManager-function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>)--><!--Device-appManager-function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>)-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundle name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | cut off the callback function of the account process. |

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

