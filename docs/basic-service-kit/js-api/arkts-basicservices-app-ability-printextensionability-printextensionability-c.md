# PrintExtensionAbility

class of print extensionAbility.

**Since:** 14

<!--Device-unnamed-declare class PrintExtensionAbility--><!--Device-unnamed-declare class PrintExtensionAbility-End-->

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
```

<a id="oncancelprintjob"></a>
## onCancelPrintJob

```TypeScript
public onCancelPrintJob(jobInfo: print.PrintJob): void
```

Called once to remove the print job has been started.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-public onCancelPrintJob(jobInfo: print.PrintJob): void--><!--Device-PrintExtensionAbility-public onCancelPrintJob(jobInfo: print.PrintJob): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | Yes | Indicates the information of print job. |

<a id="onconnectprinter"></a>
## onConnectPrinter

```TypeScript
onConnectPrinter(printerId: number): void
```

Called once to connect to the specific printer.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onConnectPrinter(printerId: int): void--><!--Device-PrintExtensionAbility-onConnectPrinter(printerId: int): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | number | Yes | connect the printerId. |

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onConnectPrinter(printerId: number): void {
        console.info('onConnectPrinter enter');
        // ...
    }
}

```

<a id="oncreate"></a>
## onCreate

```TypeScript
onCreate(want: Want): void
```

Called once to initialize the extensionAbility.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onCreate(want: Want): void--><!--Device-PrintExtensionAbility-onCreate(want: Want): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | call print page want params. |

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onCreate(want: Want): void {
        console.info('onCreate');
        // ...
    }
}

```

<a id="ondestroy"></a>
## onDestroy

```TypeScript
onDestroy(): void
```

Called once to finalize the extensionAbility.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onDestroy(): void--><!--Device-PrintExtensionAbility-onDestroy(): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDestroy(): void {
        console.info('onDestroy');
    }
}

```

<a id="ondisconnectprinter"></a>
## onDisconnectPrinter

```TypeScript
onDisconnectPrinter(printerId: number): void
```

Called once to disconnect to the specific printer.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onDisconnectPrinter(printerId: int): void--><!--Device-PrintExtensionAbility-onDisconnectPrinter(printerId: int): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | number | Yes | connect the printerId. |

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDisconnectPrinter(printerId: number): void {
        console.info('onDisconnectPrinter enter');
        // ...
    }
}

```

<a id="onrequestprintercapability"></a>
## onRequestPrinterCapability

```TypeScript
public onRequestPrinterCapability(printerId: number): print.PrinterCapability
```

Called once to request the printer's capabilities.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-public onRequestPrinterCapability(printerId: int): print.PrinterCapability--><!--Device-PrintExtensionAbility-public onRequestPrinterCapability(printerId: int): print.PrinterCapability-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | number | Yes | Indicates the information of printer. |

**Return value:**

| Type | Description |
| --- | --- |
| print.PrinterCapability | printer capability. |

<a id="onstartdiscoverprinter"></a>
## onStartDiscoverPrinter

```TypeScript
onStartDiscoverPrinter(): void
```

Called once to start to discover the printers connected with the device.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onStartDiscoverPrinter(): void--><!--Device-PrintExtensionAbility-onStartDiscoverPrinter(): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStartDiscoverPrinter(): void {
        console.info('onStartDiscoverPrinter enter');
        // ...
    }
}

```

<a id="onstartprintjob"></a>
## onStartPrintJob

```TypeScript
public onStartPrintJob(jobInfo: print.PrintJob): void
```

Called once to start print job.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-public onStartPrintJob(jobInfo: print.PrintJob): void--><!--Device-PrintExtensionAbility-public onStartPrintJob(jobInfo: print.PrintJob): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | Yes | Indicates the information of print job. |

<a id="onstopdiscoverprinter"></a>
## onStopDiscoverPrinter

```TypeScript
onStopDiscoverPrinter(): void
```

Called once to stop discovering the printer.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-onStopDiscoverPrinter(): void--><!--Device-PrintExtensionAbility-onStopDiscoverPrinter(): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Example**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStopDiscoverPrinter(): void {
        console.info('onStopDiscoverPrinter enter');
        // ...
    }
}

```

## context

```TypeScript
context: PrintExtensionContext
```

Indicates print service extension ability context.

**Type:** PrintExtensionContext

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PrintExtensionAbility-context: PrintExtensionContext--><!--Device-PrintExtensionAbility-context: PrintExtensionContext-End-->

**System capability:** SystemCapability.Print.PrintFramework

