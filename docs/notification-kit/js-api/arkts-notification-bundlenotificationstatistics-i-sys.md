# BundleNotificationStatistics (System API)

Describes the notification statistics of a specified application.

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## bundle

```TypeScript
bundle: BundleOption
```

Bundle information of the application.

**Type:** BundleOption

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## lastTime

```TypeScript
lastTime: number
```

Last time when the application sent a notification. Data format: timestamp, in ms.

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## recentCount

```TypeScript
recentCount: number
```

Total number of notifications released by the application in the last seven days.

**Type:** number

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

