# DistributedBundleEnableInfo

描述多设备协同的包信息。

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## uid

```TypeScript
uid: int
```

应用程序的UID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enable

```TypeScript
enable?: boolean
```

是否支持跨设备协同，返回true表示支持，返回false表示不支持，默认为false。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

包名。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

