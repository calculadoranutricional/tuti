const staticPaths = new Set(["/tuti/tuti/.nojekyll","/tuti/tuti/assets/Stof5Pwh-bundle-graph.json","/tuti/tuti/build/q-7tWARBxY.js","/tuti/tuti/build/q-B5al5FVl.js","/tuti/tuti/build/q-BAfDA1Tr.js","/tuti/tuti/build/q-BIpwrlTg.js","/tuti/tuti/build/q-BLPoST5Y.js","/tuti/tuti/build/q-BRHVuKcW.js","/tuti/tuti/build/q-BliUyFPB.js","/tuti/tuti/build/q-BpRUS4Ll.js","/tuti/tuti/build/q-CLCZ4_Nz.js","/tuti/tuti/build/q-CeKiKIju.js","/tuti/tuti/build/q-CuhQcurz.js","/tuti/tuti/build/q-DDnlxNTU.js","/tuti/tuti/build/q-DFuPkQ_N.js","/tuti/tuti/build/q-DTD_YFWF.js","/tuti/tuti/build/q-DWbPGuEr.js","/tuti/tuti/build/q-DYW1YnhU.js","/tuti/tuti/build/q-Damt217L.js","/tuti/tuti/build/q-Dpp4HTMG.js","/tuti/tuti/build/q-Dzu-heAA.js","/tuti/tuti/build/q-SMXrZWSQ.js","/tuti/tuti/build/q-elpcj46l.js","/tuti/tuti/build/q-f4gWxfez.js","/tuti/tuti/build/q-naDMFAHy.js","/tuti/tuti/q-manifest.json","/tuti/tuti/vite.svg"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/tuti/build/")) {
    return true;
  }
  if (p.startsWith("/tuti/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };