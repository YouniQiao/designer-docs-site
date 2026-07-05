# SendMessageOptions

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the messages fail to be sent.

**类型：** (data: string, code: number) => void

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## success

```TypeScript
success?: () => void
```

Called when the messages are sent successfully.

**类型：** () => void

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## abilityName

```TypeScript
abilityName: string
```

Destination ability name, which is case sensitive.

**类型：** string

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## bundleName

```TypeScript
bundleName: string
```

Name of the destination bundle where the ability has been located. The name is case sensitive.

**类型：** string

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**类型：** () => void

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## message

```TypeScript
message?: string
```

Messages sent to the destination device. A maximum of 1 KB of data can be transmitted at a time. If more than 1 KB of data needs to be transmitted, split the messages into multiple parts to transmit.

**类型：** string

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

## deviceId

```TypeScript
deviceId: string
```

Destination device ID.

**类型：** string

**起始版本：** 5

**废弃版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

