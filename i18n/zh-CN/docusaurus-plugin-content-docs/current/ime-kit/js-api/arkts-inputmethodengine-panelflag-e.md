# PanelFlag

```TypeScript
export enum PanelFlag
```

Enumerates the state types of the input method panel.

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## FLG_FIXED

```TypeScript
FLG_FIXED = 0
```

Fixed style. <p>It's provided for the panel with type of SOFT_KEYBOARD. When the flag is set, the soft keyboard is fixed at the bottom of the screen.</p>

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## FLG_FLOATING

```TypeScript
FLG_FLOATING
```

Floating style. <p>It's provided for the panel with type of SOFT_KEYBOARD. When the flag is set, the soft keyboard is floating.</p>

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## FLAG_CANDIDATE

```TypeScript
FLAG_CANDIDATE
```

Candidate style. <p>It's provided for the panel with type of SOFT_KEYBOARD. When the flag is set, the soft keyboard is a candidate window which will show the possible characters when user types a input code. Panel with candidate style will not be automatically shown or hidden by input method service. Input method application developers are supposed to control the panel status on their own.</p>

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

