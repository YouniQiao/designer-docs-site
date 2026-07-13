# ScanOptions

Describes the parameters for scan.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## duration

```TypeScript
duration?: number
```

Indicates the scan duration.
If the "duration" is not set, the scanning is performed all the time.
Unit: Seconds, The value must be an integer within [10,60].

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## scanMode

```TypeScript
scanMode?: ScanMode
```

Indicates the scan mode.
If the "scanMode" is not set, the default value is "SCAN_MODE_LOW_POWER".
Default value: SCAN_MODE_LOW_POWER.

**Type:** ScanMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

