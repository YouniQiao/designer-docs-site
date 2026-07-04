# NotificationBasicContent

Describes the normal text notification.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## structuredText

```TypeScript
structuredText?: Map<string, string>
```

Structured notification. Currently, only service reminder messages can be displayed in structured format in the notification center. This parameter is left empty by default. (The size of key or value cannot exceed 512 bytes; otherwise, the excess part will be truncated. Only a maximum of three pairs of structured data are supported.)

**Type:** Map<string, string>

**Since:** 21

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

