# getAppCloneIdentityBySandboxDataDir

## getAppCloneIdentityBySandboxDataDir

```TypeScript
function getAppCloneIdentityBySandboxDataDir(sandboxDataDir: string): AppCloneIdentity
```

根据应用的沙箱目录名称获取应用的身份信息，包括应用包名和分身索引信息。

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sandboxDataDir | string | Yes | 表示[应用的沙箱目录](docroot://file-management/app-sandbox-directory.md)名称。 说明： 参数不校验合法性，如果入参sandboxDataDir不符合分身应用或元服务的目录名称格式，则sandboxDataDir将作为返回信息中的AppCloneIdentity.bundleName返回，此时  AppCloneIdentity.appIndex为0。 1.分身应用目录名称格式要求：`+clone-{appIndex}+{bundleName}`，appIndex和bundleName是变量，对应分身索引  和应用包名，例如： `+clone-1+com.example.myapplication`。 2.元服务目录名称格式格式要求：`+auid-{uid}+{bundleName}`，uid和bundleName是变  量，对应应用程序的UID和应用包名，例如： `+auid-20000000+com.example.myapplication`。 |

**Return value:**

| Type | Description |
| --- | --- |
| AppCloneIdentity | 返回应用包名和分身索引信息。 |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Main application.
let dataDir = 'com.example.myapplication';
try {
  let res = bundleManager.getAppCloneIdentityBySandboxDataDir(dataDir);
  hilog.info(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir successfully. res:%{public}s',
    JSON.stringify(res));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir failed. Cause: %{public}s',
    message);
}

// Application clone.
let cloneDataDir = '+clone-1+com.example.myapplication';
try {
  let res = bundleManager.getAppCloneIdentityBySandboxDataDir(cloneDataDir);
  hilog.info(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir successfully. res:%{public}s',
    JSON.stringify(res));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir failed. Cause: %{public}s',
    message);
}

// Atomic services
let atomicDataDir = '+auid-20000000+com.example.myapplication';
try {
  let res = bundleManager.getAppCloneIdentityBySandboxDataDir(atomicDataDir);
  hilog.info(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir successfully. res:%{public}s',
    JSON.stringify(res));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAppCloneIdentityBySandboxDataDir failed. Cause: %{public}s',
    message);
}

```

