# getOverlayModuleInfoByBundleName

## getOverlayModuleInfoByBundleName

```TypeScript
function getOverlayModuleInfoByBundleName(bundleName: string,
      callback: AsyncCallback<Array<OverlayModuleInfo>>): void
```

获取指定应用中所有module的OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundle名称。 |
| callback | AsyncCallback&lt;Array&lt;OverlayModuleInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取指定应用中所有  module的[OverlayModuleInfo]./bundleManager/OverlayModuleInfo:OverlayModuleInfo信息成功时，err返回undefined。否则回调函  数返回具体错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700032 | The specified bundle does not contain any overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = "com.example.myapplication_xxxxx";

try {
  overlay.getOverlayModuleInfoByBundleName(bundleName, (err, data) => {
    if (err) {
      console.error('getOverlayModuleInfoByBundleName failed due to err code : ' + err.code + ' ' + 'message :' +
      err.message);
      return;
    }
    console.info('overlayModuleInfo is ' + JSON.stringify(data));
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('getOverlayModuleInfoByBundleName failed due to err code : ' + code + ' ' + 'message :' + message);
}

```

## getOverlayModuleInfoByBundleName

```TypeScript
function getOverlayModuleInfoByBundleName(bundleName: string, moduleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void
```

获取指定应用中指定module的OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundle名称。 |
| moduleName | string | Yes | 指定应用中的overlay module的名称。缺省该字段时，查询接口将查询指定应用中所有module的OverlayModuleInfo信息。 |
| callback | AsyncCallback&lt;Array&lt;OverlayModuleInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取指定应用中指定  module的[OverlayModuleInfo]./bundleManager/OverlayModuleInfo:OverlayModuleInfo信息成功时，err返回undefined。否则回调函  数返回具体错误对象。 |

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

try {
  overlay.getOverlayModuleInfoByBundleName(bundleName, moduleName, (err, data) => {
    if (err) {
      console.error('getOverlayModuleInfoByBundleName failed due to err code : ' + err.code + ' ' + 'message :' +
      err.message);
      return;
    }
    console.info('overlayModuleInfo is ' + JSON.stringify(data));
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error('getOverlayModuleInfoByBundleName failed due to err code : ' + code + ' ' + 'message :' + message);
}

```

## getOverlayModuleInfoByBundleName

```TypeScript
function getOverlayModuleInfoByBundleName(bundleName: string, moduleName?: string): Promise<Array<OverlayModuleInfo>>
```

获取指定应用中指定module的OverlayModuleInfo信息。使用promise异步回调。 指定应用是调用方自身时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Overlay

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundle名称。 |
| moduleName | string | No | 指定应用中的overlay module的名称。默认值：缺省该字段时，查询接口将查询指定应用中所有module的OverlayModuleInfo信息。 |

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
| 17700032 | The specified bundle does not contain any overlay module. |
| 17700033 | The specified module is not an overlay module. |

**Example**

```TypeScript
import { overlay } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = "com.example.myapplication_xxxxx";
let moduleName = "feature";

(async () => {
  try {
    let overlayModuleInfos = await overlay.getOverlayModuleInfoByBundleName(bundleName, moduleName);
    console.info('overlayModuleInfos are ' + JSON.stringify(overlayModuleInfos));
  } catch (err) {
    let code = (err as BusinessError).code;
    let message = (err as BusinessError).message;
    console.error('getTargetOverlayModuleInfos failed due to err code : ' + code + ' ' + 'message :' + message);
  }
})();

```

