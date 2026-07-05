# IMAInputStartCallback

```TypeScript
export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void
```

The callback of 'inputStart' event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| kbController | KeyboardController | 是 | keyboard controller. |
| inputClient | InputClient | 是 | input client. |

