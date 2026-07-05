# setMonitorForCrownEvents

## setMonitorForCrownEvents

```TypeScript
export declare function setMonitorForCrownEvents(handler: Function): void
```

Sets a digital crown events listener for current page, only be supported on the devices supporting digital crown. Please be awared, the listener will be removed automaticlly if the current page is pushed back or replaced, so it's recommaned to call this function in the onShow lifecycle callback of the page. And only one listener can be set for current page, the system will use the listener passed in through the latest calling of this function. Do not use this function in app.js, the behavior is undefined.

**起始版本：** 24

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | Function | 是 | Indicates the function to be called when the crown event trigger. |

