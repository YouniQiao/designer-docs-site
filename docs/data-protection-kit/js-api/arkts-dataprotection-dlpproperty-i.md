# DLPProperty (System API)

Represents the authorization information.

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## allowedOpenCount

```TypeScript
allowedOpenCount?: number
```

Number of allowed opening times. This parameter is left empty by default. The value must be greater than or
equal to 0. If the value is out of range, error code 19100001 is thrown.

**Type:** number

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## countdown

```TypeScript
countdown?: number
```

Validity period for file viewing, in seconds. After the validity period expires, the file is automatically
closed. This parameter is left empty by default. The value must be greater than or equal to 0. If the value
is out of range, error code 19100001 is thrown.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

## extensionFields

```TypeScript
extensionFields?: Record<string, Object>
```

Extended attribute of a DLP file. This parameter is left empty by default.

**Type:** Record<string, Object>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

## fileId

```TypeScript
fileId?: string
```

System account ID. This parameter is left empty by default. The value contains a maximum of 255 bytes. If the
value is out of range, error code 19100001 is thrown.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## waterMarkConfig

```TypeScript
waterMarkConfig?: boolean
```

Whether watermarks are required. **true**: yes; **false**: no. This parameter is left empty by default.

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Security.DataLossPrevention

