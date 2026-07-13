# getBundleInfos (System API)

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getBundleInfos

```TypeScript
function getBundleInfos(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains all BundleInfo for a specified user in the system.
This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Flag used to specify the information contained in the returned bundleinformation object. Value range: see the bundle information related flagsin [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | Yes | User ID. Value range: greater than or equal to 0. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | Callback used to return the result. If getBundleInfosis successful, **err** is **undefined**, and the BundleInfo of allbundles under the specified user as the input parameter at program startup.Otherwise, **err** is an error object. |

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

Obtains all BundleInfo for the current user. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Flag used to specify the information contained in the returned bundleinformation object. Value range: see the bundle information related flagsin [BundleFlag](arkts-ability-bundleflag-e.md). |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | Callback used to return the result. If getBundleInfosis successful, **err** is **undefined**, and all available BundleInfo as the input parameter atprogram startup. Otherwise, **err** is an error object. |

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

Obtains all BundleInfo for a specified user. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getAllBundleInfo

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Flag used to specify the information contained in thereturned bundle information object. Value range: see the bundle information related flagsin [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | No | User ID.Default value: the user to which the caller belongs.Value range: greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo&gt;&gt; | Promise used to return all available BundleInfo. |

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

