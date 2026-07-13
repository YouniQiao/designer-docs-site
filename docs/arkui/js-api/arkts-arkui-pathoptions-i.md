# PathOptions

Describes the options of the path.

> **NOTE**
>
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
> While historical version information is preserved for anonymous objects, there may be cases where the outer element
> 's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## commands

```TypeScript
commands?: ResourceStr
```

Command string for drawing the path.
If the value is invalid or the default value is used, the width and height required for the content are used. The
default value is an empty string. An invalid value is handled as the default value.

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Length
```

Height of the rectangle where the path is located.
If the value is invalid or the default value is used, the height required for the content is used.
Default
Unit: vp.

**Type:** Length

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Length
```

Width of the rectangle where the path is located.
If the value is invalid or the default value is used, the width required for the content is used.
Default
Unit: vp.

**Type:** Length

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

