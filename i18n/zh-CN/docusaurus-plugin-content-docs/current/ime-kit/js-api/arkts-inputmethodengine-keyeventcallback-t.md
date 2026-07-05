# KeyEventCallback

```TypeScript
export type KeyEventCallback = (event: KeyEvent) => boolean
```

The callback of 'keyDown' or 'keyUp' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | KeyEvent | 是 | the key event. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | whether to consume this key event. |

