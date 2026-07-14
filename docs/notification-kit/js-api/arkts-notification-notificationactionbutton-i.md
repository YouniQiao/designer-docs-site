# NotificationActionButton

The **NotificationActionButton** module defines the action buttons displayed in a notification. It is used to add interactive action buttons in NotificationRequest, allowing users to trigger a **WantAgent** action by tapping the button. This module is used when you need to provide interactive action buttons (such as **Reply** and **Mark as read**) in a notification.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## extras

```TypeScript
extras?: { [key: string]: any }
```

Extended information of the button. The default value is empty.

**Type:** { [key: string]: any }

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## title

```TypeScript
title: string
```

Title of the button, displayed on the action button of the notification. The string length cannot exceed 202 bytes; the excess part will be truncated. It cannot be an empty string.

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

**WantAgent** triggered when the button is tapped, which encapsulates the application's behavioral intent. After the user taps the button, the system will execute the action in the method specified by the **WantAgent** (such as navigating to a specified UIAbility or sending a common event).

**Type:** WantAgent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

