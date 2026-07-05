# registerVsyncCallback

## registerVsyncCallback

```TypeScript
function registerVsyncCallback(callback: (info: string) => void): void
```

Registers vsync callback for profiler.

**起始版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (info: string) => void | 是 | the callback info is json string with ui update info. |

