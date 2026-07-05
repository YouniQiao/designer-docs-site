# DialOptions

Indicates the options of placing a call.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## 导入模块

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## accountId

```TypeScript
accountId?: int
```

Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## dialScene

```TypeScript
dialScene?: DialScene
```

Indicates the scenario of the call to be made.

**类型：** DialScene

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## dialType

```TypeScript
dialType?: DialType
```

Indicates the type of the call to be made.

**类型：** DialType

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

## extras

```TypeScript
extras?: boolean
```

Indicates whether the call to be made is a video call. The value {@code false} indicates a voice call.

**类型：** boolean

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CallManager

## videoState

```TypeScript
videoState?: VideoStateType
```

Indicates the type of Video state.

**类型：** VideoStateType

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

