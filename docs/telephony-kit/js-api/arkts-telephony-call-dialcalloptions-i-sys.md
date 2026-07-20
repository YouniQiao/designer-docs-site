# DialCallOptions (System API)

Indicates the options for initiating a call.

**Since:** 9

<!--Device-call-export interface DialCallOptions--><!--Device-call-export interface DialCallOptions-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## accountId

```TypeScript
accountId?: number
```

Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device.

**Type:** number

**Since:** 9

<!--Device-DialCallOptions-accountId?: int--><!--Device-DialCallOptions-accountId?: int-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## dialScene

```TypeScript
dialScene?: DialScene
```

Indicates the scenario of the call.

**Type:** DialScene

**Since:** 9

<!--Device-DialCallOptions-dialScene?: DialScene--><!--Device-DialCallOptions-dialScene?: DialScene-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## dialType

```TypeScript
dialType?: DialType
```

Indicates the type of the call.

**Type:** DialType

**Since:** 9

<!--Device-DialCallOptions-dialType?: DialType--><!--Device-DialCallOptions-dialType?: DialType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## extraParams

```TypeScript
extraParams?: Record<string, Object>
```

Indicates the extra call parameters.

**Type:** Record<string, Object>

**Since:** 14

<!--Device-DialCallOptions-extraParams?: Record<string, Object>--><!--Device-DialCallOptions-extraParams?: Record<string, Object>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## videoState

```TypeScript
videoState?: VideoStateType
```

Indicates the type of Video state.

**Type:** VideoStateType

**Since:** 9

<!--Device-DialCallOptions-videoState?: VideoStateType--><!--Device-DialCallOptions-videoState?: VideoStateType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

## xCallType

```TypeScript
xCallType?: XCallType
```

Indicates the type of the xcall.

**Type:** XCallType

**Since:** 26.0.0

<!--Device-DialCallOptions-xCallType?: XCallType--><!--Device-DialCallOptions-xCallType?: XCallType-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

