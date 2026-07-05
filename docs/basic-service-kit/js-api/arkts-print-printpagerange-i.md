# PrintPageRange

定义打印范围的接口。

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

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

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## pages

```TypeScript
pages?: Array<int>
```

表示待打印的页面范围的集合。默认值为空。

**Type:** Array<int>

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

## endPage

```TypeScript
endPage?: int
```

表示结束页。默认值为待打印文件的最大页数。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

