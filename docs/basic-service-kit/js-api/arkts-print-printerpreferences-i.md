# PrinterPreferences

定义打印机首选项的接口。

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## defaultColorMode

```TypeScript
defaultColorMode?: PrintColorMode
```

表示默认色彩模式。默认值为黑白。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** PrintColorMode

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## defaultReverse

```TypeScript
defaultReverse?: boolean
```

表示默认打印顺序。true表示逆序打印，false表示正序打印。默认值为正序打印。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## borderless

```TypeScript
borderless?: boolean
```

表示是否无边距打印，true表示无边距，false表示有边距。默认值为false。

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultMediaType

```TypeScript
defaultMediaType?: string
```

表示默认纸张类型。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## options

```TypeScript
options?: string
```

表示打印机首选项中不在以上字段中的其他字段，查询打印机或者从打印机驱动获取，以json格式存储在string中。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultPageSizeId

```TypeScript
defaultPageSizeId?: string
```

表示默认纸张尺寸的ID，其范围包含国际标准化组织定义的标准纸张尺寸，如ISO_A4，和系统中定义的非标准的纸张尺寸，如Custom.178x254mm，表示这种纸张尺寸为178毫米 x 254毫米。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultPrintQuality

```TypeScript
defaultPrintQuality?: PrintQuality
```

表示默认打印质量。

**Type:** PrintQuality

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultDuplexMode

```TypeScript
defaultDuplexMode?: PrintDuplexMode
```

表示默认单双面模式。

**Type:** PrintDuplexMode

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultOrientation

```TypeScript
defaultOrientation?: PrintOrientationMode
```

表示默认打印方向。

**Type:** PrintOrientationMode

**Since:** 18

**System capability:** SystemCapability.Print.PrintFramework

## defaultCollate

```TypeScript
defaultCollate?: boolean
```

表示默认出纸顺序。true表示逐份打印，false表示逐页打印。默认值为逐份。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

