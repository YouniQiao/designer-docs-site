# getApplicationInfos

## getApplicationInfos

```TypeScript
function getApplicationInfos(bundleFlags: number, userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains information about all installed apps for a specified user. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllApplicationInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | Flag used to specify the information contained in the returned  application information object. Value range: see the application information related flags  in BundleFlag. |
| userId | number | 是 | User ID. Value range: greater than or equal to 0. |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo>> | 是 | Callback used to return the result. If  getApplicationInfos is successful, err is undefined, and the list of app information as  the input parameter at program startup. Otherwise, err is an error object. |

**示例：**

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

Obtains information about installed apps for the user to which the caller belongs. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllApplicationInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | Flag used to specify the information contained in the returned  application information object. Value range: see the application information related flags  in BundleFlag. |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo>> | 是 | Callback used to return the result. If  getApplicationInfos is successful, err is undefined, and the list of  app information as the input parameter at program startup. Otherwise, err is an error object. |

**示例：**

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

Obtains information about all installed apps for a specified user. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.bundle.bundleManager#getAllApplicationInfo

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleFlags | number | 是 | Flag used to specify the information contained in the returned application  information object. Value range: see the application information related flags in BundleFlag. |
| userId | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ApplicationInfo>> | Promise used to return the list of app information  when obtained successfully. |

**示例：**

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

