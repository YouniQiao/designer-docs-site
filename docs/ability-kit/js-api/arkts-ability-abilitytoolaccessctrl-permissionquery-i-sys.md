# PermissionQuery (System API)

Permission query information.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-abilityToolAccessCtrl-interface PermissionQuery--><!--Device-abilityToolAccessCtrl-interface PermissionQuery-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## callerTokenId

```TypeScript
callerTokenId?: long
```

Caller token ID.Value range: (-∞,+∞).

**Type:** long

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-PermissionQuery-callerTokenId?: long--><!--Device-PermissionQuery-callerTokenId?: long-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## domainId

```TypeScript
domainId?: string
```

Domain ID.

**Type:** string

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-PermissionQuery-domainId?: string--><!--Device-PermissionQuery-domainId?: string-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## needTicket

```TypeScript
needTicket?: boolean
```

Whether a ticket is required.

**Type:** boolean

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-PermissionQuery-needTicket?: boolean--><!--Device-PermissionQuery-needTicket?: boolean-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## operationInfo

```TypeScript
operationInfo: OperationInfo[]
```

Operation information list.

**Type:** OperationInfo[]

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-PermissionQuery-operationInfo: OperationInfo[]--><!--Device-PermissionQuery-operationInfo: OperationInfo[]-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## ticketExpireTimeMs

```TypeScript
ticketExpireTimeMs?: long
```

Ticket expiration time in milliseconds.Unit: milliseconds. The value must be greater than 0. Value constraint: Greater than 0.

**Type:** long

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-PermissionQuery-ticketExpireTimeMs?: long--><!--Device-PermissionQuery-ticketExpireTimeMs?: long-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

