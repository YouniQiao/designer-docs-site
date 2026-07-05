# WindowAnimationTargetsUpdationCallback

```TypeScript
type WindowAnimationTargetsUpdationCallback = (fullScreenWindowTarget: WindowAnimationTarget,
    floatingWindowTargets: Array<WindowAnimationTarget>) => void
```

Callback function on window animation targets update.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fullScreenWindowTarget | WindowAnimationTarget | 是 | The fullscreen window target. |
| floatingWindowTargets | Array&lt;WindowAnimationTarget> | 是 | All the floating window targets. |

