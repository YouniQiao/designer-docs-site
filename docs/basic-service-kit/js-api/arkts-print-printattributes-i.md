# PrintAttributes

定义打印参数的接口。

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## pageRange

```TypeScript
pageRange?: PrintPageRange
```

表示待打印文件的页面范围。

**Type:** PrintPageRange

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## directionMode

```TypeScript
directionMode?: PrintDirectionMode
```

表示待打印文件的方向。

**Type:** PrintDirectionMode

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## duplexMode

```TypeScript
duplexMode?: PrintDuplexMode
```

表示待打印文件的单双面模式。

**Type:** PrintDuplexMode

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## copyNumber

```TypeScript
copyNumber?: int
```

表示文件打印份数。默认值为1。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## colorMode

```TypeScript
colorMode?: PrintColorMode
```

表示待打印文件的色彩模式。

**Type:** PrintColorMode

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## pageSize

```TypeScript
pageSize?: PrintPageSize | PrintPageType
```

表示待打印文件的纸张类型。

**Type:** PrintPageSize | PrintPageType

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

