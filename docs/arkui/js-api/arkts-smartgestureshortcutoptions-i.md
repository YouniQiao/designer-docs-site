# SmartGestureShortcutOptions

智慧手势响应行为配置对象。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectable

```TypeScript
selectable?: boolean
```

组件被智慧手势操作选中后是否展示并保留选中态。 true表示显示选中框，false表示不显示选中框。 当enabled为true时，默认值为true；当enabled为false时，默认值为false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: GestureShortcut
```

智慧手势响应优先级。当前仅支持GestureShortcut.PRIMARY。 当未显式传入该参数或参数异常时，会清空当前组件的智慧手势响应行为配置。

**Type:** GestureShortcut

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled?: boolean
```

当前组件是否响应智慧手势。 true表示组件响应智慧手势，false表示组件不响应智慧手势。 默认值为false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

