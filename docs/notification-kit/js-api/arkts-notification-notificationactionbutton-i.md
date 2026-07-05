# NotificationActionButton

The **NotificationActionButton** module provides APIs for describing the button displayed in the notification.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## extras

```TypeScript
extras?: { [key: string]: any }
```

Extra information of the button. Not supported currently.

**Type:** { [key: string]: any }

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## title

```TypeScript
title: string
```

Button title. It cannot be an empty string or exceed 200 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## userInput

```TypeScript
userInput?: NotificationUserInput
```

User input object. This parameter is left empty by default. ID entered by a subscriber.

**Type:** NotificationUserInput

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## wantAgent

```TypeScript
wantAgent: WantAgent
```

**WantAgent** of the button.

**Type:** WantAgent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

