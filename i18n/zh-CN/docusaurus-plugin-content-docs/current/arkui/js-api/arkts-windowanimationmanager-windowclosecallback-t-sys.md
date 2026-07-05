# WindowCloseCallback

```TypeScript
type WindowCloseCallback = (closingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on closing a window.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| closingWindowTarget | WindowAnimationTarget | 是 |  |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

