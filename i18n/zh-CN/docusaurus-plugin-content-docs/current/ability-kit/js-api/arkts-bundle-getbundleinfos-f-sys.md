# getBundleInfos

## getBundleInfos

```TypeScript
function getBundleInfos(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains all BundleInfo for a specified user in the system. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllBundleInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | Flag used to specify the information contained in the returned bundle  information object. Value range: see the bundle information related flags  in [BundleFlag]bundle.BundleFlag. |
| userId | number | 是 | User ID. Value range: greater than or equal to 0. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | 是 | Callback used to return the result. If getBundleInfos  is successful, err is undefined, and the BundleInfo of all  bundles under the specified user as the input parameter at program startup.  Otherwise, err is an error object. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllBundleInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | Flag used to specify the information contained in the returned bundle  information object. Value range: see the bundle information related flags  in [BundleFlag]bundle.BundleFlag. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | 是 | Callback used to return the result. If getBundleInfos  is successful, err is undefined, and all available BundleInfo as the input parameter at  program startup. Otherwise, err is an error object. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllBundleInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | 是 | Flag used to specify the information contained in the  returned bundle information object. Value range: see the bundle information related flags  in [BundleFlag]bundle.BundleFlag. |
| userId | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo>> | Promise used to return all available BundleInfo. |

**示例：**

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

