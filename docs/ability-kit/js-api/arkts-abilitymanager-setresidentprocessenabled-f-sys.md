# setResidentProcessEnabled

## setResidentProcessEnabled

```TypeScript
function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>
```

常驻进程支持按需启停。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 常驻进程的包名。 |
| enable | boolean | Yes | 常驻进程的使能状态。true表示该进程为常驻进程；false表示该进程为普通进程，不会进行保活。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not a system application. |
| 401 | Parameter error. Possible cause: 1.Non empty package name needs to be provided;  2.The second parameter needs to provide a Boolean type setting value. |
| 16000050 | Internal error. |
| 16200006 | The caller application can only set the resident status of the configured process. |

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

