const observerOptions = {
  childList: true,
  attributes: true,
  subtree: true // Omit or set to false to observe only changes to the parent node.
};

export default function monitorDomChanges(node: Node, callback: () => void): void {
  const observer = new MutationObserver(() => callback());
  observer.observe(node, observerOptions);
};
