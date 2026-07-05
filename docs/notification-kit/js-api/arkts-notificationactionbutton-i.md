# NotificationActionButton

描述通知中显示的操作按钮。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## wantAgent

```TypeScript
wantAgent: WantAgent
```

点击按钮时触发的WantAgent。

**Type:** WantAgent

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## extras

```TypeScript
extras?: { [key: string]: any }
```

按钮扩展信息。预留能力，暂未支持。

**Type:** { [key: string]: any }

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

```TypeScript
extras?: Record<string, RecordData>
```

按钮扩展信息。预留能力，暂未支持。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

## userInput

```TypeScript
userInput?: NotificationUserInput
```

用户输入对象实例，默认为空。表示用户输入时的标识。

**Type:** NotificationUserInput

**Since:** 8

**System capability:** SystemCapability.Notification.Notification

## title

```TypeScript
title: string
```

按钮标题。字符串长度不超过200字节，超出部分会被截断；也不可为空字符串。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

