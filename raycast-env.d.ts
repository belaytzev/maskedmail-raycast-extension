/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** FastMail Token - Your FastMail API token */
  "token": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-masked-email` command */
  export type CreateMaskedEmail = ExtensionPreferences & {}
  /** Preferences accessible in the `list-masked-emails` command */
  export type ListMaskedEmails = ExtensionPreferences & {}
  /** Preferences accessible in the `enable-masked-email` command */
  export type EnableMaskedEmail = ExtensionPreferences & {}
  /** Preferences accessible in the `disable-masked-email` command */
  export type DisableMaskedEmail = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-masked-email` command */
  export type CreateMaskedEmail = {}
  /** Arguments passed to the `list-masked-emails` command */
  export type ListMaskedEmails = {}
  /** Arguments passed to the `enable-masked-email` command */
  export type EnableMaskedEmail = {}
  /** Arguments passed to the `disable-masked-email` command */
  export type DisableMaskedEmail = {}
}

