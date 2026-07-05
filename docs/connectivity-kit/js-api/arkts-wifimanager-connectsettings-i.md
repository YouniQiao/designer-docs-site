# ConnectSettings

Describes the settings for Wi-Fi connection.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## withUserAction

```TypeScript
withUserAction?: boolean
```

Returned with user action, default value is false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## networkId

```TypeScript
networkId: int
```

The ID (uniquely identifies) of a Wi-Fi connection.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## userActionTimeout

```TypeScript
userActionTimeout?: int
```

User action timeout threshold(unit is seconds). The maximum value cannot exceed 30, and default is 10.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## addNetworkToSystem

```TypeScript
addNetworkToSystem?: boolean
```

Whether to add the network to the system for connection. Default is false, if set to ture, the network will be added to the system before connection and cannot be retrieved again.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

