# page_transition

## page_transition

```TypeScript
page_transition(value: PageTransitionOptions)
```

设置当前页面的自定义入场动效。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PageTransitionOptions | 是 | 配置入场动效的参数。 |

## onEnter

```TypeScript
onEnter(event: PageTransitionCallback): PageTransitionEnterInterface
```

逐帧回调，直到入场动画结束，progress从0变化到1。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | PageTransitionCallback | 是 | 入场动画的逐帧回调直到入场动画结束，progress从0变化到1。 [since 18] |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CommonTransition](arkts-commontransition-c.md) | 页面转场通用动效。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [PageTransitionEnterInterface](arkts-pagetransitionenterinterface-i.md) | 当前页面的自定义入场动效。继承自[CommonTransition]{@link CommonTransition}。 |
| [PageTransitionExitInterface](arkts-pagetransitionexitinterface-i.md) | 当前页面的自定义退场动效。继承自[CommonTransition]{@link CommonTransition}。 |
| [PageTransitionOptions](arkts-pagetransitionoptions-i.md) | 退场/进场动效的参数。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [RouteType](arkts-routetype-e.md) | 页面转场类型。 |
| [SlideEffect](arkts-slideeffect-e.md) | 页面转场时的滑入滑出效果。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [PageTransitionCallback](arkts-pagetransitioncallback-t.md) | 页面转场事件回调。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [PageTransitionEnter](arkts-page-transition-con.md#PageTransitionEnter) | Defines PageTransitionEnter Component. |
| [PageTransitionExit](arkts-page-transition-con.md#PageTransitionExit) | Defines PageTransitionExit Component. |

