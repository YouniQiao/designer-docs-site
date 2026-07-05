# PermissionDecisionStatus (System API)

Permission decision status.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NEED_PERMISSION_DIALOG

```TypeScript
NEED_PERMISSION_DIALOG = 0
```

Permission dialog is required.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_DENIED

```TypeScript
NO_DIALOG_DENIED = 1
```

No permission dialog is allowed because the user has denied this permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_RESTRICTED

```TypeScript
NO_DIALOG_RESTRICTED = 2
```

No permission dialog is allowed because this permission is restricted by the system or policies.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_GRANTED

```TypeScript
NO_DIALOG_GRANTED = 3
```

No permission dialog is required because this permission has already been granted.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_NOT_DECLARED

```TypeScript
NO_DIALOG_NOT_DECLARED = 4
```

No permission dialog is allowed because this permission is not declared.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_CLI_PERMISSION_RESOLVED

```TypeScript
NO_DIALOG_CLI_PERMISSION_RESOLVED = 5
```

No permission dialog is required or allowed for this CLI permission because the corresponding runtime permission has already been granted or denied.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

