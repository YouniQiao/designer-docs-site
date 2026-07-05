# DialCallOptions (System API)

Indicates the options for initiating a call.

**Since:** 9

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## accountId

```TypeScript
accountId?: number
```

Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## dialScene

```TypeScript
dialScene?: DialScene
```

Indicates the scenario of the call.

**Type:** DialScene

**Since:** 9

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## dialType

```TypeScript
dialType?: DialType
```

Indicates the type of the call.

**Type:** DialType

**Since:** 9

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## extraParams

```TypeScript
extraParams?: Record<string, Object>
```

Indicates the extra call parameters.

**Type:** Record<string, Object>

**Since:** 14

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## videoState

```TypeScript
videoState?: VideoStateType
```

Indicates the type of Video state.

**Type:** VideoStateType

**Since:** 9

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## xCallType

```TypeScript
xCallType?: XCallType
```

Indicates the type of the xcall.

**Type:** XCallType

**Since:** 26.0.0

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

