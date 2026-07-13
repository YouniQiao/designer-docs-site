# NotificationTemplate

The **NotificationTemplate** module describes the notification template.

> **NOTE**
>
> The predefined system templates are supported. You only need to provide the template name and related data for the
> system to automatically render the notification style that complies with the specifications.
> > Application scenario: Currently, only the upload and download scenarios are supported.

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## data

```TypeScript
data: Record<string, Object>
```

Template data.

- **title**: title of the file. This parameter is mandatory, and the value is of the string type.
- **fileName**: name of the file to be downloaded. This parameter is mandatory, and the value is of the string
type.
- **progressValue**: download progress. The value is a number.

**Type:** Record<string, Object>

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## name

```TypeScript
name: string
```

Template name. Currently, only **downloadTemplate** is supported, indicating the progress bar template that
displays download progress.

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

