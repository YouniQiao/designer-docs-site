# off

## off(BundleChangedEvent)

```TypeScript
function off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>): void
```

注销监听应用的安装，卸载，更新。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.LISTEN_BUNDLE_CHANGE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BundleChangedEvent | Yes | 注销监听的事件类型。 |
| callback | Callback&lt;BundleChangedInfo> | No | 回调函数，当回调成功时，err为undefined，data为应用变更信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Verify permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |

**Example**

```TypeScript
import { bundleMonitor } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// The variable in this API must be the same as that in bundleMonitor.on. Otherwise, the callback cannot be unsubscribed from.
let callbackFun = (bundleChangeInfo: bundleMonitor.BundleChangedInfo) => {
  console.info(`bundleName : ${bundleChangeInfo.bundleName} userId : ${bundleChangeInfo.userId}`);
};

try {
  bundleMonitor.off('add', callbackFun);
} catch (errData) {
  let message = (errData as BusinessError).message;
  let errCode = (errData as BusinessError).code;
  console.error(`errData is errCode:${errCode}  message:${message}`);
}

```

