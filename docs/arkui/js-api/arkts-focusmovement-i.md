# FocusMovement

设置对应的按键对应的走焦目的组件，缺省则遵循默认走焦规则。 > **说明：** > > 直接使用focusControl可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取 > [UIContext](arkts-uicontext-c.md#UIContext)实例，并使用 > [getFocusController](arkts-uicontext-c.md#getFocusController)获取绑定实例的focusControl。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## left

```TypeScript
left?: string
```

通过方向键左键走焦到组件的id。 默认值为重置left为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## forward

```TypeScript
forward?: string
```

通过tab键走焦到组件的id。 默认值为重置forward为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backward

```TypeScript
backward?: string
```

通过shift+tab键走焦到组件的id。 默认值为重置backward为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## right

```TypeScript
right?: string
```

通过方向键右键走焦到组件的id。 默认值为重置right为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## up

```TypeScript
up?: string
```

通过方向键上键走焦到组件的id。 默认值为重置up为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## down

```TypeScript
down?: string
```

通过方向键下键走焦到组件的id。 默认值为重置down为空。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

