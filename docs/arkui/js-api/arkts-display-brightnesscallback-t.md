# BrightnessCallback

```TypeScript
type BrightnessCallback<T1, T2> = (data1: T1, data2: T2) => void
```

监听屏幕亮度信息时使用的回调函数类型。

**Since:** 22

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data1 | T1 | Yes | 表示displayId，类型为number。 |
| data2 | T2 | Yes | 表示brightnessInfo，类型为[BrightnessInfo]display.BrightnessInfo。 |

