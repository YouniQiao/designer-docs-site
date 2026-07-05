# setOverlayEnabledByBundleName

## setOverlayEnabledByBundleName

```TypeScript
function setOverlayEnabledByBundleName(bundleName:string, moduleName:string, isEnabled: boolean, callback: AsyncCallback<void>): void
```

设置指定应用的overlay module的禁用使能状态。使用callback异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.CHANGE_OVERLAY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundle名称。 |
| moduleName | string | Yes | 指定应用的overlay特征module的名称。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |
| callback | AsyncCallback&lt;void> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当设置指定应用的overlay module的禁用使能状态成功时，  err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified module name is not found. |
| 17700032 | The specified bundle does not contain any overlay module. |
| 17700033 | The specified module is not an overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = "com.example.myapplication_xxxxx";
let moduleName = "feature";
let isEnabled = false;

try {
  overlay.setOverlayEnabledByBundleName(bundleName, moduleName, isEnabled, (err, data) => {
    if (err) {
      console.error('setOverlayEnabledByBundleName failed due to err code: ' + err.code + ' ' + 'message:' +
      err.message);
      return;
    }
    console.info('setOverlayEnabledByBundleName successfully');
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('setOverlayEnabledByBundleName failed due to err code: ' + code + ' ' + 'message:' + message);
}

```

## setOverlayEnabledByBundleName

```TypeScript
function setOverlayEnabledByBundleName(bundleName:string, moduleName:string, isEnabled: boolean): Promise<void>
```

设置指定应用的overlay module的禁用使能状态。使用Promise异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.CHANGE_OVERLAY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundle名称。 |
| moduleName | string | Yes | 指定应用的overlay module的名称。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified module name is not found. |
| 17700032 | The specified bundle does not contain any overlay module. |
| 17700033 | The specified module is not an overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = "com.example.myapplication_xxxxx";
let moduleName = "feature";
let isEnabled = false;

try {

  overlay.setOverlayEnabledByBundleName(bundleName, moduleName, isEnabled)
    .then((data) => {
      console.info('setOverlayEnabledByBundleName successfully');
    }).catch((err: BusinessError) => {
    console.error('setOverlayEnabledByBundleName failed due to err code: ' + err.code + ' ' + 'message:' + err.message);
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('setOverlayEnabledByBundleName failed due to err code: ' + code + ' ' + 'message:' + message);
}

```

