# ResetOption

```TypeScript
export enum ResetOption
```

Options for resetting eUICC memory.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## DELETE_OPERATIONAL_PROFILES

```TypeScript
DELETE_OPERATIONAL_PROFILES = 1
```

Deletes all operational profiles on reset.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## DELETE_FIELD_LOADED_TEST_PROFILES

```TypeScript
DELETE_FIELD_LOADED_TEST_PROFILES = 1 << 1
```

Deletes all field-loaded testing profiles on reset.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## RESET_DEFAULT_SMDP_ADDRESS

```TypeScript
RESET_DEFAULT_SMDP_ADDRESS = 1 << 2
```

Resets the default SM-DP+ address on reset.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

