# ArcListItemAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** ArcListItemAttributeextends: CommonMethod<ArcListItemAttribute>.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcListItemAttribute,ArcList,ArcListItem,ArcListAttribute } from '@kit.ArkUI';
```

## autoScale

```TypeScript
autoScale(enable: Optional<boolean>): ArcListItemAttribute
```

用于设置ArcListItem是否支持自动缩放显示。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | ArcListItem是否支持自动缩放显示，true表示支持自动缩放显示，false表示不支持自动缩放显示。 默认值：true，支持自动缩放显示。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcListItemAttribute |  |

## swipeAction

```TypeScript
swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute
```

用于设置ArcListItem的划出组件。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;SwipeActionOptions> | Yes | ArcListItem的划出组件。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcListItemAttribute |  |

