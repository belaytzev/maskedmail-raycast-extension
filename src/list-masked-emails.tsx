import { List, ActionPanel, Action, showToast, Toast, Clipboard } from "@raycast/api";
import { useState, useEffect } from "react";
import { runMaskedEmailCommand } from "./utils";

interface MaskedEmail {
  email: string;
  description: string;
  enabled: boolean;
}

export default function Command() {
  const [emails, setEmails] = useState<MaskedEmail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const output = await runMaskedEmailCommand("list");
        const parsedEmails = output
          .split("\n")
          .filter(Boolean)
          .map((line) => {
            const [email, description, enabled] = line.split("\t");
            return {
              email,
              description,
              enabled: enabled === "true",
            };
          });
        setEmails(parsedEmails);
      } catch (error) {
        showToast({
          style: Toast.Style.Failure,
          title: "Failed to fetch masked emails",
          message: String(error),
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchEmails();
  }, []);

  const handleCopyEmail = async (email: string) => {
    await Clipboard.copy(email);
    await showToast({
      style: Toast.Style.Success,
      title: "Email copied to clipboard",
      message: email,
    });
  };

  const handleToggleEmail = async (email: MaskedEmail) => {
    try {
      await runMaskedEmailCommand(
        `${email.enabled ? "disable" : "enable"} ${email.email}`
      );

      // Update the local state
      setEmails(emails.map(e =>
        e.email === email.email
          ? { ...e, enabled: !e.enabled }
          : e
      ));

      showToast({
        style: Toast.Style.Success,
        title: `Email ${email.enabled ? "disabled" : "enabled"}`,
      });
    } catch (error) {
      showToast({
        style: Toast.Style.Failure,
        title: "Failed to toggle email status",
        message: String(error),
      });
    }
  };

  return (
    <List isLoading={isLoading}>
      {emails.map((email) => (
        <List.Item
          key={email.email}
          title={email.email}
          subtitle={email.description}
          accessories={[{ text: email.enabled ? "Enabled" : "Disabled" }]}
          actions={
            <ActionPanel>
              <ActionPanel.Section>
                <Action
                  title="Copy Email"
                  onAction={() => handleCopyEmail(email.email)}
                />
              </ActionPanel.Section>
              <ActionPanel.Section>
                <Action
                  title={email.enabled ? "Disable Email" : "Enable Email"}
                  onAction={() => handleToggleEmail(email)}
                  shortcut={{ modifiers: ["cmd"], key: "e" }}
                />
                <Action.CopyToClipboard
                  title="Copy Description"
                  content={email.description}
                  shortcut={{ modifiers: ["cmd"], key: "d" }}
                />
              </ActionPanel.Section>
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
