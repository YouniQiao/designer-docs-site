# @ohos.multimodalAwareness.spatialAwareness

This module provides the capability to subscribe to report the distance measurement result.

**Since:** 23

**System capability:** SystemCapability.MultimodalAwareness.DistanceMeasurement

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { spatialAwareness } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[offDistanceMeasure](arkts-spatialawareness-offdistancemeasure-f-sys.md#offDistanceMeasure-1) | Unsubscribe from distance measurement result data. |
| <!--DelRow-->[offIndoorOrOutdoorIdentify](arkts-spatialawareness-offindoororoutdooridentify-f-sys.md#offIndoorOrOutdoorIdentify-1) | Unsubscribe from the results of indoor and outdoor recognition. |
| <!--DelRow-->[onDistanceMeasure](arkts-spatialawareness-ondistancemeasure-f-sys.md#onDistanceMeasure-1) | Subscribe to distance measurement result data. |
| <!--DelRow-->[onIndoorOrOutdoorIdentify](arkts-spatialawareness-onindoororoutdooridentify-f-sys.md#onIndoorOrOutdoorIdentify-1) | Subscribe to the results of indoorand outdoor identification. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[DistanceMeasurementConfigParams](arkts-spatialawareness-distancemeasurementconfigparams-i-sys.md) | Configuration parameters for the distance measurement interface |
| <!--DelRow-->[DistanceMeasurementResponse](arkts-spatialawareness-distancemeasurementresponse-i-sys.md) | Interface for distance measurement result |
| <!--DelRow-->[DoorPositionResponse](arkts-spatialawareness-doorpositionresponse-i-sys.md) | Interface for indoor or outdoor identify result |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DistanceRank](arkts-spatialawareness-distancerank-e-sys.md) | Enum for distance rank. |
| <!--DelRow-->[PositionRelativeToDoor](arkts-spatialawareness-positionrelativetodoor-e-sys.md) | Enum for identification result inside and outside the door |
| <!--DelRow-->[ReportingMode](arkts-spatialawareness-reportingmode-e-sys.md) | Enum for distance measurement result reporting modes. |
| <!--DelRow-->[TechnologyType](arkts-spatialawareness-technologytype-e-sys.md) | Enum for distance measurement technology types. |

