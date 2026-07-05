# revokeQuickFix

## revokeQuickFix

```TypeScript
function revokeQuickFix(bundleName: string, callback: AsyncCallback<void>): void
```

撤销快速修复的接口，使用callback方式返回结果。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 需要撤销补丁的应用Bundle名称。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当撤销快速修复成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500009 | The application has an ongoing quick fix task. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';

let bundleName = 'com.example.myapplication';

quickFixManager.revokeQuickFix(bundleName, (err) => {
  if (err.code) {
    console.error(`revokeQuickFix ${bundleName} failed, err code: ${err.code}, err msg: ${err.message}.`);
  }
});

```

## revokeQuickFix

```TypeScript
function revokeQuickFix(bundleName: string): Promise<void>
```

撤销快速修复的接口。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 需要撤销补丁的应用Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500009 | The application has an ongoing quick fix task. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = 'com.example.myapplication';

quickFixManager.revokeQuickFix(bundleName).then(() => {
  console.info(`revokeQuickFix ${bundleName} success.`);
}).catch((err: BusinessError) => {
  console.error(`revokeQuickFix ${bundleName} failed, err code: ${err.code}, err msg: ${err.message}.`);
});

```

