# KeyEvent

按键事件信息。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getModifierKeyState

```TypeScript
getModifierKeyState?(keys: Array<string>): boolean
```

获取功能键按压状态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 13 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | Array&lt;string> | Yes | 功能键列表。支持功能键 'Ctrl'\| 'Alt' \| 'Shift'。 说明： 此接口不支持在手写笔场景下使用。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 功能键是否被按下。true表示被按下，false表示未被按下。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter  verification failed. |

## keyCode

```TypeScript
keyCode: number
```

按键的键值。按键设备提供的键值请参考[KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode)。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keySource

```TypeScript
keySource: KeySource
```

触发当前按键的输入设备类型。

**Type:** KeySource

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isNumLockOn

```TypeScript
isNumLockOn?: boolean
```

NumLock是否锁定（true: 锁定；false: 解锁）。

**Type:** boolean

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isScrollLockOn

```TypeScript
isScrollLockOn?: boolean
```

ScrollLock是否锁定（true: 锁定；false: 解锁）。

**Type:** boolean

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## unicode

```TypeScript
unicode?: number
```

按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。

**Type:** number

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keyText

```TypeScript
keyText: string
```

按键的名称。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## intentionCode

```TypeScript
intentionCode: IntentionCode
```

按键对应的意图。 默认值：IntentionCode.INTENTION_UNKNOWN。

**Type:** IntentionCode

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## metaKey

```TypeScript
metaKey: number
```

按键发生时元键（即键盘左下角紧挨Ctrl键或Fn标记了窗口logo的按键）的状态，1表示按压态，0表示未按压态。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: () => void
```

阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)传递。

**Type:** () => void

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: KeyType
```

按键的类型。

**Type:** KeyType

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deviceId

```TypeScript
deviceId: number
```

触发当前按键的输入设备ID。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isCapsLockOn

```TypeScript
isCapsLockOn?: boolean
```

CapsLock是否锁定（true: 锁定；false: 解锁）。

**Type:** boolean

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timestamp

```TypeScript
timestamp: number
```

事件时间戳。触发事件时距离系统启动的时间间隔，单位：ns。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

