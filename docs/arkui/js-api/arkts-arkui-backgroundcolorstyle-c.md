# BackgroundColorStyle

Describes the text background color style.

**Since:** 14

<!--Device-unnamed-declare class BackgroundColorStyle--><!--Device-unnamed-declare class BackgroundColorStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(textBackgroundStyle: TextBackgroundStyle)
```

A constructor used to create a text background style.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-BackgroundColorStyle-constructor(textBackgroundStyle: TextBackgroundStyle)--><!--Device-BackgroundColorStyle-constructor(textBackgroundStyle: TextBackgroundStyle)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textBackgroundStyle | [TextBackgroundStyle](../arkts-components/arkts-arkui-textbackgroundstyle-i.md) | Yes | Options of the text background color.<br>Default value:<br>{<br> color: Color.Transparent,<br> radius: 0<br>} |

## textBackgroundStyle

```TypeScript
readonly textBackgroundStyle: TextBackgroundStyle
```

Text background color of the styled string.

Default value:

{

color: Color.Transparent,

radius: 0

}

**Type:** TextBackgroundStyle

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-BackgroundColorStyle-readonly textBackgroundStyle: TextBackgroundStyle--><!--Device-BackgroundColorStyle-readonly textBackgroundStyle: TextBackgroundStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

