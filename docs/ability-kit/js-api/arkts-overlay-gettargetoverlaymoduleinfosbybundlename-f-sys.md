# getTargetOverlayModuleInfosByBundleName

## getTargetOverlayModuleInfosByBundleName

```TypeScript
function getTargetOverlayModuleInfosByBundleName(targetBundleName: string,
      callback: AsyncCallback<Array<OverlayModuleInfo>>): void
```

获取指定应用中所有module关联的所有OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundleName | string | Yes | 指定目标应用的bundle名称。 |
| callback | AsyncCallback&lt;Array&lt;OverlayModuleInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取指定应用中所有  module关联的所有[OverlayModuleInfo]./bundleManager/OverlayModuleInfo:OverlayModuleInfo信息成功时，err返回undefined。否  则回调函数返回具体错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700035 | The specified bundle is an overlay bundle. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetBundleName = "com.example.myapplication_xxxxx";

try {
  overlay.getTargetOverlayModuleInfosByBundleName(targetBundleName, (err, data) => {
    if (err) {
      console.error('getTargetOverlayModuleInfosByBundleName failed due to err code : ' + err.code + ' ' + 'message :' +
      err.message);
      return;
    }
    console.info('overlayModuleInfo is ' + JSON.stringify(data));
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('getTargetOverlayModuleInfosByBundleName failed due to err code : ' + code + ' ' + 'message :' +
    message);
}

```

## getTargetOverlayModuleInfosByBundleName

```TypeScript
function getTargetOverlayModuleInfosByBundleName(targetBundleName: string, moduleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void
```

获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundleName | string | Yes | 指定目标应用的bundle名称。 |
| moduleName | string | Yes | 指定应用中的目标module的名称。缺省该字段时，查询接口将查询指定应用中所有module所关联的OverlayModuleInfo信息。 |
| callback | AsyncCallback&lt;Array&lt;OverlayModuleInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取指定应用中指定  module关联的所有[OverlayModuleInfo]./bundleManager/OverlayModuleInfo:OverlayModuleInfo信息成功时，err返回undefined。否  则回调函数返回具体错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified module name is not found. |
| 17700034 | The specified module is an overlay module. |
| 17700035 | The specified bundle is an overlay bundle. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetBundleName = "com.example.myapplication_xxxxx";
let moduleName = "feature";

try {
  overlay.getTargetOverlayModuleInfosByBundleName(targetBundleName, moduleName, (err, data) => {
    if (err) {
      console.error('getTargetOverlayModuleInfosByBundleName failed due to err code : ' + err.code + ' ' + 'message :' +
      err.message);
      return;
    }
    console.info('overlayModuleInfo is ' + JSON.stringify(data));
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('getTargetOverlayModuleInfosByBundleName failed due to err code : ' + code + ' ' + 'message :' +
    message);
}

```

## getTargetOverlayModuleInfosByBundleName

```TypeScript
function getTargetOverlayModuleInfosByBundleName(targetBundleName: string, moduleName?: string): Promise<Array<OverlayModuleInfo>>
```

获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用promise异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetBundleName | string | Yes | 指定目标应用的bundle名称。 |
| moduleName | string | No | 指定应用中的目标module的名称。默认值：缺省该字段时，查询接口将查询指定应用中所有module所关联的OverlayModuleInfo信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;OverlayModuleInfo>> | Promise对象，返回>。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified module name is not found. |
| 17700034 | The specified module is an overlay module. |
| 17700035 | The specified bundle is an overlay bundle. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetBundleName = "com.example.myapplication_xxxxx";
let moduleName = "feature";

(async () => {
  try {
    let overlayModuleInfos = await overlay.getTargetOverlayModuleInfosByBundleName(targetBundleName, moduleName);
    console.info('overlayModuleInfos are ' + JSON.stringify(overlayModuleInfos));
  } catch (err) {
    let code = (err as BusinessError).code;
    let message = (err as BusinessError).message;
    console.error('getTargetOverlayModuleInfosByBundleName failed due to err code : ' + code + ' ' + 'message :' +
      message);
  }
})();

```

