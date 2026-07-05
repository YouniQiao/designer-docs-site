# PrinterRange

定义打印范围的接口。

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## startPage

```TypeScript
startPage?: int
```

表示起始页。默认值为1。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pages

```TypeScript
pages?: Array<int>
```

表示待打印的页面范围的集合。默认值为空。

**Type:** Array<int>

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## endPage

```TypeScript
endPage?: int
```

表示结束页。默认值为待打印文件的最大页数。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

