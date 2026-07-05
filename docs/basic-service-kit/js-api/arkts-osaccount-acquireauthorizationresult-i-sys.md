# AcquireAuthorizationResult

表示获取授权的结果。

**Since:** 24

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## validityPeriod

```TypeScript
validityPeriod?: int
```

授权的有效期，默认值为300，单位为s。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## isReused

```TypeScript
isReused?: boolean
```

是否为复用的授权结果，默认为undefined。 true：表示是复用的授权结果。false：表示不是复用的授权结果。

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## resultCode

```TypeScript
resultCode: AuthorizationResultCode
```

授权结果码。

**Type:** AuthorizationResultCode

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## privilege

```TypeScript
privilege: string
```

与授权关联的权限。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## token

```TypeScript
token?: Uint8Array
```

授权令牌，默认为undefined。

**Type:** Uint8Array

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

