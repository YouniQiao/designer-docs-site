# @ohos.file.recent

该模块提供最近访问列表插入、移除、查询等常用能力。 > **说明：** > > - 当前只支持文件管理器调用。

**起始版本：** 10

**废弃版本：** 23

**系统能力：** SystemCapability.FileManagement.UserFileService

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { recent } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[add](arkts-recent-add-f-sys.md#add-1) | 将uri对应的文件加入最近访问列表。 |
| <!--DelRow-->[listFile](arkts-recent-listfile-f-sys.md#listFile-1) | 查询最近访问列表中文件信息。 |
| <!--DelRow-->[remove](arkts-recent-remove-f-sys.md#remove-1) | 将uri对应的文件从最近访问列表中移除。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[FileInfo](arkts-recent-fileinfo-i-sys.md) | 最近访问列表文件信息。 |

