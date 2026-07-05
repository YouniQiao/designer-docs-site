# off

## off('printerChange')

```TypeScript
function off(type: 'printerChange', callback?: PrinterChangeCallback): void
```

取消注册打印机变动事件回调，使用callback回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'printerChange' | Yes | 表示打印机变动事件。 |
| callback | PrinterChangeCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

// Trigger this callback when an added printer is changed.
let onPrinterChange =
    (event: print.PrinterEvent, printerInformation: print.PrinterInformation) => {
        console.info('printerChange, event: ' + event + ', printerInformation: ' + JSON.stringify(printerInformation));
    };
print.on('printerChange', onPrinterChange);
print.off('printerChange');

```

