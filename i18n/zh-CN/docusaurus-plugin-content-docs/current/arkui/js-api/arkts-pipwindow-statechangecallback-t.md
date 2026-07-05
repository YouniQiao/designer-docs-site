# StateChangeCallback

```TypeScript
type StateChangeCallback = (state: PiPState, reason: string) => void
```

Describe picture-in-picture stage change event callback.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | PiPState | 是 | 画中画窗口状态。 |
| reason | string | 是 | the reason of state change |

