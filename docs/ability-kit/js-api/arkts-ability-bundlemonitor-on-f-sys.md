# on (System API)

## Modules to Import

```TypeScript
import { bundleMonitor } from '@kit.AbilityKit';
```

## on

```TypeScript
function on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>): void
```

Register to monitor the installation status

**Since:** 9

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

<!--Device-bundleMonitor-function on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>): void--><!--Device-bundleMonitor-function on(type: BundleChangedEvent, callback: Callback<BundleChangedInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [BundleChangedEvent](arkts-ability-bundlemonitor-bundlechangedevent-t-sys.md) | Yes | Indicates the command should be implement. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<BundleChangedInfo> | Yes | Indicates the callback to be register. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Verify permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |

**Example**

```TypeScript
import { bundleMonitor } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let callbackFun = (bundleChangeInfo: bundleMonitor.BundleChangedInfo) => {
  console.info(`bundleName : ${bundleChangeInfo.bundleName} userId : ${bundleChangeInfo.userId}`);
};
try {
  bundleMonitor.on('add', callbackFun);
} catch (errData) {
  let message = (errData as BusinessError).message;
  let errCode = (errData as BusinessError).code;
  console.error(`errData is errCode:${errCode}  message:${message}`);
}

```

