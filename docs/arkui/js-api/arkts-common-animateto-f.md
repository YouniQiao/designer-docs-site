# animateTo

## animateTo

```TypeScript
declare function animateTo(value: AnimateParam, event: () => void): void
```

显式动画接口。在需要动画时，显式调用该接口改变状态以产生动画。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)来明确UI的执行上下文。 > > - 不推荐在aboutToAppear、aboutToDisappear中调用动画。 > > - 如果在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中调用动画，自 > 定义组件内的build还未执行，内部组件还未创建，动画时机过早，动画属性没有初值无法对组件产生动画。 > > - 执行[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)时， > 组件即将销毁，不能在aboutToDisappear里面做动画。 > > - 在组件出现和消失时，可以通过[组件内转场]common添加动画效果。 > > - 组件内转场不支持的属性，可以参考[示例2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#示例2动画执行结束后组件消失)，使用 > animateTo实现动画执行结束后组件消失的效果。 > > - 某些场景下，在[状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)中使用animateTo动画，会产生异常效果，具体 > 可参考：[在状态管理V2中使用animateTo动画效果异常](docroot://ui/state-management/arkts-new-local.md#在状态管理v2中使用animateto动画效果异常)。

**Since:** 7

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#animateTo

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimateParam | Yes |  |
| event | () => void | Yes |  |

