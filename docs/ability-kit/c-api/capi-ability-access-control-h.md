# ability_access_control.h

## Overview

Declares the APIs for managing access token.

**Library**: ability_access_control.so

**System capability**: SystemCapability.Security.AccessToken

**Since**: 12

**Related module**: [AbilityAccessControl](capi-abilityaccesscontrol.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [bool OH_AT_CheckSelfPermission(const char *permission)](#oh_at_checkselfpermission) | Checks whether this application has been granted the given permission. |

## Function description

### OH_AT_CheckSelfPermission()

```c
bool OH_AT_CheckSelfPermission(const char *permission)
```

**Description**

Checks whether this application has been granted the given permission.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *permission | - Name of the permission to be granted. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | true  - The permission has been granted to this application.<br>         false - The permission has not been granted to this application. |


