# AppTransitionCallback

```TypeScript
type AppTransitionCallback = (fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on application transition.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fromWindowTarget | WindowAnimationTarget | 是 | Window target of the source application. |
| toWindowTarget | WindowAnimationTarget | 是 | Window target of the destination application. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

