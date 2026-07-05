# BundleNotificationStatistics

描述指定应用通知统计信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## lastTime

```TypeScript
lastTime: number
```

应用最后一次发布通知的时间。数据格式：时间戳。单位：ms。

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

```TypeScript
lastTime: long
```

应用最后一次发布通知的时间。数据格式：时间戳。单位：ms。

**Type:** long

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## recentCount

```TypeScript
recentCount: number
```

应用最近7天发布的通知总量。

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

```TypeScript
recentCount: int
```

应用最近7天发布的通知总量。

**Type:** int

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
bundle: BundleOption
```

指定应用的包信息。

**Type:** BundleOption

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

