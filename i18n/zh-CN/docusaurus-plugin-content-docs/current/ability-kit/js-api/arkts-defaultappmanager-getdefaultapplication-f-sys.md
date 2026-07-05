# getDefaultApplication

## getDefaultApplication

```TypeScript
function getDefaultApplication(type: string, userId: int, callback: AsyncCallback<BundleInfo>) : void
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型获取默认应用信息。使用 callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_DEFAULT_APPLICATION

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 要查询的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| userId | int | 是 | 表示用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;BundleInfo> | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为undefined，data为获取  到的应用信息；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700004 | The specified user ID is not found. |
| 17700023 | The specified default app does not exist. |
| 17700025 | The specified type is invalid. |

**示例：**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

let userId = 100;
defaultAppManager.getDefaultApplication(defaultAppManager.ApplicationType.BROWSER, userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

defaultAppManager.getDefaultApplication("image/png", userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

defaultAppManager.getDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI, userId, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

```

## getDefaultApplication

```TypeScript
function getDefaultApplication(type: string, callback: AsyncCallback<BundleInfo>) : void
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型获取默认应用信息。使用 callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_DEFAULT_APPLICATION

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 要查询的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| callback | AsyncCallback&lt;BundleInfo> | 是 | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为undefined，data为获取  到的应用信息；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700023 | The specified default app does not exist. |
| 17700025 | The specified type is invalid. |

**示例：**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

defaultAppManager.getDefaultApplication(defaultAppManager.ApplicationType.BROWSER, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

defaultAppManager.getDefaultApplication("image/png", (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

defaultAppManager.getDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI, (err: BusinessError, data) => {
  if (err) {
    console.error('Operation failed. Cause: ' + JSON.stringify(err));
    return;
  }
  console.info('Operation successful. bundleInfo:' + JSON.stringify(data));
});

```

## getDefaultApplication

```TypeScript
function getDefaultApplication(type: string, userId?: int) : Promise<BundleInfo>
```

根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型获取默认应用信息。使用Promise 异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_DEFAULT_APPLICATION

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 要查询的应用类型，取  [ApplicationType](arkts-defaultappmanager-applicationtype-e.md#ApplicationType)中的值，或者符合媒体类型格式的文件类型，或者  [UniformDataType](../../apis-arkdata/arkts-apis/arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)类型。 |
| userId | int | 否 | 表示用户ID，可以通过  [getOsAccountLocalId接口]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。默认值：调用方所在用户。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BundleInfo> | Promise对象，返回默认应用包信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700004 | The specified user ID is not found. |
| 17700023 | The specified default app does not exist. |
| 17700025 | The specified type is invalid. |

**示例：**

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';

defaultAppManager.getDefaultApplication(defaultAppManager.ApplicationType.BROWSER)
  .then((data) => {
    console.info('Operation successful. bundleInfo: ' + JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  });

defaultAppManager.getDefaultApplication("image/png")
  .then((data) => {
    console.info('Operation successful. bundleInfo: ' + JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  });

defaultAppManager.getDefaultApplication(uniformTypeDescriptor.UniformDataType.AVI)
  .then((data) => {
    console.info('Operation successful. bundleInfo: ' + JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error('Operation failed. Cause: ' + JSON.stringify(error));
  });

```

