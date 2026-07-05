# GeometryTransitionOptions

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## follow

```TypeScript
follow?: boolean
```

仅用于if范式下标记始终在组件树上的组件是否跟随做共享动画。true代表跟随做共享动画，false代表不跟随做共享动画。 默认值：false

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hierarchyStrategy

```TypeScript
hierarchyStrategy?: TransitionHierarchyStrategy
```

决定共享元素动画过程中in/out组件在组件树上层级位置的移动策略，默认值：TransitionHierarchyStrategy.ADAPTIVE。 实际影响绑定的in/out组件相对其他组件的前后重叠关系，常规情况下慎重修改。 建议在发现共享元素动画过程中出现组件前后重叠关系错误时需要调整再设置此参数。 **系统接口：** 此接口为系统接口。

**Type:** TransitionHierarchyStrategy

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 - 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

