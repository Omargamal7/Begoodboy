#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y --no-install-recommends ca-certificates curl git tmux ripgrep jq dbus dbus-x11 gnome-keyring libsecret-tools
export PATH="$HOME/.local/bin:$PATH"
mkdir -p "$HOME/.local/bin"

if ! command -v agy >/dev/null 2>&1; then
  installer=$(mktemp)
  trap 'rm -f "$installer"' EXIT
  curl --fail --silent --show-error --location https://antigravity.google/cli/install.sh -o "$installer"
  bash "$installer"
fi

cat > "$HOME/.local/bin/agy-session" <<'WRAPPER'
#!/usr/bin/env bash
set -euo pipefail
# Isolate the D-Bus session, then unlock the local encrypted keyring.
# No keyring password or Google credential is saved in this script.
exec dbus-run-session -- bash -c '
  set -euo pipefail
  read -r -s -p "Local keyring password (choose one on first use): " password
  printf "\n"
  if [[ -z "$password" ]]; then
    echo "Use a non-empty keyring password." >&2
    exit 1
  fi
  printf "%s" "$password" | gnome-keyring-daemon --unlock --components=secrets >/dev/null
  unset password
  exec "$HOME/.local/bin/agy" "$@"
' agy-session "$@"
WRAPPER
chmod 700 "$HOME/.local/bin/agy-session"

agy --version
printf '%s\n' 'Antigravity CLI installed. Run: tmux new -As antigravity' 'Then: agy-session'
