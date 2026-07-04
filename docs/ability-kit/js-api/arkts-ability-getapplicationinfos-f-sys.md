---
last_update:
  date: 2026-07-04
---

# getApplicationInfos (System API)

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getApplicationInfos

```TypeScript
function getApplicationInfos(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains information about all installed applications of a specified user.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllApplicationInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Indicates the flag used to specify information containedin the ApplicationInfo objects that will be returned. |
| userId | number | Yes | Indicates the user ID. |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo&gt;&gt; | Yes | When obtaining the array of ApplicationInfo objectssucceeds, err is undefined, and data is the obtained array of ApplicationInfo objects;otherwise, the outcome is an error object. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';

let bundleFlags: number = bundle.BundleFlag.GET_APPLICATION_INFO_WITH_PERMISSION;
let userId: number = 100;

bundle.getApplicationInfos(bundleFlags, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})

```


## getApplicationInfos

```TypeScript
function getApplicationInfos(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains information about all installed applications of a specified user.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllApplicationInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Indicates the flag used to specify information containedin the ApplicationInfo objects that will be returned. |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo&gt;&gt; | Yes | When obtaining the array of ApplicationInfo objectssucceeds, err is undefined, and data is the obtained array of ApplicationInfo objects;otherwise, the outcome is an error object. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';

let bundleFlags: number = bundle.BundleFlag.GET_APPLICATION_INFO_WITH_PERMISSION;

bundle.getApplicationInfos(bundleFlags, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})

```


## getApplicationInfos

```TypeScript
function getApplicationInfos(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>
```

Obtains information about all installed applications of a specified user.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllApplicationInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Indicates the flag used to specify information containedin the ApplicationInfo objects that will be returned. |
| userId | number | No | Indicates the user ID or do not pass user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ApplicationInfo&gt;&gt; | Promise used to return a list of ApplicationInfo objects. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleFlags: number = bundle.BundleFlag.GET_APPLICATION_INFO_WITH_PERMISSION;
let userId: number = 100;

bundle.getApplicationInfos(bundleFlags, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })

```

