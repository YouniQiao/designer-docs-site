# @ohos.file.fileAccess

fileAccess模块是基于[extension](docroot://application-models/extensionability-overview.md)机制实现的一个对公共文件访问和操作的框架。该模块一方面对接各类文 件管理服务，如存储管理服务等；另一方面为系统应用提供一套统一的文件访问管理接口。存储管理服务可以管理内置存储部分目录，以及共享盘、U盘、SD卡等设备上的资源。 > **说明：** > > - 当前只支持FilePicker、文件管理器调用。

**Since:** 9

**Deprecated since:** 23

**Substitute:** @ohos.file.fs:fileIo

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { fileAccess } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[createFileAccessHelper](arkts-fileaccess-createfileaccesshelper-f-sys.md#createFileAccessHelper-1) | 以同步方法创建连接当前系统内所有文件管理服务的helper对象。 |
| <!--DelRow-->[createFileAccessHelper](arkts-fileaccess-createfileaccesshelper-f-sys.md#createFileAccessHelper-2) | 以同步方法创建连接指定wants的helper对象。 |
| <!--DelRow-->[getFileAccessAbilityInfo](arkts-fileaccess-getfileaccessabilityinfo-f-sys.md#getFileAccessAbilityInfo-1) | 以异步方法获取系统内extension配置为fileAccess类型的所有Want信息。使用callback异步回调。 |
| <!--DelRow-->[getFileAccessAbilityInfo](arkts-fileaccess-getfileaccessabilityinfo-f-sys.md#getFileAccessAbilityInfo-2) | 以异步方法获取系统内extension配置为fileAccess类型的所有Want信息。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[CopyResult](arkts-fileaccess-copyresult-i-sys.md) | 表示复制操作失败时的返回信息，复制成功时则没有返回信息。 |
| <!--DelRow-->[FileAccessHelper](arkts-fileaccess-fileaccesshelper-i-sys.md) | FileAccessHelper对象。 |
| <!--DelRow-->[FileInfo](arkts-fileaccess-fileinfo-i-sys.md) | 表示文件(夹)属性信息和接口能力。 |
| <!--DelRow-->[FileIterator](arkts-fileaccess-fileiterator-i-sys.md) | 表示文件夹的迭代器对象。 |
| <!--DelRow-->[MoveResult](arkts-fileaccess-moveresult-i-sys.md) | 表示移动操作失败时的返回信息，移动成功时则没有返回信息。 |
| <!--DelRow-->[NotifyMessage](arkts-fileaccess-notifymessage-i-sys.md) | 通知回调函数的值。 |
| <!--DelRow-->[RootInfo](arkts-fileaccess-rootinfo-i-sys.md) | 表示设备的根属性信息和接口能力。 |
| <!--DelRow-->[RootIterator](arkts-fileaccess-rootiterator-i-sys.md) | 表示设备根目录的迭代器对象。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[FileKey](arkts-fileaccess-filekey-e-sys.md) | Property elements that support the file queries. |
| <!--DelRow-->[NotifyType](arkts-fileaccess-notifytype-e-sys.md) | 枚举，通知类型。 |
| <!--DelRow-->[OPENFLAGS](arkts-fileaccess-openflags-e-sys.md) | 枚举，目前支持的文件打开的标志位。 |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[DEVICES_URI](arkts-fileaccess-con-sys.md#DEVICES_URI) | 监听设备上线，下线通知，作为注册监听的URI。 |

