# ExposureMeteringMode (System API)

Enumerates the exposure metering modes.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## MATRIX

```TypeScript
MATRIX = 0
```

Matrix metering mode. A wide area of the screen is selected, which is ideal for shooting natural landscapes.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## CENTER

```TypeScript
CENTER = 1
```

Center-weighted metering mode. Metering is performed on the entire image, with the center allocated with the
maximum weight, which is ideal for shooting portraits.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## SPOT

```TypeScript
SPOT = 2
```

Spot metering mode. Metering is performed around 2.5% of the metering points, focusing on the light in a specific
small area, such as the eyes of the subject.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## CENTER_HIGHLIGHT_WEIGHTED

```TypeScript
CENTER_HIGHLIGHT_WEIGHTED = 3
```

Center-weighted and highlight metering mode. This mode focuses on the highlight area near the center of the
screen.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

