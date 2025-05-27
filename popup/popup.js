const enableToggle = document.getElementById("enableToggle");
const linkToggle = document.getElementById("linkToggle");
const modeSelect = document.getElementById("modeSelect");

chrome.storage.local.get(["enabled", "enableLink", "mode"], (res) => {
  enableToggle.checked = res.enabled ?? true;
  linkToggle.checked = res.enableLink ?? true;
  modeSelect.value = res.mode || "replace";
});

enableToggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: enableToggle.checked });
});

linkToggle.addEventListener("change", () => {
  chrome.storage.local.set({ enableLink: linkToggle.checked });
});

modeSelect.addEventListener("change", () => {
  chrome.storage.local.set({ mode: modeSelect.value });
});
