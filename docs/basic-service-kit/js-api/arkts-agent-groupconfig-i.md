# GroupConfig

下载任务分组配置选项。

**Since:** 15

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## gauge

```TypeScript
gauge?: boolean
```

后台任务的进度通知策略。 - true，显示进度、成功、失败通知。 - false，仅显示成功、失败通知。 默认为false。

**Type:** boolean

**Since:** 15

**System capability:** SystemCapability.Request.FileTransferAgent

## notification

```TypeScript
notification: Notification
```

通知栏自定义设置。默认值为`{}`

**Type:** Notification

**Since:** 15

**System capability:** SystemCapability.Request.FileTransferAgent

