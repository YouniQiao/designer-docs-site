# MaterialState

```TypeScript
enum MaterialState
```

材质使能状态枚举，表示应用级沉浸式系统材质配置的状态。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 0
```

默认模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、 [AlphabetIndexer]alphabet_indexer在组件本身未设置背景颜色、模糊参数和阴影参数时默认开启沉浸式系统材质；[Text]text设置 [copyOption]TextAttribute#copyOption后长按或双击触发的文本菜单默认开启沉浸式系统材质；其他组件由应用主动设置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE

```TypeScript
ENABLE = 1
```

使能模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、 [AlphabetIndexer]alphabet_indexer、[ChipGroup]@ohos.arkui.advanced.ChipGroup、 [Chip]@ohos.arkui.advanced.Chip、[Select]select、[菜单控制]common、[Toggle]toggle、 [SegmentButton]@ohos.arkui.advanced.SegmentButton、 [SegmentButtonV2]@ohos.arkui.advanced.SegmentButtonV2、[Slider]slider、 [bindSheet]CommonMethod#bindSheet、[SelectionMenu]@ohos.arkui.advanced.SelectionMenu组件默认开启沉浸式系统材质； [Text]text设置[copyOption]TextAttribute#copyOption后长按或双击触发的文本菜单默认开启沉浸式系统材质。此模式下，沉浸式系统材质样式生效的优先级高于组件 本身设置的背景色、模糊、阴影和边框样式。其他组件需开发者主动设置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DISABLE

```TypeScript
DISABLE = 2
```

禁用模式。所有组件禁止开启沉浸式系统材质，即使主动为组件设置沉浸式系统材质参数也不会生效。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

