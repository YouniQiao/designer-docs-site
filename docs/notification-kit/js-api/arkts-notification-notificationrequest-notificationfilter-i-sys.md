# NotificationFilter (System API)

Describes the filter criteria for querying the live view.

**Since:** 11

<!--Device-unnamed-export interface NotificationFilter--><!--Device-unnamed-export interface NotificationFilter-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundle

```TypeScript
bundle: BundleOption
```

Bundle information of the live view.

**Type:** BundleOption

**Since:** 11

<!--Device-NotificationFilter-bundle: BundleOption--><!--Device-NotificationFilter-bundle: BundleOption-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extraInfoKeys

```TypeScript
extraInfoKeys?: Array<string>
```

List of extra keys. If this parameter is left empty, all extra information is included.

**Type:** Array<string>

**Since:** 11

<!--Device-NotificationFilter-extraInfoKeys?: Array<string>--><!--Device-NotificationFilter-extraInfoKeys?: Array<string>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## notificationKey

```TypeScript
notificationKey: notificationSubscribe.NotificationKey
```

Notification information, including the notification ID and label.

**Type:** notificationSubscribe.NotificationKey

**Since:** 11

<!--Device-NotificationFilter-notificationKey: notificationSubscribe.NotificationKey--><!--Device-NotificationFilter-notificationKey: notificationSubscribe.NotificationKey-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

