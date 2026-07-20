# @ohos.multimodalAwareness.spatialAwareness

This module provides the capability to subscribe to report the distance measurement result.

**Since:** 23

<!--Device-unnamed-declare namespace spatialAwareness--><!--Device-unnamed-declare namespace spatialAwareness-End-->

**System capability:** SystemCapability.MultimodalAwareness.DistanceMeasurement

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { spatialAwareness } from '@kit.MultimodalAwarenessKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [offDistanceMeasure](arkts-multimodalawareness-spatialawareness-offdistancemeasure-f-sys.md#offdistancemeasure-1) | Unsubscribe from distance measurement result data. |
| [offIndoorOrOutdoorIdentify](arkts-multimodalawareness-spatialawareness-offindoororoutdooridentify-f-sys.md#offindoororoutdooridentify-1) | Unsubscribe from the results of indoor and outdoor recognition. |
| [onDistanceMeasure](arkts-multimodalawareness-spatialawareness-ondistancemeasure-f-sys.md#ondistancemeasure-1) | Subscribe to distance measurement result data. |
| [onIndoorOrOutdoorIdentify](arkts-multimodalawareness-spatialawareness-onindoororoutdooridentify-f-sys.md#onindoororoutdooridentify-1) | Subscribe to the results of indoorand outdoor identification. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DistanceMeasurementConfigParams](arkts-multimodalawareness-spatialawareness-distancemeasurementconfigparams-i-sys.md) | Configuration parameters for the distance measurement interface |
| [DistanceMeasurementResponse](arkts-multimodalawareness-spatialawareness-distancemeasurementresponse-i-sys.md) | Interface for distance measurement result |
| [DoorPositionResponse](arkts-multimodalawareness-spatialawareness-doorpositionresponse-i-sys.md) | Interface for indoor or outdoor identify result |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DistanceRank](arkts-multimodalawareness-spatialawareness-distancerank-e-sys.md) | Enum for distance rank. |
| [PositionRelativeToDoor](arkts-multimodalawareness-spatialawareness-positionrelativetodoor-e-sys.md) | Enum for identification result inside and outside the door |
| [ReportingMode](arkts-multimodalawareness-spatialawareness-reportingmode-e-sys.md) | Enum for distance measurement result reporting modes. |
| [TechnologyType](arkts-multimodalawareness-spatialawareness-technologytype-e-sys.md) | Enum for distance measurement technology types. |
<!--DelEnd-->

