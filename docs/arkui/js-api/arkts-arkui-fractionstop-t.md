# FractionStop

```TypeScript
declare type FractionStop = [ number, number ]
```

Defines the segment of blur.
The first element in the tuple means fraction.
The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
The second element means the stop position.
The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Property type:** [ number, number ]

