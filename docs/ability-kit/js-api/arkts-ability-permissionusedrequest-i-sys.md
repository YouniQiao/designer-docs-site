# PermissionUsedRequest (System API)

Provides request of querying permission used records.

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## beginTime

```TypeScript
beginTime?: number
```

The begin time, in milliseconds

**Type:** number

**Default:** 0

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName?: string
```

The bundle name

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## deviceId

```TypeScript
deviceId?: string
```

The device id

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## endTime

```TypeScript
endTime?: number
```

The end time, in milliseconds

**Type:** number

**Default:** 0

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## flag

```TypeScript
flag: PermissionUsageFlag
```

The permission usage flag

**Type:** PermissionUsageFlag

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## isRemote

```TypeScript
isRemote?: boolean
```

Distribute flag

**Type:** boolean

**Default:** false

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNames

```TypeScript
permissionNames?: Array<Permissions>
```

The list of permission name

**Type:** Array<Permissions>

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## tokenId

```TypeScript
tokenId?: number
```

AccessTokenID

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

