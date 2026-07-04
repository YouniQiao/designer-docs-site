# PrintExtensionAbility

class of print extensionAbility.

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { PrintExtensionAbility } from '@ohos.app.ability.PrintExtensionAbility';
```

## onRequestPreview

```TypeScript
onRequestPreview(jobInfo: print.PrintJob): string
```

Called once to request preview and send result to Print SA.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | Yes | Indicates the information of job. |

**Return value:**

| Type | Description |
| --- | --- |
| string | preview result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |

**Example**

```TypeScript
import { print, PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onRequestPreview(jobInfo: print.PrintJob): string {
        console.info('onRequestPreview enter');
        // ...
        let tmp : string = '';
        return tmp;
    }
}

```

