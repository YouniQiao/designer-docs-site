# EditModeOptions

定义编辑模式选项

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableTwoFingerMultiSelect

```TypeScript
enableTwoFingerMultiSelect?: boolean
```

启用双指滑动多选。 {@code true}表示双指滑动可以进入编辑模式，进行多选操作。 {@code false}表示两指滑动不支持多指滑动。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## useDefaultMultiSelectStyle

```TypeScript
useDefaultMultiSelectStyle?: boolean
```

使用默认的多选样式。 {@code true}表示进入多选状态后为GridItem或ListItem显示复选框。 {@code false}表示进入多选状态后没有默认样式。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableGatherSelectedItemsAnimation

```TypeScript
enableGatherSelectedItemsAnimation?: boolean
```

定义当项目被长按上下文菜单时，是否在网格或列表中收集选定项目。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onGetPreviewBadge

```TypeScript
onGetPreviewBadge?: OnGetPreviewBadgeCallback
```

调用以返回是否显示数字脚本或在上下文菜单预览的角标上显示的数字。如果未设置，将使用显示范围内的选定项的数量作为角标。 返回false表示不显示角标。 返回true表示使用显示范围内的选定项的数量。 返回一个数字以包括显示范围之外的选定项。

**Type:** OnGetPreviewBadgeCallback

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

