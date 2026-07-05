# PrintExtensionAbility

class of print extensionAbility.

**起始版本：** 14

**系统能力：** SystemCapability.Print.PrintFramework

## 导入模块

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
```

## onCancelPrintJob

```TypeScript
public onCancelPrintJob(jobInfo: print.PrintJob): void
```

Called once to remove the print job has been started.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | 是 | Indicates the information of print job. |

## onConnectPrinter

```TypeScript
onConnectPrinter(printerId: int): void
```

Called once to connect to the specific printer.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | int | 是 | connect the printerId. |

**示例：**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onConnectPrinter(printerId: number): void {
        console.info('onConnectPrinter enter');
        // ...
    }
}

```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called once to initialize the extensionAbility.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | call print page want params. |

**示例：**

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

## onDestroy

```TypeScript
onDestroy(): void
```

Called once to finalize the extensionAbility.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**示例：**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDestroy(): void {
        console.info('onDestroy');
    }
}

```

## onDisconnectPrinter

```TypeScript
onDisconnectPrinter(printerId: int): void
```

Called once to disconnect to the specific printer.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | int | 是 | connect the printerId. |

**示例：**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onDisconnectPrinter(printerId: number): void {
        console.info('onDisconnectPrinter enter');
        // ...
    }
}

```

## onRequestPreview

```TypeScript
onRequestPreview(jobInfo: print.PrintJob): string
```

Called once to request preview and send result to Print SA.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | 是 | Indicates the information of job. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | preview result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | not system application |

**示例：**

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

## onRequestPrinterCapability

```TypeScript
public onRequestPrinterCapability(printerId: int): print.PrinterCapability
```

Called once to request the printer's capabilities.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| printerId | int | 是 | Indicates the information of printer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| print.PrinterCapability | printer capability. |

## onStartDiscoverPrinter

```TypeScript
onStartDiscoverPrinter(): void
```

Called once to start to discover the printers connected with the device.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**示例：**

```TypeScript
import { PrintExtensionAbility } from '@kit.BasicServicesKit';

export default class HWPrintExtension extends PrintExtensionAbility {
    onStartDiscoverPrinter(): void {
        console.info('onStartDiscoverPrinter enter');
        // ...
    }
}

```

## onStartPrintJob

```TypeScript
public onStartPrintJob(jobInfo: print.PrintJob): void
```

Called once to start print job.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| jobInfo | print.PrintJob | 是 | Indicates the information of print job. |

## onStopDiscoverPrinter

```TypeScript
onStopDiscoverPrinter(): void
```

Called once to stop discovering the printer.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

**示例：**

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

**类型：** PrintExtensionContext

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Print.PrintFramework

