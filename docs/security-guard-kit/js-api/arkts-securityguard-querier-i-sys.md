# Querier (System API)

Definition callback of receiving the query data.

**Since:** 12

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { securityGuard } from '@ohos.security.securityGuard';
```

## onComplete

```TypeScript
onComplete: () => void
```

Triggered when data is complete.

**Type:** () => void

**Since:** 12

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## onError

```TypeScript
onError: (message: string) => void
```

Triggered when error.

**Type:** (message: string) => void

**Since:** 12

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## onQuery

```TypeScript
onQuery: (events: Array<SecurityEvent>) => void
```

Triggered when data is returned.

**Type:** (events: Array<SecurityEvent>) => void

**Since:** 12

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

