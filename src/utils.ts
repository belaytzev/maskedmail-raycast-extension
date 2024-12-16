import { exec } from "child_process";
import util from "util";
import { getPreferenceValues } from "@raycast/api";

const execPromise = util.promisify(exec);

interface Preferences {
  token: string;
}

export async function runMaskedEmailCommand(command: string): Promise<string> {
  const { token } = getPreferenceValues<Preferences>();

  try {
    const { stdout } = await execPromise(`maskedemail-cli -token ${token} ${command}`);
    return stdout.trim();
  } catch (error) {
    throw new Error(`Command failed: ${error}`);
  }
}
