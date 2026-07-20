# Querier (System API)

Definition callback of receiving the query data.

**Since:** 12

<!--Device-securityGuard-interface Querier--><!--Device-securityGuard-interface Querier-End-->

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { securityGuard } from '@kit.SecurityGuardKit';
```

## onComplete

```TypeScript
onComplete: () => void
```

Triggered when data is complete.

**Type:** () => void

**Since:** 12

<!--Device-Querier-onComplete: () => void--><!--Device-Querier-onComplete: () => void-End-->

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## onError

```TypeScript
onError: (message: string) => void
```

Triggered when error.

**Type:** (message: string) => void

**Since:** 12

<!--Device-Querier-onError: (message: string) => void--><!--Device-Querier-onError: (message: string) => void-End-->

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

## onQuery

```TypeScript
onQuery: (events: Array<SecurityEvent>) => void
```

Triggered when data is returned.

**Type:** (events: Array<SecurityEvent>) => void

**Since:** 12

<!--Device-Querier-onQuery: (events: Array<SecurityEvent>) => void--><!--Device-Querier-onQuery: (events: Array<SecurityEvent>) => void-End-->

**System capability:** SystemCapability.Security.SecurityGuard

**System API:** This is a system API.

