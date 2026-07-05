# PrintPageRange

定义打印范围的接口。

**起始版本：** 11

**系统能力：** SystemCapability.Print.PrintFramework

## 导入模块

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## startPage

```TypeScript
startPage?: int
```

表示起始页。默认值为1。

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Print.PrintFramework

## pages

```TypeScript
pages?: Array<int>
```

表示待打印的页面范围的集合。默认值为空。

**类型：** Array<int>

**起始版本：** 11

**系统能力：** SystemCapability.Print.PrintFramework

## endPage

```TypeScript
endPage?: int
```

表示结束页。默认值为待打印文件的最大页数。

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Print.PrintFramework

