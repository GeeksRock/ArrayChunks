Array.chunk = function (arrayToChunk, maxItemsPerChunk) {
    var chunks = [], chunk, i = 0, c = 0, used = 0, counter = 0;
    maxItemsPerChunk = maxItemsPerChunk || 1;

    for (; i < arrayToChunk.length; i += maxItemsPerChunk) {
        chunk = []; counter = 0;
        for (c = 0; c < maxItemsPerChunk; c++) {
            if (counter < maxItemsPerChunk && used < arrayToChunk.length) {
                chunk.push(arrayToChunk[used]);
                used++;
            }
        }
        chunks.push(chunk);
    }
    return chunks;
}
