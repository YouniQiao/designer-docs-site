# PanelFlag

```TypeScript
export enum PanelFlag
```

Enumerates the state types of the input method panel. > **NOTE** > > Currently, only the **SOFT_KEYBOARD** panel is supported.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## FLAG_FIXED

```TypeScript
FLAG_FIXED = 0
```

Fixed state type.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## FLAG_FLOATING

```TypeScript
FLAG_FLOATING
```

Floating state type.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## FLAG_CANDIDATE

```TypeScript
FLAG_CANDIDATE
```

Candidate state type. - When in the candidate state type, the input method panel is a window displaying candidates based on user input. - The input method service does not proactively control the visibility of the candidate panel. You need to control the visibility on your own.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

