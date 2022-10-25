function build(obj: any, writableStream: any) {
  let prefix;
  obj = JSON.parse(obj);
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v == 'string' || typeof v == 'number') {
      prefix = k.toUpperCase() + '_';
      backData(prefix, v, writableStream);
    } else if (typeof v == 'object') {
      prefix = k.toUpperCase() + '_';
      backData(prefix, v, writableStream);
    }
  }
}

function backData(prefix: any, obj: any, writableStream: any) {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v == 'string' || typeof v == 'number') {
      let prefixNM = prefix + k.toUpperCase();
      let exportString = prefixNM + '=' + v + '\n';
      writableStream.write(exportString);
    } else {
      let prefixNM = prefix + k.toUpperCase() + '_';
      backData(prefixNM, v, writableStream);
    }
  }
}

export default build;
