# AccessibilitySamePageMode

```TypeScript
declare enum AccessibilitySamePageMode
```

当前跨进程嵌入式显示的组件和宿主应用的同page模式。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SEMI_SILENT

```TypeScript
SEMI_SILENT = 0
```

跨进程嵌入式显示的组件拉起来的进程的page事件中如果是首次加载页面或者该事件页面的根节点发送的page事件会被忽略。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FULL_SILENT

```TypeScript
FULL_SILENT = 1
```

跨进程嵌入式显示的组件将忽略所有的page事件。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

