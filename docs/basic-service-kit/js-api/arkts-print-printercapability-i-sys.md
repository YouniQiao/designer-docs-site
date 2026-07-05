# PrinterCapability

定义打印能力的接口。

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## duplexMode

```TypeScript
duplexMode: int
```

表示单双面打印模式。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## options

```TypeScript
options?: Object
```

表示JSON对象字符串。

**Type:** Object

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pageSize

```TypeScript
pageSize: Array<PrintPageSize>
```

表示打印机支持的页面尺寸列表。

**Type:** Array<PrintPageSize>

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## colorMode

```TypeScript
colorMode: int
```

表示色彩模式。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## minMargin

```TypeScript
minMargin?: PrintMargin
```

表示打印机最小边距。

**Type:** PrintMargin

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## resolution

```TypeScript
resolution?: Array<PrintResolution>
```

表示打印机支持的分辨率列表。

**Type:** Array<PrintResolution>

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

