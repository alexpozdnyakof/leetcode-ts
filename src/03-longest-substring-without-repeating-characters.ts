export function lengthOfLongestSubstring(s: string): number {
    let i = 0;
    let start = 0;
    let result = 0;
    
    const buffer = new Set<string>();
    
    while(i <= s.length) {
        if(buffer.has(s[i])) {
            const length = buffer.size;
            if(length > result) result = length;
            buffer.clear();
            start++;
            i = start;
            continue;
        } else if(i === s.length - 1){
            if(buffer.size + 1 > result) result = buffer.size + 1;
            break;
        } else {
            buffer.add(s[i]);
            i++;
        }
    }
        
    return result;
}

