# WindowMinimizationCallback

```TypeScript
type WindowMinimizationCallback = (minimizingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void
```

Callback function on minimizing a window.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| minimizingWindowTarget | WindowAnimationTarget | 是 | Window target of the minimizing window. |
| finishCallback | WindowAnimationFinishedCallback | 是 | Animation finished callback. |

