# PictureScanProgress

定义图片扫描进度的接口。

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## pictureFd

```TypeScript
pictureFd: int
```

扫描图片的文件描述符。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## progress

```TypeScript
progress: int
```

当前进度百分比，范围从0~100。单位：百分比。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## isFinal

```TypeScript
isFinal: boolean
```

是否是本次扫描的最后一张图片。true表示是最后一张图片，false表示不是最后一张图片。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

