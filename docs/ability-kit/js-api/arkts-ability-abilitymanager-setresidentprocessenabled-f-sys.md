# setResidentProcessEnabled (System API)

## Modules to Import

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
```

## setResidentProcessEnabled

```TypeScript
function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>
```

Enables or disables the resident process of an application.

**Since:** 12

<!--Device-abilityManager-function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>--><!--Device-abilityManager-function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the resident process. |
| enable | boolean | Yes | Whether to enable or disable the resident process. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Non empty package name needs to be provided;2.The second parameter needs to provide a Boolean type setting value. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16200006](../errorcode-ability.md#16200006-no-permission-to-enable-or-disable-the-resident-process) | The caller application can only set the resident status of the configured process. |

**Example**

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let residentProcessBundleName: string = 'com.xxx.xxxxxx';
  let enable: boolean = false;
  abilityManager.setResidentProcessEnabled(residentProcessBundleName, enable)
    .then(() => {
      console.info('setResidentProcessEnabled success.');
    })
    .catch((err: BusinessError) => {
      console.error(`setResidentProcessEnabled fail, err: ${JSON.stringify(err)}`);
    });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`setResidentProcessEnabled failed, code is ${code}, message is ${message}`);
}

```

