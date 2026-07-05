# getBundleInfos (System API)

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getBundleInfos

```TypeScript
function getBundleInfos(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains BundleInfo of all bundles available in the system.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Indicates the flag used to specify information containedin the BundleInfo that will be returned. |
| userId | number | Yes | Indicates the user ID. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | When obtaining the array of BundleInfo objectssucceeds, err is undefined, and data is the obtained array of BundleInfo objects;otherwise, the outcome is an error object. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';

let bundleFlag: number = bundle.BundleFlag.GET_BUNDLE_DEFAULT;
let userId: number = 100;

bundle.getBundleInfos(bundleFlag, userId, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})

```


## getBundleInfos

```TypeScript
function getBundleInfos(bundleFlag: BundleFlag, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains BundleInfo of all bundles available in the system.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Indicates the flag used to specify information containedin the BundleInfo that will be returned. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | When obtaining the array of BundleInfo objectssucceeds, err is undefined, and data is the obtained array of BundleInfo objects;otherwise, the outcome is an error object. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';

let bundleFlag: number = bundle.BundleFlag.GET_BUNDLE_DEFAULT;

bundle.getBundleInfos(bundleFlag, (err, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. Data:' + JSON.stringify(data));
})

```


## getBundleInfos

```TypeScript
function getBundleInfos(bundleFlag: BundleFlag, userId?: number): Promise<Array<BundleInfo>>
```

Obtains BundleInfo of all bundles available in the system.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Indicates the flag used to specify information containedin the BundleInfo that will be returned. |
| userId | number | No | Indicates the user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo&gt;&gt; | Promise used to return a list of BundleInfo objects. |

**Example**

```TypeScript
import bundle from '@ohos.bundle';
import { BusinessError } from '@ohos.base';

let bundleFlag: number = bundle.BundleFlag.GET_BUNDLE_DEFAULT;
let userId: number = 100;

bundle.getBundleInfos(bundleFlag, userId)
  .then((data) => {
    console.info('Operation successful. Data: ' + JSON.stringify(data));
  }).catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  })

```

