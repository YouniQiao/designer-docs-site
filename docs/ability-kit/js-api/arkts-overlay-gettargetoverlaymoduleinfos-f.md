# getTargetOverlayModuleInfos

## getTargetOverlayModuleInfos

```TypeScript
function getTargetOverlayModuleInfos(targetModuleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void
```

获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标 module。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetModuleName | string | Yes | 指定当前应用中的目标module的名称。 |
| callback | AsyncCallback&lt;Array&lt;OverlayModuleInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取指定的目标module  的[OverlayModuleInfo]./bundleManager/OverlayModuleInfo:OverlayModuleInfo成功时，err返回undefined。否则回调函数返回具体错误对  象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700002 | The specified module name is not found. |
| 17700034 | The specified module is an overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetModuleName = "feature";

try {
  overlay.getTargetOverlayModuleInfos(targetModuleName, (err, data) => {
    if (err) {
      console.error('getTargetOverlayModuleInfos failed due to err code : ' + err.code + ' ' + 'message :' +
      err.message);
      return;
    }
    console.info('overlayModuleInfo is ' + JSON.stringify(data));
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('getTargetOverlayModuleInfos failed due to err code : ' + code + ' ' + 'message :' + message);
}

```

## getTargetOverlayModuleInfos

```TypeScript
function getTargetOverlayModuleInfos(targetModuleName: string): Promise<Array<OverlayModuleInfo>>
```

获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标 module。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetModuleName | string | Yes | 指定当前应用中的目标module的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;OverlayModuleInfo>> | Promise对象，返回>。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700002 | The specified module name is not found. |
| 17700034 | The specified module is an overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetModuleName = "feature";

(async () => {
  try {
    let overlayModuleInfos = await overlay.getTargetOverlayModuleInfos(targetModuleName);
    console.info('overlayModuleInfos are ' + JSON.stringify(overlayModuleInfos));
  } catch (err) {
    let code = (err as BusinessError).code;
    let message = (err as BusinessError).message;
    console.error('getTargetOverlayModuleInfos failed due to err code : ' + code + ' ' + 'message :' + message);
  }
})();

```

