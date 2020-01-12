export function isReachable(url) {
  /**
   * Note: fetch() still "succeeds" for 404s on subdirectories,
   * which is ok when only testing for domain reachability.
   *
   * Example:
   *   https://google.com/noexist does not throw
   *   https://noexist.com/noexist does throw
   */
  return fetch(url, { method: 'HEAD', mode: 'no-cors' })
    .then((respsone) => {
      return respsone && (respsone.ok || respsone.type === 'opaque');
    })
    .catch((error) => {
      console.warn('[conn test failure]:', error);
    });
}

export function getServerUrl() {
  return "https://kakarot.mohammedomar94.now.sh";
}