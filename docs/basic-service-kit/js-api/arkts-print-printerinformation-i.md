# PrinterInformation

定义打印机信息的接口。

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## printerStatus

```TypeScript
printerStatus: PrinterStatus
```

表示当前打印机状态。

**Type:** PrinterStatus

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## preferences

```TypeScript
preferences?: PrinterPreferences
```

表示打印机首选项。

**Type:** PrinterPreferences

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## capability

```TypeScript
capability?: PrinterCapabilities
```

表示打印机能力。

**Type:** PrinterCapabilities

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## printerMake

```TypeScript
printerMake?: string
```

表示打印机型号。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## options

```TypeScript
options?: string
```

表示打印机详细信息。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## printerName

```TypeScript
printerName: string
```

表示打印机名称。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## alias

```TypeScript
alias?: string
```

表示打印机别名。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## description

```TypeScript
description?: string
```

表示打印机说明。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## printerId

```TypeScript
printerId: string
```

表示打印机ID。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

## selectedProtocol

```TypeScript
selectedProtocol?: string
```

表示添加打印机时使用的协议。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## selectedDriver

```TypeScript
selectedDriver?: PpdInfo
```

表示添加打印机时选择的驱动的信息。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** PpdInfo

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## uri

```TypeScript
uri?: string
```

表示打印机uri。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Print.PrintFramework

