# AppStartCallback

```TypeScript
type AppStartCallback = (startingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on starting an application.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startingWindowTarget | WindowAnimationTarget | 是 | Window target of the starting application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

