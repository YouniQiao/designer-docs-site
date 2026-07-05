# PermissionRequestResult

The result of requestPermissionsFromUser with asynchronous callback.

**Since:** 11

**System capability:** SystemCapability.Security.AccessToken

## authResults

```TypeScript
authResults: Array<number>
```

The results for the corresponding request permissions. The value 0 indicates that a permission is granted, the value -1 indicates not, and the value 2 indicates the request is invalid.

**Type:** Array<number>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

## dialogShownResults

```TypeScript
dialogShownResults?: Array<boolean>
```

Specifies whether a dialog box is shown for each requested permission. The value true means that a dialog box is shown, and false means the opposite.

**Type:** Array<boolean>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.AccessToken

## errorReasons

```TypeScript
errorReasons?: Array<number>
```

Enumerates the return values of the permission request operation. 0 The operation is successful. 1 The permission name is invalid. 2 The requested permission has not been declared. 3 The conditions for requesting the permission are not met. 4 The user does not agree to the Privacy Statement. 5 The permission cannot be requested via a pop-up window. 6 The permission is a manual_settings permission and cannot be requested via a pop-up window. 12 The service is abnormal.

**Type:** Array<number>

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.Security.AccessToken

## permissions

```TypeScript
permissions: Array<string>
```

The permissions passed in by the user.

**Type:** Array<string>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

