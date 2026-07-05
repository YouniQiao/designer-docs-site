# applyQuickFix

## applyQuickFix

```TypeScript
function applyQuickFix(hapModuleQuickFixFiles: Array<string>, callback: AsyncCallback<void>): void
```

快速修复的补丁安装接口。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapModuleQuickFixFiles | Array&lt;string> | Yes | 快速修复补丁文件（补丁文件需包含有效的文件路径）。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当快速修复的补丁安装成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500002 | Invalid patch package. |
| 18500008 | Internal error. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';

try {
  let hapModuleQuickFixFiles = ['/data/storage/el2/base/entry.hqf'];
  quickFixManager.applyQuickFix(hapModuleQuickFixFiles, (error) => {
    if (error) {
      console.error( `applyQuickFix failed with error: ${error}`);
    } else {
      console.info(`applyQuickFix success`);
    }
  });
} catch (paramError) {
  console.error(`error.code: ${paramError.code}, error.message: ${paramError.message}`);
}

```

## applyQuickFix

```TypeScript
function applyQuickFix(hapModuleQuickFixFiles: Array<string>): Promise<void>
```

快速修复的补丁安装接口。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapModuleQuickFixFiles | Array&lt;string> | Yes | 快速修复补丁文件（补丁文件需包含有效的文件路径）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500002 | Invalid patch package. |
| 18500008 | Internal error. |

**Example**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let hapModuleQuickFixFiles = ['/data/storage/el2/base/entry.hqf'];

try {
  quickFixManager.applyQuickFix(hapModuleQuickFixFiles).then(() => {
    console.info(`applyQuickFix success`);
  }).catch((error: BusinessError) => {
    console.error(`applyQuickFix err: ${error}`);
  });
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

